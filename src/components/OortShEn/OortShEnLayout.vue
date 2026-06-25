<template>
  <div class="oort-sh-en">
    <OortShEnNav />
    <main>
      <slot />
    </main>
    <OortShEnFooter v-if="showFooter" />
  </div>
</template>

<script setup>
import OortShEnFooter from './OortShEnFooter.vue'
import OortShEnNav from './OortShEnNav.vue'

defineProps({
  showFooter: {
    type: Boolean,
    default: true
  }
})
</script>

<style lang="less">
@import "@/assets/oortShEn/style.less";
</style>
