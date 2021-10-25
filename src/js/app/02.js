let swiper02 = new Swiper('.home01-template-02 .swiper-container', {
    speed: 1500,
    init: false,
    navigation: {
        prevEl: '.home01-template-02 .swiper-button-prev',
        nextEl: '.home01-template-02 .swiper-button-next',

    },
    autoplay: {
        delay: 3000,
    },
    allowTouchMove: true,
    pagination: {
        el: ".home01-template-02 .swiper-pagination",
        type: "bullets",
        clickable: !0
    }
})
$('.home01-template-02 .swiper-slide .text .play .playbtn').on('click', function(e) {
    console.log($("#popVideo iframe").attr('src'))
    $("body").addClass("show-popup")
})


$(".close-popup").on("click", function() {
    $("body").removeClass("show-popup")
    $('#popVideo iframe').each(function() {

        this.contentWindow.postMessage('{"event": "command", "func": "' + 'stopVideo' + '", "args": ""}', '*');

    });
})
$(".popup-mask-close").on("click", function() {
    $("body").removeClass("show-popup")
    $('#popVideo iframe').each(function() {
        this.contentWindow.postMessage('{"event": "command", "func": "' + 'stopVideo' + '", "args": ""}', '*');
    });
})
if ($("#popVideo iframe").attr('src') == '?enablejsapi=1') {
    $(".btn-play").addClass('opacity')
} else {
    $(".btn-play").removeClass('opacity')

}
console.log($('.home01-template-02 .swiper-container .swiper-pagination-bullet').length)
if ($('.home01-template-02 .swiper-container .swiper-pagination-bullet').length < 2) {
    $('.home01-template-02 .swiper-container .swiper-pagination').hide()
    $('.home01-template-02 .swiper-container .swiper-button-prev').hide()
    $('.home01-template-02 .swiper-container .swiper-button-next').hide()
}

setTimeout(function() {
    swiper02.init()
    $(".home01-template-02 .swiper-container .swiper-button-prev").css("display", "block")
    $(".home01-template-02 .swiper-container .swiper-button-next").css("display", "block")
    $(".home01-template-02 .swiper-container .swiper-pagination").css("display", "block")

    gsap.fromTo('.home01-template-02 .swiper-container .swiper-button-prev', {
        y: 50,
        opacity: 0
    }, {
        duration: 0.45,
        y: 0,
        opacity: 1
    })
    gsap.fromTo('.home01-template-02 .swiper-container .swiper-button-next', {
        y: 50,
        opacity: 0
    }, {
        duration: 0.45,
        y: 0,
        opacity: 1
    })
    gsap.fromTo('.home01-template-02 .swiper-container .swiper-pagination', {
        y: 50,
        opacity: 0
    }, {
        duration: 0.9,
        y: 0,
        opacity: 1
    })


}, 2000)
let loading = document.querySelector('.loading')
if (
    document.readyState === 'complete'
    || (document.readyState !== 'loading' && !document.documentElement.doScroll)
) {
    loading.classList.remove('active')
} 