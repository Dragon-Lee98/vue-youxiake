import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false

// 引入重置样式表
import './assets/css/reset.css'
// 引入fastclick库
import FastClick from 'fastclick'
FastClick.attach(document.body);
// 引入字体图标库
import './assets/css/iconfont.css'
// 引入font.js移动端字体大小适配
import './assets/js/font.js'
// 引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/css/swiper.css'
Vue.use(VueAwesomeSwiper)
// 引入axios
import axios from 'axios'
Vue.prototype.axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to,from,next)=>{
  if(to.meta.requireLogin){// 判断是否要登录
    if(sessionStorage.getItem('loginInfo')){
      next();
    }else{
      next({
        path:'/login'
      })
    }
  }else{
    next();
  }
})