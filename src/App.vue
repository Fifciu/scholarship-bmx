<template lang="pug">
  div#app
    sidebar
    div#route
      transition(
        name="fade"
        mode="out-in"
      )
        router-view
</template>

<script>
  import Sidebar from './Sidebar.vue';
export default {
  name: 'App',
  components:{
    Sidebar
  }
}
</script>

<style lang="scss">
  #app{
    height:100%;
    width:100%;
  }
  #route{
    margin-left:270px;
    overflow:hidden;
    height:100%;
    @media (max-width:700px){
      margin-left:60px;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
