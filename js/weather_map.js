$(document).ready(function () {
    let latLong = [29.7604, -95.3698];
    $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latLong[0]}&lon=${latLong[1]}&units=imperial&appid=${OMW_KEY}`).done(function (data) {
        console.log(data);

        // Date titles of cards

        let dateTitles = $('.title-for-card');
        let forecastIndex;

        for (let i = 0; i < dateTitles.length; i++) {
            let forecastIndex = i * 8; // Each forecast entry is for a 3-hour interval, so I increment by 8 to get the next day's forecast
            let todayDate = new Date(data.list[forecastIndex].dt * 1000);
            // https://www.w3schools.com/jsref/jsref_tolocaledatestring.asp
            let day = todayDate.toLocaleDateString();

            $(dateTitles[i]).html(day);
        }

        // Temperate and icons for cards

        let temperatureElements = $('.temperature');

        for (let i = 0; i < temperatureElements.length; i++) {
            let forecastIndex = i * 8;
            let temperature = data.list[forecastIndex].main.temp;
            let iconCode = data.list[forecastIndex].weather[0].icon;
            let iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
            // https://developer.mozilla.org/en-US/docs/Glossary/Entity
            let htmlString = `<img src="${iconUrl}" alt="Weather Icon"> ${temperature.toFixed(0)}&deg`;
            $(temperatureElements[i]).html(htmlString);
        }

        // Description li for cards

        let descriptionElements = $('.description');

        for (let i = 0; i < descriptionElements.length; i++) {
            let forecastIndex = i * 8;
            let description = data.list[i].weather[0].description;
            let humidity = data.list[i].main.humidity;
            let htmlString = `Description: ${description} <div></div> Humidity: ${humidity}%`;
            $(descriptionElements[i]).html(htmlString);

        }

        // Wind li for cards

        let windElements = $('.wind');

        for (let i = 0; i < windElements.length; i++) {
            let forecastIndex = i * 8;
            let wind = data.list[forecastIndex].wind;
            let htmlString = ` Wind Speed: ${wind.speed} MPH <br> Wind Direction: ${wind.deg}&deg;`;
            $(windElements[i]).html(htmlString);
        }
    }).fail(function () {
        console.log('Failed to fetch weather data');
    });

    mapboxgl.accessToken = myMapboxKey;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 8,
        center: [-95.473488, 30.315239]
    });

    // Add the control to the map.
    const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    });
    document.getElementById('map').appendChild(geocoder.onAdd(map));

    // Add event listener to move the map when an address is entered
    geocoder.on('result', function (e) {
        map.flyTo({
            center: e.result.center,
            zoom: 13
        });
    });
});
