$(function() {

    var swiperhome01T07 = new Swiper(".home01-template-07 .swiper-container", {
        slidesPerView: 1,
        spaceBetween: 40,
        speed: 1500,
        allowTouchMove: true,
        autoplay:{
            delay:3000,
        },
        navigation: {
            nextEl: '.home01-template-07  .swiper-button-next',
            prevEl: '.home01-template-07  .swiper-button-prev',
            disabledClass: 'my-button-disabled',
            clickable: true,

        },
    });
    if($('.home01-template-07 .right .swiper-slide').length <2){
        $('.home01-template-07 .right .swiper-button-group').hide()
    }
})

// setTimeout(function() {

//     $('.home01-template-07 .right .swiper-button-group').addClass('active')


// }, 0)

let t7 = gsap.timeline()

t7.fromTo('.home01-template-07 .left', {
    y: 100,
    opacity: 0
}, {

    duration: .45,
    y: 0,
    opacity: 1
}).fromTo('.home01-template-07 .left img', {
    y: 100,
    opacity: 0
}, {

    duration: .45,
    y: 0,
    opacity: 1
})
.fromTo('.home01-template-07 .right h3', {
    y: 100,
    opacity: 0
}, {

    duration: .45,
    y: 0,
    opacity: 1
}).fromTo('.home01-template-07 .right .text', {
    y: 100,
    opacity: 0
}, {

    duration: .45,
    y: 0,
    opacity: 1
}).fromTo('.home01-template-07 .right .swiper-slide', {
    y: 100,
    opacity: 0
}, {

    duration: .45,
    y: 0,
    opacity: 1
})
.fromTo('.home01-template-07 .right .swiper-button-group', {
    y: 100,
    opacity: 0
}, {

    duration: .45,
    y: 0,
    opacity: 1
})

ScrollTrigger.create({
    animation: t7,
    trigger: '.home01-template-07',
    toggleActions: 'restart pause restart reset',
    start:'top 80%',

    // markers: true,
})