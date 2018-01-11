"use strict";

$(function () {

    /* Гамбургер
  =========================*/
    $(".menu_btn").click(function() {
        var elem = $(this);
        elem.toggleClass("menu_btn_active");
        if(elem.hasClass("menu_btn_active")) {
            $(".header__menu-mob").slideDown(500);
        } else {
            $(".header__menu-mob").slideUp(500);
        }
    });





});

