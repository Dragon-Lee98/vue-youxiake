<template>
  <header>
    <div class="header-left">
      <i class="iconfont" @click="toHome">&#xe61d;</i>
    </div>
    <div class="header-title">出行订单</div>

  </header>
  
</template>

<script>

export default {

  methods: {
    toHome() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style scoped>
header {
  width: 100%;
  height: 1.17333rem;
  line-height: 1.17333rem;
  font-size: 0.48rem;
  color: #333;
  background: #f7f7f7;
}
.header-title{
  float: left;
  width: 100%;
  text-align: center;
}
.header-left {
  position: absolute;
  top: 0;
  padding-left: 0.5rem;
  font-weight: 700;
}

</style>