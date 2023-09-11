const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error404 = document.querySelector(".not-found");
const body = document.querySelector("body");
const input = document.querySelector("input");
const reset = document.querySelector("#reset");

search.addEventListener("click", async () => {
  const APIKey = "93f26e3c57081a6210de53b8dcfdfea4";

  const city = document.querySelector(".search-box input").value;
  console.log(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
  );

  if (city === "") return;

  await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
  )
    .then((response) => response.json())
    .then((json) => {
      if (json.cod === "404") {
        container.style.height = "430px";
        weatherBox.style.display = "none";
        weatherDetails.style.display = "none";
        error404.style.display = "block";
        return;
      }

      error404.style.display = "none";

      const image = document.querySelector(".weather-box img");
      const temperature = document.querySelector(".weather-box .temperature");
      const description = document.querySelector(".weather-box .description");
      const humidity = document.querySelector(
        ".weather-details .humidity span"
      );
      const wind = document.querySelector(".weather-details .wind span");
      console.log(json.weather[0].main);
      switch (json.weather[0].main) {
        // switch ("Clear") {
        // switch ("Rain") {
        // switch ("Snow") {
        // switch ("Clouds") {
        // switch ("Haze") {
        // switch ("Mist") {
        // switch ("Unknown") {
        case "Clear":
          image.src = "images/clear.png";
          body.style.backgroundImage = "url('images/clear.jpg')";
          body.style.backgroundSize = "cover";
          break;

        case "Rain":
          image.src = "images/rain.png";
          body.style.backgroundImage = "url('images/rain.jpg')";
          body.style.backgroundSize = "cover";
          break;

        case "Thunderstorm":
          image.src = "images/rain.png";
          body.style.backgroundImage = "url('images/rain.jpg')";
          body.style.backgroundSize = "cover";
          break;

        case "Snow":
          image.src = "images/snow.png";
          body.style.backgroundImage = "url('images/snow.jpg')";
          body.style.backgroundSize = "cover";
          break;

        case "Clouds":
          image.src = "images/cloud.png";
          body.style.backgroundImage = "url('images/cloudy.jpg')";
          body.style.backgroundSize = "cover";
          break;

        case "Haze":
          image.src = "images/haze_icon_yellow.svg";
          body.style.backgroundImage = "url('images/haze.jpg')";
          body.style.backgroundSize = "cover";
          break;

        case "Mist":
          image.src = "images/mist_icon.svg";
          body.style.backgroundImage = "url('images/fog.jpg')";
          body.style.backgroundSize = "cover";
          break;

        default:
          image.src = "images/thermometer_icon_blue.svg";
          body.style.backgroundImage = "url('images/thermometer.jpg')";
          body.style.backgroundSize = "cover";
          break;
      }

      temperature.innerHTML = `${Math.round(
        parseInt(json.main.temp) * 1.8 + 32
      )}<span>°F</span>`;
      description.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${Math.round(
        parseInt(json.wind.speed) * 0.621371192
      )}mph`;

      weatherBox.style.display = "block";
      weatherDetails.style.display = "block";
      container.style.height = "640px";
    });
});

reset.addEventListener("click", () => {
  container.style.height = "105px";
  input.value = "";
  body.style.backgroundImage = "url('images/thermometer.jpg')";
  body.style.size = "cover";
});
