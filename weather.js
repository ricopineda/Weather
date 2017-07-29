$(document).ready(function() {
    $('form').submit(function() {
        var z = $('#search').val();

        $.get('http://api.openweathermap.org/data/2.5/weather?q=' + z + '&&appid=e8682c67234353279b4ad5433c617b8a', function(res) {
            console.log(res);

    

        var x = (res.name) 
        var y = (res.weather["0"].main)   

        $('.results').html('<h1 id="city">' + x + '</h1> <h3 id="temp">' + y + '<h3>')

        }, 'json');
        return false;
    });
});

