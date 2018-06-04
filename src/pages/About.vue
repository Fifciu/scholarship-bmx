<template lang="pug">
    div.players(:style="'background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.1)), url(https://cdn.dribbble.com/users/77111/screenshots/2603500/attachments/519183/desktop_wallpaper2_by_maria_shanina.png)'")
        div.inner-space
            h1 Skontaktuj się z nami
            p W celu nawiązania kontaktu wypełnij poniższy formularzy. Na pewno się odezwiemy!
            h2 Wyślij nam wiadomość
            div.form
                div.col.flex
                    div.inp-group
                        i.fas.fa-user
                        input(
                            type="text"
                            placeholder="Nick"
                        )
                    div.inp-group
                        i.fas.fa-envelope
                        input(
                            type="text"
                            placeholder="E-Mail"
                        )
                    div.inp-group
                        i.fas.fa-link
                        input(
                            type="text"
                            placeholder="Strona WWW"
                        )
                div.col
                    div.inp-group-big
                        textarea(
                            placeholder="Wiadomość"
                        )
                        button.send.
                            Wyślij teraz!
</template>

<script>
  export default {

  };
</script>

<style lang="scss"scoped>
    h1{
        font-family: 'Poppins', sans-serif;
        margin: 0;
        color: #4357AD;
        white-space: nowrap;
        @media (max-width:750px){
            font-size:1.8em;
        }
        @media (max-width:460px){
            font-size:1.65em;
        }
        @media (max-width:410px){
            font-size:1.55em;
            margin: 7px 0px 2px 0px;
        }
        @media (max-width:380px){
            font-size:1.45em;
        }
        @media (max-width:360px){
            font-size:1.35em;
        }
        @media (max-width:350px){
            font-size:1.27em;
            margin-left: -5px;
        }
        @media (max-width:330px){
            font-size:1.2em;
        }
    }
    h2{
        font-size:1.25em;
    }
    p{
        margin:0;
        font-family: 'Poppins', sans-serif;
        border-bottom: 1px solid rgba(0,0,0,.15);
        padding-bottom:10px;
        margin-bottom:20px;
        @media (max-width:750px){
            font-size:.97em;
        }
        @media (max-width:460px){
            font-size:.9em;
        }
        @media (max-width:410px){
            margin: 7px 0px 2px 0px;
        }
        @media (max-width:360px){
            margin-top:0px;
        }
    }
    div.players{
        background-size:cover !important;
        background-position:center;
        background-attachment:fixed;
        min-height:100vh;
        width:100%;
        padding:30px;
        @media (max-width:600px){
            padding:20px;
        }
        @media (max-width:450px){
            padding:10px;
        }
        @media (max-width:1000px){
            padding-bottom: 70px;
        }
        box-sizing:border-box;
        display:flex;

        justify-content: center;
        align-items: center;
        div.inner-space{
            padding:30px;
            background: #fff;
            box-sizing:border-box;
            width:55%;
            outline: 1000px dotted rgba(255,255,255,.15);
            @media(max-width:1750px){
                outline: 700px dotted rgba(255,255,255,.15);
            }
            @media(max-width:1450px){
                outline: 500px dotted rgba(255,255,255,.15);
                width:70%;
            }
            @media(max-width:1300px){
                outline: 450px dotted rgba(255,255,255,.15);
                width:85%;
            }
            @media(max-width:1000px){
                width:100%;
                outline: 0px dotted rgba(255,255,255,.15);
            }

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
        div.form{
            width:100%;
            display:flex;
            flex-wrap:wrap;
            div.col.flex{
                display:flex;
                flex-wrap:wrap;
               justify-content: space-between;
                div.inp-group{
                    width:100%;
                }
            }
            div.col{
                width:49%;
                margin-right:1%;
                box-sizing: border-box;
                @media (max-width:1000px){
                    width:100%;
                    margin:0;
                }

                div.inp-group{
                    padding: 0px 0px;
                    margin-bottom: 10px;
                    input,i{
                        padding: 10px 0px;
                        height:100%;
                        box-sizing: border-box;
                    }
                    input{
                        padding-left: 10px;
                        border:2px solid rgba(81,105,209,1);
                        width:70%;
                        @media (max-width:1000px){
                            border:1px solid rgba(81,105,209,1);
                            width:80%;
                        }
                        @media (max-width:365px){
                            width:100%;
                        }
                    }
                    i{
                        @media (max-width:365px){
                            display:none;
                        }
                        width:40px;
                        text-align: center;
                        padding: 10px 5px;
                        border: 1px solid rgba(0,0,0,.4);
                        border: 0;
                        margin-right:5px;
                        color:#eee;
                        background: linear-gradient(rgba(81,105,209,1), rgba(81,105,209,.7));
                    }
                }
                div.inp-group-big{
                    @media (max-width:1000px){
                        border-top: 2px dashed rgba(81,105,209,.2);
                        padding-top:22px;
                        margin-top:12px;
                    }
                    height:100%;
                    textarea{
                        padding: 10px;
                        box-sizing: border-box;
                        height:67%;
                        border:0;
                        border:1px solid rgba(81,105,209,1);
                        width:100%;
                        margin-bottom:3%;
                        @media (max-width:1000px){
                            width:100%;
                        }
                    }
                    button{
                        background: linear-gradient(rgba(81,105,209,1), rgba(81,105,209,.7));
                        border:0px;
                        padding:5px;
                        color:#eee;
                        height:30%;
                        width:100%;
                        font-family: 'Poppins', sans-serif;
                        font-size: 1.05em;
                        cursor: pointer;
                        @media (max-width:1000px){
                            -webkit-box-shadow: 10px 10px 37px -6px rgba(0,0,0,0.75);
                            -moz-box-shadow: 10px 10px 37px -6px rgba(0,0,0,0.75);
                            box-shadow: 10px 10px 37px -6px rgba(0,0,0,0.75);
                        }
                    }
                }
            }
        }
    }
    h2{
        font-family: 'Poppins', sans-serif;
        margin: 12px 0px 7px 0px;
        color: #4357AD;
        white-space: nowrap;
        @media (max-width:460px){
            font-size:1.2em;
        }
        @media (max-width:410px){
            font-size:1.2em;
        }
        @media (max-width:380px){
            font-size:1.15em;
        }
        @media (max-width:350px){
            font-size:1.1em;
        }
        @media (max-width:330px){
            font-size:1.05em;
            margin-left: -7px;
        }
    }
</style>