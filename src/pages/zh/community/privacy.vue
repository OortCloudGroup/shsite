<template>
  <div class="home_page vls">
    <div class="box1">
      <div class="title">
        OortCloud 隐私政策
      </div>
      <div class="title2">
        最后更新：2025年11月15日
      </div>
    </div>
    <div class="box2">
      <div class="left">
        <div class="aside_nav">
          <div
            v-for="(value,i) in navArr"
            :key="i"
            class="nav_item"
            :class="{ active: activeIndex === i }"
            @click="handleScroll(i, value.targetId)"
          >
            <span class="nav_item_text">{{ value.text }}</span>
          </div>
        </div>
      </div>
      <div class="right">
        <div id="section1">
          <div class="title_item">
            <div class="title3">
              我们如何保护您的隐私
            </div>
            <div class="content">
              <div class="sentence">
                OortCloud及其附属公司提供多种服务，包括一个让您托管数据库的平台，以帮助您开展业务。
                运行这些服务时，我们会收集有关您和您企业的数据。这些数据不仅是服务运行所需，而且对我们的
                服务和所有用户的安全也至关重要。本政策解释系统会收集哪些信息、收集的原因以及如何使用这些信息。
              </div>
            </div>
          </div>
        </div>
        <div id="section2">
          <div class="title_item">
            <div class="title3 m20">
              我们收集什么信息
            </div>
            <div class="content">
              <div class="sentence">
                <span style="font-weight: 700;">账户和联系信息</span>： 当您在网页上注册使用或下载我们的产品，或订阅我们的服务，
                或填写我们的联系表格时，您自愿向我们提供某些信息。这些信息通常包括您的姓名、公司名称、电子邮件地址，有时包括您的电
                话号码、邮寄地址（用于邮寄发票或送货）、您的业务需求 和对 OortCloud 的期待、以及个人密码。
              </div>
              <div class="sentence">
                <span style="font-weight: 700;">浏览器数据</span>： 当您访问我们的网站并使用在线服务时，
                我们会检测并存储您的浏览器语言和地理位置以便根据您的国家和首选语言定制您的体验。 出于统计、
                安全和法律目的，我们的服务器还会被动记录您的浏览器发送的信息摘要： 您的 IP 地址、访问时间和
                日期、 访问的页面和资源您的浏览器版本和平台 ，以及将您引至我们网站的网页。
              </div>
              <div class="sentence">
                <span style="font-weight: 700;">客户数据库</span> ：当您订购 OortCloud 云服务并创建您自己的 OortCloud 数据库时
                （例如开始免费试用时），您提交或上传至数据库的任何信息或内容都属于您，并由您全权控制。同样，当您将本地离线
                数据库上传到 OortCloud 升级网站时，您仍拥有这些数据。这些数据通常包括个人信息，例如：您的员工列表、联系人和客户、
                消息、图片、视频等。我们仅代表您收集这些信息，而您始终保留对这些数据的所有权和完全控制权。
              </div>
            </div>
          </div>
        </div>
        <div id="section3">
          <div class="title_item">
            <div class="title3 m20">
              我们如何使用这些信息
            </div>
            <div class="content">
              <div class="sentence">
                <span style="font-weight: 700;">账户和联系信息</span>： 为了向您提供服务、回复您的请求以及进行计费和账户管理，
                我们需要使用您的联系信息。我们可能将这些信息用于市场营销和通信目的（您可随时选择取消）。这些数据将被汇总或以匿名
                使用，以改善我们的服务。
              </div>
              <div class="sentence">
                如果您已注册参加我们网站上发布的活动，我们可能会将您的姓名、电子邮件地址、电话号码和公司名称传输给当地组织者和活
                动赞助商，以用于市场营销，并为活动筹备和预订提供便利。
              </div>
              <div class="sentence">
                <span style="font-weight: 700;">职位申请资料</span>：我们只会在招聘过程中处理这些资料，以便评估和跟进您的申请，
                如果我们决定向您提供工作机会，也会在准备合同的过程中处理这些资料。您可以随时联系我们，要求删除您的信息。
              </div>
              <div class="sentence">
                <span style="font-weight: 700;">客户数据库</span>：我们只会在为提供您已订购并享用的服务时，代表您去收集和处理这
                些资料，并按照您在注册或设置服务及OortCloud数据库时的明确指示，去收集和处理这些资料。
              </div>
              <div class="sentence">
                我们的技术支持人员和工程师，可能会适度合理地存取数据，原因包括：解决我们服务出现的任何问题；解决您出于技术支持原因
                所提出的明确要求；根据法律要求行事；或确保我们的服务安全，以防有人违反我们的 可接受使用政策 ，以确保我们的服务安全。
              </div>
            </div>
          </div>
        </div>
        <div id="section4">
          <div class="title_item">
            <div class="title3 m20">
              访问、更新或删除您的个人信息
            </div>
            <div class="content">
              <div class="sentence">
                <span style="font-weight: 700;">账户和联系信息</span>： 您有权访问和更新您已提供给我们的个人数据。您可以随时登录
                您的个人账户进行操作。如果您出于合法目的希望永久删除您的账户或个人信息，请联系我们的 服务台 提出申请。我们
                将采取合理措施永久删除您的个人信息，除非出于法律原因（通常与管理、账单和报税有关）我们必须保留您的个人信息。
              </div>
              <div class="sentence">
                您可以随时通过控制面板导出数据库的完整备份，以便传输或管理您自己的备份/存档。您有责任在处理这些数据时遵守所有隐私法规。
                您也可以随时通过控制面板，要求删除整个数据库。
              </div>
              <div class="sentence">
                我们的技术支持工作人员会尽可能尊重您的隐私，只会访问诊断和解决问题所需的文件和设置。
              </div>
            </div>
          </div>
        </div>
        <div id="section5">
          <div class="title_item">
            <div class="title3 m20">
              使用 Cookie
            </div>
            <div class="content">
              <div class="sentence">
                Cookie 是您使用我们的服务时，由我们的服务器发送到您的计算机或设备上的小段文本。它们存储在您的浏览器中，随后再传送回我
                们的服务器，以便我们提供与您相关的内容。如果不使用cookie，用户使用网络的体验感会大打折扣。我们使用cookie来支持您在我
                们网站上的活动及操作，例如您的操作时段（让您下次无需重复登录）、您的购物车等。
              </div>
              <div class="sentence">
                Cookie 还可以根据您以前或当前在我们网站上的活动和操作（例如，您访问过的页面），帮助我们了解您的喜好、您使用的语言和所
                在国家/地区等，从而让我们为您提供更优质的服务。我们还使用cookie来帮助我们汇编有关网站流量和网站互动的综合数据，以便我
                们将来提供更好的网站体验和工具。
              </div>
              <div class="sentence">
                只有少数受信任的 OortCloud 工程师才有远程管理服务器的权限，而且只能使用加密的个人 SSH 密钥对，从带有全盘加密功能的计算机进行访问。
              </div>
            </div>
          </div>
        </div>
        <div id="section6">
          <div class="title_item">
            <div class="title3 m20">
              联系我们
            </div>
            <div class="content">
              <div class="sentence">
                如果您对本隐私政策有任何疑问，或对您的个人数据有任何查询，请联系 OortCloud 服务台 ，或电邮至 zhangxuelian@oortcloudsmart.com.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const activeIndex = ref(-1)
