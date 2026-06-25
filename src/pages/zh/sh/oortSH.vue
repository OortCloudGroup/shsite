<template>
  <div class="home_page vls">
    <div class="platTopOut flexRowAC">
      <div class="platTop w1380">
        <div class="VLStream">
          OORT.SH 托管平台
          <br />
          面向开发者
          —— "种下智慧树，结出百香果"
        </div>
        <div class="plat_cent">
          通过基础设施云化、软件与硬件解耦、数据与业务解耦、应用与平台解耦,
          构建开放技术架构和业务生态
        </div>
        <div class="flexRowAC useBox">
          <div class="seeMore">
            立即使用
          </div>
          <div class="seeMore u1">
            安排演示
          </div>
        </div>
        <video class="wBImg" src="/documents/oortSH.mp4" autoplay muted loop />
      </div>
    </div>

    <!-- 添加的Tab导航 -->
    <div class="tabSwitch">
      <div class="tabItem" @click="scrollToSection('section0')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section0'}">托管应用</span>
        <span class="line" :class="{activeLine:activeSection==='section0'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section1')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section1'}">托管服务</span>
        <span class="line" :class="{activeLine:activeSection==='section1'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section2')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section2'}">服务开发</span>
        <span class="line" :class="{activeLine:activeSection==='section2'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section3')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section3'}">应用开发</span>
        <span class="line" :class="{activeLine:activeSection==='section3'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section4')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section4'}">应用市场</span>
        <span class="line" :class="{activeLine:activeSection==='section4'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section5')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section5'}">服务目录</span>
        <span class="line" :class="{activeLine:activeSection==='section5'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section6')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section6'}">基础服务</span>
        <span class="line" :class="{activeLine:activeSection==='section6'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section7')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section7'}">开发者社区</span>
        <span class="line" :class="{activeLine:activeSection==='section7'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section8')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section8'}">基础云能力</span>
        <span class="line" :class="{activeLine:activeSection==='section8'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section9')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section9'}">AI Studio</span>
        <span class="line" :class="{activeLine:activeSection==='section9'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section10')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section10'}">竞品分析</span>
        <span class="line" :class="{activeLine:activeSection==='section10'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section11')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section11'}">使用成效</span>
        <span class="line" :class="{activeLine:activeSection==='section11'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section12')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section12'}">私有化方案</span>
        <span class="line" :class="{activeLine:activeSection==='section12'}" />
      </div>
    </div>

    <!-- 为每个区块添加id和ref属性 -->
    <div id="section0" ref="section0" class="w1380 ipcView CloudBox flexRowAC">
      <div class="CloudL">
        <div class="cl_t">
          托管应用
        </div>
        <div class="cl_d">
          支持企业将应用托管在云端，简化运维，提升应用可用性和扩展性
        </div>
        <div class="proTitleBox_c_t1">
          查看详情
        </div>
      </div>
      <img class="privateCloud_c2" src="@/assets/SHimg/SH_c1.png" alt="" />
    </div>
    <div id="section1" ref="section1" class="w1380 CloudBox ipcBox flexRowAC">
      <img class="privateCloud_c2" src="@/assets/SHimg/SH_c2.png" alt="" />
      <div class="CloudL">
        <div class="cl_t">
          托管服务
        </div>
        <div class="cl_d">
          为企业提供全托管的云服务，帮助用户高效管理和监控应用和数据
        </div>
        <div class="proTitleBox_c_t1">
          查看详情
        </div>
      </div>
    </div>
    <div id="section2" ref="section2" class="w1380 ipcView CloudBox flexRowAC">
      <div class="CloudL">
        <div class="cl_t">
          服务开发
        </div>
        <div class="cl_d">
          支持灵活的服务开发环境，帮助开发者快速构建和部署高质量的应用服务
        </div>
        <div class="proTitleBox_c_t1">
          查看详情
        </div>
      </div>
      <img class="privateCloud_c2" src="@/assets/software/privateCloud_c2.png" alt="" />
    </div>
    <div id="section3" ref="section3" class="w1380 CloudBox ipcBox flexRowAC">
      <img class="privateCloud_c2" src="@/assets/software/privateCloud_c3.png" alt="" />
      <div class="CloudL">
        <div class="cl_t">
          应用开发
        </div>
        <div class="cl_d">
          提供开发工具和资源，简化应用开发流程，助力企业快速创新
        </div>
        <div class="proTitleBox_c_t1">
          查看详情
        </div>
      </div>
    </div>
    <div id="section4" ref="section4" class="w1380 ipcView CloudBox flexRowAC">
      <div class="CloudL">
        <div class="cl_t">
          应用市场
        </div>
        <div class="cl_d">
          提供丰富的应用资源，企业可根据需求选择和部署适合的云应用
        </div>
        <div class="proTitleBox_c_t1">
          查看详情
        </div>
      </div>
      <img class="privateCloud_c2" src="@/assets/software/privateCloud_c4.png" alt="" />
    </div>
    <div id="section5" ref="section5" class="w1380 CloudBox ipcBox flexRowAC">
      <img class="privateCloud_c5" src="@/assets/software/privateCloud_c5.png" alt="" />
      <div class="CloudL">
        <div class="cl_t">
          服务目录
        </div>
        <div class="cl_d">
          集中管理平台内各类服务，用户可以方便地查看、选择和使用
        </div>
        <div class="proTitleBox_c_t1">
          查看详情
        </div>
      </div>
    </div>
    <div id="section6" ref="section6" class="w1380 CloudBox flexRowAC">
      <div class="CloudL">
        <div class="cl_t">
          基础服务
        </div>
        <div class="cl_d">
          提供基础的数据存储、网络、安全等核心服务，支撑云端应用的稳定运行
        </div>
        <div class="proTitleBox_c_t1">
          查看详情
        </div>
      </div>
      <img class="privateCloud_c6" src="@/assets/software/privateCloud_c6.png" alt="" />
    </div>
    <div id="section7" ref="section7" class="w1380 CloudBox ipcBox flexRowAC">
      <img class="privateCloud_c5" src="@/assets/SHimg/SH_c3.png" alt="" />
      <div class="CloudL">
        <div class="cl_t">
          开发者社区
        </div>
        <div class="cl_d">
          为开发者提供技术支持和交流平台，促进知识共享和创新合作
        </div>
        <div class="proTitleBox_c_t1">
          查看详情
        </div>
      </div>
    </div>
    <div id="section8" ref="section8" class="proTitleBox w1380 flexRowAC" style="justify-content: flex-start">
      <div>
        基础云能力
        <div class="proTitleBox_c_t">
          提供强大的计算、存储、网络等基础设施，确保平台稳定可靠运行
        </div>
        <div class="proTitleBox_c_t1">
          查看详情
        </div>
      </div>
    </div>
    <div class="proTitleBox w1380 flexRowAC">
      <img class="privateCloud_c1" src="@/assets/software/privateCloud_c1.png" alt="" />
    </div>
    <div id="section9" ref="section9" class="proTitleBox w1380 flexRow" style="justify-content: flex-start">
      <div class="oort_logo">
        <img src="@/assets/img/oortLogo.png" alt="" />
      </div>
      <div>
        OORTCLOUD AI Studio
        <div class="proTitleBox_c_t">
          OORTCLOUD AI 原生 IDE，智能编码，一触即发
        </div>
        <div class="proTitleBox_c_t1" @click="viewPath('/zh/sh/oortVS')">
          查看详情
        </div>
      </div>
    </div>
    <div class="proTitleBox w1380 flexRowAC">
      <div class="item_first">
        <div class="titleSize">
          支持多种方式创建项目
        </div>
        <div class="contentSize">
          支持从模板创建项目以及从 Git 导入项目，满足不同项目开发需求
        </div>
      </div>
      <div class="item_second">
        <div class="titleSize">
          开箱即用的开发
          <br />
          环境
        </div>
        <div class="contentSize">
          无需配置开发环境，选择模板立即
          <br />
          开始开发
        </div>
      </div>
      <div class="item_third">
        <div class="titleSize">
          快速稳定
        </div>
        <div class="contentSize">
          秒级创建多区域、多集群的部署，
          <br />
          提供稳定、低延迟的保证
        </div>
      </div>
    </div>
    <div id="section10" ref="section10" class="proTitleBox w1380 flexRowAC" style="justify-content: flex-start">
      <div>
        与Firebase对比
        <br />
        与GAE对比
        <br />
        与mPaaS对比
        <div class="proTitleBox_c_t">
          提供强大的计算、存储、网络等基础设施，确保平台稳定可靠运行
        </div>
        <div class="proTitleBox_c_t">
          <span class="block" />
          这个颜色为更优的意思
        </div>
        <div class="items">
          <div class="header-left">
            OORT.SH 托管平台
          </div>
          <div class="header-mid">
            <img src="@/assets/img/vs.png" alt="" />
          </div>
          <div class="header-right">
            Firebase、GAE、mPaaS
          </div>
        </div>
        <div class="items">
          <div class="left">
            私有部署 + 云部署
          </div>
          <div class="mid blue">
            部署方式
          </div>
          <div class="right">
            私有部署 + 云部署
          </div>
        </div>
        <div class="items">
          <div class="left">
            <img class="picture" src="@/assets/img/hzq.png" alt="" />
          </div>
          <div class="mid blue">
            多数据源同步
          </div>
          <div class="right">
            <img class="picture" src="@/assets/img/hzq.png" alt="" />
          </div>
        </div>
        <div class="items">
          <div class="left">
            <img class="picture" src="@/assets/img/hzq.png" alt="" />
          </div>
          <div class="mid blue">
            流程编排
          </div>
          <div class="right">
            <img class="picture" src="@/assets/img/hzq.png" alt="" />
          </div>
        </div>
        <div class="items">
          <div class="left">
            <img class="picture" src="@/assets/img/hzq.png" alt="" />
          </div>
          <div class="mid blue">
            事件集成
          </div>
          <div class="right">
            <img class="picture" src="@/assets/img/hzq.png" alt="" />
          </div>
        </div>
        <div class="items">
          <div class="left">
            <img class="picture" src="@/assets/img/hzq.png" alt="" />
          </div>
          <div class="mid blue">
            文件处理
          </div>
          <div class="right">
            <img class="picture" src="@/assets/img/hzq.png" alt="" />
          </div>
        </div>
        <div class="items">
          <div class="left">
            <img class="picture" src="@/assets/img/hzq.png" alt="" />
          </div>
          <div class="mid blue">
            无代码、少代码设计工具
          </div>
          <div class="right">
            <img class="picture" src="@/assets/img/hzq.png" alt="" />
          </div>
        </div>
        <div class="items">
          <div class="left orange">
            无需IDE
          </div>
          <div class="mid orange">
            IDE工具
          </div>
          <div class="right">
            <img class="picture" src="@/assets/img/hzq.png" alt="" />
          </div>
        </div>
        <div class="items">
          <div class="left">
            <img class="picture" src="@/assets/img/hzq.png" alt="" />
          </div>
          <div class="mid blue">
            多协议支持
          </div>
          <div class="right">
            <img class="picture" src="@/assets/img/hzq.png" alt="" />
          </div>
        </div>
        <div class="items">
          <div class="left">
            <img class="picture" src="@/assets/img/hzq.png" alt="" />
          </div>
          <div class="mid blue">
            多数据格式转换
          </div>
          <div class="right">
            <img class="picture" src="@/assets/img/hzq.png" alt="" />
          </div>
        </div>
        <div class="items">
          <div class="left">
            <img class="picture" src="@/assets/img/hzq.png" alt="" />
          </div>
          <div class="mid blue">
            集成模板
          </div>
          <div class="right">
            <img class="picture" src="@/assets/img/hzq.png" alt="" />
          </div>
        </div>
        <div class="items">
          <div class="left">
            <img class="picture" src="@/assets/img/hzq.png" alt="" />
          </div>
          <div class="mid blue">
            监控
          </div>
          <div class="right">
            <img class="picture" src="@/assets/img/hzq.png" alt="" />
          </div>
        </div>
        <div class="items">
          <div class="left">
            <img class="picture" src="@/assets/img/hzq.png" alt="" />
          </div>
          <div class="mid blue">
            运行日志
          </div>
          <div class="right">
            <img class="picture" src="@/assets/img/hzq.png" alt="" />
          </div>
        </div>
        <div class="items">
          <div class="left">
            <img class="picture" src="@/assets/img/hzq.png" alt="" />
          </div>
          <div class="mid blue">
            混合云、多云部署
          </div>
          <div class="right">
            <img class="picture" src="@/assets/img/hzq.png" alt="" />
          </div>
        </div>
        <div class="items">
          <div class="left">
            <img class="picture" src="@/assets/img/czq.png" alt="" />
          </div>
          <div class="mid orange">
            预集成
          </div>
          <div class="right">
            <img class="picture" src="@/assets/img/hcw.png" alt="" />
          </div>
        </div>
        <div class="items">
          <div class="left">
            <img class="picture" src="@/assets/img/czq.png" alt="" />
          </div>
          <div class="mid orange">
            流程告警
          </div>
          <div class="right">
            <img class="picture" src="@/assets/img/hcw.png" alt="" />
          </div>
        </div>
        <div class="items">
          <div class="left">
            <img class="picture" src="@/assets/img/czq.png" alt="" />
          </div>
          <div class="mid orange">
            统计表
          </div>
          <div class="right">
            <img class="picture" src="@/assets/img/hcw.png" alt="" />
          </div>
        </div>
        <div class="items">
          <div class="left">
            <img class="picture" src="@/assets/img/czq.png" alt="" />
          </div>
          <div class="mid orange">
            多租户管理
          </div>
          <div class="right">
            <img class="picture" src="@/assets/img/hcw.png" alt="" />
          </div>
        </div>
        <div class="items">
          <div class="left">
            <img class="picture" src="@/assets/img/czq.png" alt="" />
          </div>
          <div class="mid orange">
            功能管理
          </div>
          <div class="right">
            <img class="picture" src="@/assets/img/hcw.png" alt="" />
          </div>
        </div>
        <div class="items">
          <div class="left">
            <img class="picture" src="@/assets/img/czq.png" alt="" />
          </div>
          <div class="mid orange">
            数据字典
          </div>
          <div class="right">
            <img class="picture" src="@/assets/img/hcw.png" alt="" />
          </div>
        </div>
        <div class="items">
          <div class="left">
            <img class="picture" src="@/assets/img/czq.png" alt="" />
          </div>
          <div class="mid orange">
            流程克隆
          </div>
          <div class="right">
            <img class="picture" src="@/assets/img/hcw.png" alt="" />
          </div>
        </div>
        <div class="items">
          <div class="left">
            <img class="picture" src="@/assets/img/czq.png" alt="" />
          </div>
          <div class="mid orange">
            SaaS应用多账户管理
          </div>
          <div class="right">
            <img class="picture" src="@/assets/img/hcw.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div id="section11" ref="section11" class="proTitleBox w1380 flexRowAC" style="justify-content: flex-start">
      <div>
        使用成效
        <div class="proTitleBox_c_t">
          为了解决长期困扰行业应用中的信息孤岛和业务烟囱问题，我们借鉴了互联网“大中台，小前台”建设概念，利用云计算技术。构建智慧云aPaaS应用支撑平台技术支撑体系，
          aPaaS应用支撑平台是利用微服务化工程实践方法论，作为各业务系统建设的统一应用支撑平台，遵循行业标准的统一支撑平台计算架构。为业务应用与业务微服务化的建设
          提供开发与治理支撑，进行统一纳管，避免重复建设，达到集约、节约的目的。
        </div>
      </div>
    </div>
    <div class="proTitleBox w1380 flexRowAC">
      <div class="box">
        <div class="top">
          <div class="top-item">
            <div class="title">
              移动警务
            </div>
            <div class="content">
              基于容器云新一代移动警务
              <br />
              系统整体可用性提升30%，
              <br />
              运维减少60%。
            </div>
          </div>
          <div class="top-item">
            <div class="title">
              情指行融合指挥
            </div>
            <div class="content">
              基于容器云，形成新型的融
              <br />
              合指挥系统，警务排班系
              <br />
              统，110警情等一体化指挥
              <br />
              系统。
            </div>
          </div>
          <div class="top-item">
            <div class="title">
              智慧城市
            </div>
            <div class="content">
              基于容器云开发效率提升
              <br />
              40%，测试效率提升50%。
              <br />
              应用故障率减低90%。运维
              <br />
              人员减少80%。
            </div>
          </div>
        </div>
        <div class="middle">
          <img src="@/assets/img/jiantou.png" alt="" class="jiantou" />
          <img src="@/assets/img/tupian1.png" alt="" class="tupian1" />
        </div>
        <div class="bottom">
          <div class="bottom-first">
            通用PaaS（容器云服务、微服务框架、通用中间件服务等）
          </div>
          <div class="bottom-second">
            云操作系统
          </div>
        </div>
      </div>
    </div>
    <div id="section12" ref="section12" class="proTitleBox w1380 flexRowAC" style="justify-content: flex-start">
      <div>
        私有化方案
        <div class="proTitleBox_c_t">
          提供强大的计算、存储、网络等基础设施，确保平台稳定可靠运行
        </div>
      </div>
    </div>
    <div class="proTitleBox w1380 flexRowAC">
      <img class="privateCloud_c1" src="@/assets/software/privateCloud_c1.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import product5_1 from '@/assets/VLimg2.0/product5_1.png'
