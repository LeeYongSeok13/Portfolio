$(function () {

    $('#Fullpage').fullpage({
        sectionsColor: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
        loopTop: true,
        loopBottom: true,
        afterLoad: function (anchorLink, index) {
            if (index == 2) {
                $('.section02 .left').addClass('on');
            };

            if (index == 3) {
                $('.section03 .right').addClass('on');
            }

            if (index == 4) {
                $('.section04 .left').addClass('on');
            }
            if (index == 5) {
                $('.section05 .right').addClass('on');
            };

            if (index == 6) {
                $('.section06 .left').addClass('on');
            }

            if (index == 8) {
                $('.section08 .left').addClass('on');
                $('.section08 .right').addClass('on');
            };

            setTimeout(function () {
                $('#footer li').eq(index - 1).addClass('on').siblings().removeClass('on');
            })
        },
        onLeave: function (index, nextIndex, direction) {
            if (index == 2) {
                $('.section02 .left').removeClass('on');
            };

            if (index == 3) {
                $('.section03 .right').removeClass('on');
            }

            if (index == 4) {
                $('.section04 .left').removeClass('on');
            }

            if (index == 5) {
                $('.section05 .right').removeClass('on');
            };

            if (index == 6) {
                $('.section06 .left').removeClass('on');
            }
            if (index == 8) {
                $('.section08 .left').removeClass('on');
                $('.section08 .right').removeClass('on');
            };
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
        $('#footer').toggleClass('on');
        $('.sub').toggleClass('on');
        $('.allOpen').toggleClass('on');
    });

    $('.link .des').on('click', function () {
        $('.des_main').toggleClass('on');
    });

    $(".case a").on("mouseenter", function () {
        let imgH = $(this).find("img").height();
        let caseH = $(this).height();
        $(this).find("img").css({
            top: -(imgH - caseH)
        })
    });
    $(".case a").on("mouseleave", function () {
        $(this).find("img").css({
            top: 0
        })
    })
})
