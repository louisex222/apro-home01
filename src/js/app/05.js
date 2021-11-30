(function() {
    'use strict';
    let swiper05 = new Swiper('.home01-template-05 .swiper-container', {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 40,
        loop: true,
        speed:900,
        centeredSlides: true,
        allowTouchMove: true,
        // autoplay:{
        //     delay:3000,
        // },
        navigation: {
            nextEl: '.home01-template-05 .swiper-button-next',
            prevEl: '.home01-template-05 .swiper-button-prev',
            disabledClass: 'my-button-disabled',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            740: {
                slidesPerView: 2,
                spaceBetween: 30,
            },

            1100: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1500: {
                slidesPerView: 3,
                spaceBetween: 50,
            },

        }
    })
    if($('.home01-template-05 .swiper-slide').length <=3){
        $('.home01-template-05 .wrap .swiper-button-prev').hide()
        $('.home01-template-05 .wrap .swiper-button-next').hide()
        swiper05.destroy()
        $('.home01-template-05 .wrap .swiper-container .swiper-wrapper ').css('left','0')
        
    }
})(); /* IIFE end */

// setTimeout(function() {
//     $('.home01-template-05 .wrap h3').addClass('active')
//     $('.home01-template-05 .wrap .swiper-container').addClass('active')

// }, 0)

let t5 = gsap.timeline()
t5.fromTo('.home01-template-05 h3 ', {
        y: 100,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        ease:"ease",
        rotation:0.01,
        duration:1,
    },0)
    .fromTo('.home01-template-05 .swiper-container',{
        y:100

    },{
        y:0,
        ease:"ease",
        rotation:0.01,
        duration:0.3,
        
    },0)
    .from('.home01-template-05 .swiper-slide', {
        stagger: { 
            each: 0.1,
            from: "left",
            ease: "ease",
            },
        
        y:100,
        opacity: 0,
        rotation:0.01,
        duration:0.3,
    },0)
ScrollTrigger.create({
    animation: t5,
    trigger: '.home01-template-05',
    toggleActions: 'play complete restart reset',
    // start:'top 80%',
    // markers: true,
})