"use strict"
$( document ).ready(function() {

    $.get(`https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${OMW_KEY}`).done(function(data) {
        console.log(data);
    });




});
