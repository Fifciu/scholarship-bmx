<template lang="pug">
    div.sidebars
        div.sidebar
            div.header
                h1 BMX
                p Rowerowe sporty ekstremalne
            ul.menu
                router-link(
                tag="li"
                v-for="(i,index) in mainRoutes"
                    :to="i.route"
                class="hvr-radial-out"
                    :key="index"
                    @click.native="lookForFilters(i)"
                ) {{i.text}}
            ul.secondmenu
                li.caption Najpopularniejsze
                    ul.subitems
                        router-link(
                        tag="li"
                        v-for="(i,jndex) in popular"
                            :to="i.route"
                            :key="jndex+100"
                        ) {{i.text}}
            footer.
                Copyright by BMX, All rights reserved
        div.mob-sidebar
            div.header
                h1 BMX
            ul.menu
                router-link(
                tag="li"
                v-for="(i,index) in mainRoutes"
                    :to="i.route"
                    :key="index+200"
                class="hvr-radial-out"
                    @click.native="lookForFilters(i)"
                )
                    i(:class="i.icon")
                li.special.sidebar(
                    @click="toggleSubmenu"
                )
                    i.fas.fa-chevron-circle-right
                    ul.secondmenu
                        li.caption Najpopularniejsze
                            ul.subitems
                                router-link(
                                tag="li"
                                v-for="(i,index) in popular"
                                    :key="index+300"
                                    :to="i.route"
                                ) {{i.text}}
</template>

