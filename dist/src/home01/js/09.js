"use strict";var rown1=Math.round($(".home01-template-09 .left p").height()/parseFloat($(".home01-template-09 .left p").css("line-height")));console.log(rown1),1500<window.innerWidth&&3<rown1&&$(".home01-template-09 .left p").css("margin-bottom","4.9875vw");var t9=gsap.timeline();t9.fromTo(".home01-template-09 .left h3",{y:100,opacity:0},{duration:.45,y:0,opacity:1}).fromTo(".home01-template-09 .left >div",{y:100,opacity:0},{duration:.45,y:0,opacity:1}).fromTo(".home01-template-09 .left .direction",{y:100,opacity:0},{duration:.45,y:0,opacity:1}).fromTo(".home01-template-09 .right img",{y:100,opacity:0},{duration:.45,y:0,opacity:1}),ScrollTrigger.create({animation:t9,trigger:".home01-template-09",toggleActions:"restart pause restart reset"});