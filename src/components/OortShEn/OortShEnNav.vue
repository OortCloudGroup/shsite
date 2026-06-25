<template>
  <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="nav-container">
      <NuxtLink to="/en" class="nav-logo" @click="closeMobileMenu">
        <span class="logo-icon">&#9678;</span>
        <span class="logo-text">OORT.sh</span>
      </NuxtLink>
      <div class="nav-links" :class="{ 'mobile-open': isMobileOpen }">
        <NuxtLink
          v-for="item in navList"
          :key="item.path"
          :to="item.path"
          :class="{ active: route.path === item.path }"
          @click="closeMobileMenu"
        >
          {{ item.title }}
        </NuxtLink>
      </div>
      <div class="nav-actions" :class="{ 'mobile-open': isMobileOpen }">
        <NuxtLink v-if="!userInfo" :to="gotoLoginURL" target="_blank" rel="noopener noreferrer" class="btn-login">
          Log In
        </NuxtLink>
        <el-dropdown v-else trigger="hover" @command="handleUserCommand">
          <div class="en-user-info">
            <img :src="userPhoto" alt="" />
            <span>{{ userName }}</span>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="switchAccount">
                Switch Account
              </el-dropdown-item>
              <el-dropdown-item command="logout">
                Log Out
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <a href="#" class="btn-primary">Download</a>
      </div>
      <button
        class="mobile-toggle"
        :class="{ active: isMobileOpen }"
        type="button"
        aria-label="Menu"
        @click="toggleMobileMenu"
      >
        <span /><span /><span />
      </button>
    </div>
  </nav>
</template>

<script setup>
import { useSessionStorage } from '@vueuse/core'
import { $fetch } from 'ofetch'
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import config from '@/config/index.js'
import defaultAvatar from '@/assets/navheader/person.png'

const route = useRoute()
const ACCESS_TOKEN_SYNC_KEY = 'oortAccessToken'
const TENANT_ID_SYNC_KEY = 'oortTenantId'
const verifyTimer = ref(null)
const isScrolled = ref(false)
const isMobileOpen = ref(false)
const userInfo = ref(null)
const isCheckingLogin = ref(false)
const accessTokenStorage = useSessionStorage('accessToken', '')
const tenantIdStorage = useSessionStorage('tenantId', '')
const userInfoStorage = useSessionStorage('userInfo', null)
const phoneStorage = useSessionStorage('phone', '')
const realNameStorage = useSessionStorage('realName', '')
const emailStorage = useSessionStorage('email', '')
const navList = [
  { title: 'Features', path: '/en/features' },
  { title: 'Deploy', path: '/en/deploy' },
  { title: 'AI Studio', path: '/en/ai-studio' },
  { title: 'Pricing', path: '/en/pricing' },
  { title: 'Enterprise', path: '/en/enterprise' },
  { title: 'Docs', path: '/en/docs' }
]
const token = computed(() => route.query.access_token || route.query.accesstoken || accessTokenStorage.value || '')
const tenantId = computed(() => route.query.tenant_id || route.query.tenantId || tenantIdStorage.value || '')
const accessToken = computed(() => accessTokenStorage.value || token.value || '')
const gotoLoginURL = computed(() => {
  const redirectUri = process.client ? window.location.origin + route.path : 'https://sh.oortcloudsmart.com/en/'
  return getLoginURL(redirectUri)
})
const userName = computed(() => userInfo.value?.user_name || userInfo.value?.user_detail?.ex_data?.realName || 'User')
const userPhoto = computed(() => userInfo.value?.photo || defaultAvatar)

