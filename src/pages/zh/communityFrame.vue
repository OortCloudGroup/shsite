<template>
  <div class="community-frame-page">
    <iframe
      v-if="accessToken"
      class="community-frame"
      :src="communityUrl"
      frameborder="0"
    />
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useSessionStorage } from '@vueuse/core'
import config from '@/config/index.js'

const route = useRoute()
const accessTokenStorage = useSessionStorage('accessToken', '')
const accessToken = computed(() => route.query.access_token || accessTokenStorage.value || '')
const communityUrl = computed(() => {
  return config.busURL + '/bus/apaas-community/?/sso/&accessToken=' + accessToken.value
})

const getLoginURL = () => {
  return config.busURL +
    '/bus/apaas-web/loginPage/index.html?appname=' +
    encodeURIComponent(config.ssoAppName) +
    '&redirect_uri=' +
    encodeURIComponent(window.location.origin + route.path)
}

const ensureLogin = () => {
  if (!process.client || accessToken.value) return
  window.location.href = getLoginURL()
}

watch(accessToken, () => {
  ensureLogin()
})

onMounted(() => {
  ensureLogin()
})
</script>

<style scoped lang="less">
.community-frame-page {
  width: 100%;
  height: calc(100vh - 82px);
  overflow: hidden;
  background: #fff;
}

.community-frame {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
