import Vue from 'vue'
import App from './App.vue'
import './../../assets/css/reset.css'
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
