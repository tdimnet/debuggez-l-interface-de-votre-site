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
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
            $latInput.value = position.coords.latitude
            $lngInput.value = position.coords.longitude
        })
    } else {
        console.log("====")
        console.log("La géolocalisation n'est pas activé")
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
