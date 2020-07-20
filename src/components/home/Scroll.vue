<template>
  <div class="scroll">
      <div class="scroll-content">
          <div class="scroll-txt">
              <ul :class="{animateTop}">
                  <li v-for="item in scrollList" :key="item.id">
                      <img src="@/assets/img/scroll.png" />
                      <p>{{item.title}}</p>
                  </li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            animateTop:true,
            scrollList:[
                {id:0,title:'港珠澳大桥怎么走？穿梭巴士预约及过关全攻略'},
                {id:1,title:'清迈旅游落地签如何搞定？360°带你了解泰北小城清迈'},
                {id:2,title:'港珠澳大桥怎么走？穿梭巴士预约及过关全攻略'},
                {id:3,title:'清迈旅游落地签如何搞定？360°带你了解泰北小城清迈'},
                {id:4,title:'港珠澳大桥怎么走？穿梭巴士预约及过关全攻略'},
                {id:5,title:'清迈旅游落地签如何搞定？360°带你了解泰北小城清迈'},
                {id:6,title:'港珠澳大桥怎么走？穿梭巴士预约及过关全攻略'},
                {id:7,title:'清迈旅游落地签如何搞定？360°带你了解泰北小城清迈'},
                {id:8,title:'港珠澳大桥怎么走？穿梭巴士预约及过关全攻略'},
                {id:9,title:'清迈旅游落地签如何搞定？360°带你了解泰北小城清迈'}
            ]
        }
    },
    mounted(){
        setInterval(this.showScroll,2000);
    },
    methods:{
        showScroll(){
            this.animateTop=true;
            setTimeout(()=>{
                this.scrollList.push(this.scrollList[0]);
                this.scrollList.shift();
                this.animateTop=false;
            },500)
        }
    }
}
</script>

<style scoped>
.animateTop{
    transition: all .5s ease;
    margin-top: -.6666667rem;
}
.scroll-content{
    overflow: hidden;
    width: 100%;
    height: 1.3333rem;
    background: url('/img/scroll.png') no-repeat;
    background-size: 100%;
}
.scroll-txt{
    position: relative;
    float: right;
    overflow: hidden;
    width: 8.13333rem;
    height: 1.3333rem;
}
.scroll-txt ul li{
    line-height: .6666667rem;
}
.scroll-txt ul li img{
    float: left;
    width: .21333rem;
    height: .21333rem;
    margin-top: .2266667rem;
    margin-right: .1rem;
}
.scroll-txt ul li p{
    line-height: .6666667rem;
    font-size: .4rem;
    margin-left: .25rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>