const apiKey = "08308bccd655e48137b8e911468afbba";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const inputBox = document.querySelector('input');
const btn = document.querySelector('button')
const weatherIcon = document.querySelector('.weather-icon')
const cityError = document.querySelector('.error');
const weather = document.querySelector('.weather');


async function checkWeather(city) {
    let response = await fetch(apiUrl + city + `&appid=${apiKey}`);

if(response.status == 404) {
    cityError.style.display = 'block';
    weather.style.display = 'none'
}else{

    let data = await response.json();

    
    
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';



if(data.weather[0].main == 'Clouds'){
    weatherIcon.src = 'images/clouds.png';
}else
if(data.weather[0].main == 'Clear') {
    weatherIcon.src = 'images/clear.png';
}
else
if(data.weather[0].main == 'Mist') {
    weatherIcon.src = 'images/mist.png';
}
else
if(data.weather[0].main == 'Wind') {
    weatherIcon.src = 'images/wind.png';
}
else
if(data.weather[0].main == 'Snow') {
    weatherIcon.src = 'images/snow.png';
}
else
if(data.weather[0].main == 'Rain') {
    weatherIcon.src = 'images/rain.png';
}
else
if(data.weather[0].main == 'Drizzle') {
    weatherIcon.src = 'images/drizzle.png';
}
weather.style.display = 'block';
cityError.style.display = 'none';

}

}


btn.addEventListener('click', () => {
    checkWeather(inputBox.value ); 
})