<template>
  <div id="app">
    <myHeader />
    <page1 v-bind:users="users"/>
  </div>
</template>

<script>
//@ = src
import myHeader from '@/components/header.vue'
import page1 from '@/components/page2.vue'
export default {

  name: 'App',
  components: {
    myHeader,
    page1,
  },

}
</script>

<style lang="scss" >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //margin-top: 60px;
}
</style>
