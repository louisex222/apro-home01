let rown1 = Math.round($('.home01-template-03 .right .box span').height() / parseFloat($('.home01-template-03 .right .box span').css('line-height')))
let rown2 = Math.round($('.home01-template-03 .right .box p').height() / parseFloat($('.home01-template-03 .right .box p').css('line-height')))


if (window.innerWidth > 11500) {
    if (rown1 > 2) {
        $('.home01-template-03 .right .box').css('padding-top', '8.66vw')
    }
    if (rown2 > 2) {
        $('.home01-template-03 .right .box').css('padding-top', '8.66vw')
    }
    if (rown1 > 2 && rown2 > 2) {
        $('.home01-template-03 .right .box').css('padding-top', '6.66vw')

    }

}
if (window.innerWidth < 11500) {
    if (rown1 > 2) {
        $('.home01-template-03 .right .box').css('padding-top', '11.66vw')
    }
    if (rown2 > 2) {
        $('.home01-template-03 .right .box').css('padding-top', '11.66vw')
    }
    if (rown1 > 2 && rown2 > 2) {
        $('.home01-template-03 .right .box').css('padding-top', '9.66vw')

    }

}

    // setTimeout(function() {
    //     $('.home01-template-03 .right .box h3').addClass('active')
    //     $('.home01-template-03 .right .box p').addClass('active')
    //     $('.home01-template-03 .right .box span').addClass('active')
    // }, 0)
    gsap.registerPlugin(CustomEase)
    let t3 = gsap.timeline()
    CustomEase.create("cosmo", ".25,0,.25,1");

t3
.fromTo('.home01-template-03 .left ', {
    y: 150,
    opacity: 0,

}, {

    y: 0,
    opacity: 1,
    ease:"cosmo",
    duration:1.2,
    rotation:0.01


},0).fromTo('.home01-template-03 .left img', {
    y: 150,
    opacity: 0,

}, {
    y: 0,
    opacity: 1,
    ease:  "cosmo",
    duration:1.2,
    rotation:0.01


},0.3).fromTo('.home01-template-03 .right h3', {
    y: 150,
    opacity: 0,

}, {
   
    y: 0,
    opacity: 1,
    ease: "cosmo",
    duration:1.1,
    rotation:0.01

},0.4)
.fromTo('.home01-template-03 .right .box div', {
    y: 150,
    opacity: 0,

}, {
  
    y: 0,
    opacity: 1,
    ease: "cosmo",
    duration:1,
    rotation:0.01

},0.5)


ScrollTrigger.create({
    animation: t3,
    trigger: '.home01-template-03',
    toggleActions: 'restart pause restart reset',
    start:'top 80%',
    // markers: true,
    // snap: 0.1
})