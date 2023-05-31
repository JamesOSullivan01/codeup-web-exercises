"use strict"
$(document).ready(function () {
    let latLong = [29.7604, -95.3698];
    $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latLong[0]}&lon=${latLong[1]}&units=imperial&appid=${OMW_KEY}`).done(function (data) {
        console.log(data);



        let dateTitles = $('.title-for-card');

        for (let i = 0; i < dateTitles.length; i++) {
            let forecastIndex = i * 8; // Each forecast entry is for a 3-hour interval, so we increment by 8 to get the next day's forecast
            let todayDate = new Date(data.list[forecastIndex].dt * 1000);
            let day = todayDate.toLocaleDateString();

            $(dateTitles[i]).html(day);
        }




        mapboxgl.accessToken = myMapboxKey;
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            zoom: 8,
            center: [-95.473488, 30.315239]





        });

    });
});

