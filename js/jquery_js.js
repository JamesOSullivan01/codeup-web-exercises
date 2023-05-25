"use strict";

$(document).ready(function() {
    $("#btn").on("click", function () {
        console.log("event fire");
        $("dd, .waveImg").toggleClass("invisible").fadeIn(3000);
    });

    $('#charBtn').on('click', function () {
        $(".ul").each(function () {
            //'this' refers to the current element be iterated over
            let lastLi = $(this).children("li:last-child");
            lastLi.toggleClass('highLight')
        });
    });
    $('dt').on('click', function () {
        $(this).toggleClass('highLight');
    });
    $('h3').on('click', function() {
        $(this).children().css("font-weight", "bold");
        });
    $("li").on('click', function(){
        $(this).first().addClass('highLight')
    })
});