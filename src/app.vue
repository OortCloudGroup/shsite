<template>
  <NuxtLayout :name="layoutName">
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useType } from './composables/useType'

let flag = useType()
const route = useRoute()
let layoutName = computed(() => {
  if (route.path.startsWith('/en')) {
    return 'oort-sh-en'
  }
  return flag.isMobiFlag ? 'mobile' : 'default'
})
</script>
