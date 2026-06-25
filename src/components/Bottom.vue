<template>
  <div class="bottom_page">
    <div class="bottom_content">
      <div class="bottom_pro flexRowAC">
        <div class="bottom_pro_t">
          <img class="bottom_pro_tImg" src="@/assets/VLimg2.0/ipc.png" alt="" />
        </div>
      </div>
      <div class="b_ser flexRowAC">
        <div class="b_ser_p flexRowAC">
          <div class="b_ser_p_l">
            <div class="b_ser_title">
              社区
            </div>
            <div class="flexRowAC">
              <div class="b_ser_text hover" @click="viewPath('/zh/community/educationalVideo',0)">
                教学视频
              </div>
            </div>
            <div class="flexRowAC">
              <div class="b_ser_text hover" @click="viewPath('/zh/community/document',0)">
                文档
              </div>
            </div>
            <div class="flexRowAC">
              <div class="b_ser_text">
                论坛
              </div>
            </div>
          </div>
          <div class="b_ser_p_l">
            <div class="b_ser_title">
              解决方案
            </div>
            <div class="flexRowAC">
              <a class="b_ser_text hover" href="https://www.oortcloudsmart.com/zh/siteNew/mobilePolice" target="_blank">
                移动警务
              </a>
            </div>
            <div class="flexRowAC">
              <a class="b_ser_text hover" href="https://www.oortcloudsmart.com/zh/siteNew/privateCloud" target="_blank">
                私有云
              </a>
            </div>
            <div class="flexRowAC">
              <a class="b_ser_text hover" href="https://www.oortcloudsmart.com/zh/siteNew/superAPP" target="_blank">
                超级APP
              </a>
            </div>
            <div class="flexRowAC">
              <a class="b_ser_text hover" href="https://www.oortcloudsmart.com/zh/services" target="_blank">
                全部解决方案
              </a>
            </div>
          </div>
          <div class="b_ser_p_l">
            <div class="b_ser_title">
              开源
            </div>
            <div class="flexRowAC">
              <div class="b_ser_text">
                下载
              </div>
            </div>
            <div class="flexRowAC">
              <a class="b_ser_text hover" href="https://github.com/OortCloudGroup" target="_blank">
                GitHub
              </a>
            </div>
          </div>
          <div class="b_ser_p_l">
            <div class="b_ser_title">
              服务
            </div>
            <div class="flexRowAC">
              <a class="b_ser_text hover" href="https://oortcloudsmart.com/zh/siteNew/" target="_blank">
                OortCloud Agent
              </a>
            </div>
            <div class="flexRowAC">
              <a class="b_ser_text hover" href=" https://ai.oortcloudsmart.com/zh/" target="_blank">
                OORT.AI 智能体平台
              </a>
            </div>
            <div class="flexRowAC">
              <a class="b_ser_text hover" href="https://vls.oortcloudsmart.com/zh/" target="_blank">
                VLSterm 视觉平台
              </a>
            </div>
            <div class="flexRowAC">
              <a class="b_ser_text hover" href="https://sh.oortcloudsmart.com/zh/" target="_blank">
                OORT.SH 托管平台
              </a>
            </div>
            <div class="flexRowAC">
              <div class="b_ser_text hover" @click="viewPath('/zh/community/support',2)">
                支持与升级
              </div>
            </div>
            <div class="flexRowAC">
              <div class="b_ser_text hover" @click="viewPath('/zh/community/customDevelopment',0)">
                自定义开发服务
              </div>
            </div>
          </div>
          <div class="b_ser_p_l">
            <div class="b_ser_title">
              成品软件
            </div>
            <div class="flexRowAC">
              <a class="b_ser_text hover" href="https://oortcloudsmart.com/zh/siteNew/k8sMana" target="_blank">
                K8S容器管理和CMDB软件
              </a>
            </div>
            <div class="flexRowAC">
              <a class="b_ser_text hover" href="https://oortcloudsmart.com/zh/siteNew/policeBus" target="_blank">
                警务服务总线
              </a>
            </div>
            <div class="flexRowAC">
              <a class="b_ser_text hover" href="https://oortcloudsmart.com/zh/siteNew/portalApp" target="_blank">
                门户与应用市场软件
              </a>
            </div>
            <div class="flexRowAC">
              <a class="b_ser_text hover" href="https://oortcloudsmart.com/zh/siteNew/approval" target="_blank">
                智能审批
              </a>
            </div>
            <div class="flexRowAC">
              <a class="b_ser_text hover" href="https://oortcloudsmart.com/zh/siteNew/dispatch" target="_blank">
                指挥调度
              </a>
            </div>
            <div class="flexRowAC">
              <a class="b_ser_text hover" href="https://oortcloudsmart.com/zh/siteNew/cloudClass" target="_blank">
                云课堂
              </a>
            </div>
            <div class="flexRowAC">
              <a class="b_ser_text hover" href="https://oortcloudsmart.com/zh/siteNew/instantMess" target="_blank">
                即时通讯
              </a>
            </div>
            <div class="flexRowAC">
              <a class="b_ser_text hover" href="https://oortcloudsmart.com/zh/product" target="_blank">
                全部产品
              </a>
            </div>
          </div>
          <div class="b_ser_p_l">
            <div class="b_ser_title">
              关于我们
            </div>
            <div class="flexRowAC">
              <a class="b_ser_text hover" href="https://www.oortcloudsmart.com/zh/" target="_blank">
                我们的公司
              </a>
            </div>
            <div class="flexRowAC">
              <div class="b_ser_text hover" @click="viewPath('/zh/community/brandEquity',2)">
                品牌资产
              </div>
            </div>
            <div class="flexRowAC">
              <a class="b_ser_text hover" href="https://www.oortcloudsmart.com/zh/siteNew/contactUs" target="_blank">
                联系我们
              </a>
            </div>
            <div class="flexRowAC">
              <div class="b_ser_text hover" @click="viewPath('/zh/community/partner',2)">
                寻找合作伙伴
              </div>
            </div>
            <div class="flexRowAC">
              <div class="b_ser_text hover" @click="viewPath('/zh/community/recentActivities',2)">
                近期活动
              </div>
            </div>
            <div class="flexRowAC">
              <div class="b_ser_text hover" @click="viewPath('/zh/community/customer',2)">
                客户
              </div>
            </div>
            <div class="flexRowAC">
              <div class="b_ser_text hover" @click="viewPath('/zh/community/privacy',2)">
                法律 · 隐私
              </div>
            </div>
            <div class="flexRowAC">
              <div class="b_ser_text hover" @click="viewPath('/zh/community/safe',2)">
                安全
              </div>
            </div>
          </div>
        </div>
        <div class="b_ser_off">
          <div class="bse_t bse_language">
            <div class="bse_language_select">
              <img src="@/assets/bottomImg/chinese.png" alt="" />
              <el-select
                v-model="language"
                @change="changeLanguage"
                placeholder="选择语言"
                size="mini"
                style="width: 200px"
              >
                <el-option
                  label="简体中文"
                  :value="1"
                />
                <el-option
                  label="English"
                  :value="2"
                />
              </el-select>
            </div>
            <div class="line" />
          </div>
          <div class="bse_t" style="text-indent: 2em;">
            OortCloud 致力于为企业管理提供高效智能的开源解决方案，是全球业内高速成长 的软件服务商之一，逾七百五十万用户选择OortCloud 进行数字化升级。通过一系 列全业务链覆盖、高度集成、简单易用的商业应用，助力企业实现信息化改革、降本增效并释放公司增长潜力。
          </div>
          <div class="bse_t bse_d">
            Oort Cloud 独特的价值在于是一款非常容易使用又完全集成的应用。
          </div>
          <div class="b_ser_off_imgBox flexRowAC">
            <img class="b_ser_off_img" src="@/assets/bottomImg/bo1.png" alt="" />
            <img class="b_ser_off_img" src="@/assets/bottomImg/bo2.png" alt="" />
            <img class="b_ser_off_img" src="@/assets/bottomImg/bo3.png" alt="" />
            <img class="b_ser_off_img" src="@/assets/bottomImg/bo4.png" alt="" />
            <img class="b_ser_off_img" src="@/assets/bottomImg/bo5.png" alt="" />
            <img class="b_ser_off_img" src="@/assets/bottomImg/bo6.png" alt="" />
            <img class="b_ser_off_img" src="@/assets/bottomImg/bo7.png" alt="" />
            <img class="b_ser_off_img" src="@/assets/bottomImg/bo8.png" alt="" />
          </div>
          <div class="bottom_pro_r flexRowAC">
            <el-input v-model="value" class="bottom_pro_address" placeholder="订阅邮箱，请输入您的邮箱" />
            <div class="bottom_me">
              订阅
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="icpBox flexRowAC">
      Website made with
      <img class="icpBox_img" src="@/assets/VLimg2.0/ipc.png" alt="" />
      <a
        href="https://beian.miit.gov.cn/"
        target="_blank"
        class="icpBox_t"
      >粤ICP备19160414号</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElSelect, ElOption } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter()
