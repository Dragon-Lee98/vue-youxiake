<template>
  <header>
      <div class="header-logout">
          <i class="iconfont" @click="toHome">&#xe61d;</i>
          <i class="iconfont">&#xe61e;</i>
        </div>
      <div class="header-box">
          <div class="header-avatar"></div>
          <div class="header-user">
              <div class="user-name">
                  yxk_AG
                  <i class="iconfont">&#xe639;</i>
              </div>
              <div class="user-leval">
                  <span>lv1 普拉山</span>
                  <span>普通会员</span>
              </div>
          </div>
      </div>
  </header>
</template>

<script>
export default {
    methods: {
    toHome() {
      this.$router.push({ path: "/" });
    }
  }
}
</script>

<style scoped>
header{
    position: relative;
    padding-left: .3rem;
    padding-top: .9rem;
    height: 3rem;
    background: #fff url(../../assets/img/center-header-bg.png) 50% no-repeat;
    background-size: cover;
}
.header-box{
    width: 9.6rem;
    height: 1.6rem;
}
.header-avatar{
    float: left;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    background: #aaa url(../../assets/img/no_avatar.png) no-repeat;
    background-size: cover;
}
.header-logout{
    position: absolute;
    top: .2rem;
    left: 0;
    width: 100%;
}
.header-logout i{
    font-size: .53333rem;
}
.header-logout i:nth-child(1){
    float: left;
    margin-left: .5rem;
}
.header-logout i:nth-child(2){
    float: right;
    margin-right: .5rem;
}
.header-user{
    position: relative;
    float: left;
    width: 4rem;
    height: 1.6rem;
    margin-left: .5rem;
}
.user-name{
    position: absolute;
    top: 0;
    font-size: .6rem;
    font-weight: 600;
}
.user-name i{
    font-size: .5rem;
    font-weight: 600;
}
.user-leval{
    position: absolute;
    bottom: 0;
    width: 4rem;
}
.user-leval span{
    font-size: .32rem;
    padding: .05rem .2rem;
    border-radius: .5rem;
    
}
.user-leval span:nth-child(1){
    color: #fff;
    background: rgba(0, 0, 0, .8);
}
.user-leval span:nth-child(2){
    color: #000;
    margin-left: .3rem;
    background: rgba(255, 255, 255, .8);
}

</style>