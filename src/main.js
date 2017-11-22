import Vue from 'vue'
import App from './app.vue'
import router from './router/routers.js'
import store from './store'

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})