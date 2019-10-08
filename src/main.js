import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue'
import {
  FormPlugin
} from 'bootstrap-vue'
import axios from 'axios'
import VueTippy from 'vue-tippy'
import VeeValidate from 'vee-validate'
import './assets/scss/app.scss'

Vue.config.productionTip = false

const VueScrollTo = require('vue-scrollto')
Vue.use(VueScrollTo, {
  duration: 500,
  easing: "ease",
  offset: -59
})

Vue.prototype.$http = axios;

Vue.use(VeeValidate)
Vue.use(VueTippy)
Vue.use(BootstrapVue)
Vue.use(FormPlugin)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')