<template>
  <div class="resource-center-page" :class="{ 'nav-hidden': navHidden }">
    <div class="main-tab-wrap">
      <div class="main-tab-inner">
        <div
          v-for="item in mainTabs"
          :key="item.name"
          class="main-tab-item"
          :class="{ active: activeMainTab === item.name }"
          @click="handleMainTabChange(item.name)"
        >
          <img :src="item.icon" :alt="item.label" class="main-tab-icon" />
          <span class="main-tab-text">{{ item.label }}</span>
        </div>
      </div>
    </div>

    <div class="content-scroll-area">
      <div v-if="activeMainTab === 'develop'" class="sub-nav-wrap">
        <div class="sub-nav-inner">
          <div
            v-for="item in developTabs"
            :key="item.name"
            class="sub-nav-item"
            :class="{ active: activeDevelopTab === item.name }"
            @click="activeDevelopTab = item.name"
          >
            <img :src="item.icon" :alt="item.label" class="sub-nav-icon" />
            <span class="sub-nav-text">{{ item.label }}</span>
          </div>
        </div>
      </div>

      <div v-if="activeMainTab === 'distribution'" class="sub-nav-wrap">
        <div class="sub-nav-inner">
          <div
            v-for="item in distributionTabs"
            :key="item.name"
            class="sub-nav-item"
            :class="{ active: activeDistributionTab === item.name }"
            @click="activeDistributionTab = item.name"
          >
            <img :src="item.icon" :alt="item.label" class="sub-nav-icon" />
            <span class="sub-nav-text">{{ item.label }}</span>
          </div>
        </div>
      </div>

      <div class="page-content">
        <iframe
          ref="contentIframe"
          :key="iframeSrc"
          :src="iframeSrc"
          class="content-iframe"
          frameborder="0"
          @load="handleIframeLoad"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'

import iconExplore from '@/assets/img/supplier_manage/zyzx/ts_1x.png'
import iconDesign from '@/assets/img/supplier_manage/zyzx/sj_1x.png'
import iconDevelop from '@/assets/img/supplier_manage/zyzx/kf_1x.png'
import iconDistribution from '@/assets/img/supplier_manage/zyzx/ff_1x.png'
import iconPromotion from '@/assets/img/supplier_manage/zyzx/tg_1x.png'
import iconEcosystem from '@/assets/img/supplier_manage/zyzx/st_1x.png'
import iconSupport from '@/assets/img/supplier_manage/zyzx/zc_1x.png'

import iconDevOverview from '@/assets/img/supplier_manage/zyzx/kfgs.png'
import iconDevEnv from '@/assets/img/supplier_manage/zyzx/kfhj_1x.png'
import iconAiStudio from '@/assets/img/supplier_manage/zyzx/ocais_1x.png'
import iconTestTool from '@/assets/img/supplier_manage/zyzx/csgj_1x.png'
import iconDevPower from '@/assets/img/supplier_manage/zyzx/ffdkfnl_1x.png'
import iconDevDoc from '@/assets/img/supplier_manage/zyzx/kfwd_1x.png'
import iconDevTemplate from '@/assets/img/supplier_manage/zyzx/kfmb_1x.png'
import iconDownload from '@/assets/img/supplier_manage/zyzx/xzzx_1x.png'

import iconPortal from '@/assets/img/supplier_manage/zyzx/portal.png'
import iconAndroid from '@/assets/img/supplier_manage/zyzx/android_1x.png'
import iconIos from '@/assets/img/supplier_manage/zyzx/ios_1x.png'
import iconHarmony from '@/assets/img/supplier_manage/zyzx/hm_1x.png'
import iconDesktop from '@/assets/img/supplier_manage/zyzx/ocd_1x.png'
import iconAxi from '@/assets/img/supplier_manage/zyzx/axi_1x.png'
import iconClaw from '@/assets/img/supplier_manage/zyzx/ocbdx_1x.png'
import iconWeb from '@/assets/img/supplier_manage/zyzx/pcweb_1x.png'
import iconMiniProgram from '@/assets/img/supplier_manage/zyzx/xcxgzh_1x.png'
import iconMobile from '@/assets/img/supplier_manage/zyzx/ydd_1x.png'

