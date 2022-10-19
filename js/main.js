$(function () {

    $('#Fullpage').fullpage({
        sectionsColor: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff',],
        navigation: true,
        loopTop: true,
        loopBottom: true,
        afterLoad: function (anchorLink, index) {
            if (index == 1) {

            }
        },
        onLeave: function (index, nextIndex, direction) {
            if (index == 1) {

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
