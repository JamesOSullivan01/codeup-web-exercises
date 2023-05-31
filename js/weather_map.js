"use strict"
$(document).ready(function () {
    let latLong = [29.7604, -95.3698];
    $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latLong[0]}&lon=${latLong[1]}&units=imperial&appid=${OMW_KEY}`).done(function (data) {
        console.log(data);

        let todayDate = new Date(data.list[0].dt * 1000);
        let day = todayDate.getDay()
        let dateTest = `<section><h1>${day}</h1></section>`

        $('#date_test').html(todayDate)

        mapboxgl.accessToken = myMapboxKey;
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            zoom: 8,
            center: [-95.473488, 30.315239]
        });

    });
});

