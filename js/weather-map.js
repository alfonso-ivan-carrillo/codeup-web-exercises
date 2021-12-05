$(document).ready(function(){
    "use strict";

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
        var days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var day = days[a.getDay()];
        console.log(day);
        // var hour = a.getHours();
        // var min = a.getMinutes();
        // var sec = a.getSeconds();
        var time = day + ' '+ month + '. ' + date + ', ' + year;
        return time;
    }
    function imageSelector(data){

    }

    // card 1 - current day forecast
    function dailyTemps(data){
        var td = timeConverter(data.daily[0].dt);
        var icon = data.daily[0].weather[0].icon
        console.log(icon)
        $('#currentImage').css("content", "url(img/03n.png)");
        $('#currentConditions').html("<p>Current conditions: Feels like " + data.current.feels_like.toFixed(0) + " with " + data.current.weather[0].description  + "</p>");
        $('#currentTemp').html("<p>Current Tempature: "+ data.current.temp.toFixed(0) + "&#176F </p>");
        $('#maxTemp').html("<p>Today's High Temp: " + data.daily[0].temp.max.toFixed(0) + "&#176F &#8593</p>");
        $('#minTemp').html("Today's Low Temp: " + data.daily[0].temp.min.toFixed(0) + "&#176F &#8595</p>");
        // console.log(data.daily[0].temp.min);
        $('#currentDate').html("<small>Today Date: " + td + "</small>");

    }

    // card 2 - next day forecast
    function nextDayTemps(data){
        var nextD = timeConverter(data.daily[1].dt);
        console.log(data.daily[1].temp);
        // var highTemp = data.daily[1].temp.max;
        // var lowTemp = data.daily[1].temp.min;
        // var nextD = new Date(data.daily[1].dt * 1000);
        // $('#nextDaysTemps').html("<p>Tomorow's Average Tempature: " + ((highTemp + lowTemp) / 2).toFixed(0) + "</p>");
        $('#maxNextTemp').html("<p>Tomorrow's Forecasted High Tempature: " + data.daily[1].temp.max.toFixed(0) + "&#176F &#8593</p>");
        $('#minNextTemp').html("<p>Tomorrow's Forecasted Low Tempature: "+ data.daily[1].temp.min.toFixed(0) + "&#176F &#8595</p>");
        $('#nextDaysDate').html("<small>Date: " + nextD + "</small>");

    }

    // card 3 - two days after forecast
    function twoDays(data){
        var day2 = timeConverter(data.daily[2].dt);
        var highTemp2 = data.daily[2].temp.max;
        var lowTemp2 = data.daily[2].temp.min;
        // var day2 = new Date(data.daily[2].dt * 1000);
        // console.log(lowTemp2);
        $('#twoDaysAfter').html("<p>Forecasted Average Tempature: " + ((highTemp2 + lowTemp2)/ 2 ).toFixed(0) + "&#176F </p>");
        $('#twoDaysAfterMax').html("<p> Forecasted High Tempature: " + data.daily[2].temp.max.toFixed(0) + "&#176F </p>");
        $('#twoDaysAfterMin').html("<p> Forecasted Low Tempature: " + data.daily[2].temp.min.toFixed(0) + "&#176F </p>");
        $('#twoDaysAfterDate').html("<small>Date: " + day2 + "</small>");
    }

    // card 4 - three days after forecast
    function threeDays(data){
        var day3 = timeConverter(data.daily[3].dt);
        var highTemps3 = data.daily[3].temp.max;
        var lowTemp3 = data.daily[3].temp.min;
        // var day3 = new Date(data.daily[3].dt * 1000);
        $('#threeDaysAfter').html("<p>Forecasted Average Tempature: " + ((highTemps3 + lowTemp3)/2).toFixed(0) + "&#176F </p>");
        $('#threeDaysAfterMax').html("<p> Forecasted High Tempature: " + data.daily[3].temp.max.toFixed(0) + "&#176F </p>");
        $('#threeDaysAfterMin').html("<p>Forecasted Low Tempature: " + data.daily[3].temp.min.toFixed(0) + "&#176F </p>");
        $('#threeDaysAfterDate').html("<small>Date: " + day3 + "</small>");
    }

    // card 5 - four days after forecast
    function fourDays(data){
        var day4 = timeConverter(data.daily[4].dt);
        var highTemps4 = data.daily[4].temp.max;
        var lowTemps4 = data.daily[4].temp.min;
        // var day4 = new Date(data.daily[3].dt * 1000);
        $('#fourDaysAfterTemps').html("<p>Forecasted Average Tempature: " + ((highTemps4 + lowTemps4)/2).toFixed(0) + "&#176F </p>");
        $('#fourDaysAfterMax').html("<p>Forecasted High Tempature: " + data.daily[4].temp.max.toFixed(0) + "&#176F </p>");
        $('#fourDaysAfterMin').html("<p>Forecasted Low Tempature: " + data.daily[4].temp.min.toFixed(0) + "&#176F </p>");
        $('#fourDaysAfterDate').html("<small>Date: " + day4 + "</small>");
    }






















});