import product5_2 from '@/assets/VLimg2.0/product5_2.png'
import product5_3 from '@/assets/VLimg2.0/product5_3.png'
import product5_4 from '@/assets/VLimg2.0/product5_4.png'
import product5_5 from '@/assets/VLimg2.0/product5_5.png'
import product5_6 from '@/assets/VLimg2.0/product5_6.png'
import product5_7 from '@/assets/VLimg2.0/product5_7.png'

let p5Arr = ref([])
p5Arr.value = [
  { t: 'Windows', d: '版本号：V3.1.06', flag: false, img: product5_1 },
  { t: 'Android', d: '版本号：V3.1.06', flag: true, img: product5_2 },
  { t: 'iOS', d: '版本号：V3.1.06', flag: true, img: product5_3 },
  { t: 'Harmony OS', d: '版本号：V3.1.06', flag: true, img: product5_4 },
  { t: 'Linux', d: '版本号：V3.1.06', flag: false, img: product5_5 },
  { t: 'Mac OS', d: '版本号：V3.1.06', flag: false, img: product5_6 },
  { t: '银河麒麟', d: '版本号：V3.1.06', flag: false, img: product5_7 }
]

const router = useRouter()
const viewPath = (path) => {
  if (router.currentRoute.value.path === path) {
    window?.scrollTo(0, 0)
  }
  router.push({ path })
}

