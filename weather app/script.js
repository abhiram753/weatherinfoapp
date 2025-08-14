const apiKey = 'ceed85275b7a993e0770560bf7a9407a';
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const weatherResult = document.getElementById('weatherResult');

async function getWeather(city) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('City not found');
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    weatherResult.innerHTML = `<p class="error">${error.message}</p>`;
  }
}

function displayWeather(data) {
  const { name, main, weather } = data;
  weatherResult.innerHTML = `
    <h2>${name}</h2>
    <p>${weather[0].description}</p>
    <p>🌡 ${main.temp}°C</p>
    <p>💧 Humidity: ${main.humidity}%</p>
  `;
}

searchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) getWeather(city);
});
