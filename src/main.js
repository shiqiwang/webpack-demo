import Vue from 'vue'
import App from './app.vue'
import router from './router/routers.js'

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})