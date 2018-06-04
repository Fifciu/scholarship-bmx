<template lang="pug">
    div.players
        div.inner-space
            div.col
                div.responsive-img
                    img(:src="'/scholarship-bmx/static/players/'+players[pickedOne].slug+'.jpg'")
                h1 {{players[pickedOne].name}}
                    span &nbsp;{{players[pickedOne].secondname}}
                div.description(v-html="players[pickedOne].description")
                div.other-photos
                    h2 Inne zdjęcia
                    cmp-grid-gallery(:player="players[pickedOne].slug")
            div.space
            div.col
                h2 Umiejętności
                cmp-skill-bar(
                    v-for="(i,index) in players[pickedOne].skills"
                    :name="i.name"
                    :level="i.level"
                    :color="i.color"
                    :key="index"
                )
                h2(style="margin-top:30px;") Opinie
                cmp-opinion(
                    photo="portrait.jpg"
                    who="Dennis Enarson"
                    quote="Just an amazing guy! He went on to blow minds by throwing 360 tailwhip hops and doing many of his hop tricks over huge stair sets and street gap set-ups. "
                )
                cmp-opinion(
                    photo="portrait2.jpg"
                    who="Chad Kerley"
                    quote="Wonderful rider, such a big skills! He went on to blow minds by throwing 360 tailwhip hops and doing many of his hop tricks over huge stair sets and street gap set-ups. "
                )
                h2 Najlepsze tricki
                ul
                    li(v-for="i in players[pickedOne].tricks") {{ i }}
</template>