const HTML_BASE_PATH = '/resource-center/'

const activeMainTab = ref('explore')
const activeDevelopTab = ref('overview')
const activeDistributionTab = ref('portal')
const navHidden = ref(false)
const iframeScrollWindow = ref(null)
const contentIframe = ref(null)

const mainTabs = [
  { name: 'explore', label: '探索', icon: iconExplore },
  { name: 'design', label: '设计', icon: iconDesign },
  { name: 'develop', label: '开发', icon: iconDevelop },
  { name: 'distribution', label: '分发', icon: iconDistribution },
  { name: 'promotion', label: '推广', icon: iconPromotion },
  { name: 'ecosystem', label: '生态', icon: iconEcosystem },
  { name: 'support', label: '支持', icon: iconSupport }
]

const developTabs = [
  { name: 'overview', label: '概述', icon: iconDevOverview },
  { name: 'devEnvironment', label: '开发环境', icon: iconDevEnv },
  { name: 'aiStudio', label: 'OortCloud AI Studio', icon: iconAiStudio },
  { name: 'mobileTest', label: '测试工具', icon: iconTestTool },
  { name: 'devPower', label: '丰富的开放能力', icon: iconDevPower },
  { name: 'devDocs', label: '开发文档', icon: iconDevDoc },
  { name: 'devTemplate', label: '开发模版', icon: iconDevTemplate },
  { name: 'download', label: '下载中心', icon: iconDownload }
]

const distributionTabs = [
  { name: 'portal', label: '门户', icon: iconPortal },
  { name: 'android', label: 'Android', icon: iconAndroid },
  { name: 'ios', label: 'iOS', icon: iconIos },
  { name: 'harmony', label: '鸿蒙', icon: iconHarmony },
  { name: 'desktop', label: 'OortCloud Desktop', icon: iconDesktop },
  { name: 'axi', label: 'AxI', icon: iconAxi },
  { name: 'claw', label: 'OortClaw本地虾', icon: iconClaw },
  { name: 'web', label: 'PC Web', icon: iconWeb },
  { name: 'miniProgram', label: '小程序/公众号', icon: iconMiniProgram },
  { name: 'h5', label: '移动端', icon: iconMobile }
]

const iframeSrc = computed(() => {
  const mainMap = {
    explore: 'oort-sh.html',
    design: 'oort-sh-business-design.html',
    promotion: 'oort-operation.html',
    ecosystem: 'ecosystem.html',
    support: 'support.html'
  }
  const developMap = {
    overview: 'oort-private-cloud-development.html',
    devEnvironment: 'dev-environment-platform.html',
    aiStudio: 'oortcloud-ai-studio.html',
    mobileTest: 'mobile-test-workspace.html',
    devPower: 'oort-platform.html',
    devDocs: 'dev-docs.html',
    devTemplate: 'dev-templates.html',
    download: 'download-center.html'
  }
  const distributionMap = {
    portal: 'portal.html',
    android: 'platform-android.html',
    ios: 'platform-ios.html',
    harmony: 'platform-harmony.html',
    desktop: 'platform-desktop.html',
    axi: 'platform-axi.html',
    claw: 'platform-claw.html',
    web: 'platform-web.html',
    miniProgram: 'platform-miniprogram.html',
    h5: 'platform-h5.html'
  }

  if (activeMainTab.value === 'develop') {
    return HTML_BASE_PATH + developMap[activeDevelopTab.value]
  }
  if (activeMainTab.value === 'distribution') {
    return HTML_BASE_PATH + distributionMap[activeDistributionTab.value]
  }
  return HTML_BASE_PATH + mainMap[activeMainTab.value]
})

const removeIframeScrollListener = () => {
  if (!iframeScrollWindow.value) {
    return
  }

  try {
    iframeScrollWindow.value.removeEventListener('scroll', handleIframeScroll)
  } catch (error) {
    iframeScrollWindow.value = null
  } finally {
    iframeScrollWindow.value = null
  }
}

