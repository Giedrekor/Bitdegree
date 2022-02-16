const API_KEY = "7f8b6e726a313d8135610b9958f30b93";

const request = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url).then((response) => {
      if (response.ok) {
        resolve(response.json());
      } else {
        reject({
          error: 500,
        });
      }
    });
  });
};

const WeatherInfo = async (element, weather) => {
  try {
    let city = weather.querySelector("#city").value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`;
    let response = await request(url);
    element.innerText = JSON.stringify(response);
  } catch (err) {
    console.log(err);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  let weather = document.querySelector("#weather");
  weather.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();
      WeatherInfo(document.querySelector("#results"), weather);
    },
    false
  );
});
