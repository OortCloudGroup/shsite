<template>
  <div class="home_page vls">
    <div class="partner_top">
      <div class="title1">
        OortCloud 合作伙伴
      </div>
      <div class="title2 box1">
        成为伙伴 >
      </div>
    </div>
    <div class="partner_main w1380">
      <div class="supportBox">
        <div class="title3">
          合作伙伴支持
        </div>
        <div class="itemList">
          <div class="item">
            <div class="title4">
              收益稳定
            </div>
            <div class="content">
              <span style="color: #7e47eb;">√</span>订阅收费，客户续约率高，可享持续收益
            </div>
            <div class="content">
              <span style="color: #7e47eb;">√</span>渠道政策稳定，持续保障业务发展
            </div>
            <div class="content">
              <span style="color: #7e47eb;">√</span>覆盖更多场景需求，提升方案价值
            </div>
          </div>
          <div class="item" style="background-color: #d3f1ee">
            <div class="title4">
              充足支持
            </div>
            <div class="content">
              <span style="color: #00c29a;">√</span>市场活动、物料工具、运营指导
            </div>
            <div class="content">
              <span style="color: #00c29a;">√</span>培训支持、技术支持、售后支持
            </div>
            <div class="content">
              <span style="color: #00c29a;">√</span>服务支持、售前支持、行业方案
            </div>
          </div>
          <div class="item" style="background-color: #dcf5ff">
            <div class="title4">
              快速起步
            </div>
            <div class="content">
              <span style="color: #2ea1ff;">√</span>颁发官方认证授权，迅速打开市场
            </div>
            <div class="content">
              <span style="color: #2ea1ff;">√</span>渠道经理协助组织建设，定期走访辅导
            </div>
            <div class="content">
              <span style="color: #2ea1ff;">√</span>完善的客户报备和保护制度，保障伙伴发展
            </div>
          </div>
        </div>
      </div>
      <div class="box2">
        <!-- 合作伙伴 -->
        <HomePartnerPanel :data="partnerData" />
      </div>
    </div>
    <div class="box3">
      <div class="title1">
        伙伴申请
      </div>
      <div class="content" style="color: #525967;">
        若有意成为我们的合作伙伴，欢迎通过以下方式联系我们:
      </div>
      <div class="consultationBox">
        <div class="telephone">
          咨询电话
          <div class="number">
            189 3808 3835
          </div>
        </div>
        <div class="email">
          咨询邮箱
          <div class="email-number">
            zhangxuelian@oort<br />cloudsmart.com
          </div>
        </div>
        <div class="email">
          扫码加微信
          <div class="wechat">
            <img src="@/assets/software/bossWechat.jpg" alt="" />
          </div>
        </div>
      </div>
      <div class="title2 box1">
        成为伙伴 >
      </div>
    </div>
  </div>
</template>

<script setup>

definePageMeta({
  layout: 'site-new'
})

const partnerData = ref([
  '/img/home/1.png',
  '/img/home/2.png',
  '/img/home/3.png',
  '/img/home/4.png',
  '/img/home/5.png',
  '/img/home/6.png',
  '/img/home/7.png',
  '/img/home/8.png',
  '/img/home/9.png',
  '/img/home/10.png',
  '/img/home/11.png',
  '/img/home/12.png'
])

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
  font-size: 48px;
  font-weight: 700;
}
.title2{
  font-size: 18px;
  font-weight: 700;
}
.title3{
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 50px;
}
.title4{
    text-align: center;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
}
.content{
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;
  margin-left: 20px;
  span{
    font-size: 20px;
    font-weight: 700;
    margin-right: 5px;
  }
}
.partner_top{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f9f9f9;
  height: 300px;
}
.box1{
text-align: center;
cursor: pointer;
width: 120px;
line-height: 40px;
border-radius: 8px;
margin-top: 20px;
margin-bottom: 15px;
background-color: #2278ff;
color: #fff;
}
.supportBox{
  text-align: center;
  margin-top: 100px;
  margin-bottom: 160px;
  .itemList{
    display: flex;
    justify-content: space-between;
  }
  .item{
    width: 360px;
    padding: 30px;
    background-color: #cedcff;
    border-radius: 8px;
    text-align: left;
  }
}
.box2{
  margin-bottom: 160px;
}
.box3{
  text-align: center;
  height: 450px;
  background: url('@/assets/img/partner_bg.png')  no-repeat 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .consultationBox{
    display: flex;
    justify-content: center;
    .telephone{
      text-align: left;
      // width: 200px;
      padding:15px;
      margin-right: 20px;
      background-color: #fff;
      border-radius: 8px;
      .number{
        margin-top: 5px;
        font-size: 20px;
        color: #2ea1ff;
      }
    }
    .email{
      text-align: left;
      // width: 200px;
      padding:15px;
      margin-right: 20px;
      background-color: #fff;
      border-radius: 8px;
      .wechat{
        margin-top: 5px;
        img{
          width: 100px;
          height: 100px;
        }
      }
      .email-number{
        // width: 230px;
        margin-top: 5px;
        font-size: 20px;
        color: #2ea1ff;
      }
    }
  }
}
</style>