const handleIframeScroll = () => {
  const iframe = contentIframe.value
  const frameWindow = iframe && iframe.contentWindow
  const frameDocument = iframe && (iframe.contentDocument || (frameWindow && frameWindow.document))
  if (!frameWindow || !frameDocument) {
    return
  }

  const scrollTop = frameWindow.scrollY ||
    frameDocument.documentElement.scrollTop ||
    frameDocument.body.scrollTop ||
    0

  if (scrollTop > 24) {
    navHidden.value = true
    return
  }
  if (scrollTop <= 2) {
    navHidden.value = false
  }
}

const handleMainTabChange = (name) => {
  navHidden.value = false
  activeMainTab.value = name
  if (name === 'develop' && !activeDevelopTab.value) {
    activeDevelopTab.value = 'overview'
  }
}

const handleIframeLoad = () => {
  navHidden.value = false
  removeIframeScrollListener()
  nextTick(() => {
    const iframe = contentIframe.value
    if (!iframe || !iframe.contentWindow) {
      return
    }

    try {
      iframeScrollWindow.value = iframe.contentWindow
      iframeScrollWindow.value.addEventListener('scroll', handleIframeScroll, { passive: true })
      handleIframeScroll()
    } catch (error) {
      iframeScrollWindow.value = null
    }
  })
}

watch(iframeSrc, () => {
  navHidden.value = false
  removeIframeScrollListener()
})

onBeforeUnmount(() => {
  removeIframeScrollListener()
})
</script>

<style scoped lang="less">
.resource-center-page {
  width: 100%;
  height: calc(100vh - 82px);
  display: flex;
  flex-direction: column;
  background: #f5f6f8;
  overflow: hidden;
}

.main-tab-wrap {
  width: 100%;
  background: #fff;
  border-top: 1px solid #ebedf0;
  border-bottom: 1px solid #ebedf0;
  position: sticky;
  top: 0;
  z-index: 100;
  height: 50px;
  flex: 0 0 50px;
  overflow: hidden;
  opacity: 1;
  transform: translateY(0);
  transition: height 0.28s ease, flex-basis 0.28s ease, opacity 0.22s ease, transform 0.28s ease, border-color 0.28s ease;
}

.main-tab-inner {
  max-width: 1180px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 56px;
}

.main-tab-item {
  height: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  color: #30343d;
}

.main-tab-item.active {
  color: #2d67d9;
  border-bottom-color: #2d67d9;
}

.main-tab-icon {
  width: 16px;
  height: 16px;
  object-fit: contain;
  opacity: 0.88;
}

.main-tab-item.active .main-tab-icon {
  filter: brightness(0) saturate(100%) invert(38%) sepia(100%) saturate(1352%) hue-rotate(205deg) brightness(95%) contrast(89%);
  opacity: 1;
}

.main-tab-text {
  font-size: 26px;
  transform: scale(0.5);
  transform-origin: left center;
  margin-right: -18px;
  font-weight: 500;
  line-height: 1;
}

.content-scroll-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.sub-nav-wrap {
  width: 100%;
  background: #f5f6f8;
  border-bottom: 1px solid #ebedf0;
  flex: 0 0 auto;
  max-height: 100px;
  overflow: hidden;
  opacity: 1;
  transform: translateY(0);
  transition: max-height 0.3s ease, opacity 0.24s ease, transform 0.3s ease, border-color 0.3s ease;
}

.sub-nav-inner {
  max-width: 1180px;
  min-height: 100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
}

.sub-nav-item {
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
}

.sub-nav-icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.sub-nav-text {
  font-size: 28px;
  transform: scale(0.5);
  transform-origin: center top;
  line-height: 1;
  color: #30343d;
  white-space: nowrap;
}

.sub-nav-item.active .sub-nav-text {
  color: #2d67d9;
  font-weight: 500;
}

.page-content {
  flex: 1 1 auto;
  min-height: 0;
  height: 100%;
  display: flex;
  background: #fff;
}

.content-iframe {
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  min-height: 100%;
  border: 0;
  display: block;
  background: #fff;
}

.resource-center-page.nav-hidden {
  .main-tab-wrap {
    height: 0;
    flex-basis: 0;
    opacity: 0;
    transform: translateY(-16px);
    border-color: transparent;
  }

  .sub-nav-wrap {
    max-height: 0;
    opacity: 0;
    transform: translateY(-14px);
    border-color: transparent;
  }
}
</style>
