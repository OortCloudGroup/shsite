<template>
  <div class="home_page vls">
    <!-- <div class="title box1">
      所有课程
    </div> -->
    <div class="w1380 searchBox">
      <div class="title2">
        客户
      </div>
      <div class="title2 classifyList">
        <div class="items">
          全部
        </div>
        <div class="items">
          顾客评论
        </div>
        <div class="items">
          员工感言
        </div>
        <div class="items">
          合作伙伴案例
        </div>
        <div class="items">
          商业黑客
        </div>
      </div>

      <div class="search">
        <el-input
          v-model="input"
          class="responsive-input"
          placeholder="搜索"
          :prefix-icon="Search"
          clearable
        />
      </div>
    </div>
    <div class="w1380 courseBox">
      <div v-for="(item,index) in list" :key="index" class="item">
        <img :src="item.img" alt="" />
        <div class="classify">
          {{ item.classify }}
        </div>
        <div class="title3">
          {{ item.title }}
        </div>
        <div class="title3 location">
          {{ item.location }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import Img1 from '@/assets/img/activity_img1.png'
import Img2 from '@/assets/img/activity_img2.png'
import Img3 from '@/assets/img/activity_img3.png'
import Img4 from '@/assets/img/activity_img4.png'
import Img5 from '@/assets/img/activity_img5.png'
import Img6 from '@/assets/img/activity_img6.png'
import Img7 from '@/assets/img/activity_img7.png'

const input = ref('')
const list = ref([])
list.value = [
  {
    title: 'Bio Natural Solutions：由 Oort Cloud 提供支持的生物技术创新',
    img: Img1,
    location: '2025年11月15日'
  },
  {
    title: 'BioService：从运营混乱到管理效率',
    img: Img2,
    location: '2025年11月14日'
  },
  {
    title: 'Inspiral 如何通过 Oort Cloud 为轮椅使用者创造创新产品',
    img: Img3,
    location: '2024年11月10日'
  },
  {
    title: 'Elneo 如何通过 Oort Cloud 发展他们的工业业务',
    img: Img4,
    location: '2024年10月7日'
  },
  {
    title: 'Boogaerts 提供的 100 年热风加热',
    img: Img3,
    location: '2024年4月7日'
  },
  {
    title: 'Alpinter 如何通过 OortCloud 提供人道主义帮助',
    img: Img3,
    location: '2024年1月5日'
  },
  {
    title: '索迪斯如何将收入增长 10%',
    img: Img5,
    location: '2023年12月5日'
  },
  {
    title: 'Progenda 如何节省时间并赢得新客户',
    img: Img6,
    location: '2023年9月8日'
  },
  {
    title: 'Belsonno 如何创建第一家高品质个人床上用品商店',
    img: Img7,
    location: '2023年7月7日'
  }
]
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

.title{
  font-size: 48px;
  font-weight: 700;
  color: #fff;
}
.title2{
  font-size: 24px;
  font-weight: 700;
}
.title3{
  font-size: 16px;
  font-weight: 700;
  margin: 20px;
}
.box1{
  background-color: #714b67;
  padding: 48px 0 48px 262px;
}
.searchBox{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 20px;
}
:deep(.el-input__wrapper){
  height: 50px;
  width: 300px;
  border-radius: 20px;
}
.courseBox{
  margin-bottom: 100px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
}
.item{
  border: 1px solid #D8DADD;
  border-radius: 8px;
  width: 320px;
  img{
    width: 320px;
    height: 170px;
    border-radius: 8px 8px 0 0;
  }
}
.classify{
  text-align: center;
  width: 90px;
  padding: 0 5px;
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 20px;
  background-color: #eaedfc;
  color: #172b98;
}
.item_bottom{
  margin-top: 20px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  border-top: 1px solid #D8DADD;
}
.dropdownList{
  display: flex;
  .dropdown-item{
    margin-right: 10px;
  }
}
.location{
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 20px;
}
.classifyList{
  display: flex;
  .items{
    cursor: pointer;
    font-size: 20px;
    font-weight: 400;
    margin-right: 20px;
  }
}
</style>
