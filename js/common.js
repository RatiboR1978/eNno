"use strict";

$(function () {

    /* Гамбургер
  =========================*/
    $('.menu_btn').click(function() {
        var elem = $(this);
        elem.toggleClass('menu_btn_active');
        if(elem.hasClass('menu_btn_active')) {
            $('.header__menu-mob').slideDown(500);
        } else {
            $('.header__menu-mob').slideUp(500);
        }
    });

    /* slick
  =========================*/
    $('.slider-items').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000
    });

    $(window).scroll(function() {

        $('#theme1').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+550) {
                $(this).addClass('theme__item1');
            }
        })
    });

    $(window).scroll(function() {

        $('#theme2').each(function(){
            var imagePos = $(this).offset().top;
            var elem = $(this);

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+550) {
                setTimeout(function() {
                    elem.addClass('theme__item1');
                }, 500);
            }
        })
    });

    $(window).scroll(function() {

        $('#theme3').each(function(){
            var imagePos = $(this).offset().top;
            var elem = $(this);

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+550) {
                setTimeout(function() {
                    elem.addClass('theme__item1');
                }, 1000);
            }
        })
    });




});

