var RWD = navigator.userAgent;


$(function() {

    var winWidth,
        winHeight = $(window).height(),
        navNow = 0, // 選單是否打開，1為打開
        prodNow = 0, // 車型選單是否打開，1為打開
        mobile = 0, // 手機模式為1
        rwdWidth, // 以寬度判斷的rwd 1為手機
        body = $('body'),
        timeStop = true,
        nowModelMenuIndex = 0;

    //rwdRealWidth();  
    // 選單
    if (RWD.match(/iPhone|iPad|iPod|Android|BlackBerry/i)) {
        mobile = 1;
        body.addClass("mobile");
        timeStop = false;
        //$('.level-one').on('click', 'li', navLevelOne)
    } else if (RWD.match(/rv:11/i)) {
        mobile = 0;
        body.addClass("desktop ie");
        //$('.level-one').on('mouseover', 'li', navLevelOne);
    } else {
        mobile = 0;
        body.addClass("desktop");
        //$('.level-one').on('mouseover', 'li', navLevelOne);
    }
    $('.gotop').on('click', function() {
        $('html,body').stop(true, false).animate({
                scrollTop: 0
            },
            600
        );
        return false;
    })



    $('#nav-toggle').on('click', function() {
        body.toggleClass('nav-open');
        return false;
    });



    window.onload = function() {
        $('body').addClass('load');
    };
})