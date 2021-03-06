// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)

Vue.use(VueResource)

Vue.config.productionTip = false

export const bus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  VueMaterial,
  components: { App },
  template: '<App/>'
})
