<template lang="pug">
    div.tricks(:style="'background-image: url('+'/scholarship-bmx/static/tricks/'+pick+'.jpg'+')'")
        div.inner-space
            div.col
                h1 {{capit(pick2)}}
</template>

<script>
    import cmpGridGallery from '@/components/GridGallery.vue';
    import cmpSkillBar from '@/components/SkillBar.vue';
    import cmpOpinion from '@/components/Opinion.vue';

  export default {
    computed:{
      pick(){
        return this.$route.params.trick;
      },
      pick2(){
        return this.$route.params.trick.replace("-", " ");
      }
    },
    methods:{
      capit(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    },
    watch:{
      '$route'(n,o){
        if(n.params.trick === undefined || n.params.trick === null){
          this.$router.push("/");
        }

        const el = document.querySelector("div.tricks>div.inner-space");
        el.classList.add("blur");
        setTimeout(() => {
          this.pickedOne = tmpOne;
          el.classList.remove("blur");
        }, 1000);
      }
    },
    components:{
      cmpGridGallery,
      cmpSkillBar,
      cmpOpinion
    }
  };
</script>

<style lang="scss"scoped>
    h1{
        font-family: 'Poppins', sans-serif;
        margin: 12px 0px 7px 0px;
        color: #4357AD;
        @media (max-width:370px){
            font-size:1.65em;
            margin: 7px 0px 2px 0px;
        }
    }
    div.tricks{
        background-size:cover;
        background-position:center;
        background-attachment:fixed;
        min-height:100vh;
        width:100%;
        padding:30px;
        transition:1s;
        &.blur{
            opacity:0;
        }
        @media (max-width:600px){
            padding:20px;
        }
        @media (max-width:450px){
            padding:10px;
        }
        box-sizing:border-box;
        display:flex;

        justify-content: flex-start;
        align-items: flex-end;
        div.inner-space{
            background: #fff;
            box-sizing:border-box;
            display:flex;
            justify-content: space-around;

            @media (max-width:1050px){
                display: block;
            }
            &:nth-child(2){
                background-color: #f50b00;
                padding: 0px 10px;
                h1{

                    a{
                        color: #fff;
                    }
                }
            }
        }
        div.col{

            padding:30px;
            height:100%;
            @media (max-width:1050px){
                width:100%;
            }
            div.responsive-img{
                width:100%;
                max-height:350px;

                overflow:hidden;
                img{
                    width:100%;
                }
            }
            div.description{
                font-family: 'Poppins', sans-serif;
                letter-spacing: 0px;
                font-size:.95em;
                color:rgba(0,0,0,.7);
                padding-bottom:5px;
                border-bottom: 1px dashed rgba(67,87,173,.25);
                @media (max-width:370px){
                    font-size:.82em;
                }
                height:290px;
            }
            +div.space{
                border-right: 3px dotted #000;
                @media (max-width:1050px){
                    display:none;
                }
            }
            div.other-photos{
                padding-top:5px;
            }
        }
        div.col-spec{
            width:100%;
        }
    }
    h2{
        font-family: 'Poppins', sans-serif;
        margin: 12px 0px 7px 0px;
        color: #4357AD;
    }
    ul{
        margin-top: 0px;
        font-family: 'Poppins', sans-serif;
        li{

        }
    }
</style>