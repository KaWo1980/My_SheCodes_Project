// Current time
let now = new Date();

// Get City and Temperature Data
function displayTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let displayTemperature = document.querySelector("#current-temperature");
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = response.data.city;
  displayTemperature.innerHTML = temperature;
}

// Get and replace the City
function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-input");
  let city = cityInput.value;
  let apiKey = "o3ce43a0d26f03dc03af17ba46t837db";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

let city = document.querySelector("#search-city");
city.addEventListener("submit", search);

// Function days
function formateDate(date) {
  // Array days
  let days = [
    "Sunday",
    "Monday",
    "Thuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  //Time
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let outputDate = `${day}, ${hours}:${minutes}h`;
  return outputDate;
}

let dayTime = document.querySelector("#actual-date");
dayTime.innerHTML = formateDate(now);
