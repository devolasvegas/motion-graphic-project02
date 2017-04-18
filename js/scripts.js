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
    // $('[class^=st1905]').mouseover(trailTip);
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
            html += '<li>'+weather.alt.temp+'&deg;F</li></ul>';

            $("#weather").html(html);
        },
        error: function(error) {
            $("#weather").html('<p>'+error+'</p>');
        }
    });
}

// function trailTip() {
//     var trailId = $(this).attr('id');
//     var trailTexts = trailId.split(/(?=[A-Z])/);
//     var tempText = '';
//     for(var i = 0; i < trailTexts.length; i++) {
//         tempText += trailTexts[i] + ' ';
//     }
//     console.log(tempText);
//     $(this).qtip({
//         content: {
//             text: tempText
//         }
//     });
// }

$('[class^=st1905]').each(function(data){
    var trailId = $(this).attr('id');
    if(trailId) {
        var trailTexts = trailId.split(/(?=[A-Z])/);
        var tempText = '';
        for(var i = 0; i < trailTexts.length; i++) {
            tempText += trailTexts[i] + ' ';
        }
        $(this).attr('title', tempText);
        $(this).tooltipster({
            theme: 'tooltipster-punk',
            contentCloning: true
        });
    }
});