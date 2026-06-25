<template>
  <div class="home_page vls">
    <div class="title box1">
      所有课程
    </div>
    <div class="w1380 searchBox">
      <div class="title2">
        课程
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
        <div class="title3">
          {{ item.title }}
        </div>
        <div class="classify">
          {{ item.classify }}
        </div>
        <div class="item_bottom">
          <div class="time">
            {{ item.time }}
          </div>
          <div class="step">
            {{ item.step }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import Img1 from '@/assets/community/video_img1.jpg'
import Img2 from '@/assets/community/video_img2.jpg'
import Img3 from '@/assets/community/video_img3.jpg'
import Img4 from '@/assets/community/video_img4.jpg'
import Img5 from '@/assets/community/video_img5.jpg'
import Img6 from '@/assets/community/video_img6.jpg'
import Img7 from '@/assets/community/video_img7.jpg'
import Img8 from '@/assets/community/video_img8.jpg'
import Img9 from '@/assets/community/video_img9.jpg'

const input = ref('')
const list = ref([])
list.value = [
  {
    title: '会计与发票',
    classify: 'Oort Tutorials',
    img: Img1,
    time: '9小时56分钟',
    step: '40步骤'
  },
  {
    title: '购买',
    classify: 'Oort Tutorials',
    img: Img2,
    time: '57分钟',
    step: '10步骤'
  },
  {
    title: '开始',
    classify: 'Oort Tutorials',
    img: Img3,
    time: '5小时37分钟',
    step: '38步骤'
  },
  {
    title: '车间',
    classify: 'Oort Tutorials',
    img: Img4,
    time: '5小时56分钟',
    step: '42步骤'
  },
  {
    title: '销售点',
    classify: 'Oort Tutorials',
    img: Img5,
    time: '2小时25分钟',
    step: '25步骤'
  },
  {
    title: '项目和讨论',
    classify: 'Oort Tutorials',
    img: Img6,
    time: '4小时45分钟',
    step: '38步骤'
  },
  {
    title: '支付账单',
    classify: 'Oort Tutorials',
    img: Img7,
    time: '1小时17分钟',
    step: '38步骤'
  },
  {
    title: '订阅',
    classify: 'Oort Tutorials',
    img: Img8,
    time: '1小时17分钟',
    step: '10步骤'
  },
  {
    title: '网站',
    classify: 'Oort Tutorials',
    img: Img9,
    time: '1小时10分钟',
    step: '12步骤'
  }
]
// definePageMeta({
//   layout: 'site-new'
// })

</script>

<style scoped lang="scss">
.home_page {
  position: relative;
}

.home_page.vls {
  background-color: #fff;
  padding-bottom: 100px;
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
  background-color: #2278ff;
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
  // margin-bottom: 100px;
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
  width: 130px;
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
</style>
