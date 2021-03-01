$(document).ready(function () {
    $('.tariffs_slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 800,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

// 

$(document).ready(function () {
    $('.trust__us__slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 4,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 800,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});



//
$(document).ready(function () {
    $('.background__slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 2,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 800,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});


/*mask*/

$(function () {
    $("#telephone").mask("+7(999) 999-9999");
});
$(function () {
    $("#phone").mask("+7(999) 999-9999");
});




$(document).ready(function () {
    $('.stuff__block__slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 2,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 800,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});


//menu__burger

$(document).ready(function () {
    $('.burger__button').click(function (event) {
        $('.burger__button,.header__menu').toggleClass('active');
    });
});