<template>
  <div id="app">
    <myHeader />
    <div class="">
    </div>
    <page1 />
  </div>


</template>

<script>
//@ = src
import myHeader from '@/components/header.vue'
import page1 from '@/components/page1.vue'
export default {

  name: 'App',
  components: {
    myHeader,
    page1,
  },

}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
