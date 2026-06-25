<template>
  <div class="nav flexRowAC" :class="{navFixed:isSticky,navSH:isActPath==='/'}">
    <div style="width: 300px;text-align: center;">
      <img v-if="isActPath==='/'" class="navLogo" src="@/assets/SHimg/logo.png" alt="" />
      <img v-else class="navLogo" src="@/assets/SHimg/logo1.png" alt="" />
    </div>
    <div class="flexRowAC nav_t">
      <div
        v-for="(item,i) in navList"
        :key="i"
        class="nav_title"
        :class="{nav_t_line:isActPath===item.path}"
        @click="navClick(item)"
      >
        {{ item.title }}
      </div>
    </div>
    <!-- <div class="flexRowAC nav_r">
      &nbsp;
      <el-dropdown v-if="false" :hide-on-click="false" @command="toggleLang">
        <div class="flexRowAC langBox">
          <img class="demo_img" src="@/assets/VLimg/lang.png" alt="" />
          <div class="langBoxT">
            {{ langText }}
          </div>
          <el-icon color="#333">
            <CaretBottom />
          </el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="zh" :disabled="lang==='zh'">
              简体中文
            </el-dropdown-item>
            <el-dropdown-item command="en" :disabled="lang==='en'">
              English
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div> -->
    <div class="flexRowAC nav_r">
      <NuxtLink v-if="!userInfo" :to="gotoLoginURL" target="_blank">
        <div class="login_but">
          <span>登录/注册</span>
        </div>
      </NuxtLink>
      <el-dropdown v-else trigger="hover" @command="handleUserCommand">
        <div class="user_info">
          <img :src="userPhoto" alt="" />
          <span>{{ userName }}</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="switchAccount">
              切换账号
            </el-dropdown-item>
            <el-dropdown-item command="logout">
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-popover placement="bottom" trigger="hover" popper-class="popover_panel">
        <template #reference>
          <img class="right_info_nine" src="@/assets/img/nightpointpng.png" />
        </template>
        <commonRightPoPover />
      </el-popover>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, defineEmits, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import commonRightPoPover from './commonRightPoPover.vue'
import { useI18n } from 'vue-i18n'
import { useSessionStorage } from '@vueuse/core'
import { ElMessage } from 'element-plus'
import defaultAvatar from '@/assets/navheader/person.png'
import config from '@/config/index.js'

const { locale, t } = useI18n()
let lang = ref('')
let langText = ref('')
const router = useRouter()
const route = useRoute()
const ACCESS_TOKEN_SYNC_KEY = 'oortAccessToken'
const TENANT_ID_SYNC_KEY = 'oortTenantId'
const verifyTimer = ref(null)
const userInfo = ref(null)
const isLoading = ref(false)
const isCheckingLogin = ref(false)
const accessTokenStorage = useSessionStorage('accessToken', '')
const tenantIdStorage = useSessionStorage('tenantId', '')
const userInfoStorage = useSessionStorage('userInfo', null)
const phoneStorage = useSessionStorage('phone', '')
const realNameStorage = useSessionStorage('realName', '')
const emailStorage = useSessionStorage('email', '')
const token = computed(() => route.query.access_token || accessTokenStorage.value || '')
const tenantId = computed(() => route.query.tenant_id || tenantIdStorage.value || '')
const accessToken = computed(() => accessTokenStorage.value || token.value || '')
const gotoLoginURL = computed(() => {
  const redirectUri = process.client ? window.location.origin + route.path : 'https://sh.oortcloudsmart.com/zh/'
  return getLoginURL(redirectUri)
})
const userName = computed(() => userInfo.value?.user_name || userInfo.value?.user_detail?.ex_data?.realName || '用户')
const userPhoto = computed(() => userInfo.value?.photo || defaultAvatar)
const isActPath = computed(() => {
  let routePath = route.path
  if (route.path === '/serviceExtend') {
    routePath = '/service'
  }
  if (route.path === '/productworkUp' || route.path === '/productxoa' || route.path === '/productaPaas' || route.path === '/productmPaas') {
    routePath = '/product'
  }
  return routePath
})
const emit = defineEmits(['handle'])
const navList = ref([
  { title: '首页', path: '/zh/' },
  { title: '产品', path: '/zh/sh/productSH' },
  {
    title: '服务市场',
    path: '/zh/serviceMarket',
    isExternal: true,
    externalUrl: 'https://marketplace.huaweicloud.com/seller/5cca5d5cbf7ca25479a5541e042ab380' },
  {
    title: '开源社区',
    path: '/zh/communityFrame',
    needLogin: true
  },
  { title: '资源中心', path: '/zh/resourceCenter' },
  { title: '合作伙伴', path: '/zh/partner' },
  { title: '联系方式', path: '/zh/contactUs' }
])

