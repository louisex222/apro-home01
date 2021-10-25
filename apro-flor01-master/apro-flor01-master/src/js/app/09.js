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
    y: 100,
    opacity: 0
}, {
    duration: .45,
    y: 0,
    opacity: 1
}).fromTo('.home01-template-09 .left >div', {
    y: 100,
    opacity: 0
}, {
    duration: .45,
    y: 0,
    opacity: 1
})
.fromTo('.home01-template-09 .left .direction', {
    y: 100,
    opacity: 0
}, {
    duration: .45,
    y: 0,
    opacity: 1
})
.fromTo('.home01-template-09 .right img', {
    y: 100,
    opacity: 0
}, {
    duration: .45,
    y: 0,
    opacity: 1
})

ScrollTrigger.create({
    animation: t9,
    trigger: '.home01-template-09',
    toggleActions: 'restart pause restart reset',
    // markers: true,
})