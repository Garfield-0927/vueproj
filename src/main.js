import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Highlight from "@/common/utils";
import store from "@/store";


Vue.config.productionTip = false
Vue.use(Highlight)
Vue.prototype.$bus = new Vue()

new Vue({
  store: store,
  router: router,
  render: h => h(App),
}).$mount('#app')
