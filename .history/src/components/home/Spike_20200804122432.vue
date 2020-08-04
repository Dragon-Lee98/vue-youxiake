<template>
  <div class="spike">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in spikeList" :key="item.id">
        <div class="spike-content" @click="toDetails(item)">
          <div class="spike-content-preferential">
            <img src="@/assets/img/spike1.png" />
            <span class="over">距离结束</span>
            <count-down
              :currentTime="item.startTime"
              :startTime="item.startTime"
              :endTime="item.endTime"
              :dayTxt="'天'"
              :hourTxt="':'"
              :minutesTxt="':'"
              :secondsTxt="''"
            ></count-down>
          </div>
          
          <div class="spike-content-introduce">
            <div class="spike-img">
              <img :src="item.imgUrl" />
            </div>
            <div class="spike-detail">
              <h2>{{item.title}}</h2>
              <div class="spike-price">
                <span class="fs14 now-price">
                  ￥
                  <em>{{item.price}}</em>
                </span>
                <span class="fs14 original-price">￥{{item.originalPrice}}</span>
                <span class="surplus">剩{{item.num}}个</span>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import CountDown from "vue2-countdown";
export default {
  components: {
    CountDown
  },
  props: ["spikeList"],
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  methods: {
    toDetails(item) {
      // 将数据放入本地存储
      localStorage.details = JSON.stringify(item);
      this.$router.push({
        path: "details"
      });
    }
  }
};
</script>

<style scoped>
.spike-content {
  padding: 0 .4rem .2rem .4rem;
  height: 4rem;
}
.spike-content-preferential {
  position: relative;
  width: 100%;
  height: 1.3333rem;
}
.spike-content-preferential img {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  float: left;
  width: 1.9rem;
  height: 0.42rem;
  margin-top: .103333rem;
}
.spike-content-preferential .over{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  float: left;
  font-size: 0.37333rem;
  line-height: 0.42rem;
  margin-left: 2.3rem;
  margin-top: .103333rem;
}

/* 倒计时组件的样式调整 S */
.spike-content-preferential >>> div{
  display: inline-block;
  line-height: 1.3333rem;
  margin-left: 4rem;
}
.spike-content-preferential >>> div > p {
  font-size: 0.37333rem;
  margin: 0 0.26666rem;
}
.spike-content-preferential >>> div > p > span:nth-child(1){
  padding: 0.05rem;
}
.spike-content-preferential >>> div > p > span:not(:nth-child(1)) {
  padding: 0.05rem;
  margin: 0 0.13333rem;
  border-radius: 0.13333rem;
  background: #ccc;
}
.spike-content-preferential >>> div > p > i,
.spike-content-preferential >>> div > p > span {
  font-size: 0.37333rem; 
}
.spike-content-preferential >>> div > p > span > span {
  margin-left: 0.2rem;
}
/* 倒计时组件的样式调整 E */

.spike-content-introduce {
  overflow: hidden;
  margin-top: 0.13333rem;
}
.spike-img {
  float: left;
}
.spike-img img {
  width: 2.5rem;
  height: 2rem;
}
.spike-detail {
  position: relative;
  float: left;
  width: 6.13333rem;
  height: 2rem;
  margin-left: 0.53333rem;
}
.spike-detail h2 {
  font-size: .33333rem;
  width: 100%;
  line-height: 1.2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.spike-price {
  position: absolute;
  bottom: .1rem;
}
.spike-price span {
  font-size: 0.23333rem;
}
.now-price {
  color: orange;
}
.now-price em {
  font-style: none;
  font-size: 0.48rem;
  font-weight: bold;
}
.original-price {
  margin-left: 0.13333rem;
  text-decoration: line-through;
  color: #ccc;
}
.spike-price .surplus {
  margin-left: 1.86666rem;
  padding: 0.08rem;
  background: orange;
  color: #000;
  font-size: 0.25rem;
  border-radius: 0.13333rem;
}
.swiper-pagination >>> .swiper-pagination-bullet-active {
  background: orange;
}

</style>