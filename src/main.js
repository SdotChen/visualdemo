import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui' // 引入ElementUI
import 'element-ui/lib/theme-chalk/index.css' // 引入ElementUI样式文件
import VueRouter from 'vue-router' // 引入VueRouter
import router from './router' // 引入路由器
import * as echarts from 'echarts' // 引入echarts, import echarts from 'echarts' 图会出不来
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false // 关闭生产提示
Vue.use(VueRouter) // 应用插件
Vue.use(ElementUI) // 使用ElementUI

// 创建vm
new Vue({
  el:'#app',
  render: h => h(App),
  router:router
})
