<template>
  <div class="home_page vls">
    <div class="box1 w1380">
      <div class="title1">
        需要帮助？
      </div>
      <div class="input">
        <el-input v-model="input" placeholder="询问 Oort Cloud AI" />
        <div>或</div>
        <div class="button">
          联系专员
        </div>
      </div>
    </div>
    <div class="box2 w1380">
      <div class="title1">
        联系我们
      </div>
      <div class="item_list">
        <div class="item">
          预约顾问咨询
        </div>
        <div class="item">
          额外开发功能
        </div>
        <div class="item">
          合作伙伴加盟
        </div>
        <div class="item">
          报告系统错误
        </div>
        <div class="item longer">
          联系电话
          <div>189 3808 3835</div>
        </div>
      </div>
    </div>
    <div class="box3 w1380">
      <div class="title1 ">
        Oort Cloud 各地办事处
      </div>
      <div class="courseBox">
        <div v-for="(item,index) in list" :key="index" class="items">
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
  </div>
</template>

<script setup>
import { ref } from 'vue'
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
    title: '联系电话：149 3808 3835',
    img: Img1,
    location: '上海'
  },
  {
    title: '联系电话：138 4567 8901',
    img: Img2,
    location: '厦门'
  },
  {
    title: '联系电话：186 1234 5678',
    img: Img3,
    location: '福建'
  },
  {
    title: '联系电话：135 7890 1234',
    img: Img4,
    location: '宁波'
  },
  {
    title: '联系电话：177 6543 2109',
    img: Img3,
    location: '厦门'
  },
  {
    title: '联系电话：139 8765 4321',
    img: Img7,
    location: '广州'
  },
  {
    title: '联系电话：159 2345 6789',
    img: Img5,
    location: '武汉'
  },
  {
    title: '联系电话：158 9012 3456',
    img: Img6,
    location: '北京'
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
.title1{
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 40px;
}
.box1{
  padding: 50px;
  margin-bottom: 100px;
}
.el-input{
  width: 1100px;
}
:deep(.el-input__wrapper){
  height: 50px;
  border-radius: 10px;
}
:deep(.el-input__inner){
  font-size: 18px;
}
.input{
  display: flex;
  justify-content: space-between;
  align-items: center;
  .button{
    cursor: pointer;
    padding: 10px 30px;
    background-color: #2278ff;
    border-radius: 8px;
    color: #fff;
  }
}
.box2{
  margin-bottom: 160px;
}
.item_list{
  margin: 0 auto;
  width: 700px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
  .item{
    cursor: pointer;
    text-align: center;
    padding: 28px;
    width: 250px;
    font-size: 20px;
    background-color: #f5f5fb;
    color: #017e84;
    border-radius: 8px;
  }
  .longer{
    width: 700px;
  }
}

.box3{

}

.items{
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

.location{
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 20px;
}
.title3{
  font-size: 16px;
  font-weight: 700;
  margin-left: 20px;
  margin-top: 20px;
}

.courseBox{
  margin-bottom: 100px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
}

</style>
