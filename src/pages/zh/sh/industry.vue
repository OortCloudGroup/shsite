<template>
  <div class="home_page vls">
    <div class="proTitleBox roPBoxOut w1380 flexRowAC" style="justify-content: flex-start">
      <div class="roPBox">
        <p class="allProduct" @click="viewPath('/zh/sh/productSH')">
          全部产品 →
        </p>
        <div class="flexRowAC useBox">
          <el-input v-model="value" class="themeInput" placeholder="搜索产品名称">
            <template #prepend>
              <el-icon :size="20">
                <Search />
              </el-icon>
            </template>
          </el-input>
        </div>
        <div v-for="(item, i) in roPList" :key="i" class="roPItem">
          <span :class="{act:isAct===i}" @click="isAct=i">{{ item }}</span>
        </div>
      </div>
      <div v-if="isAct===0" class="roPR">
        <div class="roPR_t">
          计算
        </div>
        <div class="flexRowAC roPR_tOut">
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon01.png" alt="" />
            <div class="roPR_t_t">
              GPU加速云服务器 GACS
            </div>
            <div class="roPR_t_d">
              提供GPU计算资源的弹性云服务器
            </div>
          </div>
        </div>
      </div>
      <div v-if="isAct===1" class="roPR">
        <div class="roPR_t">
          存储
        </div>
        <div class="flexRowAC roPR_tOut">
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon02.png" alt="" />
            <div class="roPR_t_t">
              对象存储服务 OBS
            </div>
            <div class="roPR_t_d">
              稳定、安全、高效、易用的云存储服务
            </div>
          </div>
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon03.png" alt="" />
            <div class="roPR_t_t">
              键值存储服务 KVS
            </div>
            <div class="roPR_t_d">
              Serverless KV存储服务
            </div>
          </div>
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon04.png" alt="" />
            <div class="roPR_t_t">
              专属分布式存储 DSS
            </div>
            <div class="roPR_t_d">
              提供独享的物理存储资源
            </div>
          </div>
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon05.png" alt="" />
            <div class="roPR_t_t">
              云硬盘备份 VBS
            </div>
            <div class="roPR_t_d">
              为云硬盘创建在线备份，无需关机/重启
            </div>
          </div>
        </div>
      </div>
      <div v-if="isAct===2" class="roPR">
        <div class="roPR_t">
          网络
        </div>
        <div class="flexRowAC roPR_tOut">
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon06.png" alt="" />
            <div class="roPR_t_t">
              弹性负载均衡 ELB
            </div>
            <div class="roPR_t_d">
              将流量自动分发到多台云服务器
            </div>
          </div>
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon07.png" alt="" />
            <div class="roPR_t_t">
              云解析服务器 DNS
            </div>
            <div class="roPR_t_d">
              提供高可用、高扩展的DNS服务
            </div>
          </div>
        </div>
      </div>
      <div v-if="isAct===3" class="roPR">
        <div class="roPR_t">
          数据库
        </div>
        <div class="flexRowAC roPR_tOut">
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon08.png" alt="" />
            <div class="roPR_t_t">
              云数据库 RDS
            </div>
            <div class="roPR_t_d">
              开源数据库，保证数据的可靠性和完整性
            </div>
          </div>
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon08_1.png" alt="" />
            <div class="roPR_t_t">
              文档数据库服务 DDS
            </div>
            <div class="roPR_t_d">
              支持集群和副本集部署，弹性伸缩
            </div>
          </div>
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon09.png" alt="" />
            <div class="roPR_t_t">
              分布式数据库中间件 DDM
            </div>
            <div class="roPR_t_d">
              突破容量和性能瓶颈，支持高并发访问
            </div>
          </div>
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon10.png" alt="" />
            <div class="roPR_t_t">
              数据管理服务 DAS
            </div>
            <div class="roPR_t_d">
              数据库管理专家
            </div>
          </div>
        </div>
      </div>
      <div v-if="isAct===4" class="roPR">
        <div class="roPR_t">
          安全与合规
        </div>
        <div class="flexRowAC roPR_tOut">
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon11.png" alt="" />
            <div class="roPR_t_t">
              DDoS防护 AAD
            </div>
            <div class="roPR_t_d">
              快速缓解对业务造成瘫痪的网络攻击
            </div>
          </div>
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon12.png" alt="" />
            <div class="roPR_t_t">
              Web应用防火墙 WAF
            </div>
            <div class="roPR_t_d">
              识别恶意请求特征和防御未知威胁
            </div>
          </div>
        </div>
      </div>
      <div v-if="isAct===5" class="roPR">
        <div class="roPR_t">
          容器
        </div>
        <div class="flexRowAC roPR_tOut">
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon13.png" alt="" />
            <div class="roPR_t_t">
              云容器引擎 CCE
            </div>
            <div class="roPR_t_d">
              将流量自动分发到多台云服务器
            </div>
          </div>
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon14.png" alt="" />
            <div class="roPR_t_t">
              容器镜像服务 SWR
            </div>
            <div class="roPR_t_d">
              一种支持容器镜像全生命阊期管理的服务
            </div>
          </div>
        </div>
      </div>
      <div v-if="isAct===6" class="roPR">
        <div class="roPR_t">
          应用中间件
        </div>
        <div class="flexRowAC roPR_tOut">
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon15.png" alt="" />
            <div class="roPR_t_t">
              分布式缓存服务 Redis版S
            </div>
            <div class="roPR_t_d">
              兼容Redss的高速内存数据处理引擎
            </div>
          </div>
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon16.png" alt="" />
            <div class="roPR_t_t">
              分布式消息服务 DMS
            </div>
            <div class="roPR_t_d">
              完全托管的高性能消息队列服务
            </div>
          </div>
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon17.png" alt="" />
            <div class="roPR_t_t">
              分布式消息服务 Kafka版
            </div>
            <div class="roPR_t_d">
              高吞吐、高可用的消息中间件服务
            </div>
          </div>
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon18.png" alt="" />
            <div class="roPR_t_t">
              分布式消息服务 RabbitMQ版
            </div>
            <div class="roPR_t_d">
              支持AMQP协议、兼容RabbitMQ生态
            </div>
          </div>
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon19.png" alt="" />
            <div class="roPR_t_t">
              API网关 APIG
            </div>
            <div class="roPR_t_d">
              构建、管理和部署任意规模的API服务
            </div>
          </div>
        </div>
      </div>
      <div v-if="isAct===7" class="roPR">
        <div class="roPR_t">
          管理与监督
        </div>
        <div class="flexRowAC roPR_tOut">
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon20.png" alt="" />
            <div class="roPR_t_t">
              统一身份认证服务 IAM
            </div>
            <div class="roPR_t_d">
              提供身份认证和权限管理功能
            </div>
          </div>
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon21.png" alt="" />
            <div class="roPR_t_t">
              消息通知服务 SMN
            </div>
            <div class="roPR_t_d">
              依据用户的需求主动推送通知消息
            </div>
          </div>
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon22.png" alt="" />
            <div class="roPR_t_t">
              云日志服务 LTS
            </div>
            <div class="roPR_t_d">
              提供日志收集、实时查询、存储等功能
            </div>
          </div>
        </div>
      </div>
      <div v-if="isAct===8" class="roPR">
        <div class="roPR_t">
          人工智能
        </div>
        <div class="flexRowAC roPR_tOut">
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon23.png" alt="" />
            <div class="roPR_t_t">
              人脸识别服务 FRS
            </div>
            <div class="roPR_t_d">
              人脸检测、比对，人脸库管理，静默活体检测
            </div>
          </div>
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon24.png" alt="" />
            <div class="roPR_t_t">
              图像搜索 ImageSearch
            </div>
            <div class="roPR_t_d">
              帮助客户从指定图库中搜索相同及相似图片
            </div>
          </div>
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon25.png" alt="" />
            <div class="roPR_t_t">
              文字识别 OCR
            </div>
            <div class="roPR_t_d">
              高精度识别文字，支持多场景解析与智能处理
            </div>
          </div>
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon26.png" alt="" />
            <div class="roPR_t_t">
              对话机器人服务 CBS
            </div>
            <div class="roPR_t_d">
              覆盖客服、助理等多场景文本问答与语音交互
            </div>
          </div>
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon27.png" alt="" />
            <div class="roPR_t_t">
              图像识别 Image
            </div>
            <div class="roPR_t_d">
              深度学习图像识别，精准解析视觉内容
            </div>
          </div>
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon28.png" alt="" />
            <div class="roPR_t_t">
              内容审核 Moderation
            </div>
            <div class="roPR_t_d">
              自动识别不良内容，降低违规风险
            </div>
          </div>
        </div>
      </div>
      <div v-if="isAct===9" class="roPR">
        <div class="roPR_t">
          开发与运维
        </div>
        <div class="flexRowAC roPR_tOut">
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon29.png" alt="" />
            <div class="roPR_t_t">
              流水线 CodeArts Pipeline
            </div>
            <div class="roPR_t_d">
              可视化、可定制的持续交付发布软件
            </div>
          </div>
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon30.png" alt="" />
            <div class="roPR_t_t">
              云课堂 Classroom
            </div>
            <div class="roPR_t_d">
              在线教学平台，支持全流程教学
            </div>
          </div>
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon31.png" alt="" />
            <div class="roPR_t_t">
              Astro轻应用
            </div>
            <div class="roPR_t_d">
              拖拽配置快速搭建应用
            </div>
          </div>
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon32.png" alt="" />
            <div class="roPR_t_t">
              Astro工作流 AstroFlow
            </div>
            <div class="roPR_t_d">
              自动化流程引擎服务
            </div>
          </div>
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon33.png" alt="" />
            <div class="roPR_t_t">
              Astro企业应用 AstroPro
            </div>
            <div class="roPR_t_d">
              企业数字化转型提供的元数据管理解决方案
            </div>
          </div>
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon34.png" alt="" />
            <div class="roPR_t_t">
              集成开发环境CodeArts
            </div>
            <div class="roPR_t_d">
              基于云计算的轻量级WebIDE
            </div>
          </div>
        </div>
      </div>
      <div v-if="isAct===10" class="roPR">
        <div class="roPR_t">
          企业应用
        </div>
        <div class="flexRowAC roPR_tOut">
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon35.png" alt="" />
            <div class="roPR_t_t">
              云会议 Meeting
            </div>
            <div class="roPR_t_d">
              “云端”协同的会议解决方案
            </div>
          </div>
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon36.png" alt="" />
            <div class="roPR_t_t">
              云客服
            </div>
            <div class="roPR_t_d">
              提供全渠道智能化的云联络中心服务
            </div>
          </div>
        </div>
      </div>
      <div v-if="isAct===11" class="roPR">
        <div class="roPR_t">
          云通信
        </div>
        <div class="flexRowAC roPR_tOut">
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon37.png" alt="" />
            <div class="roPR_t_t">
              消息&短信 MSGSMS
            </div>
            <div class="roPR_t_d">
              与运营商合作提供的通信服务
            </div>
          </div>
        </div>
      </div>
      <div v-if="isAct===12" class="roPR">
        <div class="roPR_t">
          视频
        </div>
        <div class="flexRowAC roPR_tOut">
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon38.png" alt="" />
            <div class="roPR_t_t">
              视频智能分析服务 VIAS
            </div>
            <div class="roPR_t_d">
              集成视频AI分析、事件感知等能力
            </div>
          </div>
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon39.png" alt="" />
            <div class="roPR_t_t">
              视频点播 VOD
            </div>
            <div class="roPR_t_d">
              视频上传、处理、加速和播放
            </div>
          </div>
          <div class="roPR_tO">
            <img class="roPR_t_img" src="@/assets/SHimg/productSH_icon40.png" alt="" />
            <div class="roPR_t_t">
              视频直播 Live
            </div>
            <div class="roPR_t_d">
              端到端视频直播解决方案
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import product5_1 from '@/assets/VLimg2.0/product5_1.png'
import product5_2 from '@/assets/VLimg2.0/product5_2.png'
import product5_3 from '@/assets/VLimg2.0/product5_3.png'
import product5_4 from '@/assets/VLimg2.0/product5_4.png'
import product5_5 from '@/assets/VLimg2.0/product5_5.png'
import product5_6 from '@/assets/VLimg2.0/product5_6.png'
import product5_7 from '@/assets/VLimg2.0/product5_7.png'
import { useRouter } from 'vue-router'

