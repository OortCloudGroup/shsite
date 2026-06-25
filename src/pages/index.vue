<template>
  <div />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const detectTargetPath = () => {
  if (typeof window === 'undefined') {
    return '/en/'
  }

  const browserLanguages = window.navigator.languages?.length
    ? window.navigator.languages
    : [window.navigator.language]

  const matchedLanguage = browserLanguages.find(language => typeof language === 'string' && language.length > 0) || 'en'

  return matchedLanguage.toLowerCase().startsWith('zh') ? '/zh/' : '/en/'
}
// 这里因为en 目录下的是AI生成的不是框架里里的路由页面了 使用需要使用跳转方法
if (detectTargetPath() === '/en/') {
  window.location.href = '/en/'
} else {
  router.replace(detectTargetPath())
}

</script>
