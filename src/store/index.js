import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let defaultCity = '北京';
// 将localStorage的值赋值给默认城市
if(localStorage.city){
  defaultCity = localStorage.city;
}
export default new Vuex.Store({
  state: {
    cityName:defaultCity
  },
  mutations: {
    changeCity(state,city){
      state.cityName = city;
      // 把city记录到localStorage
      localStorage.city = city;
    }
  },
  actions: {
  },
  modules: {
  }
})
