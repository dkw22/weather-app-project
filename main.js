function getWeather(){
    let city = document.querySelector('#city').value;
    let zipCode = document.querySelector('#zipcode').value;
    const apiKey = '5cd1c1a665b46b71d5354ae3e3455b3d'

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&zip=${zipCode}&units=imperial&appid=${apiKey}`)
    .then(response => response.json())
    .then(weatherData => {
        console.log(weatherData)

        //Get City Title
        let cityData = weatherData.name
        let cityTitleHtml = document.querySelector('#city-title')
        let cityNameHtml = document.querySelector('#city-name')
        cityNameHtml.innerHTML = 'City:'
        cityTitleHtml.innerHTML = cityData

        //Get High Temp
        let highTempData = Math.round(weatherData.main.temp_max)
        let highTempHtml = document.querySelector('#tempHigh')
        document.querySelector('#high-name').innerHTML = 'High:'
        highTempHtml.innerHTML = highTempData
        document.querySelector('#deg1').innerHTML = '\&deg'
        document.querySelector('#f').innerHTML = 'F'

        //Get Low Temp
        let lowTempData = Math.round(weatherData.main.temp_min)
        let lowTempHtml = document.querySelector('#tempLow')
        document.querySelector('#low-name').innerHTML = 'Low:'
        lowTempHtml.innerHTML = lowTempData
        document.querySelector('#deg2').innerHTML = '\&deg'
        document.querySelector('#f2').innerHTML = 'F'

        //Get Forecast
        let weatherForecast = weatherData.weather[0].description
        let forecastHtml = document.querySelector('#description')
        document.querySelector('#the-forecast').innerHTML = 'Forecast:\&nbsp'
        forecastHtml.innerHTML = weatherForecast

        //Get Humidity
        let weatherHumid = weatherData.main.humidity
        let humidHtml = document.querySelector('#humidity')
        document.querySelector('#humid-sec').innerHTML = 'Humidity:\&nbsp'
        humidHtml.innerHTML = weatherHumid
        document.querySelector('#percent').innerHTML = '\&nbsp%'
    })
}

function randomPicture() {
    let accessKey = "XK1gE7b-e5G4R9oasVrLIuBYHnRj7E1wtZT_PLLDh7A"
    fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}&orientation=squarish&query=weather`)
    .then(response => response.json())
    .then(pictureData => {
        let ran_photo = pictureData.urls.regular
        let img_url = document.querySelector('#img_url')
        img_url = ran_photo
        $('#img_url').css("background-image", `url(${ran_photo})`)
            let photoText = pictureData.user.name
            let photo_link_text = document.querySelector('#photoCred')
            photo_link_text.innerHTML = 
            `Photo by <a href="${pictureData.user.portfolio_url}" target="_blank">${photoText}</a>
            on <a href="https://unsplash.com/" target="_blank">Unsplash</a>`
    });
}