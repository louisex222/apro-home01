$(function() {

    var swiperhome01T07 = new Swiper(".home01-template-07 .swiper-container", {
        slidesPerView: 1,
        spaceBetween: 40,
        speed: 1000,
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
    y: 150,
    opacity: 0
}, {
    y: 0,
    opacity: 1,
    ease:"M0,0,C0.174,0.108,0.203,0.444,0.336,0.65,0.481,0.876,0.822,1,1,1 ",
    rotation:0.01,
    duration:1.2,

},0).fromTo('.home01-template-07 .left img', {
    y: 150,
    opacity: 0
}, {
    y: 0,
    opacity: 1,
    ease:"M0,0,C0.174,0.108,0.203,0.444,0.336,0.65,0.481,0.876,0.822,1,1,1 ",
    rotation:0.01,
    duration:1.2,

},0.3)
.fromTo('.home01-template-07 .right h3', {
    y: 150,
    opacity: 0
}, {
    y: 0,
    opacity: 1,
    ease:"M0,0,C0.174,0.108,0.203,0.444,0.336,0.65,0.481,0.876,0.822,1,1,1 ",
    rotation:0.01,
    duration:1.1,

},0.4).fromTo('.home01-template-07 .right .swiper-slide', {
    y: 150,
    opacity: 0
}, {
    y: 0,
    opacity: 1,
    ease:"M0,0,C0.174,0.108,0.203,0.444,0.336,0.65,0.481,0.876,0.822,1,1,1 ",
    rotation:0.01,
    duration:1,

},0.5)
.fromTo('.home01-template-07 .right .swiper-button-group', {
    y: 150,
    opacity: 0
}, {
    y: 0,
    opacity: 1,
    ease:"M0,0,C0.174,0.108,0.203,0.444,0.336,0.65,0.481,0.876,0.822,1,1,1 ",
    rotation:0.01,
    duration:0.9,

},0.6)

ScrollTrigger.create({
    animation: t7,
    trigger: '.home01-template-07',
    toggleActions: 'restart pause restart reset',
    // start:'top 80%',

    // markers: true,
})