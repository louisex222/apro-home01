"use strict";var rown1=Math.round($(".home01-template-03 .right .box span").height()/parseFloat($(".home01-template-03 .right .box span").css("line-height"))),rown2=Math.round($(".home01-template-03 .right .box p").height()/parseFloat($(".home01-template-03 .right .box p").css("line-height")));1500<window.innerWidth&&(2<rown1&&$(".home01-template-03 .right .box").css("padding-top","8.66vw"),2<rown2&&$(".home01-template-03 .right .box").css("padding-top","8.66vw"),2<rown1&&2<rown2&&$(".home01-template-03 .right .box").css("padding-top","6.66vw")),window.innerWidth<1500&&(2<rown1&&$(".home01-template-03 .right .box").css("padding-top","11.66vw"),2<rown2&&$(".home01-template-03 .right .box").css("padding-top","11.66vw"),2<rown1&&2<rown2&&$(".home01-template-03 .right .box").css("padding-top","9.66vw"));var t3=gsap.timeline();t3.fromTo(".home01-template-03 .left ",{y:100,opacity:0},{duration:.45,y:0,opacity:1}).fromTo(".home01-template-03 .left img",{y:100,opacity:0},{duration:.45,y:0,opacity:1}).fromTo(".home01-template-03 .right h3",{y:100,opacity:0},{duration:.45,y:0,opacity:1}).fromTo(".home01-template-03 .right .box div",{y:100,opacity:0},{duration:.45,y:0,opacity:1}),ScrollTrigger.create({animation:t3,trigger:".home01-template-03",toggleActions:"restart pause restart reset",start:"top 80%"});