const closeMobileMenu = () => {
  isMobileOpen.value = false
}
const toggleMobileMenu = () => {
  isMobileOpen.value = !isMobileOpen.value
}
const handleScroll = () => {
  isScrolled.value = window.pageYOffset > 50
}
const getLoginURL = (redirectUri) => {
  return config.busURL +
    '/bus/apaas-web/loginPage/index.html?appname=' +
    encodeURIComponent(config.ssoAppName) +
    '&redirect_uri=' +
    encodeURIComponent(redirectUri)
}
const getAuthHeaders = () => {
  return {
    'Content-Type': 'application/json',
    tenantId: tenantId.value,
    accesstoken: token.value,
    appid: config.ssoAppId,
    secretkey: config.ssoSecretKey,
    requesttype: 'app'
  }
}
const syncLoginStorage = () => {
  if (!process.client) return
  if (accessTokenStorage.value) {
    window.localStorage.setItem(ACCESS_TOKEN_SYNC_KEY, accessTokenStorage.value)
  }
  if (tenantIdStorage.value) {
    window.localStorage.setItem(TENANT_ID_SYNC_KEY, tenantIdStorage.value)
  }
}
const loadLoginStorage = (force = false) => {
  if (!process.client || (!force && accessTokenStorage.value)) return
  accessTokenStorage.value = window.localStorage.getItem(ACCESS_TOKEN_SYNC_KEY) || ''
  tenantIdStorage.value = window.localStorage.getItem(TENANT_ID_SYNC_KEY) || ''
}
const resetLoginState = (clearSharedStorage = false) => {
  userInfo.value = null
  userInfoStorage.value = null
  accessTokenStorage.value = ''
  tenantIdStorage.value = ''
  phoneStorage.value = ''
  realNameStorage.value = ''
  emailStorage.value = ''
  if (process.client && clearSharedStorage) {
    window.localStorage.removeItem(ACCESS_TOKEN_SYNC_KEY)
    window.localStorage.removeItem(TENANT_ID_SYNC_KEY)
    window.localStorage.setItem('oortLogoutAt', String(Date.now()))
  }
}
const fetchUserInfo = async() => {
  if (!token.value) return
  try {
    const res = await $fetch(config.busURL + '/bus/apaas-sso/sso/v1/getUserInfo', {
      method: 'POST',
      body: {
        accessToken: token.value
      },
      headers: getAuthHeaders()
    })
    if (res.code === 200) {
      userInfo.value = res.data
      userInfoStorage.value = res.data
      phoneStorage.value = userInfo.value?.user_detail?.ex_data?.phone || ''
      realNameStorage.value = userInfo.value?.user_detail?.ex_data?.realName || ''
      emailStorage.value = userInfo.value?.user_detail?.ex_data?.email || ''
    }
  } catch {
    userInfo.value = null
  }
}
const verifyToken = async() => {
  if (!token.value) {
    resetLoginState()
    return false
  }
  try {
    const res = await $fetch(config.busURL + '/bus/apaas-sso/sso/v1/verifyToken', {
      method: 'POST',
      body: {
        accessToken: token.value
      },
      headers: getAuthHeaders()
    })
    if (res.code === 200) {
      accessTokenStorage.value = res.data.accessToken
      tenantIdStorage.value = res.data.tenantId
      syncLoginStorage()
      return true
    }
  } catch {
    resetLoginState(true)
  }
  resetLoginState(true)
  return false
}
const logoutSSO = async(needRedirectLogin = false) => {
  const currentAccessToken = accessToken.value
  try {
    if (currentAccessToken) {
      await $fetch(config.busURL + '/bus/apaas-sso/sso/v1/logout', {
        method: 'POST',
        body: {
          accessToken: currentAccessToken
        },
        headers: getAuthHeaders()
      })
    }
  } catch {
    resetLoginState(true)
  } finally {
    resetLoginState(true)
    if (needRedirectLogin && process.client) {
      window.location.href = getLoginURL(window.location.origin + route.path)
    }
  }
}
const handleUserCommand = (command) => {
  if (command === 'switchAccount') {
    logoutSSO(true)
    return
  }
  if (command === 'logout') {
    logoutSSO(false)
  }
}
const checkLoginStatus = async() => {
  if (isCheckingLogin.value) return !!userInfo.value
  isCheckingLogin.value = true
  loadLoginStorage()
  if (userInfoStorage.value && !userInfo.value) {
    userInfo.value = userInfoStorage.value
  }
  const isValid = await verifyToken()
  if (isValid) {
    await fetchUserInfo()
  }
  isCheckingLogin.value = false
  return isValid
}
const handleWindowFocus = () => {
  checkLoginStatus()
}
const handleStorageChange = (event) => {
  if (event.key === 'oortLogoutAt') {
    resetLoginState()
    return
  }
  if (![ACCESS_TOKEN_SYNC_KEY, TENANT_ID_SYNC_KEY].includes(event.key)) return
  loadLoginStorage(true)
  checkLoginStatus()
}

watch(accessToken, (newToken) => {
  if (newToken) {
    checkLoginStatus()
    return
  }
  resetLoginState()
}, { immediate: true })

onMounted(() => {
  handleScroll()
  checkLoginStatus()
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('focus', handleWindowFocus)
  window.addEventListener('storage', handleStorageChange)
  verifyTimer.value = window.setInterval(checkLoginStatus, 10 * 1000)
})

onBeforeUnmount(() => {
  if (verifyTimer.value) {
    window.clearInterval(verifyTimer.value)
  }
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('focus', handleWindowFocus)
  window.removeEventListener('storage', handleStorageChange)
})
</script>

<style scoped lang="less">
.en-user-info {
  display: flex;
  align-items: center;
  max-width: 170px;
  cursor: pointer;
  color: var(--text-secondary);
  outline: none;

  img {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid var(--border-light);
  }

  span {
    max-width: 112px;
    margin-left: 8px;
    overflow: hidden;
    font-size: 14px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.en-user-info:hover {
  color: var(--text-primary);
}
</style>
