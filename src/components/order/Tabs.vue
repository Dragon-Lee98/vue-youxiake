<template>
  <div class="tabs">
    <van-tabs v-model="active">
      <van-tab title="全部">全部</van-tab>
      <van-tab title="待付款">待付款</van-tab>
      <van-tab title="报名成功">报名成功</van-tab>
      <van-tab title="替补">替补</van-tab>
      <van-tab title="待评价">待评价</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
Vue.use(Tab);
Vue.use(Tabs);
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style scoped>

.van-tabs >>> .van-tab{
    width: 20%;
    flex: 0;
    background: rgb(242, 242, 242);
    font-size: 14px;
}
.van-tabs >>> .van-tabs__content{
    margin-top: 50px;
}
.van-tabs >>> .van-tabs__line {
    z-index: -1;
    position: absolute;
    bottom: 28px;
    left: 0;
    z-index: 1;
    height: 5px;
    background-color: rgb(254, 209, 1);
    border-radius: 3px;
}
.van-tabs>>>.van-tab--active .van-tab__text{
    color: #323233;
    font-weight: bold;
    font-size: 16px;
}
</style>