<script>
    import cmpGridGallery from '@/components/GridGallery.vue';
    import cmpSkillBar from '@/components/SkillBar.vue';
    import cmpOpinion from '@/components/Opinion.vue';

  export default {
    data(){
      return {
        players:[
          {
            slug: "stevie-churchill",
            name: "Stevie",
            secondname: "Churchill",
            description: "Churchill was discove#ff0000 at age 16 doing tricks well beyond his years. \"Lil' Stevie\" went on to blow minds by throwing 360 tailwhip hops and doing many of his hop tricks over huge stair sets and street gap set-ups. Has done some of the biggest truckdrivers and 360 tailwhips down stairs in the history of BMX. The Bristol, CT native developed the technical side of his riding as well, linking multiple tricks into long manual and grind lines and learning a slew of tricks in his opposite direction. He earned his one and only X Games medal - bronze - in Barcelona.<p>Stevie placed seventh in Street at X Games LA 2012, his first X Games appearance, and went on to claim Bronze in Barcelona 2013. He sco#ff0000 fourth in Street at Dew Tour San Francisco in Oct. 2013 and fourth at Texas Toast in Austin, TX, in Oct. 2013.</p>",
            skills:[
              {
                name: "Dirt",
                level: 15,
                color: "#2bb630"
              },
              {
                name: "Park",
                level: 72,
                color: "#4357AD"
              },
              {
                name: "Street",
                level: 95,
                color: "#ff0000"
              },
              {
                name: "Flat",
                level: 88,
                color: "#606060"
              }
            ],
            tricks: [
                "360 Barspin z El toro",
                "360 Tailwhip na flacie",
                "360 Tailwhip z dropów",
                "Tailwhip to framestane to Tailwhip",
                "Bunnyhop 720"
            ]
          },
          {
            slug: "kyle-baldock",
            name: "Kyle",
            secondname: "Baldock",
            description: "<p>A multiple X Games medalist, Australia's Kyle Baldock earned both Dirt and Park gold at XG Foz 2013, catapulting his name to the forefront of BMX competition. In the time since, Baldock has become a BMXer that can transcend multiple disciplines at X Games, including Park and Dirt. Before Baldock, few riders were able to compete at the top level in multiple disciplines, but with Baldock's performances at X Games since 2013, he has put himself in elite company with legendary riders such as Ryan Nyquist, Dave Mirra and Jay Miron. He has a signature line with Total BMX dubbed the 'Killabee' line, and trains in the gym for up to 1.5 hours a day.</p>",
            skills:[
              {
                name: "Dirt",
                level: 82,
                color: "#2bb630"
              },
              {
                name: "Park",
                level: 90,
                color: "#4357AD"
              },
              {
                name: "Street",
                level: 58,
                color: "#ff0000"
              },
              {
                name: "Flat",
                level: 24,
                color: "#606060"
              }
            ],
            tricks: [
              "720 Double Tailwhip",
              "Opposite Flair Downwhip",
              "Double backflip",
              "Street Frontflips",
              "Tech game"
            ]
          },
          {
            slug: "logan-martin",
            name: "Logan",
            secondname: "Martin",
            description: "<p>A multiple X Games medalist, Australia's Logan Martin earned both Dirt and Park gold at XG Foz 2013, catapulting his name to the forefront of BMX competition. In the time since, Baldock has become a BMXer that can transcend multiple disciplines at X Games, including Park and Dirt. Before Baldock, few riders were able to compete at the top level in multiple disciplines, but with Baldock's performances at X Games since 2013, he has put himself in elite company with legendary riders such as Ryan Nyquist, Dave Mirra and Jay Miron. He has a signature line with Total BMX dubbed the 'Killabee' line, and trains in the gym for up to 1.5 hours a day.</p>",
            skills:[
              {
                name: "Dirt",
                level: 80,
                color: "#2bb630"
              },
              {
                name: "Park",
                level: 100,
                color: "#4357AD"
              },
              {
                name: "Street",
                level: 60,
                color: "#ff0000"
              },
              {
                name: "Flat",
                level: 39,
                color: "#606060"
              }
            ],
            tricks: [
              "Perfekcja w każdej ewolucji"
            ]
          },
          {
            slug: "irek-rizaev",
            name: "Irek",
            secondname: "Rizaev",
            description: "<p>A multiple X Games medalist, Russia's Irek Rizev earned both Dirt and Park gold at XG Foz 2013, catapulting his name to the forefront of BMX competition. In the time since, Baldock has become a BMXer that can transcend multiple disciplines at X Games, including Park and Dirt. Before Baldock, few riders were able to compete at the top level in multiple disciplines, but with Baldock's performances at X Games since 2013, he has put himself in elite company with legendary riders such as Ryan Nyquist, Dave Mirra and Jay Miron. He has a signature line with Total BMX dubbed the 'Killabee' line, and trains in the gym for up to 1.5 hours a day.</p>",
            skills:[
              {
                name: "Dirt",
                level: 85,
                color: "#2bb630"
              },
              {
                name: "Park",
                level: 90,
                color: "#4357AD"
              },
              {
                name: "Street",
                level: 50,
                color: "#ff0000"
              },
              {
                name: "Flat",
                level: 31,
                color: "#606060"
              }
            ],
            tricks: [
              "Twix",
                "360 Unturn",
                "360 barspin to superman"
            ]
          },
          {
            slug: "kostya-andreev",
            name: "Kostya",
            secondname: "Andreev",
            description: "<p>A multiple X Games medalist, Russia's Kostya Andreev earned both Dirt and Park gold at XG Foz 2013, catapulting his name to the forefront of BMX competition. In the time since, Baldock has become a BMXer that can transcend multiple disciplines at X Games, including Park and Dirt. Before Baldock, few riders were able to compete at the top level in multiple disciplines, but with Baldock's performances at X Games since 2013, he has put himself in elite company with legendary riders such as Ryan Nyquist, Dave Mirra and Jay Miron. He has a signature line with Total BMX dubbed the 'Killabee' line, and trains in the gym for up to 1.5 hours a day.</p>",
            skills:[
              {
                name: "Dirt",
                level: 39,
                color: "#2bb630"
              },
              {
                name: "Park",
                level: 99,
                color: "#4357AD"
              },
              {
                name: "Street",
                level: 80,
                color: "#ff0000"
              },
              {
                name: "Flat",
                level: 78,
                color: "#606060"
              }
            ],
            tricks: [
              "Najwyższy poziom technicznych sztuczek"
            ]
          },
          {
            slug: "dawid-godziek",
            name: "Dawid",
            secondname: "Godziek",
            description: "<p>A multiple X Games medalist, Dawid Godziek earned both Dirt and Park gold at XG Foz 2013, catapulting his name to the forefront of BMX competition. In the time since, Baldock has become a BMXer that can transcend multiple disciplines at X Games, including Park and Dirt. Before Baldock, few riders were able to compete at the top level in multiple disciplines, but with Baldock's performances at X Games since 2013, he has put himself in elite company with legendary riders such as Ryan Nyquist, Dave Mirra and Jay Miron. He has a signature line with Total BMX dubbed the 'Killabee' line, and trains in the gym for up to 1.5 hours a day.</p>",
            skills:[
              {
                name: "Dirt",
                level: 100,
                color: "#2bb630"
              },
              {
                name: "Park",
                level: 60,
                color: "#4357AD"
              },
              {
                name: "Street",
                level: 60,
                color: "#ff0000"
              },
              {
                name: "Flat",
                level: 58,
                color: "#606060"
              }
            ],
            tricks: [
              "Bodyvarial",
                "360 Bodyvarial",
                "Twister",
                "Twister Nohander"
            ]
          },
          {
            slug: "dave-mirra",
            name: "Dave",
            secondname: "Mirra",
            description: "<p>A multiple X Games medalist, Dave Mirra earned both Dirt and Park gold at XG Foz 2013, catapulting his name to the forefront of BMX competition. In the time since, Baldock has become a BMXer that can transcend multiple disciplines at X Games, including Park and Dirt. Before Baldock, few riders were able to compete at the top level in multiple disciplines, but with Baldock's performances at X Games since 2013, he has put himself in elite company with legendary riders such as Ryan Nyquist, Dave Mirra and Jay Miron. He has a signature line with Total BMX dubbed the 'Killabee' line, and trains in the gym for up to 1.5 hours a day.</p>",
            skills:[
              {
                name: "Dirt",
                level: 100,
                color: "#2bb630"
              },
              {
                name: "Park",
                level: 100,
                color: "#4357AD"
              },
              {
                name: "Street",
                level: 100,
                color: "#ff0000"
              },
              {
                name: "Flat",
                level: 100,
                color: "#606060"
              }
            ],
            tricks: [
              "Just a legend"
            ]
          },
          {
            slug: "brett-banasiewicz",
            name: "Brett",
            secondname: "Banasiewicz",
            description: "<p>A multiple X Games medalist, Brett Banasiewicz earned both Dirt and Park gold at XG Foz 2013, catapulting his name to the forefront of BMX competition. In the time since, Baldock has become a BMXer that can transcend multiple disciplines at X Games, including Park and Dirt. Before Baldock, few riders were able to compete at the top level in multiple disciplines, but with Baldock's performances at X Games since 2013, he has put himself in elite company with legendary riders such as Ryan Nyquist, Dave Mirra and Jay Miron. He has a signature line with Total BMX dubbed the 'Killabee' line, and trains in the gym for up to 1.5 hours a day.</p>",
            skills:[
              {
                name: "Dirt",
                level: 100,
                color: "#2bb630"
              },
              {
                name: "Park",
                level: 100,
                color: "#4357AD"
              },
              {
                name: "Street",
                level: 70,
                color: "#ff0000"
              },
              {
                name: "Flat",
                level: 50,
                color: "#606060"
              }
            ],
            tricks: [
              "Slow cashroll"
            ]
          }
        ],
        pickedOne: null
      };
    },
    watch:{
      '$route'(n,o){
        if(n.params.player === undefined || n.params.player === null){
          this.$router.push("/");
        }

        let tmpOne = null;
        for(let i in this.players){
          if(this.players[i].slug === n.params.player){
            tmpOne = i;
            break;
          }
        }

        if(tmpOne === null)
          this.$router.push("/");

        const el = document.querySelector("div.players>div.inner-space");
        el.classList.add("blur");
        setTimeout(() => {
          this.pickedOne = tmpOne;
          el.classList.remove("blur");
        }, 1000);
      }
    },
    created(){
      const pick = this.$route.params.player;
      for(var i in this.players){
        if(this.players[i].slug === pick){
          this.pickedOne = i;
          break;
        }
      }
      if(this.pickedOne === null){
        this.$router.push("/");
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
    div.players{
        background:#b7b8ba;
        width:100%;
        min-height:100vh;
        height: 100%;
        padding:30px;
        @media (max-width:600px){
            padding:20px;
        }
        @media (max-width:450px){
            padding:10px;
        }
        box-sizing:border-box;
        div.inner-space{
            transition:1s;
            box-sizing:border-box;
            background: #fff;
            min-height: calc(100vh - 60px);
            padding:30px;
            display:flex;
            justify-content: space-around;
            width:100%;
            @media (max-width:1050px){
                display: block;
            }
            &.blur{
                filter:blur(10px);
                transform: scale(.2) translateX(150%);
                opacity:0;
            }
        }
        div.col{
            width:47%;
            height:100%;
            @media (max-width:1050px){
                width:100%;
            }
            div.responsive-img{
                width:100%;
                max-height:350px;
                border-bottom-right-radius:50%;

                overflow:hidden;
                img{
                    width:100%;
                }
                +h1{
                    font-family: 'Poppins', sans-serif;
                    margin: 12px 0px -6px 0px;
                    color: #4357AD;
                    @media (max-width:370px){
                        font-size:1.65em;
                        margin: 7px 0px 2px 0px;
                    }
                }
            }
            div.description{
                font-family: 'Poppins', sans-serif;
                letter-spacing: .5px;
                font-size:.95em;
                line-height: 120%;
                color:rgba(0,0,0,.55);
                padding-bottom:5px;
                border-bottom: 1px dashed rgba(67,87,173,.25);
                padding-left:8px;
                padding-right:5px;
                @media (max-width:370px){
                    font-size:.82em;
                }
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
            font-family: 'Poppins', sans-serif;
            letter-spacing: .5px;
            font-size:.95em;
            line-height: 120%;
            color:rgba(0,0,0,.55);
        }
    }
</style>