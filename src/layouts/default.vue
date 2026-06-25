<template>
  <div class="page_container">
    <nuxt />
    <div class="page pc">
      <div ref="anchor" />
      <NavHeader :is-sticky="isSticky" @handle="bgHandle" />
      <el-config-provider :locale="locale">
        <div
          v-if="flag.pathPcMbFlag"
          id="id_start"
          class="Setp page_bg"
          :class="[{bg_h:nav==='/pc'},{bg_p:nav==='/pc/product'},{bg_au:nav==='/pc/aboutUs'},{bg_cu:nav==='/pc/contactUs'}]"
        >
          <div v-if="nav==='/pc'" class="bg_home">
            <div class="kingdom oort">
              {{ $t('layouts.hT1') }}
            </div>
            <div class="kingdom oort o1">
              {{ $t('layouts.hT11') }}
            </div>
            <div class="desc">
              <div class="oort">
                {{ $t('layouts.hT2') }}
              </div>
            </div>
          </div>
          <div v-if="nav==='/pc/product'" class="bg_pro">
            <div class="kingdom">
              {{ $t('layouts.pT1') }}
            </div>
            <div class="desc">
              {{ $t('layouts.pT2') }}
            </div>
          </div>
          <div v-if="nav==='/pc/aboutUs'" class="bg_pro">
            <div class="kingdom">
              {{ $t('layouts.auT1') }}
            </div>
            <div class="desc">
              {{ $t('layouts.auT2') }}
            </div>
          </div>
          <div v-if="nav==='/pc/contactUs'" class="bg_pro">
            <div class="kingdom">
              {{ $t('layouts.cuT1') }}
            </div>
          </div>
        </div>
        <div class="main_body">
          <NuxtPage />
          <Bottom v-if="!isFullScreenPage" />
        </div>
      </el-config-provider>
    </div>
    <el-dialog
      v-model="hVisi"
      width="100%"
      top="0"
      :show-close="false"
      class="navSite"
    >
      <NavHeader v-if="hVisiT" :item="hVisiT" @handle="bgHandle" />
      <industry :item="hVisiT" @handle="handleI" @closeDialog="closeDialog" />
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, watch, computed } from '@vue/runtime-core'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { useRouter } from 'vue-router'
import { useType } from '@/composables/useType'
import industry from '../pages/zh/sh/industry.vue'

let flag = useType()
const locale = zhCn
let nav = ref(0)
let hVisi = ref(false)
let hVisiT = ref('')
const router = useRouter()
const bgHandle = (val, t) => {
  console.log(t)

  if (t === '产品') {
    hVisiT.value = t
    hVisi.value = true
  } else {
    hVisi.value = false
  }
  nav.value = val
}
const closeDialog = (val) => {
  hVisi.value = val
}
watch(() => router.currentRoute.value, (newValue) => {
  flag.pathPcMbFlag = newValue?.href.includes('pc')
  if (newValue.path === '/serviceExtend') {
    nav.value = '/service'
  } else {
    nav.value = newValue.path
  }
}, { immediate: true })

import { useScroll, useElementBounding } from '@vueuse/core'

const anchor = ref(null)
const { y } = useScroll(window)

const { top: anchorTop } = useElementBounding(anchor)

const isSticky = computed(() => {
  return y.value > anchorTop.value
})

const isFullScreenPage = computed(() => {
  return ['/zh/resourceCenter', '/zh/communityFrame'].includes(router.currentRoute.value.path)
})

</script>

<style lang="less" scoped>

.page_container,.page {
  height: auto;
  // overflow: auto;
  width: 100%;
}

.main_body {
  background-color: #fff;
  min-height: calc(100vh - 140px - 300px);
}

.bg_h {
  height: 100vh;
  background-image: url('@/assets/VLimg/bg/banner1.png');
}

.bg_p {
  height: 100vh;
  background-image: url('@/assets/VLimg/bg/banner2.png');
}
.bg_au {
  height: 100vh;
  background-image: url('@/assets/VLimg/bg/banner3.png');
}
.bg_cu {
  height: 100vh;
  background-image: url('@/assets/img/contactUs/bg.png');
}

.bg_s {
  height: 100vh;
  background-image: url('@/assets/img/ser_bg.png');
}

.page_bg {
  background-size: cover;
  background-color: #333;
}

.bg_mPaas {
  height: 70vh;
  background-size: 100% 100%;
  background-image: url('@/assets/img/productmPaas/bg.png');
}

.bg_home {
  .kingdom {
    padding-top: 162px;
    width: 1500px;
    margin: 0 auto;
    font-style: italic;
    font-size: 96px;
    color: #FFFFFF;
    font-weight: 900;
  }

  .kingdom.oort {
    text-align: right;
    font-style: normal;

    &.o1 {
      padding-top: 30px;
    }
  }

  .desc>.oort {
    float: right;
    width: 670px;
    text-align: right;
  }

  .desc {
    padding-top: 20px;
    width: 1500px;
    margin: 0 auto;
    font-size: 28px;
    color: #FFFFFF;
    font-weight: 400;
  }
}

.bg_pro {
  .kingdom {
    padding-top: 283px;
    width: 1500px;
    text-align: center;
    margin: 0 auto;
    font-size: 64px;
    color: #FFFFFF;
    font-weight: 900;
  }

  .desc {
    padding-top: 20px;
    text-align: center;
    width: 1500px;
    margin: 0 auto;
    font-size: 22px;
    color: #FFFFFF;
    font-weight: 400;
  }
}

.productmPaas {
  padding-left: 360px;
  .kingdom {
    padding-top: 170px;
    font-size: 40px;
    color: #FFFFFF;
    font-weight: bold;
  }

  .desc {
    padding-top: 28px;
    width: 560px;
    font-size: 14px;
    color: #FFFFFF;
  }
}

:deep(.el-dialog.navSite) {
  padding: 0;

  .el-dialog__header {
    padding: 0;
  }

  .defalut_hea {
    height: 82px;
    position: relative;
  }
}
</style>

