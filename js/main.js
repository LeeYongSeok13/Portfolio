$(function () {
    var typingBool = false;
    var typingIdx = 0;

    // 타이핑될 텍스트를 가져온다 
    var typingTxt = $(".typing-txt").text();

    typingTxt = typingTxt.split(""); // 한글자씩 자른다. 

    if (typingBool == false) {
        // 타이핑이 진행되지 않았다면 
        typingBool = true;
        var tyInt = setInterval(typing, 100); // 반복동작 
    }

    function typing() {
        if (typingIdx < typingTxt.length) {
            // 타이핑될 텍스트 길이만큼 반복 
            $(".typing").append(typingTxt[typingIdx]);
            // 한글자씩 이어준다. 
            typingIdx++;
        } else {
            //끝나면 반복종료 
            clearInterval(tyInt);
        }
    };

    $('#Fullpage').fullpage({
        sectionsColor: ['#57648C', '#6C7A89', '#fff', '#fff'],
        navigation: true,
        loopTop: true,
        loopBottom: true,
        afterLoad: function (anchorLink, index) {
            if (index == 2) {
                $('.section02 .dis>h2').addClass('on');
                $('.section02 .dis .left').addClass('on');
            }
        },
        onLeave: function (index, nextIndex, direction) {
            if (index == 2) {
                $('.section02 .dis>h2').removeClass('on');
                $('.section02 .dis .left').removeClass('on');
            }
        }
    });

    $('.Dev_Slider').slick({
        arrows: false,
        dots: true,
    });

})
