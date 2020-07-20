<template>
  <div class="banner">
    <div class="banner-img">
      <img :src="item.imgUrl" alt />
      <div class="img-info">
        <span>深度游 | 跟团游</span>
        <span>6天5晚</span>
      </div>
    </div>
    <div class="banner-txt">
      <div class="banner-txt-wrap">
        <div class="txt-title">{{item.title}}</div>
        <div class="txt-desc">游侠客有独家路线：小众冰雪独家路线小众冰雪独家路线小众冰雪独家路线小众冰雪独家路线小众冰雪独家路线小众冰雪独家路线</div>
        <div class="banner-price">
          <div class="price fs14">
            ￥<em class="fs20">{{item.personPrice}}</em>起
            <span>成人</span>
          </div>
          <div class="price fs14">
            ￥<em class="fs20">{{item.childPrice}}</em>起
            <span>儿童</span>
          </div>
        </div>
        <div class="banner-location">
            <i class="iconfont">&#xe632;</i>
            <span>出发地：{{item.setOut}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            item:''
        }
    },
    created(){
      this.item =JSON.parse(localStorage.details);
    }
};
</script>

<style scoped>
.banner {
  width: 100%;
  background: #fff;
}
.banner-img {
  position: relative;
}
.banner-img img {
  width: 100%;
  height: 100%;
}
.img-info {
  position: absolute;
  bottom: 0.2rem;
  width: 100%;
  overflow: hidden;
}
.img-info span {
  padding: 0.1rem 0.3rem;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-size: 14px;
  border-radius: 15px;
}
.img-info span:nth-child(1) {
  float: left;
  margin-left: 0.5rem;
}
.img-info span:nth-child(2) {
  float: right;
  margin-right: 0.5rem;
}
.banner-txt-wrap{
    padding: 0.35rem 0.35rem;
}
.txt-title {
  width: 100%;
  padding-bottom: .2rem;
  font-size: 0.53333rem;
  font-weight: 600;
}
.txt-desc{
    font-size: 15px;
    line-height: 1.3;
    color: #333;
}
.fs14{
    font-size: 14px;
}
.fs20 {
  font-size: 20px;
  font-weight: 600;
}
.banner-price {
    overflow: hidden;
    width: 100%;
    line-height: 1rem;
  color: orange;
}
.price{
    float: left;
    margin-right: 1rem;
}
.price span{
    font-size: 14px;
    margin-left: .1rem;
    padding: 0 .08rem;
    border: 1px solid orange;
    border-radius: .1333rem;
}
.banner-location i{
    color: orange;
}
.banner-location span{
    margin-left: .1rem;
    font-size: 12px;
    color: #333;
}
</style>