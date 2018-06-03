<template lang="pug">
    div.grid-photo-wrapper
        div.grid-photo(
            :style="'background-image: url('+photo+');background-size:cover; background-position:center;'"
            @click="showBiggerVersion($event.target)"
        )
        div.grid-big(@click="toggle")
            img(
                :src="photo"
            )
</template>

<script>
  export default {
    props:{
      photo:{
        type: String,
        required: true
      }
    },
    data(){
      return {
        toShowEl: null
      };
    },
    name: 'grid-gallery-photo',
    methods:{
      showBiggerVersion(el){
        this.toShowEl = el.parentElement.querySelector("div.grid-big");
        this.toShowEl.classList.toggle("showed");
      },
      toggle(){
        if(this.toShowEl === null)
          return;

        this.toShowEl.classList.toggle("showed");
      }
    }
  };
</script>

<style lang="scss" scoped>
    div.grid-photo-wrapper{
        width: calc(100% / 3.1);
        @media (max-width:1550px){
            width: calc(100% / 2.06);
        }
        @media (max-width:1200px){
            width: 100%;
        }
        @media (max-width:1050px){
            width: calc(100% / 2.06);
        }
        @media (max-width:750px){
            width: 100%;
        }
        @media (max-width:700px){
            width: calc(100% / 2.06);
        }
        @media (max-width:550px){
            width: 100%;
        }
    }
    div.grid-photo{
        height:180px;
        margin: 10px 0;
        cursor: pointer;
        filter: grayscale(100%);
        transition:.8s;
        &:hover{
            filter: grayscale(0%);
            transform: scale(1.25);
        }
    }
    div.grid-big{
        opacity:0;
        transform: translateX(-100%);
        position: fixed;
        top:0;
        left:0;
        width:100vw;
        height:100vh;
        background:rgba(0,0,0,.4);
        z-index:10000;
        display:flex;
        align-items:center;
        justify-content:center;
        transition:1s;
        img{
            max-width:70%;
            max-height: 80%;
            -webkit-box-shadow: 10px 10px 27px -6px rgba(0,0,0,0.61);
            -moz-box-shadow: 10px 10px 27px -6px rgba(0,0,0,0.61);
            box-shadow: 10px 10px 27px -6px rgba(0,0,0,0.61);
            transform: rotate3d(1, 1, 1, 45deg);
            transition: 1.5s;
            cursor:pointer;
            @media (max-width:650px){
                max-width:85%;
            }
        }
    }
    div.grid-big.showed{
        opacity:1;
        transform: translateX(0%);
        img{
            transform: rotate3d(1,1,1, 0deg);
            &:hover{
                transform: scale(1.3);
            }
        }
    }
</style>