$(document).ready(function(){
    "use strict";

    mapboxgl.accessToken = MAPBOX_MAPS_API_KEY;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-98.4936, 29.4241], // starting position [lng, lat]
        zoom: 9 // starting zoom
    });

    // mapbox call api
    function geocode(search, token) {
        var baseUrl = 'https://api.mapbox.com';
        var endPoint = '/geocoding/v5/mapbox.places/';
// below line - concat the baseurl + endpoint + this codes it into a query string sent by the browswer + json + query + maptoken
        return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
            .then(function(res) {
                return res.json();
                // to get all the data from the request, comment out the following three lines...
            }).then(function(data) {
                return data.features[0].center;
            });
    }
// for above function
// geocode("San Antonio", MAPBOX_KEY).then(function(results) {
//     console.log(results);
// })

    // api call function
    $.get("http://api.openweathermap.org/data/2.5/onecall", {
        lat: 29.4241,
        lon: -98.4936,
        // q: "San Antonio, US",  // ways to look up weather for san antonio, currently using lat/lon
        // id: 4726206.           // by id
    exclude: ['minutely', "hourly"],
    units: "imperial",
    APPID: OPEN_WEATHER_KEY
    }).done(function(data){
        console.log(data);

        console.log(new Date(data.daily[0].dt * 1000)); // to translate date/time
        // console.log(data.daily[1]);
        var today = [];
        today = new Date(data.daily[0].dt * 1000);

        dailyTemps(data);
        nextDayTemps(data);
        twoDays(data);
        threeDays(data);
        fourDays(data);
    });

    // time converter and formated
    function timeConverter(UNIX_timestamp){
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var day = days[a.getDay()];
        console.log(day);
        // var hour = a.getHours();
        // var min = a.getMinutes();
        // var sec = a.getSeconds();
        var time = month + '. ' + date + ', ' + year;
        return time;
    }
    // day selector
    function daySelector(input){
        var a = new Date(input * 1000);
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var day = days[a.getDay()];
        console.log(day);
        return day;
    }

    // icon selector
    function imageSelector(data){
        switch (data){
            case "01d":
                return "url(img/01d.png)";
            case "01n":
                return "url(img/01n.png)";
            case "02d":
                return "url(img/02d.png)";
            case "02n":
                return "url(img/02n.png)";
            case "03d":
            case "03n":
                return "url(img/03d.png)";
            case "04d":
            case "04n":
                return "url(img/04d.png)";
            case "09d":
            case "09n":
                return "url(img/09d.png)";
            case "10d":
                return "url(img/10d.png)"
            case "10n":
                return "url(img/10n.png)";
            case "11d":
            case "11n":
                return "url(img/11d.png)";
            case "13d":
            case "13n":
                return "url(img/13d.png)";
            case "50d":
            case "50n":
                return "url(img/50d.png)";
            default:
                console.log("error");
                break;
        }

    }

    // card 1 - current day forecast
    function dailyTemps(data){
        var td = timeConverter(data.daily[0].dt);
        var icon0 = imageSelector(data.daily[0].weather[0].icon);
        console.log(icon0)
        $('#currentImage').css("content", icon0);
        $('#currentConditions').html("<p>Current conditions: Feels like " + data.current.feels_like.toFixed(0) + " with " + data.current.weather[0].description  + "</p>");
        $('#currentTemp').html("<p>Current Tempature: "+ data.current.temp.toFixed(0) + "&#176F </p>");
        $('#maxTemp').html("<p>Today's High Temp: " + data.daily[0].temp.max.toFixed(0) + "&#176F &#8593</p>");
        $('#minTemp').html("Today's Low Temp: " + data.daily[0].temp.min.toFixed(0) + "&#176F &#8595</p>");
        // console.log(data.daily[0].temp.min);
        $('#currentDate').html("<p>Today Date: " + td + "</p>");

    }

    // card 2 - next day forecast
    function nextDayTemps(data){
        var nextD = timeConverter(data.daily[1].dt);
        console.log(data.daily[1].temp);
        console.log(nextD);
        var icon1 = imageSelector(data.daily[1].weather[0].icon);
        // var highTemp = data.daily[1].temp.max;
        // var lowTemp = data.daily[1].temp.min;
        // var nextD = new Date(data.daily[1].dt * 1000);
        // $('#nextDaysTemps').html("<p>Tomorow's Average Tempature: " + ((highTemp + lowTemp) / 2).toFixed(0) + "</p>");
        $('#nextDayImage').css("content", icon1);
        $('#nextDayConditions').html("<p> Expected Conditions: " + data.daily[1].weather[0].description + "</p>" );
        $('#maxNextTemp').html("<p>Tomorrow's Forecasted High Tempature: " + data.daily[1].temp.max.toFixed(0) + "&#176F &#8593</p>");
        $('#minNextTemp').html("<p>Tomorrow's Forecasted Low Tempature: "+ data.daily[1].temp.min.toFixed(0) + "&#176F &#8595</p>");
        $('#nextDaysDate').html("<small>Date: " + nextD + "</small>");

    }

    // card 3 - two days after forecast
    function twoDays(data){
        var day2 = timeConverter(data.daily[2].dt);
        // var lowTemp2 = data.daily[2].temp.min;
        // var highTemp2 = data.daily[2].temp.max;
        var dayTwo = daySelector(data.daily[2].dt);
        var icon2 = imageSelector(data.daily[2].weather[0].icon)
        // var day2 = new Date(data.daily[2].dt * 1000);
        console.log(typeof day2);
        $('#twoDaysAfterImage').css("content", icon2);
        $('#dayTwo').html("<h5>" + dayTwo + "</h5>");
        $('#twoDaysAfterConditions').html("<p>Expected Conditions: " + data.daily[2].weather[0].description + "</p>");
        // $('#twoDaysAfter').html("<p>Forecasted Average Tempature: " + ((highTemp2 + lowTemp2)/ 2 ).toFixed(0) + "&#176F </p>");
        $('#twoDaysAfterMax').html("<p> Forecasted High Tempature: " + data.daily[2].temp.max.toFixed(0) + "&#176F &#8593</p>");
        $('#twoDaysAfterMin').html("<p> Forecasted Low Tempature: " + data.daily[2].temp.min.toFixed(0) + "&#176F &#8595</p>");
        $('#twoDaysAfterDate').html("<small>Date: " + day2 + "</small>");
    }

    // card 4 - three days after forecast
    function threeDays(data){
        var day3 = timeConverter(data.daily[3].dt);
        // var highTemps3 = data.daily[3].temp.max;
        // var lowTemp3 = data.daily[3].temp.min;
        var dayThree = daySelector(data.daily[3].dt);
        var icon3 = imageSelector(data.daily[3].weather[0].icon)
        // var day3 = new Date(data.daily[3].dt * 1000);
        $('#threeDaysAfterImage').css("content", icon3);
        $('#dayThree').html("<h5>" + dayThree + "</h5>");
        $('#threeDaysAfterConditions').html("<p>Expected Conditions: " + data.daily[3].weather[0].description + "</p>");
        // $('#threeDaysAfter').html("<p>Forecasted Average Tempature: " + ((highTemps3 + lowTemp3)/2).toFixed(0) + "&#176F </p>");
        $('#threeDaysAfterMax').html("<p> Forecasted High Tempature: " + data.daily[3].temp.max.toFixed(0) + "&#176F &#8593</p>");
        $('#threeDaysAfterMin').html("<p>Forecasted Low Tempature: " + data.daily[3].temp.min.toFixed(0) + "&#176F &#8595</p>");
        $('#threeDaysAfterDate').html("<small>Date: " + day3 + "</small>");
    }

    // card 5 - four days after forecast
    function fourDays(data){
        var day4 = timeConverter(data.daily[4].dt);
        var highTemps4 = data.daily[4].temp.max;
        var lowTemps4 = data.daily[4].temp.min;
        var icon4 = imageSelector(data.daily[4].weather[0].icon);
        var dayFour = daySelector(data.daily[4].dt);
        // var day4 = new Date(data.daily[3].dt * 1000);
        $("#fourDaysAfterImage").css("content", icon4);
        $('#dayFour').html("<h5>" + dayFour + "</h5>");
        $('#fourDaysAfterConditions').html("<p>Expected Conditions: " + data.daily[4].weather[0].description + "</p>");
        // $('#fourDaysAfterTemps').html("<p>Forecasted Average Tempature: " + ((highTemps4 + lowTemps4)/2).toFixed(0) + "&#176F </p>");
        $('#fourDaysAfterMax').html("<p>Forecasted High Tempature: " + data.daily[4].temp.max.toFixed(0) + "&#176F &#8593</p>");
        $('#fourDaysAfterMin').html("<p>Forecasted Low Tempature: " + data.daily[4].temp.min.toFixed(0) + "&#176F &#8595</p>");
        $('#fourDaysAfterDate').html("<small>Date: " + day4 + "</small>");
    }
    $("#btn-submit").click(function(){
        var address = $("#addressSearch").val();
        console.log(address);
        geocode(address, MAPBOX_MAPS_API_KEY).then(function(results){
            markerWeather(results);
            var location = new mapboxgl.Marker({}).setLngLat([results[0], results[1]]).setDraggable(true).addTo(map);
            map.setCenter([results[0], results[1]]);
            map.setZoom(15);
            markerWeather(results);
        })
    })





    function markerWeather(results){
        // var saLon = -98.4936;
        // var saLat = 29.4241;
        // q: "San Antonio, US",  // ways to look up weather for san antonio, currently using lat/lon
        // id: 4726206.           // by id
        console.log(results);
        $.get("http://api.openweathermap.org/data/2.5/onecall", {
            lat: results[1],
            lon: results[0],
            exclude: ['minutely', "hourly"],
            units: "imperial",
            APPID: OPEN_WEATHER_KEY
        }).done(function(data){
            console.log(data);



            dailyTemps(data);
            nextDayTemps(data);
            twoDays(data);
            threeDays(data);
            console.log(fourDays(data));


        });
    }
















});

