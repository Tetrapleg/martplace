$(function(){


    $(".rate-star").rateYo({
        rating: 4.5,
        starWidth: "14px",
        readOnly: true
    }); 


    $('.slider__inner').slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 640,
              settings: {
                dots: true
              }
            }
        ]
    });


    $('.products-slider__inner').slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerPadding: "0px",
        responsive: [
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
                breakpoint: 680,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                  dots: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
            },
        ]
    });


    $('select').styler();


    $('.menu__list-btn').on('click', function(){
        $('.menu__list-inner').slideToggle();
    });


    $('.header__btn-menu').on('click', function(){
        $('.header__box').toggleClass('active');
    });


    $(window).on("load", function () {
        if ($('.products__inner-box').length) {
            var mixer = mixitup('.products__inner-box');
        }
    });


});