// Tab相关逻辑
const activeSection = ref('section0')

// 定义所有section的ref引用
const section0 = ref(null) // 托管应用
const section1 = ref(null) // 托管服务
const section2 = ref(null) // 服务开发
const section3 = ref(null) // 应用开发
const section4 = ref(null) // 应用市场
const section5 = ref(null) // 服务目录
const section6 = ref(null) // 基础服务
const section7 = ref(null) // 开发者社区
const section8 = ref(null) // 基础云能力
const section9 = ref(null) // Visual Studio
const section10 = ref(null)
const section11 = ref(null)
const section12 = ref(null)

// 点击tab滚动到对应区域
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const viewportHeight = window.innerHeight
    const offset = viewportHeight * 0.20
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    })
  }
}

// 滚动时自动激活对应的tab
const handleScroll = () => {
  const sections = [
    { id: 'section0', ref: section0 },
    { id: 'section1', ref: section1 },
    { id: 'section2', ref: section2 },
    { id: 'section3', ref: section3 },
    { id: 'section4', ref: section4 },
    { id: 'section5', ref: section5 },
    { id: 'section6', ref: section6 },
    { id: 'section7', ref: section7 },
    { id: 'section8', ref: section8 },
    { id: 'section9', ref: section9 }
  ]
  const scrollPosition = window.scrollY + 200

  for (const section of sections) {
    const element = section.ref.value
    if (element) {
      const offsetTop = element.offsetTop
      const offsetHeight = element.offsetHeight
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeSection.value = section.id
        break
      }
    }
  }
}

