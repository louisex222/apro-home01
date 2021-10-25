var animate = new TimelineMax().add([

    TweenMax.fromTo('#flor01-template-10 .text', 1, {
        opacity: 0,
        y: 80

    }, {
        opacity: 1,
        y: 0,

        ease: Power2.easeOut

    }),
    TweenMax.fromTo('#flor01-template-10 .big-text', 1.2, {
        opacity: 0,
        //y: 40

    }, {
        opacity: 1,
        //y: 0,
        delay: .1,
        ease: Power2.easeOut

    })
]);


var scene10 = new ScrollMagic.Scene({
        triggerElement: "#flor01-template-10",
    })
    .setTween(animate) // trigger a TweenMax.to tween
    .addTo(controller)

var scene10p = new ScrollMagic.Scene({
        triggerElement: "#flor01-template-10",
        triggerHook: "onEnter",
        duration: "120%"
    })
    .setTween("#flor01-template-10 .bg", {
        y: "30%",
        ease: Linear.easeNone
    })
    .addTo(controller);