<template>
  <div class="home_page vls">
    <!-- <div class="title box1">
      所有课程
    </div> -->
    <div class="w1380 searchBox">
      <div class="title2">
        活动
      </div>
      <div class="dropdownList">
        <div class="dropdown-item">
          <el-dropdown trigger="click">
            <el-button type="primary">
              类型 <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>学院</el-dropdown-item>
                <el-dropdown-item>商务展</el-dropdown-item>
                <el-dropdown-item>公司参观</el-dropdown-item>
                <el-dropdown-item>研讨会</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <div class="dropdown-item">
          <el-dropdown trigger="click">
            <el-button type="primary">
              主题 <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>人力资源</el-dropdown-item>
                <el-dropdown-item>教育</el-dropdown-item>
                <el-dropdown-item>工业</el-dropdown-item>
                <el-dropdown-item>营销</el-dropdown-item>
                <el-dropdown-item>网站</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <div class="dropdown-item">
          <el-dropdown trigger="click">
            <el-button type="primary">
              所有国家 <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>中国</el-dropdown-item>
                <el-dropdown-item>日本</el-dropdown-item>
                <el-dropdown-item>美国</el-dropdown-item>
                <el-dropdown-item>法国</el-dropdown-item>
                <el-dropdown-item>英国</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
      <div class="search">
        <el-input
          v-model="input"
          class="responsive-input"
          placeholder="搜索课程"
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
          <el-icon><LocationFilled /></el-icon>{{ item.location }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search, ArrowDown, LocationFilled } from '@element-plus/icons-vue'
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
    title: '商务展-中国台湾',
    classify: '商务展',
    img: Img1,
    location: '台湾'
  },
  {
    title: '商务展-法国',
    classify: '商务展',
    img: Img2,
    location: '法国-巴黎'
  },
  {
    title: '圣雷莫美术学院',
    classify: '学院',
    img: Img3,
    location: '意大利-圣雷莫'
  },
  {
    title: '商务展-美国',
    classify: '商务展',
    img: Img4,
    location: '美国-纽约'
  },
  {
    title: '阿维利诺音乐学院',
    classify: '学院',
    img: Img3,
    location: '意大利-阿维利诺'
  },
  {
    title: '富兰克林欧林工程学院',
    classify: '学院',
    img: Img3,
    location: '美国-尼德姆'
  },
  {
    title: '技术培训',
    classify: '培训',
    img: Img5,
    location: '线上'
  },
  {
    title: '网络研讨会',
    classify: '研讨会',
    img: Img6,
    location: '线上'
  },
  {
    title: '网络研讨会',
    classify: '研讨会',
    img: Img7,
    location: '线上'
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
  margin-left: 20px;
  margin-top: 20px;
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
</style>
