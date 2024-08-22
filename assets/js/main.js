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
function activeLink(){
    navLink.forEach((link) =>
    link.classList.remove('active-link'));
    this.classList.add('active-link');
}
navLink.forEach((item) => item.addEventListener('click',activeLink));

const sections = document.querySelectorAll("section[id]")
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".nav-list a[href*=" + sectionId + "]").classList.add("active-link");
    } else {
      document.querySelector(".nav-list a[href*=" + sectionId + "]").classList.remove("active-link");
    }
  })
}

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

/*=============== EVENTS HOVER =============== */
const nav = document.querySelector(".nav");
const footer = document.querySelector(".footer-social");
document.documentElement.style.cssText
nav.addEventListener("mouseup", function(e) {
  const currentIcon = e.target.closest(".nav-social-button");
  const currentBtn = e.target.closest(".nav-link-button");
  if (currentIcon)
    currentIcon.style.cssText = `
      color: var(--title-color);
      transform: translateY(0rem);
    `;
  if (currentBtn)
    currentBtn.style.cssText = `
      background-color: transparent;
    `;
})
footer.addEventListener("mouseup", function(e) {
  const currentIcon = e.target.closest(".footer-social-button");
  if(!currentIcon) return;
  currentIcon.style.cssText = `
      color: var(--title-color);
  `;
})

/*=============== SECTION OBSERVER =============== */
const animationFrame = function(entries,observe) {
  const [entry] = entries;
  const currentSection = entry.target;
  if(!entry.isIntersecting) return;
  currentSection.classList.remove(this);
  observe.unobserve(currentSection);
}

const sectionTopObserver = new IntersectionObserver(animationFrame.bind("section-frame"), {root:null, threshold: 0});
const sectionAbout = document.querySelector(".about");
const sectionServices = document.querySelector(".services");
const sectionPortfolio = document.querySelector(".portfolio");
const sectionContact = document.querySelector(".contact");

sectionTopObserver.observe(sectionAbout);
sectionTopObserver.observe(sectionServices);
sectionTopObserver.observe(sectionPortfolio);
sectionTopObserver.observe(sectionContact);

/*=============== MOBILE CARD OBSERVER =============== */
const servicesCard = document.querySelectorAll(".services-item");
const portfolioCard = document.querySelectorAll(".portfolio-item");
const cardObserver = new IntersectionObserver(animationFrame.bind("card-frame"), {root:null, threshold: 0});
if(document.documentElement.clientWidth <= 768) {
  servicesCard.forEach(card => {
    card.classList.add("card-frame");
    cardObserver.observe(card);
  });
  portfolioCard.forEach((card) => {
    card.classList.add("card-frame");
    cardObserver.observe(card);
  });
}