

var api='c8a844d6b509f8578e3b82809031ec29';

var weather=currentWeather();
function currentWeather() {
fetch('https://api.openweathermap.org/data/2.5/weather?q=Charlotte,nc,us&units=imperial&appid='+ api)
.then(function(response) {return response.json()})
.then(function(data) {
	console.log(data);
	var feelsLike = document.getElementById("feelsLike").innerHTML = `Feels Like:${data.main.feels_like}`
	var humidity = document.getElementById("humidity").innerHTML = `Humidity: ${data.main.humidity}`
	var temp = document.getElementById("temp").innerHTML = `Temperature: ${data.main.temp}`
	var tempMax = document.getElementsById ("temp_max").innerHTML = `Temperature Max: ${data.main.temp_max}`
	var tempMin = document.getElementsById ("temp_min").innerHTML = `Temperature Min: ${data.main.temp_min}`
	var pressure = document.getElementsById("pressure").innerHTML = `Pressure: ${data.main.pressure}`



})
}


var brewery = breweryName();
function breweryName(){
    fetch('https://api.openbrewerydb.org/breweries?by_city=charlotte&sort=name:desc')
        .then(function(response) {return response.json()})
        .then(function(data) {
            console.log(data[0].name);
        var breweryList = document.getElementById("breweryList").innerHTML = `name:${data[0].name}`
        })
    }
var events = localEvents();
function localEvents(){
    fetch('https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&postalCode=28202&locale=*')
    .then(function(response) {return response.json()})
    .then(function(data) {
        console.log(data);
        var eventList = document.getElementById("eventList").innerHTML = `Event: ${data._embedded.events[0].name}`
    })
}


// var feelsLike = document.getElementsByClassName("feels_like")
// feelsLike.innerHTML = ""






