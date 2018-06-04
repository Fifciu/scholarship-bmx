<template lang="pug">
    div.photo(
        :style="backgroundPosition!==undefined ? 'background: url('+assetsPhoto+');background-position: '+backgroundPosition+';background-size:cover;' : 'background: url('+assetsPhoto+');'"
    )
        div.overlay(@click="toggleClicked($event.target)")
            div.content
                h3 {{header}}
                p {{tags}}
                router-link(
                    v-if="route!==undefined"
                    :to="route"
                    class="router-link"
                )
</template>

<script>
  export default {
    name: 'Photo',
    props:{
      header:{
        type: String,
        required: true
      },
      tags:{
        type: String,
        required: true
      },
      photo:{
        type: String,
        required: true
      },
      route:{
        type: Object,
        required: true
      },
      backgroundPosition: String
    },
    methods:{
        toggleClicked(el){
          if(el.classList.contains("overlay")){
            var aOld = document.querySelectorAll("div.photo.clicked");
            var bOld = document.querySelectorAll("div.photo.clicked > div.overlay.clicked, div.photo > div.overlay.clicked");

            for(var i in aOld)
                aOld[i].classList.toggle("clicked");
            for(var i in bOld)
                bOld[i].classList.toggle("clicked");

            el.classList.toggle("clicked");
            el.parentElement.classList.toggle("clicked");
          }
        }
    },
    computed:{
      assetsPhoto(){
        const path = "static" + this.photo;
        return path;
      }
    }
  };
</script>

<style lang="scss" scoped>
    div.photo{
        transition:.5s;
        width:25%;
        height:270px;
        @media (max-width:1450px){
            width: calc(100% / 3);
        }
        @media (max-width:1250px){
            height:200px;
        }
        @media (max-width:1100px){
            width:50%;
            height:230px;
        }
        @media (max-width:720px){
            width:100%;
            height:220px;
        }
        background-size:cover;
        background-position:center;
        font-family: 'Poppins', sans-serif;
        overflow:hidden;
        transition: .7s;
        &:hover, &.clicked{
            transform: scale(1.1);
            -webkit-box-shadow: 9px 14px 41px -10px rgba(0,0,0,0.75);
            -moz-box-shadow: 9px 14px 41px -10px rgba(0,0,0,0.75);
            box-shadow: 9px 14px 41px -10px rgba(0,0,0,0.75);
        }
        div.overlay{
            width:100%;
            height:100%;
            display:flex;
            align-items:center;
            justify-content:center;
            transition:.7s;
            background:rgba(0,0,0,0);
            div.content{
                transition:.7s;
                transform: translateX(500%);
                text-align:center;
                color:#fff;
                a.router-link{
                    color:#fff;
                    text-decoration:none;
                    display:block;
                    position:relative;
                    font-size:1.9em;
                    margin-top:43px;
                    &:before{
                        content:'';
                        position:absolute;
                        border:1px solid red;
                        border-radius:50%;
                        width:48px;
                        height:48px;
                        left:10px;right:0;top:0;bottom:0;margin:auto;
                        transition:.5s;
                    }
                    &:after{
                        content:'⇢';
                        position:absolute;
                        border:1px solid rgba(0,0,0,0);
                        border-radius:50%;
                        width:48px;
                        height:48px;
                        left:0;right:0;top:10px;bottom:0;margin:auto;
                        transition:.5s;
                        padding-top:10px;
                        box-sizing:border-box;
                    }
                    &:hover, &.clicked{
                        &:before{
                            background: red;
                            transform:translateX(-25%);
                        }
                        &:after{
                            background:#000;
                            transform:translateX(25%);
                        }
                    }
                }
                h3{
                    margin:0px;
                    font-size:1.6em;
                }
                p{
                    margin:0;
                    font-size: .85em;
                    margin-top: -6px;
                    position:relative;
                    &:after{
                        content: '';
                        position:absolute;
                        bottom:-7px;
                        height:3px;
                        width:150%;
                        background:rgba(255,0,0,.7);
                        left:0px;right:0px;margin:auto;
                        margin-left:-25%;
                    }
                }
            }
            &:hover, &.clicked{
                background: rgba(81,105,208,.87);
                border-bottom:1px solid rgba(0,0,0,1);
                div.content{
                    transform: translateX(0%);
                }
            }
        }
    }
</style>