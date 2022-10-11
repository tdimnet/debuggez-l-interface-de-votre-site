const ACCESS_KEY = ''

const _retrieveWeatherForecastMockedData = () => fetch('/data/weather-api-mocked-data.json')
.then(res => res.json())
.catch(err => console.log("Oh no", err))


const _retrieveWeatherForecastApiData = coordinates => fetch(`http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=${coordinates.lat},${coordinates.lng}`)
    .then(res => res.json())
    .catch(err => console.log("Oh no", err))


const retrieveWeatherForecastData = (coordinates, isMocked) => {
    if (isMocked) {
        return _retrieveWeatherForecastMockedData()
    }
    return _retrieveWeatherForecastApiData(coordinates)
}
