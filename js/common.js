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

    /* scroll theme
  =========================*/

    if(window.location.toString().indexOf('index.html') > 0) {
        $(window).scroll(function() {
            var topOfWindow = $(this).scrollTop();
            $('#theme1').each(function(){
                var imagePos = $(this).offset().top;
                var elem = $(this);

                if (imagePos < topOfWindow+550) {
                    setTimeout(function() {
                        elem.addClass('theme__item1');
                    }, 0);
                }
            })
        });
        $(window).scroll(function() {
            var topOfWindow = $(this).scrollTop();
            $('#theme2').each(function(){
                var imagePos = $(this).offset().top;
                var elem = $(this);

                if (imagePos < topOfWindow+550) {
                    setTimeout(function() {
                        elem.addClass('theme__item1');
                    }, 500);
                }
            })
        });
        $(window).scroll(function() {
            var topOfWindow = $(this).scrollTop();
            $('#theme3').each(function(){
                var imagePos = $(this).offset().top;
                var elem = $(this);

                if (imagePos < topOfWindow+550) {
                    setTimeout(function() {
                        elem.addClass('theme__item1');
                    }, 1000);
                }
            })
        });
    }

    /* Services
  =========================*/

    if(window.location.toString().indexOf('services.html') > 0) {
        services('#theme1', 0);
        services('#theme2', 500);
        services('#theme3', 1000);

        function services(id, time) {
            $(id).each(function(){
                var elem = $(this);

                setTimeout(function() {
                    elem.addClass('theme__item1');
                }, time);

            })
        }
    }



});

/* Google maps
  =========================*/
function initMap() {
    var uluru = {lat: -6.238824, lng: 106.861248};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        streetViewControl: false,
        scrollwheel: false,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}