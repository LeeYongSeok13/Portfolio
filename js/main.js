$(function () {

    $('#Fullpage').fullpage({
        sectionsColor: ['#57648C', '#6C7A89', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
        navigation: true,
        loopTop: true,
        loopBottom: true,
        afterLoad: function (anchorLink, index) {
            if (index == 1) {
                $('.section01 .container .left').addClass('on');
                $('.section02 .dis .left').addClass('on');
            }
        },
        onLeave: function (index, nextIndex, direction) {
            if (index == 1) {
                $('.section01 .container .left').removeClass('on');
                $('.section02 .dis .left').removeClass('on');
            }
        }
    });

})
