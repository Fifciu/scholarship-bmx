<template lang="pug">
    div.opinion
        img.thumb-mob(:src="'/scholarship-bmx/static/'+photo")
        div.header
            img.thumb(:src="'/scholarship-bmx/static/'+photo")
            span.name {{who}}
        div.quote {{quote}}
</template>

<script>
  export default {
    props:{
      photo:{
        type: String,
        required: true
      },
      who:{
        type: String,
        required: true
      },
      quote:{
        type: String,
        required: true
      }
    },
    name: 'opinion',
  };
</script>

<style lang="scss" scoped>
    div.opinion{
        margin-top:35px;
        font-family: 'Poppins', sans-serif;
        width:95%;
        margin-left:2.5%;
        margin-bottom:50px;
        @media (max-width:550px){
            width:100%;
            margin-left:0%;
        }

        img.thumb-mob{
            display:none;
            @media (max-width:500px){
                display:block;
                width:100%;
            }
        }
        div.header{
            height:50px;
            background: #4357AD;
            color: #eee;
            display:flex;
            align-items: center;
            img.thumb{
                height:200%;
                margin-top:30px;
                margin-left: -2px;
                border-bottom-left-radius:50%;
                @media (max-width:800px){
                    height:160%;
                }
                @media(max-width:500px){
                    display:none;
                }
            }
            span.name{
                padding-left:20px;
                font-size: 1.5em;
                @media (max-width:400px){
                    font-size:1.2em;
                }
            }
        }
        div.quote{
            padding:15px;
            margin-left:80px;
            border-left: 1px dashed rgba(0,0,0,.2);
            border-right: 1px dashed rgba(0,0,0,.2);
            @media (max-width:800px){
                margin-left: 62px;
            }
            @media(max-width:500px){
                margin-left: 0px;
                border-bottom: 1px dashed rgba(0,0,0,.2);
            }
            @media (max-width:400px){
                font-size:.85em;
            }
        }
    }
</style>