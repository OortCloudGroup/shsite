<template>
  <div class="page_container">
    <div class="pageMb mb" :class="{menu:muenShow}" @click="muenShow=false">
      <el-config-provider :locale="localezhCn">
        <!--菜单-->
        <div v-if="muenShow" class="menuTBox">
          <div class="menuTabBox">
            <div class="mb_hea_box flexRowAC" @click.stop="muenShow=true">
              <div class="flexRowAC">
                <img class="nuimg" src="@/assets/VLimg/menu_.png" alt="" />
                <el-dropdown v-if="langText" :hide-on-click="false" @command="toggleLang">
                  <div class="flexRowAC mb_langBox">
                    <img class="demo_img" src="@/assets/VLimg/lang.png" alt="" />
                    <div class="langBoxT">
                      {{ langText }}
                    </div>
                    <el-icon color="#333">
                      <CaretBottom />
                    </el-icon>
                  </div>
                  <template #dropdown>
                    <el-dropdown-menu class="mb_langItem" style="font-size: 18px">
                      <el-dropdown-item command="zh" :disabled="lang==='zh'">
                        简体中文
                      </el-dropdown-item>
                      <el-dropdown-item command="en" :disabled="lang==='en'">
                        English
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </div>
              <img class="nuimg1" src="@/assets/VLimg/logo1.png" alt="" />
            </div>
            <div class="menuItem" :class="{act:nav==='/mb'}" @click="handleCommand('/mb')">
              {{ $t('menu./') }}
            </div>
            <div class="menuItem" :class="{act:nav==='/mb/mb_product'}" @click="handleCommand('/mb/mb_product')">
              {{ $t('menu./product') }}
            </div>
            <div class="menuItem" :class="{act:nav==='/mb/mb_aboutUs'}" @click="handleCommand('/mb/mb_aboutUs')">
              {{ $t('menu./aboutUs') }}
            </div>
            <div class="menuItem" :class="{act:nav==='/mb/mb_contactUs'}" @click="handleCommand('/mb/mb_contactUs')">
              {{ $t('menu./contactUs') }}
            </div>
          </div>
        </div>
        <!--内容-->
        <div
          id="id_start"
          class="Setp page_bg"
          :class="[{bg_h:nav==='/mb'},{bg_p:nav==='/mb/mb_product'},{bg_au:nav==='/mb/mb_aboutUs'},{bg_cu:nav==='/mb/mb_contactUs'}]"
        >
          <div class="mb_hea_box flexRowAC" @click.stop="muenShow=true">
            <img class="nuimg" src="@/assets/VLimg/menu.png" alt="" />
            <img class="nuimg1" src="@/assets/VLimg/mb/logo.png" alt="" />
          </div>
          <div v-if="nav==='/mb'" class="bg_home">
            <div class="kingdom oort o1">
              {{ $t('layouts.hT1') }}
            </div>
            <div class="kingdom oort">
              {{ $t('layouts.hT11') }}
            </div>
            <div class="desc">
              <div class="oort">
                {{ $t('layouts.hT2') }}
              </div>
            </div>
          </div>
          <div v-if="nav==='/mb/mb_product'" class="bg_pro">
            <div class="kingdom">
              {{ $t('layouts.pT1') }}
            </div>
            <div class="desc">
              {{ $t('layouts.pT2') }}
            </div>
          </div>
          <div v-if="nav==='/mb/mb_aboutUs'" class="bg_pro">
            <div class="kingdom">
              {{ $t('layouts.auT1') }}
            </div>
            <div class="desc">
              {{ $t('layouts.auT2') }}
            </div>
          </div>
          <div v-if="nav==='/mb/mb_contactUs'" class="bg_pro">
            <div class="kingdom">
              {{ $t('layouts.cuT1') }}
            </div>
            <div class="desc">
              {{ $t('layouts.cuT2') }}
            </div>
          </div>
        </div>
        <div class="main_body">
          <slot />
          <common-bottom-mb @handle="bgHandle" />
        </div>
      </el-config-provider>
    </div>
  </div>
</template>

<script setup name="mb_home">
import { ref, watch } from '@vue/runtime-core'
import CommonBottomMb from '@/components/commonBottomMb.vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { onMounted } from 'vue'

