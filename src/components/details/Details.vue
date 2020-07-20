<template>
  <div class="details">
      <Header></Header>
      <Banner></Banner>
  </div>
</template>

<script>
import Header from './Header'
import Banner from "./Banner";
export default {
    components:{
        Header,
        Banner
    }
}
</script>

<style scoped>
.details{
    width: 100%;
    background: rgb(245, 245, 245);
}
</style>