const emit = defineEmits(['closeDialog'])
let isAct = ref(0)
let p5Arr = ref([])
let roPList = ref([])
p5Arr.value = [
  { t: 'Windows', d: '版本号：V3.1.06', flag: false, img: product5_1 },
  { t: 'Android', d: '版本号：V3.1.06', flag: true, img: product5_2 },
  { t: 'iOS', d: '版本号：V3.1.06', flag: true, img: product5_3 },
  { t: 'Harmony OS', d: '版本号：V3.1.06', flag: true, img: product5_4 },
  { t: 'Linux', d: '版本号：V3.1.06', flag: false, img: product5_5 },
  { t: 'Mac OS', d: '版本号：V3.1.06', flag: false, img: product5_6 },
  { t: '银河麒麟', d: '版本号：V3.1.06', flag: false, img: product5_7 }
]
roPList.value = ['计算', '存储', '网络', '数据库', '安全与合规', '容器', '应用中间件', '管理与监督', '人工智能', '开发与运维', '企业应用', '云通信', '视频']
const router = useRouter()
const viewPath = (path) => {
  emit('closeDialog', false)
  if (router.currentRoute.value.path === path) {
    window?.scrollTo(0, 0)
  }
  router.push({ path })
}
</script>

<style scoped lang="less">
@import "src/assets/style/vars.less";

