import Vue from 'vue'
import Hello from './components/hello.vue'

new Vue({
  el: '#app',
  template: '<div><hello></hello></div>',
  components: {
    Hello
  }
});