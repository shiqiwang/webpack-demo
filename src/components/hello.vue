<template>
  <div class="hello">{{home.hello}}</div>
</template>

<script>
  export default {
    computed: {
      home () {
        return this.$store.getters.home
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
