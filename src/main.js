import Vue from 'vue'
import App from './components/案例品牌管理.vue'

Vue.config.productionTip = false

//引入bootstrap
import 'bootstrap/dist/css/bootstrap.css'
new Vue({
  render: h => h(App),
}).$mount('#app')

// //在全局 注册过滤器
// // vue.filter('过滤器名称','对应的处理函数')
// Vue.filter('toDown',(val)=>{
//   return val.toLowerCase()
// })
// Vue.filter('toReverse',(val)=>{
//   return val.split('').reverse().join('')
// })
// // new Vue({
// //   render:(h)=>h(App)
// // }).$mount("#app")