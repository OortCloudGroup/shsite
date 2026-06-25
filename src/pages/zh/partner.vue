<template>
  <div class="home_page vls">
    <div class="productBox w1380">
      <div class="flexRowAC cooperatePar">
        <img class="cooperateParImg" src="@/assets/img/hardware_hzhb1.png" alt="" />
        <img class="cooperateParImg" src="@/assets/img/hardware_hzhb2.png" alt="" />
        <img class="cooperateParImg" src="@/assets/img/hardware_hzhb3.png" alt="" />
        <img class="cooperateParImg" src="@/assets/img/hardware_hzhb4.png" alt="" />
        <img class="cooperateParImg" src="@/assets/img/hardware_hzhb5.png" alt="" />
        <img class="cooperateParImg" src="@/assets/img/hardware_hzhb6.png" alt="" />
      </div>
      <div class="flexRowAC cooperatePar">
        <img class="cooperateParImg" src="@/assets/img/hardware_hzhb7.png" alt="" />
        <img class="cooperateParImg" src="@/assets/img/hardware_hzhb8.png" alt="" />
        <img class="cooperateParImg" src="@/assets/img/hardware_hzhb9.png" alt="" />
        <img class="cooperateParImg" src="@/assets/img/hardware_hzhb10.png" alt="" />
        <img class="cooperateParImg" src="@/assets/img/hardware_hzhb11.png" alt="" />
        <img class="cooperateParImg" src="@/assets/img/hardware_hzhb12.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>

definePageMeta({
  layout: 'site-new'
})

</script>

<style scoped lang="scss">

.home_page {
  position: relative;
}

.home_page.vls {
    height: 700px;
  background-color: #fff;
}

.w1380 {
  width: 1380px;
  margin: 0 auto;
}

/*合作伙伴*/
.cooperatePar {
  justify-content: space-between;
  padding-top: 60px;

  .cooperateParImg {
    height: 40px;
    width: 140px;
  }
}
.productBox{
  margin: 200px auto;
  margin-bottom: 0;
  padding-bottom: 160px;
}

</style>
