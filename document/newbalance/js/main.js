$(function () {
    $('#header_menu .menu_button i').on('click', function () {
        $('#header_menu .gnb').toggleClass('on');
        $('.menu_button').toggleClass('on');
    });

    $('.gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            $('.gnb>ul>li>ul').stop().slideUp();
            $(this).next().stop().slideToggle();
        }
    });

    $(window).on('resize', function () {
        $('.gnb').removeClass('on')
        $('.gnb>ul>li>ul').removeAttr('style')
    });

    $('#ad_banner i').on('click', function () {
        $('#ad_banner').slideUp();
    });

    $('.main_slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    $('#main_visual .angle i:nth-child(1)').on('click', function () {
        $('.main_slider').slick('slickPrev');
    });
    $('#main_visual .angle i:nth-child(2)').on('click', function () {
        $('.main_slider').slick('slickNext');
    })

    $('#model_information .controls i:nth-child(1)').on('click', function () {
        $('.iu').trigger('pause');
    });
    $('#model_information .controls i:nth-child(2)').on('click', function () {
        $('.iu').trigger('play');
    })

    $('.shirt_slider').slick({
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            }
        ]
    });

    $('.xi-arrow-left').on('click', function () {
        $('.shirt_slider').slick('slickPrev');
    });
    $('.xi-arrow-right').on('click', function () {
        $('.shirt_slider').slick('slickNext');
    });

    $('.tab_menu figure').on('click', function (event) {
        event.preventDefault();
        var idx = $(this).index();
        $('.tab_content>div').removeClass('on');
        $('.tab_content>div').eq(idx).addClass('on');
    });
})