let rown1 = Math.round($('.home01-template-09 .left p').height() / parseFloat($('.home01-template-09 .left p').css('line-height')))

console.log(rown1)
if (window.innerWidth > 1500) {
    if (rown1 > 3) {
        $('.home01-template-09 .left p').css('margin-bottom', '4.9875vw')
    }


}
// setTimeout(function() {
//     $('.home01-template-09 .left').addClass('active')
//     $('.home01-template-05 .wrap .swiper-container').addClass('active')

// }, 0)
let t9 = gsap.timeline()

t9.fromTo('.home01-template-09 .left h3', {
    y: 50,
    opacity: 0
}, {
    y: 0,
    opacity: 1,
    ease:"ease",
    rotation:0.01,
    duration:1,
},0).fromTo('.home01-template-09 .left >div', {
    y: 50,
    opacity: 0
}, {
    y: 0,
    opacity: 1,
    ease:"ease",
    rotation:0.01,
    duration:1,
},0.3)
.fromTo('.home01-template-09 .left .direction', {
    y: 50,
    opacity: 0
}, {
    y: 0,
    ease:"ease",
    opacity: 1,
    rotation:0.01,
    duration:0.9,
},0.4)
.fromTo('.home01-template-09 .right img', {
    x: -50,
    opacity: 0
}, {
    x: 0,
    opacity: 1,
    ease:"ease",
    rotation:0.01,
    duration:0.8,
},0.5)

ScrollTrigger.create({
    animation: t9,
    trigger: '.home01-template-09',
    toggleActions: 'play complete restart reset',
    // markers: true,
})

