<template>
  <div class="bottom_page">
    <div class="bottom_content">
      <div class="bottom_pro">
        <div class="bottom_pro_r flexRowAC">
          <el-input v-model="value" class="bottom_pro_address" :placeholder="$t('bottom.address')" />
          <div class="bottom_me">
            {{ $t('bottom.Contact') }}
          </div>
        </div>
      </div>
      <div class="b_ser">
        <div class="b_ser_p flexRowAC">
          <div class="b_ser_p_l">
            <NuxtLink v-if="currPath!=='/mb'" to="/zh/mb" class="b_ser_title flexRowAC">
              {{ $t('menu./') }}
              <el-icon>
                <ArrowRight />
              </el-icon>
            </NuxtLink>
            <NuxtLink v-if="currPath!=='/mb/mb_product'" to="/zh/mb/mb_product" class="b_ser_title flexRowAC">
              {{ $t('bottom.Product') }}
              <el-icon>
                <ArrowRight />
              </el-icon>
            </NuxtLink>
            <NuxtLink v-if="currPath!=='/mb/mb_aboutUs'" to="/zh/mb/mb_aboutUs" class="b_ser_title flexRowAC">
              {{ $t('menu./aboutUs') }}
              <el-icon>
                <ArrowRight />
              </el-icon>
            </NuxtLink>
            <NuxtLink v-if="currPath!=='/mb/mb_contactUs'" to="/zh/mb/mb_contactUs" class="b_ser_title flexRowAC">
              {{ $t('menu./contactUs') }}
              <el-icon>
                <ArrowRight />
              </el-icon>
            </NuxtLink>
          </div>
        </div>
        <div class="b_ser_off">
          <div class="b_ser_off_imgBox flexRowAC">
            <img class="b_ser_off_img h50" src="@/assets/img/bottom/weixin.png" alt="" />
            <img class="b_ser_off_img" src="@/assets/img/bottom/linkedin-white.png" alt="" />
            <img class="b_ser_off_img" src="@/assets/img/bottom/facebook-white.png" alt="" />
            <img class="b_ser_off_img" src="@/assets/img/bottom/twitter-white.png" alt="" />
            <img class="b_ser_off_img" src="@/assets/img/bottom/google-white.png" alt="" />
          </div>
          <img class="b_ser_off_code" src="@/assets/img/bottom/logo_googn.jpg" alt="" />
          <div class="b_ser_off_title">
            {{ $t('bottom.Official') }}
          </div>
          <div class="b_ser_off_title t1">
            About us | User Agreement | Privacy Policy
          </div>
          <div class="b_ser_off_title t2">
            粤ICP备19160414号
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let value = ref('')
const route = useRoute()
let currPath = ref()

watch(() => route.path, (newVal) => {
  if (newVal) currPath.value = newVal
}, { immediate: true })
</script>

<style lang="less" scoped>
@import "src/assets/style/vars.less";

:deep .el-input__wrapper {
  border: 0px;
  box-shadow: 0 0 0 0px;
  padding-left: 30px;
  font-size: 18px;
}
:deep .bottom_pro_r {
.el-input{
  background-color: transparent;
}
  .el-input__wrapper{
    border: 1px solid #fff;
    padding: 12px;
    background-color: transparent;
  }
  .el-input__inner{
    height: initial;
    font-size: 14px;
    color: #FFFFFF;
    background-color: transparent;
  }
}

.bottom_page {
  background: #333333;
}

.bottom_content {
  margin: 0 auto;
  padding-top: 24px;

  .bottom_pro {
    justify-content: space-between;
    padding-bottom: 12px;
  }

  .bottom_pro_t {
    color: #fff;

    .bottom_pro_tImg {
      height: 48px;
      margin-bottom: 18px;
    }
  }

  .bottom_pro_r {
    padding: 0 8px;
    gap: 8px;

    .bottom_pro_address {
      outline: none;
      height: 42px;
      border-radius: 3px;
    }

    .bottom_me {
      flex-shrink: 0;
      width: 120px;
      text-align: center;
      height: 42px;
      line-height: 42px;
      background: #EB691C;
      font-size: 16px;
      color: #FFFFFF;
      font-weight: 400;
    }
  }
}

.b_ser {
  align-items: flex-start;
  justify-content: space-between;
  color: #fff;

  .b_ser_p {
    gap: 60px;
    align-items: flex-start;
  }

  .b_ser_p_l {
    width: 100%;
  }

  .b_ser_title {
    justify-content: space-between;
    font-size: 18px;
    color: #FFFFFF;
    font-weight: 400;
    height: 54px;
    padding: 0 12px;
  }

  .b_ser_text {
    opacity: 0.5;
    font-size: 18px;
    color: #FFFFFF;
    line-height: 36px;
    font-weight: 400;
  }

  .b_ser_off {
    padding-top: 78px;
    text-align: center;
    font-size: 14px;
    color: #999999;
    font-weight: 400;
  }

  .b_ser_off_imgBox {
    align-items: flex-start;
    justify-content: center;
    gap: 8px;
    padding-bottom: 16px;
  }

  .b_ser_off_code {
    width: 140px;
    height: 140px;
    background-color: #fff;
    margin: 0 auto;
    margin-bottom: 12px;
  }

  .b_ser_off_title {
    color: #fff;
    padding-bottom: 24px;
  }

  .b_ser_off_title.t1 {
    padding-bottom: 12px;
  }

  .b_ser_off_img {
    width: 42px;
    height: 42px;
    background-size: cover;

    &.h50 {
      height: 50px;
    }
  }
}
</style>
