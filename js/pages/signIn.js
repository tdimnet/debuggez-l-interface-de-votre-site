const $signInForm = document.querySelector('.sign-in-form')

const $userEmailInput = document.querySelector('#user-email')
const $userEmailErrorMsg = document.querySelector('.user-email-error-msg')

const $userPasswordInput = document.querySelector('#user-password')
const $userPasswordErrorMsg = document.querySelector('.user-password-error-msg')

const USER_EMAIL = "thomas@facadia.com"
const USER_PASSWORD = "azerty"

const checkUserEmailInput = () => {
    const isUserEmailValid = $userEmailInput.value.toLowerCase() === USER_EMAIL

    if (isUserEmailValid) {
        $userEmailErrorMsg.classList.add('hidden')
    } else {
        $userEmailErrorMsg.classList.remove('hidden')
    }

    return isUserEmailValid
}

const checkUserPasswordInput = () => {
    const isUserPasswordValid = $userPasswordInput.value === USER_PASSWORD

    if (isUserPasswordValid) {
        $userPasswordErrorMsg.classList.add('hidden')
    } else {
        $userPasswordErrorMsg.classList.remove('hidden')
    }

    return isUserPasswordValid
}

const isFormValid = () => checkUserEmailInput() && checkUserPasswordInput()

$signInForm.addEventListener('submit', function(e) {
    e.preventDefault()
    if (isFormValid()) {
        window.location = 'http://127.0.0.1:5500/pages/homepage.html'
    }
})