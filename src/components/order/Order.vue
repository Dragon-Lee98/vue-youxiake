<template>
  <div class="order">
      <Header></Header>
      <Tabs></Tabs>
  </div>
</template>

<script>
import Header from './Header'
import Tabs from './Tabs'
export default {
    components:{
        Header,
        Tabs
    },
}
</script>

<style scoped>
.order{
    background: rgb(242, 242, 242);
}
</style>