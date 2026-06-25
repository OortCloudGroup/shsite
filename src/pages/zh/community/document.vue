<template>
  <div class="home_page vls">
    <div class="title box1">
      文档
    </div>
    <div class="w1380">
      <div class="documentBox">
        <div class="item">
          <img src="@/assets/community/document_img1.png" alt="" />
          <div class="title2">
            用户指南
          </div>
          <div class="content1">
            全部应用程序的用户指南和教程。
          </div>
        </div>
        <div class="item">
          <img src="@/assets/community/document_img2.png" alt="" />
          <div class="title2">
            白皮书
          </div>
          <div class="content1">
            相关产品的白皮书
          </div>
        </div>
        <div class="item">
          <img src="@/assets/community/document_img3.png" alt="" />
          <div class="title2">
            开发人员指南
          </div>
          <div class="content1">
            教程和参考指南
          </div>
        </div>
        <div class="item">
          <img src="@/assets/community/document_img4.png" alt="" />
          <div class="title2">
            安装
          </div>
          <div class="content1">
            如何安装、维护和升级Oort Cloud数据库
          </div>
        </div>
        <div class="item">
          <div class="img5Box">
            <img src="@/assets/community/document_img5.png" alt="" />
          </div>
          <div class="title2">
            培训中心
          </div>
          <div class="content1">
            学习视频、练习
          </div>
        </div>
        <div class="item">
          <img src="@/assets/community/document_img6.png" alt="" />
          <div class="title2">
            认证
          </div>
          <div class="content1">
            官方认可您的只是和专长
          </div>
        </div>
        <div class="item">
          <img src="@/assets/community/document_img7.png" alt="" />
          <div class="title2">
            法律
          </div>
          <div class="content1">
            关于Oort 软件使用许可证及合约
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

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
  font-size: 32px;
  font-weight: 700;
  margin-top: 10px;
}
.content1{
  font-size: 20px;
  margin-top: 20px;
}
.box1{
  background-color: #2278ff;
  padding: 48px 0 48px 262px;
}
.documentBox{
  margin: 100px 0;
  margin-bottom: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .item{
    width: 380px;
    // height: 210px;
    padding: 40px 30px;
    margin-bottom: 30px;
    background-color: #f9fafb;
    img{
      width: 70px;
    }
  }
}
.img5Box{
  margin-bottom: 28px;
}

</style>
