<template>
  <div class="home_page vls">
    <div class="box1">
      <div class="title">
        OortCloud 品牌资产
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
          <div class="logo">
            <div class="title2">
              Logos
            </div>
            <div class="logoList">
              <div class="logoItem">
                <img src="@/assets/img/logo2.png" alt="" />
                <div class="downloadList">
                  <div class="button">
                    <el-icon style="color: #007cfd;" :size="19">
                      <Download />
                    </el-icon>
                    <span class="tupian" style="font-size: 18px; color: #007cfd;">SVG</span>
                  </div>
                  <div class="button">
                    <el-icon style="color: #007cfd;" :size="19">
                      <Download />
                    </el-icon>
                    <span class="tupian" style="font-size: 18px; color: #007cfd;">PNG</span>
                  </div>
                </div>
              </div>
              <div class="logoItem">
                <img src="@/assets/img/logo.png" alt="" />
                <div class="downloadList">
                  <div class="button">
                    <el-icon style="color: #007cfd;" :size="19">
                      <Download />
                    </el-icon>
                    <span class="tupian" style="font-size: 18px; color: #007cfd;">SVG</span>
                  </div>
                  <div class="button">
                    <el-icon style="color: #007cfd;" :size="19">
                      <Download />
                    </el-icon>
                    <span class="tupian" style="font-size: 18px; color: #007cfd;">PNG</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="section2">
          <div class="color">
            <div class="title2">
              颜色
            </div>
            <div class="title3">
              Oort Cloud
            </div>
            <div class="color-table-container">
              <table class="color-table">
                <thead>
                  <tr>
                    <th>名字</th>
                    <th>HEX</th>
                    <th>CMYK</th>
                    <th>RGB</th>
                    <th>Pantone</th>
                    <th>RAL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="color in colorList" :key="color.name" :style="{ backgroundColor: color.hex }">
                    <td>{{ color.name }}</td>
                    <td>{{ color.hex }}</td>
                    <td>{{ color.cmyk }}</td>
                    <td>{{ color.rgb }}</td>
                    <td>{{ color.pantone }}</td>
                    <td>{{ color.ral }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="title3">
              合作伙伴
            </div>
            <div class="color-table-container">
              <table class="color-table">
                <thead>
                  <tr>
                    <th>名字</th>
                    <th>HEX</th>
                    <th>CMYK</th>
                    <th>RGB</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="color in colorList2" :key="color.name" :style="{ backgroundColor: color.hex }">
                    <td>{{ color.name }}</td>
                    <td>{{ color.hex }}</td>
                    <td>{{ color.cmyk }}</td>
                    <td>{{ color.rgb }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div id="section3">
          <div class="title2">
            清单
          </div>
          <div class="list">
            <div class="checklist">
              <div class="check-item">
                <span class="check-mark">✓</span>
                <span class="check-text">所有颜色均为 CMYK 或 Pantone</span>
              </div>

              <div class="check-item">
                <span class="check-mark">✓</span>
                <span class="check-text">图像分辨率不低于300dpi</span>
              </div>

              <div class="check-item">
                <span class="check-mark">✓</span>
                <span class="check-text">字体轮廓化</span>
              </div>

              <div class="check-item">
                <span class="check-mark">✓</span>
                <span class="check-text">检查您的打印机技术规格</span>
              </div>
            </div>
            <div class="checklist">
              <div class="check-item">
                <span class="check-mark">✓</span>
                <span class="check-text">所有颜色均为 CMYK 或 Pantone</span>
              </div>

              <div class="check-item">
                <span class="check-mark">✓</span>
                <span class="check-text">图像分辨率不低于300dpi</span>
              </div>

              <div class="check-item">
                <span class="check-mark">✓</span>
                <span class="check-text">字体轮廓化</span>
              </div>

              <div class="check-item">
                <span class="check-mark">✓</span>
                <span class="check-text">检查您的打印机技术规格</span>
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
import { Download } from '@element-plus/icons-vue'
const activeIndex = ref(-1)
const navArr = ref([])
navArr.value = [

  { text: '标志', targetId: 'section1' },
  { text: '颜色', targetId: 'section2' },
  { text: '清单', targetId: 'section3' }
]

const colorList = ref([
  {
    name: 'Primary',
    hex: '#714B67',
    cmyk: '57, 84, 39, 24',
    rgb: '113, 75, 103',
    pantone: '5125C',
    ral: '4001'
  },
  {
    name: 'Gray',
    hex: '#8F8F8F',
    cmyk: '49, 39, 39, 3',
    rgb: '143, 143, 143',
    pantone: '877C',
    ral: '7042'
  },
  {
    name: 'Secondary',
    hex: '#017E84',
    cmyk: '100, 35, 50, 13',
    rgb: '1, 126, 132',
    pantone: '322C',
    ral: '5021'
  }
])
const colorList2 = ref([
  {
    name: 'Learning Partner',
    hex: '#E46E78',
    cmyk: '6, 71, 41, 0',
    rgb: '228, 109, 120'
  },
  {
    name: 'Ready Partner',
    hex: '#21B799',
    cmyk: '74, 1, 52, 0',
    rgb: '34, 182, 153'
  },
  {
    name: '银级合作伙伴',
    hex: '#5B899E',
    cmyk: '68, 37, 29, 2',
    rgb: '92, 136, 158'
  },
  {
    name: '金牌合作伙伴',
    hex: '#E4A900',
    cmyk: '11, 43, 100, 0',
    rgb: '227, 170, 36'
  }
])

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
  font-size: 44px;
  font-weight: 400;
  margin-bottom: 60px;
}
.title3{
  font-size: 36px;
  font-weight: 400;
  margin-bottom: 10px;
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
  width: 100%;
  padding-left: 60px;
}
.logo{
  width: 100%;
}
.logoList{
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
  .logoItem{
    img{
      width: 400px;
      height: 186px;
      box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.2);
    }
    .downloadList{
      margin-top: 10px;
      display: flex;
      .button{
        margin-right: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        border: 1.1px solid #007cfd;
        padding: 10px 20px;
        cursor: pointer;
        .tupian{
          margin-left: 5px;
        }
      }
    }
  }
}

.color-table-container {
  // font-family: Arial, sans-serif;
  margin-bottom: 60px;
}

.color-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #e0e0e0;
}

.color-table th,
.color-table td {
  padding: 12px 15px;
  text-align: left;
  color: #fff;
}
.color-table th{
  color: #000;
}

.color-table th {
  font-weight: bold;
}

.color-table tbody tr {
  color: #fff; /* 文字白色适配深色背景 */
}
.list{
  display: flex;
  justify-content: space-between;
}
.checklist {
  width: 500px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 8px 0;
  margin-bottom: 100px;
}
.check-item {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
}
.check-mark {
  color: #0070f3; /* 模拟勾选框颜色 */
  font-weight: bold;
}
.color{
  margin-bottom: 100px;
}
</style>
