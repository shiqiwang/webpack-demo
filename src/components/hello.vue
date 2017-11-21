<template>
  <div class="hello">{{message}}</div>
</template>

<script>
  export default {
    data () {
      return {
        message: 'hello component'
      }
    }
  }
</script>

<style scoped>
  .hello {
    background-color: #ddd;
    height: 50px;
    width: 200px;
  }
</style>
