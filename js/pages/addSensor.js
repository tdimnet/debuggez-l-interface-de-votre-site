const $addSensorForm = document.querySelector('.add-sensor-form')

const $latInput = document.querySelector('.lat-input')
const $lngInput = document.querySelector('.lng-input')

const checkSensorId = () => {}

const checkSensorStatus = () => {}

const checkSensorBrand = () => {}

const checkSensorLat = () => {}

const checkSensorLng = () => {}

const checkTechnicienId = () => {}


const isFormValid = () => checkSensorId() && checkSensorStatus() && checkSensorBrand() && checkSensorLat() && checkSensorLng() && checkTechnicienId()


const handleGeolocation = () => {
    if ("geolocatio" in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
            $latInput.value = position.coords.latitude
            $lngInput.value = position.coords.longitude
        })
    }
}

const main = () => {
    handleGeolocation()

    $addSensorForm.addEventListener('submit', e => {
        e.preventDefault()
        
        console.log("===")
    })
}

main()
