// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import VueTouch from 'vue-touch'

import CommonFooter from '@/components/common/CommonFooter'

Vue.config.productionTip = false

// Vue.use(CommonFooter,{name:'common-footer'})
require('./assets/js/rem.js');
Vue.use(VueTouch,{name:'v-touch'})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
