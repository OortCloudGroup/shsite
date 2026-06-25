<template>
  <div class="home_page vls">
    <!-- <div class="w1380 top">
      <div class="flexRow">
        <div>
          <img class="oort_logo" src="@/assets/img/oortLogo.png" alt="" />
        </div>
        <div class="flexRow">
          <div>
            <div class="title1">
              OortCloud AI Studio
            </div>
            <div class="title2">
              万物智能、自主服务 —— 场景化实战智能体平台
            </div>
          </div>
        </div>
      </div>
      <img class="VLStream_top" src="@/assets/img/oortVS_img1.png" alt="" />
    </div> -->
    <div class="hearder">
      <div class="hearder_title">
        <img src="@/assets/software/oortVS_img4.png" alt="" />
        <div>OortCloud AI Studio</div>
      </div>
      <div class="hearder_title2">
        OortCloud AI 原生 IDE，智能编码，一触即发
      </div>
      <div class="buttoms">
        <div class="buttom1">
          立即下载
        </div>
        <div class="buttom2">
          安排演示
        </div>
      </div>
      <img src="@/assets/software/oortVS_img2.png" alt="" />
      <img class="robort" src="@/assets/software/oortVS_img3.png" alt="" />
    </div>
    <!-- 安全可靠的开发环境 -->
    <div class="w1380">
      <div class="title1">
        安全可靠的开发环境
      </div>
      <div class="content">
        无需下载，无需配置，在浏览器中一键初始化开发环境
      </div>
      <div class="proTitleBox flexRowAC">
        <div class="item_first">
          <div class="titleSize">
            支持多种方式创建项目
          </div>
          <div class="contentSize">
            支持从模板创建项目以及从 Git 导入项目，满足不同项目开发需求
          </div>
        </div>
        <div class="item_second">
          <div class="titleSize">
            开箱即用的开发
            <br />
            环境
          </div>
          <div class="contentSize">
            无需配置开发环境，选择模板立即
            <br />
            开始开发
          </div>
        </div>
        <div class="item_third">
          <div class="titleSize">
            快速稳定
          </div>
          <div class="contentSize">
            秒级创建多区域、多集群的部署，
            <br />
            提供稳定、低延迟的保证
          </div>
        </div>
      </div>
    </div>
    <!-- 开发支撑能力 -->
    <div class="w1380">
      <div class="title1">
        开发支撑能力
      </div>
      <div class="content">
        基于H5移动中台的“云+端”一体化应用开发生态
      </div>
      <div class="box1 flexRow">
        <div class="box1_item">
          <img src="@/assets/img/oortVS_img2.png" alt="" />
          <span>信息化统筹建设的抓手</span>
        </div>
        <div class="box1_item">
          <img src="@/assets/img/oortVS_img3.png" alt="" />
          <span>集约化建设的利器</span>
        </div>
      </div>
      <div class="flexRow" style="justify-content: space-between;">
        <img src="@/assets/img/oortVS_img4.png" alt="" class="img1" />
        <img src="@/assets/img/oortVS_img5.png" alt="" class="img2" />
      </div>
      <div class="box2">
        <div class="title3">
          开发支撑能力，支持个性化需求快速迭代：构建统一门户、统一用户、统一服务、统一<br />
          授权、统一数据对标等。避免业务系统重复建设、降低开发成本、缩短项目周期。<br />
          主要使用成效，解决如下问题：
        </div>
        <div class="list_content">
          1、建设应用生态。<br />
          2、避免信息孤岛。<br />
          3、拆除信息烟囱。<br />
          4、避免重复开发。<br />
          对各业务应用开发、发布、管理、下载、使用、统计、维护等工作，做到各业务应用的<br />
          全生命周期的管理。
        </div>
      </div>
      <div class="box3 flexRowBetween">
        <div class="box3_item">
          <img src="@/assets/img/oortVS_img6.png" alt="" />
          <div class="title3 box_spacing" style="font-size: 700;">
            终端业务服务能力集成
          </div>
          <div class="content">
            一系列的原生服务化能力支持包（个性化需求快速迭代底座，包括需要
            在轻应用中调用核心层中的原生能力如身份证识别、车牌识别、OCR、
            位置信息等原生能力的集合）。
          </div>
        </div>
        <div class="box3_item">
          <img src="@/assets/img/oortVS_img7.png" alt="" />
          <div class="title3 box_spacing" style="font-size: 700;">
            云端业务服务能力集成
          </div>
          <div class="content">
            以及统一消息推送服务，移动数据分析，应用安全加固等，向开发者提
            供更加全面的移动研发中台，也便于对已有 App 进行重构。
          </div>
        </div>
      </div>
    </div>
    <!-- “奥尔特云”开发平台 -->
    <div class="w1380">
      <div class="title1">
        "奥尔特云"开发平台，保障开发环节信息安全和隐私、<br />
        网络安全等，避免信息泄露，统一和标准化的环境
      </div>
      <div class="img_box">
        <img src="@/assets/img/oortVS_img8.png" alt="" />
      </div>
    </div>
    <!-- 支持全栈开发 -->
    <div class="w1380">
      <div class="title1">
        支持全栈开发，提供智能补全、智能预测、智能问答等能力，<br />
        节省开发时间，释放脑海中的创造力
      </div>
      <div class="flexRowBetween colMenu">
        <div class="left-menu">
          <div
            v-for="(item, index) in practiceItems"
            :key="index"
            class="menu-item"
            :class="{ active: activeIndexpractice === index }"
            @click="selectpracticeMenu(index)"
          >
            <div class="menu-content-wrapper">
              <div class="line" />
              <div class="text-content">
                <div class="menu-text">
                  {{ item.title }}
                </div>
                <div v-show="activeIndexpractice === index" class="content-detail">
                  <p>{{ currentpractice.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right-content">
          <div>
            <img :src="currentpractice.image" :alt="currentpractice.title" class="content-image" />
          </div>
        </div>
      </div>
    </div>
    <div class="w1380">
      <div class="title1">
        支持丰富的编程语言和主流 IDE
      </div>
      <div class="box7">
        <img src="@/assets/img/oortVS_img16.png" alt="" />
      </div>
      <div class="flexRowBetween box4">
        <img src="@/assets/img/oortVS_img17.png" alt="" />
        <img src="@/assets/img/oortVS_img18.png" alt="" />
      </div>
    </div>
    <div class="w1380">
      <div class="title1" style="text-align: center;">
        开始使用 OortCloud AI Studio
      </div>
      <div class="box5">
        <div class="box6">
          立即体验
        </div>
        <img src="@/assets/img/oortVS_img19.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import oortImg1 from '@/assets/img/oortVS_img9.png'
import oortImg2 from '@/assets/img/oortVS_img10.png'
import oortImg3 from '@/assets/img/oortVS_img11.png'
import oortImg4 from '@/assets/img/oortVS_img12.png'
import oortImg5 from '@/assets/img/oortVS_img13.png'
import oortImg6 from '@/assets/img/oortVS_img14.png'
import oortImg7 from '@/assets/img/oortVS_img15.png'
import oortImg8 from '@/assets/img/oortVS_img20.png'
import oortImg9 from '@/assets/img/oortVS_img21.png'
import oortImg10 from '@/assets/img/oortVS_img22.png'

definePageMeta({
  layout: 'site-new'
})
const router = useRouter()

// 支持全栈开发
const practiceItems = ref([
  {
    title: '前端开发',
    description: '支撑 VUE 前端开发，支持基于 OortCloud mPaaS 开发轻应用',
    image: oortImg1
  },
  {
    title: '后端服务开发',
    description: '支持 Python、Go、Java等语言开发后端服务，持基于 OortCloud aPaaS 开发后端微服务 ',
    image: oortImg2
  },
  {
    title: 'AI Agent 开发',
    description: '支持 AI 智能体开发',
    image: oortImg3
  },
  {
    title: '网站、小程序开发',
    description: '支持网站、公众号、小程序开发',
    image: oortImg4
  },
  {
    title: '低代码开发',
    description: '支持安卓原生、移动端H5、VUE、uni-app、MUI、PC Web、PC 原生低代码开发',
    image: oortImg5
  },
  {
    title: '无代码开发',
    description: '支持图表设计、门户设计、大屏设计、报表设计、表单设计、应用设计无代码开发',
    image: oortImg6
  },
  {
    title: '数据开发 ',
    description: '无下载、图形化拖拽开发，覆盖数据处理、分析、可视化等全流程。一键初始化浏览器环境',
    image: oortImg7
  },
  {
    title: 'GIS 开发 ',
    description: '依托地理信息系统，实现地图展示、位置定位、轨迹查询等功能，服务多行业空间场景的开发工作',
    image: oortImg8
  },
  {
    title: '模型标注与训练 ',
    description: '先对数据进行精准标注，构建高质量数据集，再开展模型训练，优化参数提升 AI 性能',
    image: oortImg9
  },
  {
    title: 'AIGC生成 ',
    description: '依托算法与大数据，可自动创作文本、图像、音频等多元内容，高效赋能创作、设计、传媒等领域',
    image: oortImg10
  }
])
const activeIndexpractice = ref(0)
const currentpractice = computed(() => {
  return practiceItems.value[activeIndexpractice.value]
})
function selectpracticeMenu(index) {
  activeIndexpractice.value = index
}
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
  padding-bottom: 160px;
}
.oort_logo{
  width: 67px;
  height: 80px;
  margin-right: 10px;
}
.top{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
}

.flexRow{
  display: flex;
}
.flexRowBetween{
  display: flex;
  justify-content: space-between;
}
.title1{
  font-family: OPPOSans;
  font-size: 50px;
  font-weight: bold;
  color: #3D3D3D;
  margin-bottom: 20px;
}
.title2{
  font-size: 32px;
  font-weight: normal;
  color: #717781;
}
.title3{
  font-size: 24px;
  font-weight: 400;
  color: #3D3D3D;
}
.content{
  font-size: 20px;
  font-weight: normal;
  color: #717781;
}

.proTitleBox{
  margin-top: 80px;
  img{
    width: 1380px;
    height: 640px;
  }
}

.item_first{
  width: 703px;
  height: 568px;
  margin-right: 20px;
  border: 1px solid #b2bac8;
  background: url('@/assets/img/cjxm.png');
  background-size: cover;
  border-radius: 24px;
  text-align: center;
}
.item_second{
  width: 338px;
  height: 568px;
  margin-right: 20px;
  border: 1px solid #b2bac8;
  background: url('@/assets/img/kfhj.png');
  background-size: cover;
  border-radius: 24px;
  text-align: center;
}

.item_third{
  width: 338px;
  height: 568px;
  border: 1px solid #b2bac8;
  background: url('@/assets/img/kswd.png');
  background-size: cover;
  border-radius: 24px;
  text-align: center;
}
.titleSize{
  font-size: 40px;
  font-weight: bold;
  line-height: 60px;
  margin-top: 40px;
}
.contentSize{
  font-size: 20px;
  font-weight: normal;
  color: #717781;
  line-height: 30px;
  margin-top: 24px;
}
.box1{
  margin: 60px 0;
}
.box1_item{
  display: flex;
  padding: 0 26px;
  margin-right: 20px;
  height: 80px;
  background: linear-gradient(286deg, #42A9FF 14%, #2278FF 76%);
  align-items: center;
  border-radius: 24px;
  span{
    font-size: 24px;
    font-weight: bold;
    color: #fff;
  }
}
.img1{
  width: 730px;
}
.img2{
  width: 628px;
}
.box2{
  text-align: center;
  margin: 80px 0;
}
.list_content{
  font-size: 24px;
  font-size: 700;
  margin-top: 50px;
}
.box3_item{
  padding: 25px;
  width: 630px;
  height: 270px;
  background-color: #E2E3E5;
  border-radius: 24px;
  img{
    width: 48px;
    height: 48px;
  }
}
.box_spacing{
  margin: 16px 0;
}
.img_box{
  text-align: center;
  margin-top: 80px;
}
.left-menu {
  width: 460px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-right: 16px;

  .menu-item {
    position: relative;
    cursor: pointer;

    &:last-child {
      border-bottom: none;
    }

    &.active {
      .menu-text {
        color: #333333;
        font-size: 50px;
        line-height: 82px;
      }
    }

    .menu-content-wrapper {
      display: flex;
      gap: 16px;
      position: relative;
    }

    .line {
      position: absolute;
      left: -24px;
      top: 0;
      width: 6px;
      height: 48px;
      background-color: #E8EAED;
      transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      border-radius: 33px;
    }

    &.active .line {
      height: 100%;
      background-color: #2E63FF;
    }

    .text-content {
      flex: 1;
    }

    .menu-text {
      transition: all 0.3s ease;
      color: #666666;
      font-weight: bold;
      font-size: 32px;
      line-height: 48px;
    }

    .content-detail {
      p {
        color: #717781;
        font-size: 20px;
        line-height: 30px;
        margin-top: 20px;
      }
    }
  }
}
.colMenu{
  margin-top: 80px;
}
.content-image{
  width: 800px;
  height: 600px;
}
.box7{
  margin-top: 80px;
  text-align: center;
  img{
    width: 1235px;
    height: 188px;
  }
}

.box4{
  width: 760px;
  height: 360px;
  margin: 80px auto;
  margin-bottom: 0;
}
.box5{
  position: relative;
  img{
    width: 106px;
    height: 64px;
    position: absolute;
    left: 850px;
    top: 0;
  }
}
.box6{
  cursor: pointer;
  width: fit-content;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  background-color: #2278FF;
  color: #fff;
  padding: 20px 60px;
  margin: 80px auto;
  margin-bottom: 0;
}
.hearder{
  position: relative;
  padding: 240px 262px;
  padding-bottom: 0;
  background: url(@/assets/software/oortVS_img1.png);
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 130px;
  text-align: center;
  .hearder_title{
    display: flex;
    justify-content: center;
    font-size: 50px;
    font-weight: bold;
    color: #FFFFFF;
    padding-bottom: 40px;
    img{
      width: 66px;
      height: 80px;
      margin-right: 20px;
    }
  }
  .hearder_title2{
    font-size: 32px;
    font-weight: 500;
    color: #FFFFFF;
    padding-bottom: 40px;
  }
  .buttoms{
    display: flex;
    justify-content: center;
    padding-bottom: 90px;
    .buttom1, .buttom2{
      cursor: pointer;
      padding: 20px 40px;
      border-radius: 8px;
    }
    .buttom1{
      background-color: #fff;
      color: #2278FF;
      margin-right: 20px;
    }
    .buttom2{
      color: #FFFFFF;
      border: 1px solid #FFFFFF;
    }
  }
  img{
    width: 100%;
    height: auto;
  }
  .robort{
    position: absolute;
    width: 392px;
    height: 514px;
    right: 250px;
    bottom: 600px;
  }
}
</style>
