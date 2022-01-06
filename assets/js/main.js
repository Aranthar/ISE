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

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 700);
    });

    $('.header__burger').click(function(event) {
        $('.header__burger, .nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

AOS.init();