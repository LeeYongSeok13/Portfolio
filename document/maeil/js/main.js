window.addEventListener('DOMContentLoaded', function () {

    window.addEventListener('scroll', function () {
        let sct = window.scrollY;
        sct > 0
            ? this.document.querySelector('.main_menu').classList.add('on')
            : this.document.querySelector('.main_menu').classList.remove('on')
    });


    const MainSlider = new Swiper('.MainSlider', {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        on: {
            slideChangeTransitionEnd: function () {
                const SS = document.querySelectorAll('.swiper-slide');
                const SSA = document.querySelector('.swiper-slide-active')
                SS.forEach(
                    e => e.classList.remove('on')
                );
                SSA.classList.add('on');
            }
        },
    });

    const Introduce = document.querySelectorAll('.active-event');
    window.addEventListener('scroll', function () {
        let sct = window.scrollY;
        Introduce.forEach(el => {
            if (sct > el.offsetTop - 700) {
                el.classList.add('on')
            }
        })
    });

    const MENU = document.querySelectorAll('.menu li');
    const TAB = document.querySelectorAll('.tab_content>ul');
    MENU.forEach((el, idx) => {
        el.addEventListener('click', (e) => {
            MENU.forEach(el => el.classList.remove('on'));
            el.classList.add('on');
            TAB.forEach(el => el.classList.remove('on'));
            TAB[idx].classList.add('on');
        })
    });

    const ScrollBtn = document.querySelector('.toTop i');
    const BtnVisibility = () => {
        if (window.scrollY > 500) {
            ScrollBtn.style.visibility = "visible";
        } else {
            ScrollBtn.style.visibility = "hidden";
        }
    };

    ScrollBtn.style.visibility = "hidden";
    document.addEventListener("scroll", function () {
        BtnVisibility();
    });
    ScrollBtn.onclick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

});
