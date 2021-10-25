$(function() {
    var s8 = new Swiper(".home01-template-08 .swiper-container", {
        slidesPerGroup: 1,
        speed: 1000,
        // centeredSlides:true,
        loop: true,
        clickable: true,
        allowTouchMove: true,
        // autoplay:true,
        autoplay:{
            delay:3000,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            740: {
                slidesPerView: 2,
                spaceBetween: 50,
            },

            1100: {
                slidesPerView: 3,
                spaceBetween: 70,
            },
            1800: {
                slidesPerView: 4,
                spaceBetween: 130,
            },

        },
        navigation: {
            nextEl: '.home01-template-08 .swiper-button-next',
            prevEl: '.home01-template-08 .swiper-button-prev',
            clickable: true,

        },

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,

        }

    });
    if($('.home01-template-08 .swiper-slide').length <=3){
        $('.home01-template-08 .swiper-button-group').hide()
        // $('.home01-template-08 .swiper-slide-duplicate').remove()
        $('.home01-template-08 .swiper-container .swiper-wrapper .swiper-slide').addClass('v')
        s8.destroy()
        // $('.home01-template-08 .swiper-container .swiper-wrapper .swiper-slide .img_box::after').css('')
        
    }
})
// setTimeout(function() {
//     $('.home01-template-08 h3').addClass('active')
//     $('.home01-template-08 .swiper-button-group').addClass('active')
//     $('.home01-template-08 .swiper-container').addClass('active')

// }, 0)

let t8 = gsap.timeline()
t8.fromTo('.home01-template-08 h3', {
    y: 100,
    opacity: 0
    }, {
        durtation:0.45,
        y: 0,
        opacity: 1
    }).fromTo('.home01-template-08 .swiper-button-group', {
        y: 100,
        opacity: 0
    }, {
        durtation:0.45,
        y: 0,
        opacity: 1
    })
    .from('.home01-template-08 .swiper-slide', {
        stagger: { 
            each: 0.1,
            from: "left",
            ease: "ease",
        },
       
        y: 100,
        opacity: 0
    })

ScrollTrigger.create({
    animation: t8,
    trigger: '.home01-template-08',
    toggleActions: 'restart pause restart reset',
    // markers: true,
    start:'top 80%',

})