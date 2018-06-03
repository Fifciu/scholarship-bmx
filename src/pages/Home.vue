<template lang="pug">
    div.page
        transition-group(name="fade" mode="in-out" tag="div" style="width:100%;display:flex;flex-wrap:wrap;" appear="")
            cmp-photo(
                :header="i.header"
                :tags="i.tags"
                :photo="i.route.path + '.jpg'"
                :route="i.route"
                :backgroundPosition="i.bpos ? i.bpos : undefined"
                v-for="(i,index) in photos"
                    v-if="getFilter === null || ('filter' in i && getFilter === i.filter)"
                :key="index"
            )
            cmp-photo(
                :header="i.header"
                :tags="i.tags"
                    :photo="i.route.path + '.jpg'"
                    :route="i.route"
                    :backgroundPosition="i.bpos ? i.bpos : undefined"
                v-for="(i,index) in photos"
                v-if="getFilter === null || ('filter' in i && getFilter === i.filter)"
                :key="index+500"
            )
</template>

<script>
    import Photo from '@/components/Photo';
    import {mapGetters} from 'vuex';

  export default {
    name: 'home',
    components:{
      cmpPhoto: Photo
    },
    computed:{
        ...mapGetters(['getFilter'])
    },
    created(){
      var targetFunc = () => {
        const wiw = window.innerWidth;
        if(wiw > 1450 & this.hidden.length > 0){
          for(var i in this.hidden){
            this.photos.push(this.hidden[i]);
          }
          this.hidden = [];
        }else if(wiw <= 1450 && wiw > 1100){
          const mod = this.photos.length % 3;
          if(mod){
            this.hidden = this.photos.splice(this.photos.length - mod, mod);
          }
        } else if(wiw <= 1100){
              for(var i in this.hidden){
                this.photos.push(this.hidden[i]);
              }
              this.hidden = [];
        }
      };
      window.addEventListener("resize", targetFunc);
      window.addEventListener("load", targetFunc);
    },
    data(){
      return {
        hidden: [],
        photos:[
          {
            header: "Stevie Churchill",
            tags: "street, drops, pro",
            route: {path: '/players/stevie-churchill'},
            filter: "rider"
          },
          {
            header: "Kyle Baldock",
            tags: "dirt, park, pro",
            route: {path: '/players/kyle-baldock'},
            bpos: "40% 0%",
            filter: "rider"
          },
          {
            header: "Logan Martin",
            tags: "dirt, park, pro",
            route: {path: '/players/logan-martin'},
            bpos: "60% 50%",
            filter: "rider"
          },
          {
            header: "Irek Rizaev",
            tags: "dirt, park, pro",
            route: {path: '/players/irek-rizaev'},
            bpos: "60% 50%",
            filter: "rider"
          },
          {
            header: "Kostya Andreev",
            tags: "street, park, pro",
            route: {path: '/players/kostya-andreev'},
            bpos: "60% 50%",
            filter: "rider"
          },
          {
            header: "Dawid Godziek",
            tags: "street, dirt, pro",
            route: {path: '/players/dawid-godziek'},
            bpos: "0% 10%",
            filter: "rider"
          },
          {
            header: "Dave Mirra",
            tags: "park, dirt, pro",
            route: {path: '/players/dave-mirra'},
            bpos: "0% 0%",
            filter: "rider"
          },
          {
            header: "Brett Banasiewicz",
            tags: "park, dirt, pro",
            route: {path: '/players/brett-banasiewicz'},
            bpos: "100% 0%",
            filter: "rider"
          },
          {
            header: "Flipwhip",
            tags: "park, flipwhip, backflip, logan",
            route: {path: '/tricks/flipwhip'},
            bpos: "100% 0%",
            filter: "trick"
          },
          {
            header: "Backflip stairs",
            tags: "first, backflip, street, stairs, kenneth",
            route: {path: '/tricks/backflip-stairs'},
            bpos: "100% 0%",
            filter: "trick"
          },
          {
            header: "Bodyvarial",
            tags: "bodyvarial, godziek, Poland, dirt",
            route: {path: '/tricks/bodyvarial'},
            bpos: "100% 0%",
            filter: "trick"
          },
          {
            header: "Special flip",
            tags: "special, flip, nitro, circus",
            route: {path: '/tricks/specialflip'},
            bpos: "0% 0%",
            filter: "trick"
          },
          {
            header: "Backflip No Hander",
            tags: "flip, nohander, dirt, farmjam",
            route: {path: '/tricks/flip-nohander'},
            bpos: "0% 0%",
            filter: "trick"
          },
          {
            header: "Invert",
            tags: "park, invert",
            route: {path: '/tricks/invert'},
            bpos: "0% 0%",
            filter: "trick"
          },
          {
            header: "Superman",
            tags: "dirt, superman",
            route: {path: '/tricks/superman'},
            bpos: "0% 0%",
            filter: "trick"
          },
          {
            header: "Opposite Tailwhip",
            tags: "street, stairs, opowhip",
            route: {path: '/tricks/opowhip'},
            bpos: "0% 0%",
            filter: "trick"
          }
        ]
      };
    }
  };
</script>

<style lang="scss" scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    .fade-leave, .fade-leave-active{
        position:absolute;
    }
    div.page{
        display:flex;
        flex-wrap:wrap;
    }
</style>