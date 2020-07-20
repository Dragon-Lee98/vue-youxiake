<template>
  <div class="icons">
      <ul>
          <li v-for="item in iconsList" :key="item.id">
              <img :src="item.iconsUrl">
              <p>{{item.title}}</p>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{
            iconsList:[
                {id:0,iconsUrl:'img/icons1.png',title:'国内游'},
                {id:1,iconsUrl:'img/icons2.png',title:'出境游'},
                {id:2,iconsUrl:'img/icons3.png',title:'周边游'},
                {id:3,iconsUrl:'img/icons4.gif',title:'当地玩乐'},
                {id:4,iconsUrl:'img/icons5.png',title:'活动赛事'},
                {id:5,iconsUrl:'img/icons6.png',title:'摄影游'},
                {id:6,iconsUrl:'img/icons7.png',title:'亲子游'},
                {id:7,iconsUrl:'img/icons8.png',title:'户外游'},
                {id:8,iconsUrl:'img/icons9.png',title:'主体游'},
                {id:9,iconsUrl:'img/icons10.png',title:'定制游'}
            ]
        }
    }
}
</script>

<style scoped>
.icons{
    padding: .4rem 0 .1rem 0;
    border-bottom: 1px solid #eee;
}
.icons ul{
    overflow: hidden;
}
.icons ul li{
    float: left;
    width: 20%;
    margin-bottom: .4rem;
}
.icons ul li img{
    display: block;
    margin: 0 auto;
    width: 1.0666667rem;
    height: 1.0666667rem;
}
.icons ul li p{
    text-align: center;
    margin-top: .1rem;
    color: #333;
    font-size: .4rem;
}
</style>