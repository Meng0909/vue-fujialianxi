import Vue from 'vue'
import App from './components/移动端.vue'

Vue.config.productionTip = false

//引入bootstrap
import 'bootstrap/dist/css/bootstrap.css'
new Vue({
  render: h => h(App),
}).$mount('#app')
