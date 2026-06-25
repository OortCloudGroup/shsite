<template>
  <div class="home_page vls">
    <div class="platTopOut flexRowAC w1380">
      <div class="platTop">
        <div class="VLStream">
          现在就 <span class="vlsUs">联系我们</span>!
        </div>
        <div class="plat_cent">
          有问题吗?我们有答案!无论您是需要技术支持，还是想了解更多应用功能的最佳实践，我们都能为您提供帮助。
        </div>
        <div class="flexRowAC useBox" style="justify-content: flex-start">
          <img class="contactUs_bg" src="@/assets/software/contactUs_bg.png" alt="" />
        </div>
      </div>
      <div class="useRightBOx">
        <div class="flexRowAC nameT">
          <!--          <div class="nameT heightbg flexRowAC">-->
          <!--            名称-->
          <!--            <span class="red">*</span>-->
          <!--            <el-input v-model="value" class="themeInput" placeholder=""/>-->
          <!--          </div>-->
          <el-input v-model="value" class="themeInput" placeholder="名称*" />
          <el-input v-model="value1" class="themeInput" placeholder="手机号*" />
        </div>
        <el-input v-model="value2" class="themeInput" placeholder="电子邮箱" />
        <el-input v-model="value3" class="themeInput" placeholder="公司" />
        <el-input v-model="value4" class="themeInput" placeholder="主题" />
        <el-input v-model="value5" class="themeInput" placeholder="公司规模" />
        <el-input v-model="value6" type="textarea" :rows="5" class="themeInput" placeholder="问题描述*" />
        <div class="cu_mess heightbg">
          OortCloud处理您的个人信息时，将按照 <span style="color: #2278FF">隐私政策</span> 回答您的问题并提供产品和服务资料
        </div>
        <div class="cu_submit flexRowAC">
          提交
        </div>
      </div>
    </div>
    <div class="platTopOut us flexRowAC w1380">
      <div class="platTop">
        <div class="VLStream">
          直接联络
        </div>
        <div class="plat_cent contactUs_iconBox">
          <div class="contactUs_icon flexRowAC">
            <img class="contactUs_i1" src="@/assets/software/contactUs_i1.png" alt="" />
            联系电话
            <span>189 3808 3835</span>
          </div>
          <div class="contactUs_icon flexRowAC">
            <img class="contactUs_i1" src="@/assets/software/contactUs_i2.png" alt="" />
            联系邮箱
            <span>zhangxuellan@oortcloudsmart.com</span>
          </div>
          <div class="contactUs_icon flexRowAC">
            <img class="contactUs_i1" src="@/assets/software/contactUs_i3.png" alt="" />
            公司地址
            <span>广东省深圳市罗湖区人民北路3131号水产大厦17K</span>
          </div>
        </div>
      </div>
      <img class="contactUs_bg2" src="@/assets/software/contactUs_bg2.png" alt="" />
    </div>
    <div class="w1380" style="padding-bottom: 110px;">
      <img class="contactUs_bg3 w1380" src="@/assets/software/contactUs_bg3.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
definePageMeta({
  layout: 'site-new'
})

let value1 = ref('')
let value2 = ref('')
let value3 = ref('')
let value4 = ref('')
let value5 = ref('')
let value6 = ref('')
let value = ref('')
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
.platTopOut {
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 60px;

  .platTopOutImg {
    flex-shrink: 0;
    width: 614px;
    height: auto;
    margin-left: 100px;
  }
}

.platTop {
  text-align: left;
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
    color: #333333;
    font-weight: bold;
    font-size: 78px;
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
    color: #333333;
    font-weight: bold;
    font-size: 58px;
  }

  .plat_cent {
    width: 620px;
    padding: 20px 0 50px;
    color: #717781;
    font-size: 18px;
  }

  .useBox {
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

  .cl_d.d1 {
    color: #333;
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
    padding-top: 60px;
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

  .productItem {
    gap: 20px;

    .productItem1 {
      flex: 1;

      &:nth-child(1) {
        background: #2278FF;

        .pro3_btn {
          color: #2278FF;
        }
      }
    }
  }

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

.instantMess_c1 {
  width: 825px;
  height: auto;
}

.k8sMana_c1 {
  width: 692px;
  height: auto;
}

.contactUs_i1 {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

.contactUs_bg {
  width: 628px;
  height: auto;
}

.contactUs_bg2 {
  width: 600px;
  height: auto;
}

.contactUs_bg3{
  width: 100%;
  height: auto;
}

.contactUs_iconBox {
  .contactUs_icon {
    padding-bottom: 20px;
    color: #97A3B6;
    font-weight: normal;
    font-size: 20px;
    text-align: left;

    > span {
      padding-left: 20px;
      opacity: 1;
      color: #333333;
      font-weight: normal;
      font-size: 20px;
      text-align: left;
    }
  }
}

.useRightBOx {
  margin-top: 110px;
  padding: 20px;
  width: 600px;
  flex-shrink: 0;
  border-radius: 24px;
  background: #FFFFFF;
  box-shadow: 0px 12px 36px 0px #2278FF0F;

  .themeInput {
    height: 54px;
    font-size: 20px;
  }

  .el-textarea.themeInput {
    height: initial;
  }

  .nameT {
    gap: 20px;
  }

  .themeInput {
    margin-bottom: 20px;
  }

  .cu_mess {
    color: #97A3B6;
    font-weight: normal;
    font-size: 14px;
    text-align: left;
  }

  .cu_submit {
    cursor: pointer;
    margin: 40px auto;
    justify-content: center;
    width: 340px;
    height: 64px;
    border-radius: 8px;
    color: #fff;
    background: #2278FF;
    box-shadow: 0px 4px 10px 0px #2278FF33;
  }
}

.platTopOut.us {
  padding-bottom: 54px;
  .platTop {
    padding: 0;

    .VLStream {
      font-size: 40px;
    }
  }
}

.vlsUs{
  opacity: 1;
  border-radius: 0px;
  background: linear-gradient(270deg, #2278FF0A 0%, #2278FF51 100%);
  border-left: 6px solid #2278FF;
  padding-left: 10px;
  color: #2278FF;
}

</style>
