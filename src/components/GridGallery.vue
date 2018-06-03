<template lang="pug">
    div.grid-gallery
        cmp-grid-gallery-photo(
            v-for="(i,index) in 6"
            :photo="'/scholarship-bmx/static/players/'+player+'/'+(index+1)+'.jpg'"
            :key="index"
        )
</template>

<script>
    import cmpGridGalleryPhoto from './GridGalleryPhoto.vue';

  export default {
    props:{
      player: String
    },
    name: 'grid-gallery',
    components:{
      cmpGridGalleryPhoto
    }
  };
</script>

<style lang="scss" scoped>
    div.grid-gallery{
        width:100%;
        display:flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>