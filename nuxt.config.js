// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

export default defineNuxtConfig({
  srcDir: 'src',

  alias: {
    '~': resolve(__dirname, './src'),
    '@': resolve(__dirname, './src')
  },

  imports: {
    autoImport: true // 默认自动引入
  },

  modules: ['@element-plus/nuxt', '@pinia/nuxt'],

  css: [
    '@/assets/style/common.css',
    '@/assets/style/vars.less',
    '@/assets/style/fullpage.css',
    'element-plus/dist/index.css'
  ],

  devServer: {
    port: 8080
  },

  ssr: false,

  app: {
    rootId: '_oort',
    buildAssetsDir: '/asset/',
    head: {
      title: 'OORT.SH 托管平台,面向开发者 ——“种下智慧树，结出百香果',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=4' }
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:title', content: 'OORT.SH 托管平台,面向开发者 ——“种下智慧树，结出百香果' },
        { property: 'og:description', content: '奥尔特云(深圳)智慧科技有限公司是领先的行业数字化转型、公共安全“私有云智能化应用建设解决方案”提供商，为各行业智能化应用建设提供产品研发、生产、安装和技术服务，引领信息化智能化应用建设模式革新。核心团队由公安行业智能化应用建设资深人士组成，拥有丰富的公安行业研发、咨询、产品、交付、渠道、市场运营经验' },
        { name: 'description', content: '奥尔特云(深圳)智慧科技有限公司是领先的行业数字化转型、公共安全“私有云智能化应用建设解决方案”提供商，为各行业智能化应用建设提供产品研发、生产、安装和技术服务，引领信息化智能化应用建设模式革新。核心团队由公安行业智能化应用建设资深人士组成，拥有丰富的公安行业研发、咨询、产品、交付、渠道、市场运营经验' },
        { name: 'keywords', content: 'OORT.SH 托管平台,面向开发者 ——“种下智慧树，结出百香果，奥陌陌，警务宝，一体化智慧基层平台，治安宝，奥尔特云，公共安全，移动办公，私有化部署，天琴智慧，午托管理，人脸识别考勤，托管人脸识别考勤，移动警务，智慧警务，即时通讯服务，安全加密通讯，实时音视频服务，私有化部署的移动安全办公云平台，微服务架构，分层解耦，共享服务，去烟囱，去竖井' }
      ],
      script: [
        { src: '/fullpage.js', type: 'text/javascript', body: true }
        // { src: 'http://map.qq.com/api/gljs?v=2.exp&key=QJ2BZ-UC26D-DR64X-HDFRX-L6KRE-VABBM', type: 'text/javascript' }
        // { src: 'http://map.qq.com/api/js?v=2.exp&callback=init&key=QJ2BZ-UC26D-DR64X-HDFRX-L6KRE-VABBM', type: 'text/javascript' }
      ]
    }
  },

  postcss: {
    plugins: {
      'postcss-px-to-viewport': {
        unitToConvert: 'px', // 默认值`px`，需要转换的单位
        viewportWidth: 1920, // 视窗的宽度,对应设计稿宽度
        // viewportHeight: 1080, // 视窗的高度, 根据375设备的宽度来指定，一般是667，也可不配置
        unitPrecision: 5, // 指定`px`转换为视窗单位值的小数位数
        propList: ['*'], // 转化为vw的属性列表
        viewportUnit: 'vw', // 指定需要转换成视窗单位
        fontViewportUnit: 'vw', // 字体使用的视窗单位
        selectorBlaskList: ['.ignore-'], // 指定不需要转换为视窗单位的类
        mediaQuery: false, // 允许在媒体查询中转换`px`
        minPixelValue: 1, // 小于或等于`1px`时不转换为视窗单位
        replace: true, // 是否直接更换属性值而不添加备用属性
        exclude: [/mb/, /mobile.vue/, /commonBottomMb.vue/], // 忽略某些文件夹下的文件或特定文件
        landscape: false, // 是否添加根据landscapeWidth生成的媒体查询条件 @media (orientation: landscape)
        landscapeUnit: 'vw', // 横屏时使用的单位
        landscapeWidth: 1920 // 横屏时使用的视窗宽度
      }
    }
  },

  compatibilityDate: '2025-01-15'
})