// 挂载和卸载时绑定/解绑滚动事件
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped lang="less">
@import "src/assets/style/vars.less";

.home_page {
  position: relative;
}

.home_page.vls {
  background-color: #fff;
}

.w1380 {
  width: 1380px;
  margin: 0 auto;
}

.flexRow{
  display: flex;
}

.oort_logo{
  img{
    width: 67px;
    height: 80px;
    margin-right: 16px;
  }

}

.item_first{
  width: 703px;
  height: 568px;
  margin-right: 20px;
  border: 1px solid #b2bac8;
  background: url('@/assets/img/cjxm.png');
  background-size: cover;
  border-radius: 24px;
  text-align: center;
}

.item_second{
  width: 338px;
  height: 568px;
  margin-right: 20px;
  border: 1px solid #b2bac8;
  background: url('@/assets/img/kfhj.png');
  background-size: cover;
  border-radius: 24px;
  text-align: center;
}

.item_third{
  width: 338px;
  height: 568px;
  border: 1px solid #b2bac8;
  background: url('@/assets/img/kswd.png');
  background-size: cover;
  border-radius: 24px;
  text-align: center;
}

.titleSize{
  font-size: 40px;
  font-weight: bold;
  line-height: 60px;
  margin-top: 40px;
}
.contentSize{
  font-size: 20px;
  font-weight: normal;
  color: #717781;
  line-height: 30px;
  margin-top: 24px;
}

