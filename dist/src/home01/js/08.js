"use strict";$(function(){var e=new Swiper(".home01-template-08 .swiper-container",{slidesPerGroup:1,slidesPerView:4,speed:1e3,loop:!1,clickable:!0,allowTouchMove:!0,breakpoints:{0:{slidesPerView:1,spaceBetween:30},740:{slidesPerView:2,spaceBetween:50},1150:{slidesPerView:3,spaceBetween:70},1800:{slidesPerView:4,spaceBetween:130}},navigation:{nextEl:".home01-template-08 .swiper-button-next",prevEl:".home01-template-08 .swiper-button-prev",clickable:!0},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}});$(".home01-template-08 .swiper-slide").length<=3&&($(".home01-template-08 .swiper-button-group").hide(),$(".home01-template-08 .swiper-container .swiper-wrapper .swiper-slide").addClass("v"),e.destroy())});var t8=gsap.timeline();t8.fromTo(".home01-template-08 h3",{y:150,opacity:0},{y:0,opacity:1,ease:"ease",rotation:.01,duration:1},0).fromTo(".home01-template-08 .swiper-button-group",{y:150,opacity:0},{y:0,ease:"ease",opacity:1,rotation:.01,duration:1},0).fromTo(".home01-template-08 .swiper-container",{y:100},{y:0,ease:"ease",rotation:.01,duration:.3},0).from(".home01-template-08 .swiper-slide",{stagger:{each:.3,from:"left",ease:"ease"},rotation:.01,y:100,opacity:0,duration:.3},0),ScrollTrigger.create({animation:t8,trigger:".home01-template-08",toggleActions:"restart pause restart reset",toggleClass:"move"});