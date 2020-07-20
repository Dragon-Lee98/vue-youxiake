<template>
  <div class="swiper">
      <swiper :options="swiperOption">
        <swiper-slide>
          <img src="@/assets/img/swiper1.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/swiper2.png" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
export default {
    data(){
        return{
            swiperOption: {
                pagination: {
                el: ".swiper-pagination"
                }
            }
        }
    }
}
</script>

<style scoped>
.swiper{
    width: 100%;
    height: 3.2rem;
    background: #fff9db;
}
.swiper img{
    width: 100%;
    height: 3.2rem;
}
.swiper-pagination >>> .swiper-pagination-bullet-active {
  background: orange;
}
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 5px;
    left: 0;
    width: 100%;
}
</style>