// const route = useRoute()
// let value = ref('')

const viewPath = (path) => {
  if (router.currentRoute.value.path === path) {
    window?.scrollTo(0, 0)
  }
  router.push({ path })
}

// const route = useRoute()
let value = ref('')
let language = ref(1)

const changeLanguage = (languageValue) => {
  if (languageValue === 2) {
    window.location.href = '/en/'
  }
}

// const viewPath = (path) => {
//   window.open(path, '_blank')
// }
</script>

<style lang="scss" scoped>

:deep .el-input__wrapper {
  border: 0px;
  box-shadow: 0 0 0 0px;
  padding-left: 30px;
  font-size: 18px;
}

.bottom_page {
  min-height: 640px;
  background: #252734;
}

.bottom_content {
  width: 1380px;
  margin: 0 auto;
  padding: 50px 0;

  .bottom_pro {
    justify-content: center;
    padding-bottom: 68px;
  }

  .bottom_pro_t {
    color: #fff;

    .bottom_pro_tImg {
      height: 48px;
      margin-bottom: 18px;
    }
  }

  .bottom_pro_r {
    gap: 30px;

    .bottom_pro_address {
      color: white;
      width: 450px;
      height: 60px;
      border-radius: 3px;
      color: #fff;
      border-radius: 8px;
      border: 1px solid #646C76;
      background-color: transparent;

      :deep(.el-input__wrapper) {
        background-color: transparent;

        .el-input__inner {
          color: #fff;
        }
      }
    }

    .bottom_me {
      width: 210px;
      text-align: center;
      height: 60px;
      line-height: 60px;
      background: #2278FF;
      font-size: 18px;
      color: #FFFFFF;
      font-weight: 400;
      border-radius: 8px;
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
    flex-wrap: wrap;
  }

  .b_ser_p_l {
    width: 210px;
    white-space: nowrap;
  }

  .b_ser_title {
    font-size: 18px;
    color: #FFFFFF;
    font-weight: 400;
    padding-bottom: 10px;
  }

  .b_ser_text {
    display: block;
    color: rgba(255, 255, 255, .5);
    font-size: 18px;
    line-height: 36px;
    font-weight: 400;

    &.hover {
      cursor: pointer;

      &:hover {
        color: #2278FF;
      }
    }
  }

  .b_ser_off {
    width: 520px;
    text-align: center;
    font-size: 14px;
    color: #999999;
    font-weight: 400;

    .bse_language {
      display: flex;
      flex-direction: column;
    }

    .bse_language_select {
      display: flex;
      flex-direction: row;
      align-items: center;
      img {
        margin-right:12px;
        width: 24px;
        height: 24px;
      }
    }

    .bse_language_select_box {
      display: flex;
      flex-direction: row;
      align-items: center;
      span {
        cursor: pointer;
        font-weight: 400;
        font-size: 14px;
        color: #ADB5BD;
        line-height: 18px;
        margin-right: 12px;
      }
    }

    .bse_language_icon {
      border-radius: 0px 0px 0px 0px;
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid rgb(255, 255, 255);
    }

    .line {
      background-color: #6C757E;
      width: 100%;
      height: 1px;
      margin: 25px 0;
      margin-bottom: 40px;
    }

    .bse_t {
      color: #ADB5BD;
      font-size: 14px;
      line-height: 22px;
      text-align: left;

    }

    .bse_d {
      padding-top: 40px;
      padding-bottom: 40px;
    }
  }

  .b_ser_off_imgBox {
    align-items: flex-start;
    gap: 16px;
    padding-bottom: 40px;
  }

  .b_ser_off_code {
    width: 140px;
    height: 140px;
    background-color: #fff;
    margin: 0 auto;
    margin-bottom: 12px;
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

.icpBox {
  color: #ADB5BD;
  font-size: 14px;
  width: 100%;
  justify-content: center;
  height: 60px;
  background: #1A1C24;
  gap: 16px;

  .icpBox_img {
    width: auto;
    height: 30px;
  }

  .icpBox_t {
    opacity: 1;
    font-size: 14px;
    color: #fff;
  }
}
</style>
