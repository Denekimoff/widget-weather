// https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=1354067d4c5e5ba7d6625f68d153937b

function render({
  name,
  weather: [{ icon, description }],
  main: { temp, feels_like, humidity },
  wind: { speed },
}) {
  const weatherHtml = `<div class="main">
  <div class="widget">
    <div class="country">${name}</div>
    <div class="icon"><img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="iconochka"></div>
    <div class="temp">
      <p class="temp-now">${Math.round(temp - 273)} <span>C</span></p>
      <p class="temp-description">${description}</p>
    </div>
    <div class="other-cards">
      <div class="other-item">
        <p class="item-text">Wind</p>
        <p class="item-int">${Math.round(speed)}<span>km/h</span></p>
      </div>
      <div class="other-item">
        <p class="item-text">Humidity</p>
        <p class="item-int">${humidity}<span>%</span></p>
      </div>
      <div class="other-item">
        <p class="item-text">Feels Like</p>
        <p class="item-int">${Math.round(feels_like - 273)}<span>C</span></p>
      </div>
    </div>
  </div>
</div>`

  document.body.innerHTML = weatherHtml
}

async function getWeather() {
  try {
    const response = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=1354067d4c5e5ba7d6625f68d153937b'
    )

    if (!response.ok) throw new Error(`Error ${response.status}`)

    const data = await response.json()
    render(data)

    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
getWeather()
