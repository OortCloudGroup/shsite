<template>
  <div class="home_page vls">
    <div class="box1">
      <div class="title">
        OortCloud 安全性政策
      </div>
      <div class="title2 m20">
        您的数据安全对我们非常重要！以下是我们为确保您的数据在 OortCloud 被安全保管的日常工作摘要，<br />
        以及在我们的托管版本 OortCloud 云端版应用了的最佳安全实践。
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
              备份/恢复
            </div>
            <div class="content">
              <div class="sentence">
                为每个 OortCloud 数据库保存 14 套完整备份记录，最少 3 个月：每天 1 次的备份为期 7 天; 每周 1 次的备份为期 4 周; 每月 1 次的备份为期3 个月。
              </div>
              <div class="sentence">
                三重备份机制：至少跨2大洲3大数据中心。
              </div>
              <div class="sentence">
                有关数据中心的实际位置，请参阅我们的 隐私政策.
              </div>
              <div class="sentence">
                你还可以在任何时候使用控制面板下载实时数据的手动备份。
              </div>
              <div class="sentence">
                您可以联系我们的服务台以在您的实时数据库来恢复这些备份（或在侧面）。
              </div>
              <div class="sentence">
                <span style="font-weight: 700;">硬件故障转移</span>：对于裸机托管的服务，如果硬件出现故障，我们会实施本地热备复制，并持续监控，故障时手动转移程序。
              </div>
              <div class="sentence">
                你还可以在任何时候使用控制面板下载实时数据的手动备份。
              </div>
            </div>
          </div>
        </div>
        <div id="section2">
          <div class="title_item">
            <div class="title3 m20">
              数据库安全
            </div>
            <div class="content">
              <div class="sentence">
                客户数据存储在专用数据库中。客户之间不会共享数据。
              </div>
              <div class="sentence">
                数据访问控制规则会在同一群组上运行的客户数据库之间完全隔离，用户无法从一个数据库访问另一个数据库。
              </div>
            </div>
          </div>
        </div>
        <div id="section3">
          <div class="title_item">
            <div class="title3 m20">
              密码安全
            </div>
            <div class="content">
              <div class="sentence">
                客户密码采用行业标准的 PBKDF2+SHA512 加密算法（加盐 + 延伸数千轮）进行保护。
              </div>
              <div class="sentence">
                OortCloud 工作人员无法访问您的密码，也无法为您找回密码，如果您丢失了密码，唯一的办法就是重新设置。
              </div>
              <div class="sentence">
                登录凭证始终通过 HTTPS 安全传输。
              </div>
              <div class="sentence">
                客户数据库管理员甚至可以选择为登录速率设置限制，及设定尝试重复登录的冷却时间。
              </div>
              <div class="sentence">
                密码策略：数据库管理员进行内置设置，可以强制要求最小用户密码长度。 其他密码策略，如要求字符类别 默认不支持，因为事实证实效果适得其反。
              </div>
              <div class="sentence">
                OortCloud 工作人员无法访问您的密码，也无法为您找回密码，如果您丢失了密码，唯一的办法就是重新设置。
              </div>
            </div>
          </div>
        </div>
        <div id="section4">
          <div class="title_item">
            <div class="title3 m20">
              访问安全
            </div>
            <div class="content">
              <div class="sentence">
                OortCloud 技术支持人员可能会登录您的账户，访问与您所提出的技术支持问题的相关设置。为此，他们会使用自己的特殊员工凭证登入，而不会使用您的密码（他们无从得知）。
              </div>
              <div class="sentence">
                这种特殊的员工访问权限提高了效率和安全性：员工可以立即重现您所看到的问题，而您永远不需要共享您的密码，我们也可以单独审计和监控员工的行为！
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
              系统安全
            </div>
            <div class="content">
              <div class="sentence">
                所有 OortCloud 云端服务器都运行经过强化的 Linux 发行版，并具有最新安全补丁。
              </div>
              <div class="sentence">
                为了限制可能包含漏洞的服务数量（例如，系统没有采用 PHP/MySQL 堆栈），安装工作按需进行，并尽量采取最低限度安装。
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
              网络防御
            </div>
            <div class="content">
              <div class="sentence">
                OortCloud 云端服务所使用的数据中心供应商，都拥有非常大的网络容量，其基础架构设计能够抵御最强的分布式拒绝服务（DDoS）攻击。他们的自动和手动缓解系统，在攻击流量有机会破坏服务可用性之前，已在多个大洲网络边缘检测并疏导攻击流量。
              </div>
              <div class="sentence">
                OortCloud 云端服务器上的防火墙和入侵防御系统，有助于检测和阻止暴力破解密码攻击等威胁。
              </div>
              <div class="sentence">
                客户数据库管理员甚至可以选择 为登录速率设置限制 ，及设定尝试重复登录的冷却时间。
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

  { text: '备份/恢复', targetId: 'section1' },
  { text: '数据库安全', targetId: 'section2' },
  { text: '密码安全', targetId: 'section3' },
  { text: '访问安全', targetId: 'section4' },
  { text: '系统安全', targetId: 'section5' },
  { text: '网络防御', targetId: 'section6' }
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
  margin-left: 20px;
  margin-top: 20px;
  .sentence{
    position: relative;
    font-size: 20px;
    padding-left: 15px;
    margin-bottom: 5px;
    &::before{
      content: "";
      position: absolute;
      width: 5px;
      height: 5px;
      background-color: #3c3c3c;
      border-radius: 50%;
      left: 0;
      right: auto;
      margin-right: 5px;
      top: 13px;
      transform: translateY(-50%);
    }
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
  width: 230px;
  position: sticky;
  top: 200px;
  .nav_item{
    cursor: pointer;
    width: 230px;
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