<script>
    import {mapMutations} from 'vuex';

  export default {
    name: 'Sidebar',
    data(){
      return {
        mainRoutes:[
          {
            text: "Home",
            icon: "fab fa-houzz",
            route: "/",
            filter: null
          },
          {
            text: "Akrobacje",
            icon: "fas fa-football-ball",
            route: "/",
            filter: "trick"
          },
          {
            text: "Zawodnicy",
            icon: "fas fa-skull",
            route: "/",
            filter: "rider"
          },
          {
            text: "O nas",
            icon: "fas fa-user-secret",
            route: "/about"
          }
        ],
        popular:[
          {
            text: "Logan Martin",
            route: "/players/logan-martin"
          },
          {
            text: "Stevie Churchill",
            route: "/players/stevie-churchill"
          },
          {
            text: "Dawid Godziek",
            route: "/players/dawid-godziek"
          },
          {
            text: "Flipwhip",
            route: "/tricks/flipwhip"
          },
          {
            text: "Flip Nohander",
            route: "/tricks/flip-nohander"
          }
        ]
      };
    },
    methods:{
    ...mapMutations(["setFilter"]),
      toggleSubmenu(){
        var el = document.querySelector("li.special.sidebar");
        el.querySelector("i").classList.toggle("opened-menu");
      },
      lookForFilters(i){
        if("filter" in i){
            this.setFilter(i.filter);
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
    ul{
        list-style:none;
        padding:0px;
        margin:0px;
    }
    /* Radial Out */
    .hvr-radial-out {
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        overflow: hidden;
        background: #e1e1e1;
        -webkit-transition-property: color;
        transition-property: color;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
    }
    .hvr-radial-out:before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #2098D1;
        border-radius: 100%;
        -webkit-transform: scale(0);
        transform: scale(0);
        -webkit-transition-property: transform;
        transition-property: transform;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }
    .hvr-radial-out:hover, .hvr-radial-out:focus, .hvr-radial-out:active {
        color: white;
    }
    .hvr-radial-out:hover:before, .hvr-radial-out:focus:before, .hvr-radial-out:active:before {
        -webkit-transform: scale(2);
        transform: scale(2);
    }

    div.sidebar{
        @media (max-height:550px){
            overflow-y: scroll;
        }
        width:270px;
        background:#1f272b;
        position:fixed;
        z-index:1000;
        left:0px;top:0px;
        transition: .7s;
        @media (max-width:700px){
            left:-300px;
        }
        height:100%;

        h1{
            margin:0;
            font-family: 'Do Hyeon', sans-serif;
            font-size:2.4em;
        }
        p{
            margin: 0;
            margin-top:-7px;
            font-family: 'Montserrat', sans-serif;
            color:#4357AD;
            font-size:.85em;
        }
        div.header{
            background:#f0f0f0;
            padding:25px 0px;
            text-align: center;
            @media (max-height:360px){
                display:none;
            }
        }
        ul.menu{
            padding:0px;
            margin:0;
            li{
                width:100%;
                box-sizing:border-box;
                font-size:1.14em;
                letter-spacing: -2px;
                border-bottom: 1px solid #000;
                color:#fff;
                padding: 17px 27px;
                text-align: right;
                font-family: 'Montserrat', sans-serif;
                /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#30383c+0,22282d+100 */
                background: #30383c; /* Old browsers */
                background: -moz-linear-gradient(top, #30383c 0%, #22282d 100%); /* FF3.6-15 */
                background: -webkit-linear-gradient(top, #30383c 0%,#22282d 100%); /* Chrome10-25,Safari5.1-6 */
                background: linear-gradient(to bottom, #30383c 0%,#22282d 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#30383c', endColorstr='#22282d',GradientType=0 ); /* IE6-9 */
                &:hover{
                    cursor: pointer;
                }
            }
            li.active{
                background: #4357AD;
            }
        }
        ul.secondmenu{
            color:#E4DFDA;
            margin-top:20px;
            text-align:right;
            padding-bottom:20px;
            li.caption{
                color: #5169d1;
                font-size:1.05em;
                padding-right:30px;
                letter-spacing:1px;
                ul{
                    font-size: .7em;
                    padding-top:5px;
                    li{
                        padding: 4px 0px;
                        color:#999;
                        &:hover{
                            color:#eee;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
        footer{
            font-size:.75em;
            text-align:center;
            padding-bottom:15px;
            color: #4357AD;
        }
    }
    div.mob-sidebar{
        width:60px;
        background:#1f272b;
        position:fixed;
        z-index:900;
        left:-60px;top:0px;
        transition: .7s;
        @media (max-width:700px){
            left:0px;
        }
        height:100%;

        p{
            margin: 0;
            margin-top:-7px;
            font-family: 'Montserrat', sans-serif;
            color:#4357AD;
            font-size:.85em;
        }
        div.header{
            background:#f0f0f0;
            padding:15px 0px;
            padding-bottom:12px;
            display:flex;
            align-items:center;
            justify-content:center;
            h1{
                margin:0;
                font-family: 'Do Hyeon', sans-serif;
                font-size:2.4em;
                writing-mode: tb-rl;
            }
            @media (max-height:360px){
                display:none;
            }
        }
        ul.menu{
            padding:0px;
            margin:0;
            li{
                width:100%;
                box-sizing:border-box;
                font-size:1.14em;
                letter-spacing: -2px;
                border-bottom: 1px solid #000;
                color:#fff;
                padding: 15px 0px;
                text-align:center;
                font-family: 'Montserrat', sans-serif;
                /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#30383c+0,22282d+100 */
                background: #30383c; /* Old browsers */
                background: -moz-linear-gradient(top, #30383c 0%, #22282d 100%); /* FF3.6-15 */
                background: -webkit-linear-gradient(top, #30383c 0%,#22282d 100%); /* Chrome10-25,Safari5.1-6 */
                background: linear-gradient(to bottom, #30383c 0%,#22282d 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#30383c', endColorstr='#22282d',GradientType=0 ); /* IE6-9 */
                &:hover{
                    cursor: pointer;
                }
                +.special{
                    background: #5a75e9; /* Old browsers */
                    background: -moz-linear-gradient(top, #5a75e9 0%, #3d4d96 100%); /* FF3.6-15 */
                    background: -webkit-linear-gradient(top, #5a75e9 0%, #3d4d96 100%); /* Chrome10-25,Safari5.1-6 */
                    background: linear-gradient(to bottom, #5a75e9 0%, #3d4d96 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5a75e9', endColorstr='#3d4d96',GradientType=0 ); /* IE6-9 */
                    color:#000;
                    position:relative;
                    z-index:1000;
                    overflow:initial;
                    i{
                        transition:.5s;
                    }
                    ul.secondmenu{
                        position:absolute;
                        left:-300px;
                        z-index:-1;
                        bottom:0px;
                        transition:.5s;
                        opacity:0;
                        li.caption{
                            background:#eee;
                            -webkit-box-shadow: 10px 0px 24px -8px rgba(0,0,0,0.75);
                            -moz-box-shadow: 10px 0px 24px -8px rgba(0,0,0,0.75);
                            box-shadow: 10px 0px 24px -8px rgba(0,0,0,0.75);
                            padding:15px;
                            ul.subitems{
                                li{
                                    background:#eee;
                                    border-bottom: 1px solid #4357AD;
                                    font-weight:bold;
                                    color:#555;
                                    font-size: 1em;
                                    letter-spacing: .5px;
                                    &:last-of-type{
                                        border:0;
                                    }
                                }
                            }
                        }
                    }
                    i.opened-menu{
                        transform: rotate(180deg);
                        +ul.secondmenu{
                            left:60px;
                            opacity:1;
                        }
                    }
                }
            }
            li.active{
                background: #4357AD;
            }
        }
        ul.secondmenu{
            color:#E4DFDA;
            margin-top:20px;
            text-align:right;
            li.caption{
                color: #5169d1;
                font-size:1.05em;
                padding-right:30px;
                letter-spacing:1px;
                ul{
                    font-size: .7em;
                    padding-top:5px;
                    li{
                        padding: 4px 0px;
                        color:#999;
                        &:hover{
                            color:#eee;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
        footer{
            font-size:.7em;
            position:absolute;
            bottom:10px;
            left:0;right:0;margin:auto;
            color: #fff;
            text-align:center;
        }
    }
</style>