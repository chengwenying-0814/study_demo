import Vue from 'vue'
import App from './App.vue'
//引入vue-router
import VueRouter from 'vue-router'
//引入路由器
import router from "./router/index"
//引入bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
//关闭vue的生产提示
Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
