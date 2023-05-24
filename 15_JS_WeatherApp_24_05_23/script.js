/* Константы, которые не меняются, пишем большими буквами */
const API_KEY = "59770d5b64f33b5672a63fe5dbd20559"; //уник идентификатор, наш ключ
const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const locationInput = document.getElementById("locationInput");
const getWeatherButton = document.getElementById("getWeatherButton");
const weatherContainer = document.getElementById("weatherContainer");

// locationInput.addEventListener('input')
getWeatherButton.addEventListener('keydown', (e) => {
    console.log(e);
    if (e.code === 'Enter') {
        console.log('Мы нажали Enter');
    }
})

getWeatherButton.addEventListener("click", () => {
  const location = locationInput.value.trim();
  // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  if (location) {
    const apiUrl = `${API_BASE_URL}?q=${location}&appid=${API_KEY}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        displayWeather(data);
      })
      .catch((error) => {
        console.log(error);
        weatherContainer.innerHTML = "Failed to fetch weather data";
      });
  }
});

// функция, отвечающая за показ погоды
function displayWeather(weatherData) {
  console.log(weatherData);
  // с помощью деструктуризации получаем необходимые поля
  const {
    name,
    sys: { country },
    main: { humidity },
    main,
    weather,
    wind: { speed },
    visibility,
  } = weatherData;

  // получаем необходимые значения

  // отбрасывает все после запятой
  const temperatureC = Math.floor(main.temp - 273.15);
  // округление (по законам математики)
  const temperatureMaxC = Math.round(main.temp_max - 273.15);
  // количество знаков после запятой
  const temperatureMinC = (main.temp_min - 273.15).toFixed(1);
  const weatherMain = weather[0].main;
  const weatherDescription = weather[0].description;
  const visibilityDistance = visibility / 1000;
  // const humidity = main.humidity;
  // const windSpeed = wind.speed;
  // const country = sys.country;

  // создаем карточку для отображения инфы о погоде
  const weatherCard = document.createElement("div");

  // класс для будущей стилизации
  weatherCard.classList.add("weather-card");

  weatherContainer.innerHTML = ''; // зачистит предыдущие значения
  // помещаем контент внутрь созданной карточки
  weatherCard.innerHTML = `
    <h2>${name}, ${country}</h2>
    <p>Temperature:  ${temperatureC}</p>
    <p>Max temperature: ${temperatureMaxC}</p>
    <p>Min temperature: ${temperatureMinC}</p>
    <p>Weather: ${weatherMain}</p>
    <p>Description: ${weatherDescription}</p>
    <p>Weather: ${weatherMain}</p>
    <p>Humidity: ${humidity}</p>
    <p>Wind speed: ${speed}</p>
    <p>Visibility: ${visibilityDistance} km</p>
    `;

  weatherContainer.append(weatherCard);
}
