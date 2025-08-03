async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "6ff99cab21162fb40126c3d137d4203c"; // Your key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      document.getElementById("weatherResult").innerHTML = "City not found!";
      return;
    }

    const weather = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
      <p><strong>Weather:</strong> ${data.weather[0].description}</p>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
    `;

    document.getElementById("weatherResult").innerHTML = weather;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = "Error fetching data!";
  }
}
