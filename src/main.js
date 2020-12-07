import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Highlight from "@/common/utils";

Vue.config.productionTip = false
Vue.use(Highlight)
Vue.prototype.$bus = new Vue()

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
