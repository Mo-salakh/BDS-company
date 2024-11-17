
const navBurger = document.querySelector('.nav_burger')
const burgerMenu = document.querySelector('.burger_menu')
const burgerCloseBtn = document.querySelector('.burger_close')

const cookieWindow = document.querySelector('.cookie')
const cookieBtn = document.querySelectorAll('.cookie_btn')
const cookieCloseBtn = document.querySelector('.cookie_close')

const alertWindow = document.querySelector('.alert_thank')
const alertSuperBtn = document.querySelector('.alert_thank__btn')
const alertCloseBtn = document.querySelector('.close_alert')

const formWindow = document.querySelector('.contact_form')
const formCloseBtn = document.querySelector('.close_form')
const contactBtns = document.querySelectorAll('.contact_btn')
const formSubmit = document.querySelector('input[type=submit]')

const inputName = document.querySelector('#name')
const inputEmail = document.querySelector('#email')
const inputNumber = document.querySelector('#number')
const unrequiredName = document.querySelector('.false_name')
const unrequiredEmail = document.querySelector('.false_email')
const unrequiredNumber = document.querySelector('.false_number')



let isHidden = true

function showBurgerMenu() {
    if(isHidden) {
        burgerMenu.style.display = 'flex'
    } else {
        burgerMenu.style.display = 'none'
    }
    isHidden = !isHidden
}

function checkWidth() {
    const width = document.body.clientWidth || window.innerWidth || document.documentElement.clientWidth
    if (width > 575) {
        burgerMenu.style.display = 'none'
    }
}

function burgerMenuClose() {
    burgerMenu.style.display = 'none'
}

function closeCookieWindow() {
    cookieWindow.style.display = 'none'
}

function showForm() {
    formWindow.style.display = 'block'
}

function closeForm() {
    formWindow.style.display = 'none'
}

cookieBtn.forEach(btn => {
    btn.addEventListener('click', closeCookieWindow)
})

contactBtns.forEach(btn => {
    btn.addEventListener('click', showForm)
})

function submitForm(event) {
    event.preventDefault();
    let isValid = true
    if (!checkName()) isValid = false;
    if (!checkEmail()) isValid = false;
    if (!checkNumber()) isValid = false;

    if (isValid) {
        closeForm();
        alertWindow.style.display = 'block'
    }
}


function checkEmail() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailRegex.test(inputEmail.value) || inputEmail.value.length <= 0) {
        inputEmail.required = false
        unrequiredEmail.textContent = 'This field is required'
        return false
    }
    return true
}

function checkName() {
    if(inputName.value.length <= 0) {
        inputName.required = false
        unrequiredName.textContent = 'This field is required'
        return false
    }
    return true
}

function checkNumber() {
    const phoneRegex = /^((8|\+7)?\d{10}|(\+7)?\(?\d{3}\)?[\- ]?\d{3}[\- ]?\d{2}[\- ]?\d{2})$/;
    if(!phoneRegex.test(inputNumber.value)) {
        inputNumber.required = false
        unrequiredNumber.textContent = 'This field is required'
        return false
    }

    return true

}

function closeAlert() {
    alertWindow.style.display = 'none'
}

formSubmit.addEventListener('click', submitForm)
navBurger.addEventListener('click', () =>  showBurgerMenu())
window.addEventListener('resize', checkWidth)
burgerCloseBtn.addEventListener('click', burgerMenuClose)
cookieCloseBtn.addEventListener('click', closeCookieWindow)
formCloseBtn.addEventListener('click', closeForm)
alertCloseBtn.addEventListener('click', closeAlert)
alertSuperBtn.addEventListener('click', closeAlert)