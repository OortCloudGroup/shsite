<template>
  <div class="page_container">
    <nav-header />
    <div class="error">
      <div class="error_body">
        <img src="@/assets/img/404.png" />
        <h1> 页面不存在！！！</h1>
        <span>错误信息: {{ props.error.message }}</span>
        <nuxt-link to="/zh/" class="error_body_link">
          返回首页
        </nuxt-link>
      </div>
    </div>
    <Bottom />
  </div>
</template>

<script setup>

const props = defineProps({
  error: Object
})

</script>

<style scoped lang="less">
@import "src/assets/style/vars.less";

  .error  {
    width: 100%;
    height: calc(100vh - 140px - 300px);
    .flexRow();
    .flexCenter();
    &_body {
      width: 400px;
      margin:  0 auto;
      display: flex;
      flex-direction: column;
      img {
        width: 300px;
        height: auto;
        margin: 20px;
      }
      h1 {
        margin:10px 0px;
        color: @font-color-b6;
        font-size: 40px;
      }
      span {
        margin:10px 0px;
        font-size: 20px;
        color: @font-color-b6;
      }
      &_link {
        margin:10px 0px;
        color: @main-color-light;
        font-size: 20px;
      }
    }
  }
</style>
