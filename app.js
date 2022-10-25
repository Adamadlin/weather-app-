'use strict';

const mainBig = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search')
const btn = document.getElementById('submit')

const getWeather = function (city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=14c85a13bcb618c7fc31d474f9e07ef9`)
        .then(response => response.json())
        .then(data => {
            const { main } = data
            const celcius = Math.floor(main.temp - 273.15)
            console.log(celcius)
            const weather = document.createElement('div')
            weather.classList.add('weather');
            weather.innerHTML = `
          <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${celcius}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>
          <small>${data.weather[0].main}</small>`;
            mainBig.innerHTML = "";
            mainBig.appendChild(weather);
        });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = search.value;
    if (city) {
        getWeather(city)
    }
});

btn.addEventListener('click', (e) => {
    const city = search.value;
    getWeather(city)
    if (city) {
        getWeather(city)
    }
})