const toggleLang = (val) => {
  lang.value = val === 'en' ? 'en' : 'zh'
  langText.value = val === 'en' ? 'English' : '简体中文'
}
const navClick = async(item) => {
  emit('handle', item.path, item.title)
  if (item.needLogin) {
    const isLoggedIn = await checkLoginStatus()
    if (isLoggedIn) {
      router.push(item.path)
      return
    }
    ElMessage.warning('未登录，即将跳转到登录页面')
    window.setTimeout(() => {
      redirectLogin(item.path)
    }, 1000)
    return
  }
  // 如果是外部链接，直接打开新窗口
  if (item.isExternal) {
    window.open(item.externalUrl, '_blank') // _blank表示在新窗口打开
    return
  }

  if (item.path === '/zh/sh/productSH') {
    // return
  } else {
    router.push(item.path)
  }
  // router.push(item.path)
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

const getLoginURL = (redirectUri) => {
  return config.busURL +
    '/bus/apaas-web/loginPage/index.html?appname=' +
    encodeURIComponent(config.ssoAppName) +
    '&redirect_uri=' +
    encodeURIComponent(redirectUri)
}

const redirectLogin = (path = route.path) => {
  if (!process.client) return
  window.location.href = getLoginURL(window.location.origin + path)
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
  isLoading.value = true
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
  } catch (error) {
    console.error('获取用户信息失败:', error)
    userInfo.value = null
  } finally {
    isLoading.value = false
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
  } catch (error) {
    console.error('token验证失败:', error)
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
  } catch (error) {
    console.error('退出登录失败:', error)
  } finally {
    resetLoginState(true)
    if (needRedirectLogin) {
      redirectLogin(route.path)
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

defineProps({
  isSticky: Boolean
})

watch(() => locale.value, () => {
  navList.value.forEach(item => {
    item.title = t('menu.' + item.path)
  })
})

watch(() => {}, () => {

})
watch(accessToken, (newToken) => {
  if (newToken) {
    checkLoginStatus()
    return
  }
  resetLoginState()
}, { immediate: true })

onMounted(() => {
  lang = locale
  toggleLang(lang.value)
  checkLoginStatus()
  window.addEventListener('focus', handleWindowFocus)
  window.addEventListener('storage', handleStorageChange)
  verifyTimer.value = window.setInterval(checkLoginStatus, 10 * 1000)
})

onBeforeUnmount(() => {
  if (verifyTimer.value) {
    window.clearInterval(verifyTimer.value)
  }
  window.removeEventListener('focus', handleWindowFocus)
  window.removeEventListener('storage', handleStorageChange)
})

</script>

<style>

.popover_panel {
  width: 400px!important;
  background-color: #EDF3F9!important;
  border-radius: 10px!important;
}

.popover_panel .el-popper__arrow:before {
  background-color: #EDF3F9!important;
}

</style>

<style lang="less" scoped>
@import "src/assets/style/vars.less";
:deep(.el-tooltip__trigger:focus-visible) {
  outline: unset;
}

.login_but:hover {
  background-color: #1066ef;
}
.login_but {
  cursor: pointer;
  width: 132px;
  height: 44px;
  margin: 0 10px;
  border-radius: 2px;
  background-color: #2278FF;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-weight: 400;
    font-size: 18px;
    color: #FFFFFF;
    line-height: 24px;
    letter-spacing: 1px;
  }
}

.right_info_nine {
  width: 46px;
  height: 46px;
  margin: 0 12px;
  cursor: pointer;
  border-radius: 0;
  transition: border-radius 0.5s ease; /* 添加过渡效果 */
}

.right_info_nine:hover {
  border-radius: 50%;
}

.langBox {
  cursor: pointer;
  margin-left: 20px;
  background: rgba(216, 216, 216, 0.00);
  padding: 12px;
  border: 0.6px solid #333;

  .langBoxT {
    font-size: 14px;
    color: #333;
  }

  img.demo_img {
    width: 16px;
    height: 16px;
  }
}
.navFixed{
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  width: 100%;
  height: 82px;
  z-index: 10;
}

.nav_title::after {
  content: "";
  display: block;
  position: relative;
  width: 36px;
  margin: auto;
  top: 10px;
  border-bottom: 4px solid transparent;
}

.nav_t_line {
  color: #EB691C;
}

.nav_t_line::after {
  border-bottom: 4px solid #EB691C;
}

.nav.navSH {
  background-color: #00100E;
  .nav_t{
    color: #fff;
  }
}

.nav {
  color: #5C5C5C;
  height: 82px;
  justify-content: space-between;
  padding: 0 220px;
  box-shadow: 0px 0px 4px 2px #f3f3f3;
  background-color: #fff;

  .nav_t {
    cursor: pointer;
    gap: 28px;
    width: 760px;
    font-size: 18px;
    color: #5C5C5C;
    font-weight: 700;
    display: flex;
    justify-content: center;
  }

  .nav_r {
    justify-content: end;
    width: 180px;
  }

  .navLogo {
    height: 48px;
    background-size: cover;
  }

  .demo_img {
    width: 24px;
    height: 24px;
    background-size: cover;
    margin-right: 8px;
  }
}

.user_info {
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 160px;
  cursor: pointer;

  img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    object-fit: cover;
  }

  span {
    max-width: 108px;
    margin-left: 8px;
    overflow: hidden;
    font-size: 16px;
    color: #333;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

</style>