const navArr = ref([])
navArr.value = [

  { text: '我们如何保护您的隐私', targetId: 'section1' },
  { text: '我们收集什么信息', targetId: 'section2' },
  { text: '我们如何使用这些信息', targetId: 'section3' },
  { text: '访问、更新或删除您的个人信息', targetId: 'section4' },
  { text: '使用 Cookie', targetId: 'section5' },
  { text: '联系我们', targetId: 'section6' }
]

// 监听滚动事件，更新激活状态
const handleScrollActive = () => {
  // 获取当前滚动位置（考虑导航栏高度偏移）
  const scrollTop = window.scrollY + 110 // 与sticky的top值保持一致
  const navHeight = 82 // 导航栏高度，与滚动计算保持一致

  // 遍历导航项，找到当前可见区域
  navArr.value.forEach((item, index) => {
    const targetEl = document.getElementById(item.targetId)
    if (!targetEl) return

    // 获取目标元素的位置信息
    const { offsetTop, offsetHeight } = targetEl
    const elementTop = offsetTop - navHeight
    const elementBottom = elementTop + offsetHeight

    // 判断当前滚动位置是否在目标元素范围内
    if (scrollTop >= elementTop && scrollTop < elementBottom) {
      activeIndex.value = index
    }
  })
}

onMounted(() => {
  // 初始加载时触发一次，设置初始状态
  // handleScrollActive()
  // 监听滚动事件
  window.addEventListener('scroll', handleScrollActive)
})

onUnmounted(() => {
  // 组件卸载时移除事件监听
  window.removeEventListener('scroll', handleScrollActive)
})

const handleScroll = (index, targetId) => {
  // 更新激活状态
  activeIndex.value = index

  // 获取目标元素
  const targetEl = document.getElementById(targetId)
  if (!targetEl) return

  // 计算偏移量
  const navHeight = 150
  const offsetTop = targetEl.offsetTop - navHeight

  window.scrollTo({
    top: offsetTop,
    behavior: 'auto'
  })
}

definePageMeta({
  layout: 'site-new'
})

</script>

<style scoped lang="scss">
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
.box1{
  background-color: #2278ff;
  padding: 48px 0 48px 262px;
}

.title{
  font-size: 48px;
  font-weight: 700;
  color: #fff;
}
.title2{
  font-size: 20px;
  font-weight: 400;
  color: #fff;
}
.title3{
  font-size: 30px;
  font-weight: 700;
}
.m20{
  margin-top: 20px;
}
.content{
  font-size: 16px;
  font-weight: 400;
//   margin-left: 20px;
  margin-top: 20px;
  .sentence{
    position: relative;
    font-size: 20px;
    // padding-left: 15px;
    margin-bottom: 10px;
    // &::before{
    //   content: "";
    //   position: absolute;
    //   width: 5px;
    //   height: 5px;
    //   background-color: #3c3c3c;
    //   border-radius: 50%;
    //   left: 0;
    //   right: auto;
    //   margin-right: 5px;
    //   top: 13px;
    //   transform: translateY(-50%);
    // }
  }
}
.box2{
  display: flex;
  // height: 1000px;
  width: 1380px;
  margin: 60px auto;
}
/* 点击激活状态样式（与hover样式一致） */
.left .nav_item.active .nav_item_text {
  color: #2278ff;
}
.left{
  margin-top: 80px;
}
.nav_item.active::before {
  content: "";
  position: absolute;
  width: 3px;
  height: 20px;
  background-color: #2278ff;
}
.aside_nav{
  width: 300px;
  position: sticky;
  top: 200px;
  .nav_item{
    cursor: pointer;
    width: 300px;
    height: 30px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    .nav_item_img{
      margin-left: 13px;
      width: 32px;
      height: 32px;
    }
    .nav_item_text{
      margin-left: 10px;
      font-size: 16px;
      font-weight: normal;
      color: rgba(55, 65, 81, 0.7);
    }
    &:hover{
      background-color: rgba(55, 65, 81, 0.1);
    }
  }
}
.right{
  padding-left: 60px;
}
</style>