.block{
  display: inline-block;
  width: 18px;
  height: 18px;
  margin-right: 10px;
  border-radius: 4px;
  background-color: #FF5900;
}

.items{
  display: flex;
}

.header-left{
  width: 535px;
  line-height: 90px;
  background-color: #3C80FF;
  font-size: 28px;
  font-weight: bold;
  color: #FFFFFF;
  text-align: center;
  border-radius: 24px 0 0 0;
}

.header-mid{
  width: 310px;
  height: 90px;
  text-align: center;
  background-color: #CCE0FF;
  img{
    width: 90px;
    height: 90px;
  }
}

.header-right{
  width: 535px;
  line-height: 90px;
  background-color: #08C78B;
  font-size: 28px;
  font-weight: bold;
  color: #FFFFFF;
  text-align: center;
  border-radius: 0 24px 0 0;
}

.left{
  width: 535px;
  line-height: 90px;
  background-color: #f9fafb;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
}

.mid{
  width: 310px;
  line-height: 90px;
  background-color: #edf3f9;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
}

.right{
  width: 535px;
  line-height: 90px;
  background-color: #f9fafb;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
}

.blue{
  color: #3C80FF;
}

.orange{
  color: #FF5900;
}

.picture{
  width: 26px;
  height: 26px;
}

