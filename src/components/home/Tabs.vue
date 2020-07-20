<template>
  <div class="tabsList">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in TabsList" :key="item.id">
          <div class="tabs-content">
              <img :src="item.iconsUrl">
              <p>{{item.title}}</p>
          </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      TabsList: [
        { id: 0, iconsUrl: "img/tabs1.gif", title: "签证" },
        { id: 1, iconsUrl: "img/tabs2.png", title: "游侠集市" },
        { id: 2, iconsUrl: "img/tabs3.png", title: "分享会" },
        { id: 3, iconsUrl: "img/tabs4.gif", title: "告别之旅" },
        { id: 4, iconsUrl: "img/tabs5.gif", title: "瑜伽行" },
        { id: 5, iconsUrl: "img/tabs6.png", title: "旅拍" },
        { id: 6, iconsUrl: "img/tabs7.png", title: "视频" },
        { id: 7, iconsUrl: "img/tabs8.png", title: "游记" },
        { id: 8, iconsUrl: "img/tabs9.png", title: "目的地" },
        { id: 9, iconsUrl: "img/tabs10.png", title: "墨子" }
      ],
      swiperOption: {
        slidesPerView: 4.5
      }
    };
  }
};
</script>

<style scoped>
.tabsList{

}
.tabsList .tabs-content{
    padding: .2rem 0;
}
.tabsList .tabs-content img{
    display: block;
    margin: 0 auto;
    width: 1.0666667rem;
    height: 1.0666667rem;
}
.tabsList .tabs-content p{
    margin-top: .2rem;
    text-align: center;
    color: #333;
    font-size: .4rem;
}
</style>