<template>
  <div class="home">
    <Banner></Banner>
    <Icons></Icons>
    <Tabs></Tabs>
    <Scroll></Scroll>
    <Swiper></Swiper>
    <Spike :spikeList="spikeList"></Spike>
    <Like :likeList="likeList"></Like>
    <Footer></Footer>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Banner from "./Banner";
import Icons from "./Icons";
import Tabs from "./Tabs";
import Scroll from "./Scroll";
import Swiper from "./Swiper";
import Spike from "./Spike";
import Like from "./Like";
import Footer from "./Footer";
export default {
  name: "home",
  data() {
    return {
      spikeList: [],
      likeList: [],
      oldCity: ""
    };
  },
  components: {
    Banner,
    Icons,
    Tabs,
    Scroll,
    Swiper,
    Spike,
    Like,
    Footer
  },
  computed: {
    ...mapState(["cityName"])
  },
  created() {
    this.http();
    this.oldCity = this.cityName;
  },
  methods: {
    http() {
      // this.axios.get("http://www.lzlstudy.top:9999/home")
      // .then((res)=>{
      //     let data = res.data.data;
      //     data.forEach((item)=>{
      //         if(item.city === this.cityName){
      //             this.spikeList = item.spikeList;
      //             this.likeList = item.likeList;
      //         }
      //     })

      // })
      const service = axios.create({
        timeout: 10000,
        headers: {
          post: {
            "Content-Type": "application/json;charset=UTF-8"
          }
        },
        emulateJSON: true,
        withCredentials: true
      });
      const res = await service.get('http://www.lzlstudy.top:9999/home');
        // 绝对是成功
        if (res.success) {
            console.log(res)
        } else {
            alert(res.message);
        }
    //   this.axios
    //     .get("http://39.101.217.150:8086/article/articlebychannel")
    //     .then(
    //       data => {
    //         console.log(data);
    //       },
    //       err => {
    //         console.log(err);
    //       }
        
    }
  },
  activated() {
    if (this.cityName != this.oldCity) {
      this.http();
      this.oldCity = this.cityName;
    }
  }
};
</script>

<style scoped>
.home {
  padding-bottom: 1.46666rem;
}
</style>