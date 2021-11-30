$(function() {
    var swiperhome01Honor = new Swiper(".home01-template-04 .swiper-home01-honor", {
        slidesPerView: 3,
        spaceBetween: 40,
        speed: 1000,
        loop:false,
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: true
        // },
        allowTouchMove: true,
        pagination: {
            el: " .home01-template-04 .page-home01-honor",
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            740: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            1100: {
                slidesPerView: 4,
                spaceBetween: 150,
            },
            11500: {
                slidesPerView: 4,
                spaceBetween: 150,
            },
            1800: {
                slidesPerView: 5,
                spaceBetween: 60,
            }

        },
    });
    
    if($('.home01-template-04 .swiper-pagination .swiper-pagination-bullet').length < 2){
        $('.home01-template-04 .swiper-pagination .swiper-pagination-bullet').hide()
    }
        
    
})

// setTimeout(function() {
//     $('.home01-template-04 .container .swiper-wrap .swiper-container').addClass('active')
//     $('.home01-template-04 .container .swiper-wrap .swiper-pagination').addClass('active')

// }, 0)

let t4 = gsap.timeline()

t4.from('.home01-template-04  .swiper-slide', {
    stagger: { 
        each: 0.2,
        from: "left",
        ease: 'ease',
    },
    y: 100,
    opacity: 0,
    rotation:0.01,

},0).fromTo('.home01-template-04 .swiper-pagination ', {
    y: 100,
    opacity: 0
}, {
    y: 0,
    opacity: 1,
    ease: 'ease',
    rotation:0.01,
    duration:1.2,

},0.1)

ScrollTrigger.create({
    animation: t4,
    trigger: '.home01-template-04',
    toggleActions: 'play complete restart reset',
    // start:'top 80%',
    // markers: true,
})