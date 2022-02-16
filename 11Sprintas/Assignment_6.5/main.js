const API_KEY = "7f8b6e726a313d8135610b9958f30b93";

fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=Vilnius&units=metric&APPID=7f8b6e726a313d8135610b9958f30b93"
)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