let langText = ref('')
const { locale } = useI18n()
let lang = ref('')
const router = useRouter()
const localezhCn = zhCn
let nav = ref(0)
let muenShow = ref(false)
const bgHandle = (val) => {
  nav.value = val
}
const handleCommand = (command) => {
  muenShow.value = false
  router.push(command)
}

const toggleLang = (val) => {
  lang.value = val === 'en' ? 'en' : 'zh'
  langText.value = val === 'en' ? 'English' : '简体中文'
}

onMounted(() => {
  lang = locale
  toggleLang(lang.value)
})

watch(() => router.currentRoute.value, (newValue) => {
  nav.value = newValue.path
}, { immediate: true })
</script>

<style lang="less" scoped>
.mb_langItem {
  font-size: 18px;
  :deep(.el-dropdown-menu__item) {
    height: 48px;
    line-height: 48px;
    padding: 0 12px;
    font-size: 18px!important;
  }
}

.pageMb {
  height: auto;
  overflow: auto;
  width: 100%;
}
:deep(.mb_langBox) {
  cursor: pointer;
  background: rgba(216, 216, 216, 0.00);
  padding: 0 12px;
  border: none;

  .langBoxT {
    font-size: 14px;
    color: #333;
  }

  img.demo_img {
    width: 16px;
    height: 16px;
  }
  .el-icon,svg{
    width: 14px;
    height: 14px;
  }
}

.main_body {
  background-color: #F7F7F7;
  min-height: calc(100vh - 140px - 300px);
}

.bg_h {
  background-image: url('@/assets/VLimg/mb/mb_banner1.png');
}

.bg_p {
  background-image: url('@/assets/VLimg/bg/banner2.png');
}

.bg_au {
  background-image: url('@/assets/VLimg/bg/banner3.png');
}

.bg_cu {
  background-image: url('@/assets/img/contactUs/bg.png');
}

.bg_s {
  background-image: url('@/assets/img/ser_bg.png');
}

.page_bg {
  height: 240px;
  background-size: 100% 100%;
  background-color: #333;
}

.bg_mPaas {
  height: 70vh;
  background-size: 100% 100%;
  background-image: url('@/assets/img/productmPaas/bg.png');
}

.bg_home {
  .kingdom {
    padding-right: 24px;
    margin: 0 auto;
    font-style: italic;
    font-size: 20px;
    color: #FFFFFF;
    font-weight: 900;
  }

  .kingdom.oort {
    text-align: right;
    font-style: normal;

    &.o1 {
      padding-top: 30px;
    }
  }

  .desc > .oort {
    float: right;
    font-size: 12px;
    width: 88%;
    text-align: right;
    padding-right: 24px;
  }

  .desc {
    padding-top: 20px;
    //width: 1500px;
    margin: 0 auto;
    font-size: 28px;
    color: #FFFFFF;
    font-weight: 400;
  }
}

.bg_pro {
  .kingdom {
    padding-top: 60px;
    text-align: center;
    margin: 0 auto;
    font-size: 20px;
    color: #FFFFFF;
    font-weight: 700;
  }

  .desc {
    padding-top: 20px;
    text-align: center;
    //width: 1500px;
    margin: 0 auto;
    font-size: 14px;
    color: #FFFFFF;
    font-weight: 400;
  }
}

.productmPaas {
  padding-left: 360px;

  .kingdom {
    padding-top: 170px;
    font-size: 40px;
    color: #FFFFFF;
    font-weight: bold;
  }

  .desc {
    padding-top: 28px;
    //width: 560px;
    font-size: 14px;
    color: #FFFFFF;
  }
}

.mb_hea_box {
  padding-right: 12px;
  justify-content: space-between;
  height: 46px;
  .nuimg{
    margin-left: 10px;
    width: 24px;
    height: 24px;
  }
  .nuimg1{
    width: 92px;
    height: 24px;
    margin-right: 12px;
  }
}

.mb.menu {
  height: 100vh;
  overflow: hidden;
  position: relative;

}

.menuTBox {
  overflow: hidden;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.30);
}

.menuTabBox {
  background-color: #fff;

  .menuItem {
    width: 100%;
    height: 60px;
    line-height: 60px;
    padding-left: 20px;
    font-size: 18px;
    color: #333;
    letter-spacing: 0;
    font-weight: 500;
  }

  .menuItem.act {
    color: #EB691C;
  }
}
</style>

