<template>
  <div class="like-list">
      <div class="like-content" v-for="item in likeList" :key="item.id">
          <div class="like-content-header">
              <div class="header-left">
                  <span>{{item.headerTitle}}</span>
              </div>
              <div class="header-right">
                  更多&gt;
              </div>
          </div>
          <div class="like-content-bottom">
              <div 
                class="bottom-banner" 
                :style="{'background':'url('+item.imgUrl+') no-repeat center center'}"
                @click="toDetails(item)"
              >
                  <div class="banner-txt">
                      {{item.setOut}}出发
                  </div>
                  <div class="banner-info">
                    <div class="banner-info-content">
                        <div class="banner-title">
                            {{item.title}}
                        </div>
                        <div class="banner-price fs12">
                            ￥<em class="fs16">{{item.price}}</em>起
                        </div>
                    </div>
                  </div>
              </div>
              <ul class="banner-card">
                  <!--  v-for="v in item.cityList" :key="v.id" -->
                  <li class="item" v-for="v in item.cityList" :key="v.id">
                      <div 
                        class="card-header" 
                        :style="{'background':'url('+v.imgUrl+') no-repeat center center'}"
                        @click="toDetails(v)"
                      >
                          <div class="card-txt">
                            {{v.setOut}}出发
                          </div>
                      </div>
                      <div class="card-info">
                            <div class="card-title">
                                {{v.title}}
                            </div>
                            <div class="card-price fs12">
                                ￥<em class="fs16">{{v.price}}</em> 起
                            </div>
                      </div>
                  </li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:['likeList'],
    data(){
        return{

        }
    },
    methods:{
        toDetails(item){
            // 将数据放入本地存储
            localStorage.details = JSON.stringify(item);
            this.$router.push({
                path:"/details"
            });
        }
    }
}
</script>

<style scoped>
.like-content{
    padding: 0 .4rem;
    margin: .266666rem 0;
}
.like-content-header{
    display: flex;
    justify-content: space-between;
    line-height: .906666rem;
}
.header-left{
    position: relative;
}
.header-left span{
    font-size: .48rem;
    font-weight: 600;
}
.header-left::before{
    position: absolute;
    top: 50%;
    left: -.32rem;
    content: "";
    width: .13333rem;
    height: .48rem;
    background: orange;
    transform: translate(-50%,-50%);
}
.header-right{
    font-size: .373333rem;
    color: #666;
}
.bottom-banner{
    position: relative;
    width: 100%;
    height: 5.2rem;
    margin-top: .266666rem;
    /* background: url('http://localhost:8080/img/like1.jpg') no-repeat; */
    background-size: 100%;
}
.banner-info{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2.13333rem;
    background: rgba(0, 0, 0, .3);
}
.banner-info-content{
    position: absolute;
    bottom: .213333rem;
    display: flex;
    justify-content: space-around;
    width: 100%;
    font-size: .373333rem;
}
.banner-txt{
    position: absolute;
    top: 0;
    left: 0;
    font-size: .37333rem;
    padding: .10666rem;
    background: rgba(0, 0, 0, .5);
    color: #fff;
}
.banner-title{
    width: 6.13333rem;
    height: .64rem;
    font-size: .48rem;
    font-weight: 600;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.fs12{
    font-size: .32rem;
}
.fs16{
    font-size: .426667rem;
    font-weight: 600;
}
.banner-price{
    margin-top: .1066667rem;
    color: orange;
}
.banner-card{
    display: flex;
    justify-content: space-between;
    margin-top: .25rem;
}
.banner-card .item{
    overflow: hidden;
    width: 2.9333rem;
    height: 4.2666rem;
    background: rgb(249, 249, 249);
    border-radius: .266666rem 7px 0 0;
}
.card-header{
    position: relative;
    width: 100%;
    height: 2.1333rem;
    /* background: url('http://localhost:8080/img/like2.png') no-repeat; */
    background-size: cover;
}

.card-title{
    font-size: .42666rem;
    color: #000;
}
.card-txt{
    position: absolute;
    top: 0;
    left: 0;
    font-size: .37333rem;
    padding: .1066667rem;
    background: rgba(0, 0, 0, .5);
    color: #fff;
}
.card-info{
    padding: .266666rem .133333rem;
}
.card-title{
    width: 100%;
    line-height: 1.2;
    margin-bottom: .32rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
.card-price{
    color: orange;
    font-size: .37333rem;
}
.card-price em{
    font-size: .48rem;
}
</style>
