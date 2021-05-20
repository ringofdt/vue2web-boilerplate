import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import ApiService from './services/api.service'
import TokenService from './services/storage.service'
import VueMeta from 'vue-meta'

import './scss/custom.scss'
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueMeta)

ApiService.init(process.env.VUE_APP_ROOT_API)
// If token exists set header
if (TokenService.getToken()) {
  ApiService.mount401Interceptor()
  ApiService.setHeader()
  store.dispatch('auth/refreshToken')
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
