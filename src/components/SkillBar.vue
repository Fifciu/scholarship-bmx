<template lang="pug">
    div.skill-bar
        div.name {{name}}
        div.level {{level}}%
        div.bar
            div.progress(
                :class="name"
                :style="color !== null && color !== undefined ? 'background: ' + color + ';' : ''"
            )
</template>

<script>
  export default {
    name: 'skill-bar',
    props:{
      level:{
        type: Number,
        required: true
      },
      name:{
        type: String,
        required: true
      },
      color: String
    },
    watch:{
      level(n,o){
        this.refresh();
      }
    },
    mounted(){
      this.refresh();
    },
    methods:{
      refresh(){
        const timer = Math.random() * 500;
        setTimeout(() => {
          const selector = "div.progress."+this.name;
          const item = document.querySelector(selector);
          item.style.width = this.level + "%";
        }, timer);
      }
    }
  };
</script>

<style lang="scss" scoped>
    div.skill-bar{
        width:100%;
        display:flex;
        justify-content:space-between;
        font-family: 'Poppins', sans-serif;
        font-size:.9em;
        flex-wrap:wrap;
        margin-bottom: 10px;
        div.level{
            text-align: right;
            width:20%;
            color:#000;
        }
        div.name{
            width:80%;
            color: #222;
            font-size:1.05em;
        }
        div.bar{
            width:100%;
            height:35px;
            background: rgba(0,0,0,.16);
            margin-top:6px;
            >div.progress{
                height:100%;
                background: #4357AD;
                transition:1.4s;
                width:0%;
            }
        }
    }
</style>