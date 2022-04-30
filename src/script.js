let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let day = days[now.getDay()];
let month = months[now.getMonth()];
let number = now.getDate();
let hour = now.getHours();
let minute = now.getMinutes();

let formattedDate = `${day}, ${month} ${number}  ${hour}:${minute}`;

let date = document.querySelector(".date");
date.innerHTML = formattedDate;

function displayWeatherCondition(response) {
  let temperature = Math.round(response.data.main.temp);
  document.querySelector(".today-temp").innerHTML = `${temperature}°`;
  let newCity = response.data.name;
  document.querySelector(
    ".in-city-currently"
  ).innerHTML = `In ${newCity} currently`;
}

function changeCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city-search").value;
  let apiKey = "dff86e5088e22e74d9afbdbb6438d4bd";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;

  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayWeatherCondition);
}

let citySearch = document.querySelector("form");
citySearch.addEventListener("submit", changeCity);
