<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './view/home'
import VueRouter from './router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  }
]

const router = new VueRouter(routes)
export default {
  name: 'app',
  router,
  component: Home
}
</script>