.home_page {
  position: relative;
}

.home_page.vls {
  background-color: #F5F7FC;
}

.w1380 {
  width: 1380px;
  // margin: 0 auto;
  margin-left: 200px;
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
  background-image: url('@/assets/SHimg/productSH_bg.png');
  background-size: 100% 100%;
  color: #fff;
  justify-content: space-between;
  margin-bottom: 160px;

  .platTopOutImg {
    flex-shrink: 0;
    width: 680px;
    height: auto;
    margin-left: 100px;
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

.proTitleBox {
  justify-content: center;
  color: #3D3D3D;
  font-weight: bold;
  font-size: 58px;
  padding-top: 50px;
  padding-bottom: 100px;
}

.privateCloud_c1 {
  width: 80%;
  height: auto;
}

.privateCloud_c2 {
  width: 738px;
  height: auto;
}

.privateCloud_c2 {
  width: 738px;
  height: auto;
}

.privateCloud_c5 {
  width: 660px;
  height: auto;
}

.privateCloud_c6 {
  width: 643px;
  height: auto;
}

.proTitleBox_c_t {
  color: #717781;
  font-weight: normal;
  font-size: 20px;
  text-align: left;
  padding-top: 30px;
}

.proHot {
  gap: 10px;
  color: #999999;
  font-weight: normal;
  font-size: 16px;
  text-align: left;

  .proHotImg {
    width: 22px;
    height: 22px;
  }

  > span {
    color: #333333;
    font-weight: normal;
    font-size: 16px;
    text-align: left;
  }
}

.proTitleBox.roPBoxOut {
  align-items: flex-start;

  .roPBox {
    width: 380px;
    flex-shrink: 0;
    margin-right: 50px;

    .roPItem {
      color: #666666;
      font-weight: normal;
      font-size: 18px;
      text-align: left;
      padding-bottom: 20px;

      > .act {
        padding-bottom: 4px;
        border-bottom: 4px solid #2278FF;
      }

      > span {
        cursor: pointer;
      }
    }
  }

  .roPR {
    .roPR_t {
      color: #333333;
      font-weight: bold;
      font-size: 24px;
      text-align: left;
      padding-bottom: 20px;
    }

    .roPR_tOut {
      gap: 20px;
      flex-wrap: wrap;
    }

    .roPR_tO {
      width: 314px;
      flex-shrink: 0;
      background-color: #fff;
      opacity: 1;
      border-radius: 16px;
      background: #FFFFFF;
      padding: 20px;
    }

    .roPR_t_img {
      width: 58px;
      height: 58px;
    }

    .roPR_t_t {
      padding: 12px 0;
      color: #333333;
      font-weight: bold;
      font-size: 18px;
      text-align: left;

    }

    .roPR_t_d {
      color: #999999;
      font-weight: normal;
      font-size: 14px;
      text-align: left;
    }
  }
}

.allProduct{
cursor: pointer;
  font-size: 28px;
  margin-bottom: 20px;
}

.useBox{
  margin-bottom: 30px;
}

:deep(.el-input.themeInput){
  width: 380px;
  height: 52px;
  --el-input-border-radius:26px
}

:deep(.el-input-group__prepend){
  padding-right: 10px;
  background-color: #fff;
  box-shadow: none;
}

:deep(.el-input__wrapper){
  padding-left: 0;
  font-size: 18px;
  border: none;
  box-shadow: none;
}

</style>
