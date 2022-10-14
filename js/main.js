$(function () {

    $('#Fullpage').fullpage({
        sectionsColor: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff',],
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

})
