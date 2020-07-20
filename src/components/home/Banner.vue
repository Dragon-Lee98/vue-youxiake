<template>
  <div class="banner">
    <div class="banner-header">
      <div class="banner-header-left" @click='toCity'>
        {{cityName}}
        <i class="iconfont">&#xe77b;</i>
      </div>
      <div class="banner-header-search">
        <i class="iconfont">&#xe617;</i>
        泰国
      </div>
    </div>
    <div class="banner-swiper">
      <swiper :options="swiperOption">
        <swiper-slide>
          <img src="@/assets/img/banner1.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/banner2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/banner3.png" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>

</template>

<script>
import {mapState} from 'vuex'
export default {
  data(){
    return{
      isShow:false,
      swiperOption: {
        loop: true,
        autoplay:true,
        speed:1000,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    }
  },
  methods:{
    toShow(){
      this.isShow = !this.isShow;
    },
    toCity(){
      this.$router.push({name:'city'})
    }
  },
  computed:{
    ...mapState(['cityName'])
  }
};
</script>

<style scoped>
.banner {
  position: relative;
  width: 100%;
  height: 5.653rem;
}
.banner-header {
  z-index: 2;
  position: absolute;
  top: 0.3rem;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}
.banner-header-left {
  padding: .2rem .2rem;
  color: #000;
  font-size: .426666rem;
}
.banner-header-left i{
  font-size: .42666rem;
}
.banner-header-search {
  flex: 1;
  padding: .2rem .2rem;
  margin-right: .5rem; 
  font-size: .426666rem;
  background: #fff;
  border-radius: .1rem;
}
.banner-header-search i{
  font-size: .42666rem;
}
.banner-swiper{
  width: 100%;
  height: 5.653rem;
}
.banner-swiper img{
  width: 100%;
  height: 100%;
}
.swiper-pagination >>> .swiper-pagination-bullet-active {
  background: orange;
}
</style>