$(function () {

    $('#Fullpage').fullpage({
        sectionsColor: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff',],
        navigation: true,
        loopTop: true,
        loopBottom: true,
        afterLoad: function (anchorLink, index) {
            if (index == 1) {
                $('.section01 .container .left').addClass('on');
                $('.section01 .container .right').addClass('on');
            }
        },
        onLeave: function (index, nextIndex, direction) {
            if (index == 1) {
                $('.section01 .container .left').removeClass('on');
                $('.section01 .container .right').removeClass('on');
            }
        }
    });

    $('#footer a').on('click', function (event) {
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top }, 0);
    });

    $('.allOpen').on('click', function () {
        $(this).toggleClass('on');
        $('#header .fixed').toggleClass('on');
        $('#footer').toggleClass('on');
        $('.sub').toggleClass('on');
        $('.cover').toggleClass('on');
    });

    $('.cover').on('wheel', function (e) {
        e.stopPropagation()
    });

    $('.cover ul li').on('click', function () {
        $('.cover').removeClass('on');
        $('#header .fixed').toggleClass('on');
        $('.#footer').toggleClass('on');
        $('.sub').toggleClass('on');
    })
})
