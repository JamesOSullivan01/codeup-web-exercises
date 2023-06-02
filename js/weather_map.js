$(document).ready(function () {
    mapboxgl.accessToken = myMapboxKey;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 8,
        center: [-95.473488, 30.315239]
    });

    map.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true,
            showUserHeading: true
        })
    );

    let marker = new mapboxgl.Marker({
        draggable: true
    }).setLngLat([-95.3698, 29.7604])
        .addTo(map)
        map.setCenter([-95.3698, 29.7604]);



    // Function to update weather based on latitude and longitude
    function getWeather(lon, lat) {
        $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${OMW_KEY}`).done(function (data) {
            console.log(data);

            let coordinates = data.city.coord;
            let latitude = coordinates.lat;
            let longitude = coordinates.lon;

            console.log('Latitude:', latitude);
            console.log('Longitude:', longitude);

            // Date titles of cards
            let dateTitles = $('.title-for-card');
            let forecastIndex;

            for (let i = 0; i < dateTitles.length; i++) {
                forecastIndex = i * 8;
                let todayDate = new Date(data.list[forecastIndex].dt * 1000);
                let day = todayDate.toLocaleDateString();
                $(dateTitles[i]).html(day);
            }

            // Temperature and icons for cards
            let temperatureElements = $('.temperature');

            for (let i = 0; i < temperatureElements.length; i++) {
                forecastIndex = i * 8;
                let temperature = data.list[forecastIndex].main.temp;
                let iconCode = data.list[forecastIndex].weather[0].icon;
                let iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
                let htmlString = `<img src="${iconUrl}" alt="Weather Icon"> ${temperature.toFixed(0)}&deg;`;
                $(temperatureElements[i]).html(htmlString);
            }

            // Description li for cards
            let descriptionElements = $('.description');

            for (let i = 0; i < descriptionElements.length; i++) {
                forecastIndex = i * 8;
                let description = data.list[forecastIndex].weather[0].description;
                let humidity = data.list[forecastIndex].main.humidity;
                let htmlString = `Description: ${description} <div></div> Humidity: ${humidity}%`;
                $(descriptionElements[i]).html(htmlString);
            }

            // Wind li for cards
            let windElements = $('.wind');

            for (let i = 0; i < windElements.length; i++) {
                forecastIndex = i * 8;
                let wind = data.list[forecastIndex].wind;
                let htmlString = ` Wind Speed: ${wind.speed} MPH <br> Wind Direction: ${wind.deg}&deg;`;
                $(windElements[i]).html(htmlString);
            }
        })
    }


    // Update weather when marker is moved
    marker.on('dragend', function () {
        const lngLat = marker.getLngLat();
        getWeather(lngLat.lng, lngLat.lat);
        map.setCenter([lngLat.lng, lngLat.lat]);
    });

    // Event listener for the search box
    $('#search-button').on('click', function () {
        var searchQuery = $('#search-box').val();

        geocode(searchQuery, myMapboxKey)  // Pass the data variable to the geocode function
            .then(function (location) {
                console.log('Location:', location);

                marker.setLngLat(location);
                map.setCenter(location);

                getWeather(location[0], location[1]);
            });
    });


    // Call the getWeather function with the initial marker position
    const initialLngLat = marker.getLngLat();
    getWeather(initialLngLat.lng, initialLngLat.lat);
});