.box{
  width: 100%;
  height: 925px;
  background-color: #f9fafb;
  border-radius: 24px;
}

.top{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 1140px;
  height: 230px;
  border-radius: 24px;
  margin: 0 auto;
  margin-top: 80px;
  background-color: #E1EAFF;

  .top-item{
    text-align: center;
    width: 260px;
    height: 190px;
    border-radius: 24px;
    background-color: #CCE0FF;

    .title{
      margin-top: 20px;
      font-size: 24px;
      font-weight: bold;
      color: #3C80FF;
    }
    .content{
      margin-top: 20px;
      font-size: 18px;
      font-weight: normal;
      color: #3C80FF;
    }
  }
}

.middle{
  width: 644px;
  height: 389px;
  position: relative;
  .jiantou{
    left: 500px;
    width: 361px;
    height: 389px;
    position: absolute;
  }
  .tupian1{
    top: 10px;
    left: 360px;
    width: 644px;
    height: 300px;
    position: absolute;
  }
}

.bottom-first{
  margin: 0 auto;
  width: 1200px;
  line-height: 74px;
  text-align: center;
  background-color: #E1EAFF;
  font-size: 24px;
  font-weight: bold;
  color: #3C80FF;
  border-radius: 24px;
}

.bottom-second{
  margin: 0 auto;
  margin-top: 20px;
  width: 1200px;
  line-height: 74px;
  text-align: center;
  background-color: #CCE0FF;
  font-size: 24px;
  font-weight: bold;
  color: #3C80FF;
  border-radius: 24px;
}

// 查看更多
//.seeMore {
//  display: inline-block;
//  padding: 24px 50px;
//  color: #fff;
//  border: 1px solid #2278FF;
//  border-radius: 8px;
//  background: #2278FF;
//  box-shadow: 0px 4px 10px 0px #FF5E1033;
//  font-weight: bold;
//  font-size: 18px;
//}
.platTopOut{
  background-image: url('@/assets/SHimg/SH_bg1.png');
  background-size: 100% 100%;
  color: #fff;
  justify-content: space-between;
  margin-bottom: 80px;

  .platTopOutImg{
    flex-shrink: 0;
    width: 680px;
    height: auto;
    margin-left: 100px;
  }
}

.platTop {
  color: #fff;
  text-align: center;
  padding: 110px 0;

  .plat {
    display: inline-block;
    padding: 12px 24px;
    color: #FF5E10;
    font-size: 18px;
    border-radius: 18px;
    border: 1px solid #E9E9E9;
  }

  .VLStream {
    color: #fff;
    font-weight: bold;
    font-size: 58px;
    padding: 8px 0;
    position: relative;

    .VLStream_img {
      width: 222px;
      height: 222px;
      position: absolute;
      right: 336px;
      top: -50px;
    }
  }

  .plat_a {
    color: #fff;
    font-weight: bold;
    font-size: 58px;
  }

  .plat_cent {
    padding: 20px 0 50px;
    color: #fff;
    font-size: 18px;
  }

  .useBox {
    padding-bottom: 60px;
    justify-content: center;
    gap: 20px;

    .seeMore {
      padding: 24px 50px;
      color: #fff;
      border: 1px solid #2278FF;
      border-radius: 8px;
      background: #2278FF;
      //box-shadow: 0px 4px 10px 0px #FF5E1033;
      font-weight: bold;
      font-size: 18px;
    }

    .u1 {
      color: #333;
      background-color: #F4F4F4;
      border: 1px solid #F4F4F4;
      color: #2278FF;
    }

    .seeMore.u2 {
      display: flex;
      gap: 10px;
      border: 1px solid #333;
      background-color: #333;

      .u2_img {
        width: 28px;
        height: 26px;
      }
    }
  }
}

