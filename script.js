let inputE = document.getElementById("location-input");
let tempE = document.getElementById("temp");
let locE = document.getElementById("location");
let descE = document.getElementById("temp-desc");
let buttonE = document.getElementById("button");
let pressureE = document.getElementById("pressure");
let humidityE = document.getElementById("humidity");
let imageE = document.getElementById("report");
let iconE = document.getElementById("report");
let windE = document.getElementById("wind");

buttonE.onclick = function () {
  if (inputE.value == "") {
    alert("please enter a location");
  } else {
    loc = inputE.value;
    var url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      loc +
      "&appid=4a44398b87b4a5e9077cef8bf245d80f";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const { name } = data;
        const { feels_like } = data.main;
        const { humidity } = data.main;
        const { pressure } = data.main;
        const { icon } = data.weather[0];
        const { hdIconUrl } =
          "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        const { description } = data.weather[0];
        const { speed } = data.wind;

        if (tempE) {
          tempE.innerText = Math.floor(feels_like - 273);
        }
        if (locE) {
          locE.innerText = name;
        }
        if (descE) {
          descE.innerText = description;
        }
        if (humidityE) {
          humidityE.innerText = humidity;
        }
        if (pressureE) {
          pressureE.innerText = pressure;
        }
        if (windE) {
          windE.innerText = speed + " m/s";
        }
        if (imageE.src)
          imageE.src = "https://openweathermap.org/img/wn/" + icon + ".png";
        if (iconE) {
          iconE.innerText = hdIconUrl;
        }
      })

      .catch(() => {
        alert("Enter a valid location");
      });
    inputE.value = "";
  }
};
