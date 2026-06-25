<template>
  <div class="oort-sh-en-layout">
    <slot />
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted } from 'vue'

const bodyClassName = 'oort-sh-en-hidden-scrollbar'

onMounted(() => {
  document.documentElement.classList.add(bodyClassName)
  document.body.classList.add(bodyClassName)
})

onBeforeUnmount(() => {
  document.documentElement.classList.remove(bodyClassName)
  document.body.classList.remove(bodyClassName)
})
</script>

<style scoped>
.oort-sh-en-layout {
  min-height: 100vh;
  background: #0a0a0f;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.oort-sh-en-layout::-webkit-scrollbar {
  display: none;
}
</style>

<style>
html.oort-sh-en-hidden-scrollbar,
body.oort-sh-en-hidden-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

html.oort-sh-en-hidden-scrollbar::-webkit-scrollbar,
body.oort-sh-en-hidden-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
