<template>
  <div class="home">
    <hello></hello>
  </div>
</template>

<script>
import hello from '../components/hello.vue'
export default {
  components: {
    hello
  }
}
</script>

<style scoped>
  .home {
    background: #ccc;
    height: 100px;
    width: 300px;
  }
</style>


