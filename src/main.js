import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import topMenu from './components/suda/components/TopMenu'
import sidebar from './components/suda/components/sidebar'
import search from './components/suda/search'

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(sidebar)

window.axios = require('axios')

Vue.config.productionTip = false

Vue.component('TopMenu', topMenu) // можно юзать как <top-menu>, так и >TopMenu>
Vue.component('sidebar', sidebar)
Vue.component('search', search)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
