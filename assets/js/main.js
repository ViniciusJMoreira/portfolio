/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}
/*===== MENU HIDDEN =====*/
function removeMenu() {
  navMenu.classList.remove('show-menu')
}
/* Validate if constant exists */
if(navClose) {
  navClose.addEventListener('click', removeMenu)
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav-link')
navLink.forEach((n) => n.addEventListener('click', removeMenu))
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const header = document.getElementById('header')
  // When the scroll is greater then 80 viewport height, add the scroll-header class to header tag
  if(this.scrollY >= 80) header.classList.add('scroll-header')
  else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*==================== SHOW SCROLL UP ====================*/
function showScroll() {
  const scrollUp = document.getElementById('scroll-up')
  // When the scroll is greater then 350 viewport height, add the show-scroll class to header tag
  if(this.scrollY >= 350) scrollUp.classList.add('show-scroll')
  else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', showScroll)
/*==================== ABOUT TABS ====================*/
const tabs = document.querySelectorAll('[data-target]')
const tabContents = document.querySelectorAll('[data-content]')

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('tab-active')
    })

    const target = document.querySelector(tab.dataset.target)
    target.classList.add('tab-active')
    
    tabs.forEach((tab) => {
      tab.classList.remove('tab-active')
    })
    tab.classList.add('tab-active')
  })
})
/*=============== CONTACT FORM =============== */
const contactForm = document.getElementById('contact-form'),
  contactName = document.getElementById('contact-name'),
  contactEmail = document.getElementById('contact-email'),
  contactSubject = document.getElementById('contact-subject'),
  contactMessage = document.getElementById('contact-message'),
  errorMessage = document.getElementById('error-message')

const sendEmail = (e) => {
  e.preventDefault()

  //check if the field has a value
  if(contactName.value === '' || contactEmail.value === '' || contactSubject.value === '' || contactMessage.value === '') {
    //Show Message
    errorMessage.textContent = 'Write all the input fields'
  }else {
    //serviceID - templateID - #form - publickey
    emailjs.sendForm(
      'service_ohlno88',
      'template_xd7nmro',
      '#contact-form',
      'jlMp_6QW2Qp9Q78Tc'
    ).then(() => {
      //Show Message and add color
      errorMessage.classList.add('first-color')
      errorMessage.textContent = 'Message sent ✔️'

      //Remove message after 5 seconds
      setTimeout(() => {
        errorMessage.textContent = ''
      }, 5000)
    },(error) => {
      alert('OPs! SOMETHING WENT WRONG', error)
    })
    // Clear input fields
    contactName.value = ''
    contactEmail.value = ''
    contactSubject.value = ''
    contactMessage.value = ''
  }
}

contactForm.addEventListener('submit', sendEmail)