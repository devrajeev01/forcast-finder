const APIKEY = "bca3670c82ba44fabf5132217252607";
const BASE_URL = "https://api.weatherapi.com/v1/current.json";

const searchBox = document.getElementById("City");
const searchBtn = document.getElementById("button");
const card = document.querySelector(".weather-card");

async function checkWeather(city = 'Patna') {
  const res = await fetch(`${BASE_URL}?key=${APIKEY}&q=${city}&aqi=no`);
  const data = await res.json();

  if (data.error) {
    alert("City not found!");
    return;
  }

  document.querySelector(".city").innerText = data.location.name;
  document.querySelector(".temp").innerText = data.current.temp_c + "°C";
  document.querySelector(".humidity").innerText = "Humidity: " + data.current.humidity + "%";
  document.querySelector(".wind").innerText = "Wind Speed: " + data.current.wind_kph + " Km/h";

  card.style.display = "block";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

searchBox.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    checkWeather(searchBox.value);
  }
});
