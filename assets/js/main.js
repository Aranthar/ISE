$(function() {

    $('.reviews').slick({
        nextArrow: $('.slider__arrow.slider__arrow--next'),
        prevArrow: $('.slider__arrow.slider__arrow--prev'),
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    arrows: false,
                    dots: false
                }
            }
        ]
    });

});