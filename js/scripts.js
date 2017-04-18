/**
 * Created by devon on 2017-04-18.
 */



/*
 * Test Locations
 * Austin lat/long: 30.2676,-97.74298
 * Austin WOEID: 2357536
 */
$(document).ready(function() {
    loadWeather('The Heights',''); //@params location, woeid
});

function loadWeather(location, woeid) {
    $.simpleWeather({
        location: '44.5539530,-79.6758430',
        woeid: woeid,
        unit: 'c',
        success: function(weather) {

            html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
            html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
            html += '<li class="currently">'+weather.currently+'</li>';
            html += '<li>'+weather.alt.temp+'&deg;C</li></ul>';

            $("#weather").html(html);
        },
        error: function(error) {
            $("#weather").html('<p>'+error+'</p>');
        }
    });
}

