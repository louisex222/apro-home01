"use strict";$(function(){new Swiper(".swiper-flor01-exp",{slidesPerView:1,speed:600,autoplay:{delay:6e3,disableOnInteraction:!0},navigation:{nextEl:".next-flor01-t06",prevEl:".prev-flor01-t06"},pagination:{el:".page-flor01-exp",type:"bullets",clickable:!0}})});var animate=(new TimelineMax).add([TweenMax.fromTo("#flor01-template-06 .title-area",.9,{opacity:0,y:100},{opacity:1,y:0,ease:Power2.easeOut}),TweenMax.fromTo("#flor01-template-06 .thumb-box",.7,{opacity:0,y:100},{opacity:1,y:0,delay:.1,ease:Power2.easeOut}),TweenMax.fromTo("#flor01-template-06 .sec_title",.7,{opacity:0,y:100},{opacity:1,y:0,delay:.2,ease:Power2.easeOut}),TweenMax.fromTo("#flor01-template-06 .exp-info",.7,{opacity:0,y:100},{opacity:1,y:0,delay:.3,ease:Power2.easeOut}),TweenMax.fromTo("#flor01-template-06 .exp-slide .desc",.7,{opacity:0,y:100},{opacity:1,y:0,delay:.4,ease:Power2.easeOut}),TweenMax.fromTo(".flor01-template-06 .controller",.8,{opacity:0,y:100},{opacity:1,y:0,delay:.5,ease:Power2.easeOut}),TweenMax.fromTo(".flor01-template-06 .img-holder",.8,{opacity:0,y:100,scale:1.1},{opacity:1,y:0,scale:1,delay:.2,ease:Power2.easeOut})]),scene06=new ScrollMagic.Scene({triggerElement:"#flor01-template-06"}).setTween(animate).addTo(controller);scene06.on("enter",function(e){$(".num-count-animate").each(function(e,a){var t=$(this).data("count");animateValue($(this).data("id"),0,t,$(this).data("time"))})});var scene06p=new ScrollMagic.Scene({triggerElement:"#flor01-template-06",triggerHook:"onEnter",duration:"150%"}).setTween("#parallax06",{y:"30%",ease:Linear.easeNone}).addTo(controller);function animateValue(e,a,t,o){var l=t-a,n=a,r=a<t?1:-1,l=Math.abs(Math.floor(o/l)),i=document.getElementById(e),c=setInterval(function(){n+=r,(i.innerHTML=n)==t&&clearInterval(c)},l)}