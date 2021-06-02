// Sensor data table
const $sensorId = document.querySelector('.sensor-id')
const $sensorBrand = document.querySelector('.sensor-brand')
const $sensorStatus = document.querySelector('.sensor-status')
const $sensorLat = document.querySelector('.sensor-lat')
const $sensorLng = document.querySelector('.sensor-lng')
const $sensorTemperature = document.querySelector('.sensor-temperature')
const $sensorMoisture = document.querySelector('.sensor-moisture')
const $sensorLastInspectionDate = document.querySelector('.sensor-last-inspection-date')
const $sensorEngineerId = document.querySelector('.sensor-engineer-id')

// Images Gallery
const $sensorMainImg = document.querySelector('.sensor-details-img')

// Weather Forecast data table
const $weatherLocation = document.querySelector('.weather-location')
const $weatherTemperature = document.querySelector('.weather-temperature')
const $weatherIcon = document.querySelector('.weather-icon')
const $weatherDescription = document.querySelector('.weather-description')
const $weatherWind = document.querySelector('.weather-wind')
const $weatherCloudcover = document.querySelector('.weather-cloudcover')
const $weatherUVIndex = document.querySelector('.weather-uv-index')
const $weatherIsDay = document.querySelector('.weather-is-day')

const retrieveSensorData = () => fetch('/data/facade-detail-data.json')
    .then(res => res.json())
    .then(data => data.facade)
    .catch(err => console.log("Oh no", err))


const fillSensorTable = sensorData => {
    $sensorId.textContent = sensorData.id
    $sensorBrand.textContent = sensorData.marque
    $sensorStatus.textContent = sensorData.isActive ? "Actif" : "Inactif"
    $sensorLat.textContent = sensorData.coordinates.lat
    $sensorLng.textContent = sensorData.coordinates.lng
    $sensorTemperature.textContent = sensorData.temperature
    $sensorMoisture.textContent = `${sensorData.moisturePercentage * 100} %`
    $sensorLastInspectionDate.textContent = sensorData.inspection.lastInspectionDate
    $sensorEngineerId.textContent = sensorData.inspection.engineerId
}


const fillWeatherForecastTable = weatherForecastData => {
    $weatherLocation.textContent = weatherForecastData.location.name
    $weatherTemperature.textContent = `${weatherForecastData.current.temperature} °C`

    $weatherIcon.setAttribute('src', weatherForecastData.current.weather_icons[0])
    $weatherIcon.setAttribute('alt', weatherForecastData.current.weather_descriptions[0])

    $weatherDescription.textContent = weatherForecastData.current.weather_descriptions[0]

    $weatherWind.textContent = `
        ${weatherForecastData.current.wind_degree} ${weatherForecastData.current.wind_dir}
        (${weatherForecastData.current.wind_speed} km/h)
    `

    $weatherCloudcover.textContent = weatherForecastData.current.cloudcover
    
    $weatherUVIndex.textContent = weatherForecastData.current.uv_index
    $weatherIsDay.textContent = weatherForecastData.current.is_day === 'yes' ? 'Jour' : 'Nuit'

}


const handleSensorImagesGallery = sensorData => {
    // By default take the first element of the array
    $sensorMainImg.setAttribute('src', `/assets/${sensorData.medias[0]}`)
}


const main = async () => {
    const sensorData = await retrieveSensorData()

    const weatherForecastData = await retrieveWeatherForecastData(sensorData.coordinates, true)

    fillSensorTable(sensorData)
    handleSensorImagesGallery(sensorData)

    fillWeatherForecastTable(weatherForecastData)
}

main()