.WebRTC {
  gap: 24px;
  padding-bottom: 80px;
  animation: scroll 35s linear infinite;

  .webItem {
    width: auto;
    height: 120px;
    border-radius: 16px;
    background: #E8F7FC;
    color: #5C6C00;
    gap: 14px;
    flex-wrap: nowrap;
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.webBottomImg {
  padding: 70px 0 110px;
  height: initial;

  .wBImg {
    width: 100%;
    height: initial;
    border-radius: 24px;
  }
}

.CloudBox {
  padding-bottom: 100px;
  justify-content: space-between;
  align-items: flex-start;

  .cl_t {
    letter-spacing: 0;
    padding-top: 30px;
    padding-bottom: 40px;
    color: #3D3D3D;
    font-weight: bold;
    font-size: 54px;
  }

  .cl_d {
    padding-bottom: 24px;
    color: #717781;
    font-size: 20px;
  }

  .CloudL {
    width: 500px;
  }

  .CloudR {
    width: 700px;
    height: auto;

    .CloudRImg {
      width: 100%;
      height: 100%;
    }
  }

  .CloudR2 {
    width: 700px;
    height: 700px;
  }
}

.ipcBox.CloudBox {
  padding-bottom: 120px;
  justify-content: space-between;
  align-items: flex-start;

  .CloudL {
    width: 450px;
    text-align: right;
    // padding-top: 60px;
  }
}

.ipcView.CloudBox {
  .CloudR {
    height: 460px;
  }
}

.productBox {
  text-align: center;
  padding-bottom: 140px;

  .proT {
    padding-bottom: 60px;
    color: #3D3D3D;
    font-weight: bold;
    font-size: 58px;
  }

  .prod {
    padding-bottom: 60px;
    color: #717781;
    font-size: 20px;
  }

  .productImg {
    width: 100%;
    height: 600px;
    padding-bottom: 60px;

    .proImg {
      width: 100%;
      height: 100%;
    }
  }

  .product1 {
    text-align: left;
    color: #fff;
    width: auto;
    height: 510px;
    background-color: #fff;
    border-radius: 24px;
    background: linear-gradient(135deg, #0C1F40 0%, #252734 98%);
    padding: 40px;

    .pro1_1 {
      width: 46px;
      height: 48px;
      margin-bottom: 46px;
    }

    .pro1_1_s {
      padding-bottom: 50px;
      gap: 12px;
      color: #FFFFFF;
      font-weight: bold;
      font-size: 24px;

      .pro1_1_s_b {
        color: #FFFFFF;
        font-size: 14px;
        border-radius: 4px;
        border: 0.5px solid #FFFFFF;
        padding: 4px 10px;
      }
    }

    .pro1_2 {
      gap: 12px;
      padding-bottom: 30px;

      .pro1_2_i {
        width: 16px;
        height: 16px;
      }
    }

    .pro3 {
      padding-top: 35px;
      gap: 30px;

      .pro3_btn {
        flex: 1;
        padding: 20px 0;
        justify-content: center;
        background-color: #fff;
        border-radius: 4px;
        color: #333;
        font-weight: bold;
        font-size: 18px;
      }

      .pro3_btn.p3b {
        background-color: transparent;
        border: 1px solid #fff;
        color: #fff;
      }
    }
  }

  .product2Out {
    padding-bottom: 0;
    height: 220px;
    justify-content: center;
    background-image: url('@/assets/software/downloadBG.png');
    background-size: 100% 100%;

    .product2Out_it {
      opacity: 1;
      color: #333333;
      font-size: 16px;

      .pro2o_l {
        padding-left: 12px;
        width: 600px;
        height: 54px;
        background-color: #F0F0F0;

        .pro2o_l_l {
          width: 34px;
          height: 34px;
          margin-right: 12px;
        }
      }

      .pro2o_2 {
        width: 100px;
        line-height: 54px;
        color: #fff;
        height: 54px;
        background-color: #2278FF;
      }
    }
  }

  .product3Out.productImg {
    height: initial;
    margin-bottom: 60px;
    padding: 40px;
    border-radius: 24px;
    background: linear-gradient(180deg, #FEF9F6 0%, #FFFFFF 100%);
    border: 1px solid #001F5019;

    .p3Box {
      justify-content: space-between;

      .p3 {
        width: 358px;
        height: 170px;
      }
    }

    .p3_title {
      padding-top: 40px;
      text-align: left;
      color: #3D3D3D;
      font-weight: bold;
      font-size: 24px;
    }

    .ps_desc {
      padding-top: 16px;
      padding-left: 60px;
      width: 900px;
      color: #3D3D3D;
      font-size: 20px;
      text-align: left;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        left: 40px;
        top: 26px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #333;
      }
    }
  }

  .p4Out {
    width: auto;
    height: 870px;
  }

  .p5Out {
    flex-wrap: wrap;
    gap: 40px;

    .p5Item {
      padding: 50px 0;
      flex-direction: column;
      border-radius: 40px;
      background: #FFFFFF;
      box-shadow: 0px 0px 48px 0px #07005714;
      width: 300px;
      height: 300px;
      flex-shrink: 0;
      gap: 10px;
      position: relative;
    }

    .p5Iimg {
      width: 110px;
      height: 110px;
    }

    .p5t {
      color: #3D3D3D;
      font-weight: bold;
      font-size: 24px;
    }

    .p5d {
      color: #717781;
      font-size: 14px;
    }

    .proCode {
      width: 70px;
      height: 70px;
      position: absolute;
      right: 0;
      top: 0;
      border-radius: 0px 0px 0px 0px;
    }
  }
}

.proTitleBox {
  justify-content: center;
  color: #3D3D3D;
  font-weight: bold;
  font-size: 58px;
  padding-bottom: 100px;
}

.privateCloud_c1 {
  width: 80%;
  height: auto;
}

.privateCloud_c2 {
  width: 738px;
  height: auto;
}

.privateCloud_c2 {
  width: 738px;
  height: auto;
}

.privateCloud_c5 {
  width: 660px;
  height: auto;
}

.privateCloud_c6 {
  width: 643px;
  height: auto;
}

.proTitleBox_c_t {
  color: #717781;
  font-weight: normal;
  font-size: 20px;
  text-align: left;
  padding: 30px 0;
}

.proTitleBox_c_t1 {
  cursor: pointer;
  color: #2278FF;
  font-weight: normal;
  font-size: 20px;
}

// Tab导航样式
// .tabSwitch{
//   position: sticky;
//   top: 82px;
//   z-index: 99;
//   background-color: #fff;
//   padding: 10px 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 40px;
//   border-bottom: 0.5px solid #DFDFDF;
//   margin-bottom: 80px;
//   flex-wrap: wrap; // 适配小屏幕自动换行

//   .tabItem{
//     cursor: pointer;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     padding: 10px 0;

//     .tabTitle{
//       color: #666666;
//       font-size: 20px;
//       letter-spacing: 1px;
//       margin-bottom: 8px;
//       transition: color 0.3s ease;
//     }

//     .line{
//       width: 50px;
//       height: 3px;
//       background: transparent;
//       transition: background-color 0.3s ease;
//       border-radius: 2px;
//     }

//     .activeTitle{
//       color: #333333;
//       font-weight: 600;
//     }

//     .activeLine{
//       background: #3C80FF;
//     }
//   }
// }

.tabSwitch{
  position: sticky;
  top: 82px;
  z-index: 9;
  background-color: #fff;
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  border-bottom: 0.5px solid #DFDFDF;
  margin-bottom: 80px;
  .tabItem{
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    .tabTitle{
      color: #666666;
      font-size: 20px;
      letter-spacing: 2.67px;
      margin-bottom: 10px;
      transition: color 0.3s ease;
    }
    .line{
      width: 64px;
      height: 4px;
      background: transparent;
      transition: background-color 0.3s ease;
    }
    .activeTitle{
      color: #333333;
      font-weight: 500;
    }
    .activeLine{
      background: #4480FF;
    }
  }
}

// 响应式调整
@media (max-width: 1400px) {
  .tabSwitch {
    gap: 20px;

    .tabItem .tabTitle {
      font-size: 18px;
    }
  }
}
</style>
