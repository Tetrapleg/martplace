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
        // prevArrow: '<button class="slick-arrow slick-prev"><img src="/images/lnr-chevron-left.svg" alt=""></button>',
        // nextArrow: '<button class="slick-arrow slick-next"><img src="/images/lnr-chevron-right.svg" alt=""></button>',
    });

    
});