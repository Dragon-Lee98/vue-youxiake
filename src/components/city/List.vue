<template>
    <div class="list">
        <div class="list-content">
            <!-- 375 15 360 75 15 -->
            <div class="list-title">
                定位/附近城市
            </div>
            <div class="list-content">
                <div class="list-item" 
                v-for="item in mapCities" :key="item.id"
                @click='toHome(item.name)'
                >{{item.name}}</div>
            </div>
        </div>
        <div class="list-content">
            <!-- 375 15 360 75 15 -->
            <div class="list-title">
                已开通周边游站点
            </div>
            <div class="list-content">
                <div class="list-item" 
                v-for="item in cities" :key="item.id"
                @click='toHome(item.name)'
                >{{item.name}}</div>
            </div>
        </div>
        <div class="list-content">
            <!-- 375 15 360 75 15 -->
            <div class="list-title">
                热门玩乐城市
            </div>
            <div class="list-content">
                <div class="list-item" 
                v-for="item in hotCities" :key="item.id"
                @click='toHome(item.name)'
                >{{item.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    data(){
        return{
            mapCities:[],
            cities:[],
            hotCities:[]
        }
    },
    mounted(){
        this.http();
    },
    methods:{
        http(){
            this.axios.get("http://120.78.79.182:9999/city")
            .then((res)=>{
                let data = res.data.data;
                this.mapCities = data.mapCities;
                this.cities = data.cities;
                this.hotCities = data.hotCities;
            })
        },
        toHome(city){
            // 调用mapMutations
            this.changeCity(city);
            this.$router.push({path:'/'});
        }
        ,
        ...mapMutations(['changeCity'])
    }
}
</script>

<style scoped>
.list{
    padding: 0 0 .4rem .4rem;
    font-size: .4266667rem;
    color: #666;
}
.list-title{
    padding: .5rem 0;
}
.list-item{
    display: inline-block;
    width: 2rem;
    line-height: .8rem;
    text-align: center;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: .2rem;
    box-sizing: border-box;
    margin: 0 .4rem .4rem 0;
}
</style>