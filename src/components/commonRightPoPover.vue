<template>
  <div class="pover_right">
    <div class="pover_apps">
      <NuxtLink :to="`${config.kztURL}?toPage=person`" target="_blank">
        <div class="pover_apps_item" @click="gotoApp('person')">
          <img src="@/assets/navheader/person.png" alt="" />
          <div class="pover_apps_item_name">
            个人中心
          </div>
        </div>
      </NuxtLink>
      <NuxtLink :to="config.kztURL" target="_blank">
        <div class="pover_apps_item">
          <img src="@/assets/navheader/scl.png" alt="" />
          <div class="pover_apps_item_name">
            生产力平台
          </div>
        </div>
      </NuxtLink>
      <NuxtLink to="https://da.oortcloudsmart.com/zh/" target="_blank">
        <div class="pover_apps_item">
          <img src="@/assets/navheader/oortda.png" alt="" />
          <div class="pover_apps_item_name">
            OORT.DA
          </div>
        </div>
      </NuxtLink>
      <NuxtLink to="https://vls.oortcloudsmart.com/zh/" target="_blank">
        <div class="pover_apps_item">
          <img src="@/assets/navheader/vls.png" alt="" />
          <div class="pover_apps_item_name">
            VLStream
          </div>
        </div>
      </NuxtLink>
      <NuxtLink to=" https://sh.oortcloudsmart.com/zh/" target="_blank">
        <div class="pover_apps_item">
          <img src="@/assets/navheader/oortsh.png" alt="" />
          <div class="pover_apps_item_name">
            OORT.SH
          </div>
        </div>
      </NuxtLink>
      <div class="pover_apps_item">
        <img src="@/assets/navheader/oortone.png" alt="" />
        <div class="pover_apps_item_name">
          OortCloudOne
        </div>
      </div>
      <NuxtLink :to="config.kztURL" target="_blank">
        <div class="pover_apps_item">
          <img src="@/assets/navheader/yp.png" alt="" />
          <div class="pover_apps_item_name">
            云盘
          </div>
        </div>
      </NuxtLink>
      <NuxtLink :to="config.kztURL" target="_blank">
        <div class="pover_apps_item">
          <img src="@/assets/navheader/yxc.png" alt="" />
          <div class="pover_apps_item_name">
            云相册
          </div>
        </div>
      </NuxtLink>
      <NuxtLink :to="config.kztURL" target="_blank">
        <div class="pover_apps_item">
          <img src="@/assets/navheader/ywd.png" alt="" />
          <div class="pover_apps_item_name">
            云文档
          </div>
        </div>
      </NuxtLink>
      <NuxtLink :to="config.kztURL" target="_blank">
        <div class="pover_apps_item">
          <img src="@/assets/navheader/wqd.png" alt="" />
          <div class="pover_apps_item_name">
            云清单
          </div>
        </div>
      </NuxtLink>
      <NuxtLink :to="config.kztURL" target="_blank">
        <div class="pover_apps_item">
          <img src="@/assets/navheader/ybwl.png" alt="" />
          <div class="pover_apps_item_name">
            云备忘录
          </div>
        </div>
      </NuxtLink>
      <NuxtLink :to="config.kztURL" target="_blank">
        <div class="pover_apps_item">
          <img src="@/assets/navheader/dzyj.png" alt="" />
          <div class="pover_apps_item_name">
            电子邮件
          </div>
        </div>
      </NuxtLink>
      <NuxtLink :to="config.kztURL" target="_blank">
        <div class="pover_apps_item">
          <img src="@/assets/navheader/txl.png" alt="" />
          <div class="pover_apps_item_name">
            通讯录
          </div>
        </div>
      </NuxtLink>
      <NuxtLink :to="config.kztURL" target="_blank">
        <div class="pover_apps_item">
          <img src="@/assets/navheader/news.png" alt="" />
          <div class="pover_apps_item_name">
            新闻推送
          </div>
        </div>
      </NuxtLink>
      <NuxtLink :to="config.kztURL" target="_blank">
        <div class="pover_apps_item">
          <img src="@/assets/navheader/ykt.png" alt="" />
          <div class="pover_apps_item_name">
            云课堂
          </div>
        </div>
      </NuxtLink>
      <NuxtLink :to="config.kztURL" target="_blank">
        <div class="pover_apps_item">
          <img src="@/assets/navheader/jstx.png" alt="" />
          <div class="pover_apps_item_name">
            即时通讯
          </div>
        </div>
      </NuxtLink>
      <NuxtLink :to="config.kztURL" target="_blank">
        <div class="pover_apps_item">
          <img src="@/assets/navheader/zhsp.png" alt="" />
          <div class="pover_apps_item_name">
            智慧审批
          </div>
        </div>
      </NuxtLink>
    </div>
    <div class="more_apps">
      <NuxtLink :to="config.kztURL" target="_blank">
        <div class="more_apps_tips">
          <span>更多OORT应用</span>
        </div>
      </NuxtLink>
    </div>
    <!-- <div class="pover_more">
      <div class="pover_more_item" @click="moreOpr('resetPassword')">
        <span>重置密码</span>
        <el-icon><ArrowRightBold /></el-icon>
      </div>
      <div class="pover_more_item" @click="moreOpr('changeTheme')">
        <span>切换主题</span>
        <el-icon><ArrowRightBold /></el-icon>
      </div>
      <div class="pover_more_item" @click="moreOpr('changeTenant')">
        <span>切换租户</span>
        <el-icon><ArrowRightBold /></el-icon>
      </div>
      <div class="pover_more_item" @click="moreOpr('logout')">
        <span>退出登录</span>
        <el-icon><ArrowRightBold /></el-icon>
      </div>
    </div> -->
  </div>
</template>

<script setup>
// import { ArrowRightBold } from '@element-plus/icons-vue'
// import { useRouter } from 'vue-router'

// const emits = defineEmits(['moreOpr'])
// const moreOpr = (action) => {
//   emits('moreOpr', action)
// }

import config from '@/config/index.js'

// const router = useRouter()
const gotoApp = (action) => {
  switch (action) {
    case 'person':
      break
  }
}

</script>

<style lang="scss">

.pover_right {
  border-radius: 10px;
  background-color: #EDF3F9;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.pover_apps {
  display: flex;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 98%;
  background-color: #fff;
  border-radius: 10px;
}

.pover_apps_item:hover {
  background-color: #EDF3F9;
  border-radius: 10px;
}

.pover_apps_item {
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8px 6px;
  justify-content: center;
  cursor: pointer;
  img {
    width: 48px;
    height: 48px;
  }
  div {
    margin-top: 10px;
    font-size: 18px;
    color: #3D3D3D;
  }
}

.pover_more {
  width: 98%;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}

.pover_more_item:hover{
  background-color: #EDF3F9;
  border-radius: 10px;
}

.pover_more_item {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 32px;
  margin: 4px 8px;
  padding:0  12px;;
  background-color: #fff;
  span {
    font-size: 18px;
    color: #3D3D3D;
  }
}

.more_apps {
  height: 48px;
  margin: 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.more_apps_tips {
  border-radius: 136px 136px 136px 136px;
  border: 1px solid #2278FF;
  display: flex;
  align-items: center;
  justify-content: center;
  padding:2px 12px;
  cursor: pointer;
  span {
    color: #2278FF;
    font-size: 18px;
  }
}

</style>
