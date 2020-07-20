<template>
  <header>
    选择城市
    <i class="iconfont" @click="toHome">&#xe61d;</i>
  </header>
</template>

<script>
export default {
  methods:{
    toHome(){
      this.$router.push({path:'/'});
    }
  }
}
</script>

<style scoped>
header{
  position: relative;
  width: 100%;
  height: 1.17333rem;
  line-height: 1.17333rem;
  text-align: center;
  font-size: .48rem;
  color: #333;
  background: orange;
}
header i{
  position: absolute;
  right: .5rem;
  font-weight: 700;
  font-size: .426667rem;
}
</style>