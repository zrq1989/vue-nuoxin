import Vue from 'vue'
import App from './App.vue'
import './../../assets/css/reset.css'
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import axios from 'axios'
import Vuex from 'vuex'
import {state,mutations,getters,actions} from "../../store/store";

Vue.use(Vuex)
Vue.prototype.$http = axios
Vue.config.productionTip = false

const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})

new Vue({
    store,
  render: h => h(App)
}).$mount('#app')
