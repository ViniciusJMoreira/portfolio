/*=============== SHOW MENU ===============*/
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const navMenu = document.getElementById("nav-menu");
const sections = document.querySelectorAll("section[id]");
const sectionAbout = document.querySelector(".about");
const aboutContent = document.querySelector(".about-content");
const sectionServices = document.querySelector(".services");
const sectionPortfolio = document.querySelector(".portfolio");
const sectionContact = document.querySelector(".contact");
const contactForm = document.getElementById("contact-form");

/*===== NAV EVENTS =====*/
nav.addEventListener("click", function(e) {
  console.log(e.target);
  /*===== MENU SHOW =====*/
  if (e.target.closest(".nav-toggle")) navMenu.classList.add("show-menu");
  /*===== MENU HIDDEN =====*/
  if (e.target.closest(".nav-close")) navMenu.classList.remove("show-menu");
  /*===== SCROLL SECTIONS ACTIVE LINK =====*/
  if (e.target.closest(".nav-link")) {
    /*===== REMOVE MENU MOBILE =====*/
    navMenu.classList.remove("show-menu");
    /*===== ACTIVE LINK =====*/
    document.querySelector(".nav-link .active-link").classList.remove("active-link");
    e.target.classList.add("active-link");
  }

});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// const activeLinkCallback = function(entries) {
//   const [entry] = entries;
//   const sectionId = entry.target.getAttribute("id");
//   if(!entry.isIntersecting) return;
//   document.querySelector(".nav-list .active-link")?.classList.remove("active-link");
//   document.querySelector(".nav-list a[href*=" + sectionId + "]").classList.add("active-link");
// }
// const observerActiveLink = new IntersectionObserver(activeLinkCallback, {root:null,threshold:0.1});
// sections.forEach(section => observerActiveLink.observe(section));
function navHighlighter() {
  // Get current scroll position
  let scrollY = window.scrollY;

  // Now we loop through sections to get height, top and ID values for each
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-list a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-list a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", navHighlighter);
/*==================== SHOW NAV SCROLL ====================*/
const showNavScrollCallback = function(entries) {
  const [entry] = entries;
  const scrollUp = document.getElementById("scroll-up");
  if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
    header.classList.remove("scroll-header");
    // HIDDE SCROLL UP
    scrollUp.classList.remove("show-scroll");
  } else {
    header.classList.add("scroll-header");
    // SHOW SCROLL UP
    scrollUp.classList.add('show-scroll');
  }
}
const obeserverNavScroll = new IntersectionObserver(showNavScrollCallback, {root:null,threshold:0,rootMargin:`-${nav.clientHeight}px`});
obeserverNavScroll.observe(sectionAbout);
/*==================== ABOUT TABS ====================*/
aboutContent.addEventListener("click", function(e) {
  const currentTab = e.target.closest(".tab-button");
  if (!currentTab) return;
  document.querySelector(".tab-button.tab-active").classList.remove("tab-active");
  currentTab.classList.add("tab-active");
});
/*=============== CONTACT FORM =============== */
const sendEmail = (e) => {
  e.preventDefault()
  const contactName = document.getElementById('contact-name'),
  contactEmail = document.getElementById('contact-email'),
  contactSubject = document.getElementById('contact-subject'),
  contactMessage = document.getElementById('contact-message'),
  errorMessage = document.getElementById('error-message')
  //check if the field has a value
  if(contactName.value === '' || contactEmail.value === '' || contactSubject.value === '' || contactMessage.value === '') {
    //Show Message
    errorMessage.textContent = 'Write all the input fields';
  }else {
    //serviceID - templateID - #form - publickey
    emailjs.sendForm(
      'service_ohlno88',
      'template_xd7nmro',
      '#contact-form',
      'jlMp_6QW2Qp9Q78Tc'
    ).then(() => {
      //Show Message and add color
      errorMessage.classList.add('first-color');
      errorMessage.textContent = 'Message sent ✔️';

      //Remove message after 5 seconds
      setTimeout(() => {
        errorMessage.textContent = '';
      }, 5000);
    },(error) => {
      alert('OPs! SOMETHING WENT WRONG', error);
    })
    // Clear input fields
    contactName.value = '';
    contactEmail.value = '';
    contactSubject.value = '';
    contactMessage.value = '';
  }
}

contactForm.addEventListener('submit', sendEmail);

/*=============== EVENTS HOVER =============== */
const allBtns = document.querySelectorAll(".button");
allBtns.forEach(btn => {
  btn.addEventListener("mouseover", function() {
    if(btn.classList.contains("nav-link-button")) {
      btn.style.backgroundColor = "var(--first-color)";
    }else {
      btn.style.backgroundColor = "transparent";
      btn.style.color = "var(--first-color)";
    }
  })
  btn.addEventListener("mouseout", function() {
    if(btn.classList.contains("nav-link-button")) {
      btn.style.backgroundColor = "transparent";
    }else {
      btn.style.backgroundColor = "var(--first-color)";
      btn.style.color = "var(--text-color)";
    }
  })
  btn.addEventListener("mouseup", function() {
    if(btn.classList.contains("nav-link-button")) {
      btn.style.backgroundColor = "transparent";
    }else {
      btn.style.backgroundColor = "var(--first-color)";
      btn.style.color = "var(--text-color)";
    }
  })
})
const allSocialBtn = document.querySelectorAll(".social-button");
allSocialBtn.forEach(btn => {
  btn.addEventListener("mouseover", function() {
    btn.style.color = "var(--first-color)";
    btn.style.transform = "translateY(-0.25rem)";
  }) 
  btn.addEventListener("mouseout", function() {
    btn.style.color = "var(--text-color)";
    btn.style.transform = "translateY(0rem)";
  }) 
  btn.addEventListener("mouseup", function() {
    btn.style.color = "var(--text-color)";
    btn.style.transform = "translateY(0rem)";
  }) 
})
const scrollUpBtn = document.querySelector(".scrollup-icon");
scrollUpBtn.addEventListener("mouseover", function (e) {
  this.style.color = "var(--text-color)";
});
scrollUpBtn.addEventListener("mouseout", function (e) {
  this.style.color = "var(--first-color)";
});
scrollUpBtn.addEventListener("mouseup", function (e) {
  this.style.color = "var(--first-color)";
});

/*=============== SECTION ANIMATION OBSERVER =============== */
const sectionAnimateCallback = function(entries,observe) {
  const [entry] = entries;
  const currentSection = entry.target;
  if(!entry.isIntersecting) return;
  currentSection.classList.remove(this);
  observe.unobserve(currentSection);
}
const sectionAnimateOberserve = new IntersectionObserver(sectionAnimateCallback.bind("section-frame"), {root:null, threshold: 0});
sectionAnimateOberserve.observe(sectionAbout);
sectionAnimateOberserve.observe(sectionServices);
sectionAnimateOberserve.observe(sectionPortfolio);
sectionAnimateOberserve.observe(sectionContact);

/*=============== MOBILE CARD OBSERVER =============== */
const servicesCard = document.querySelectorAll(".services-item");
const portfolioCard = document.querySelectorAll(".portfolio-item");
const cardObeserver = new IntersectionObserver(sectionAnimateCallback.bind("card-frame"), {root:null, threshold: 0});
servicesCard.forEach((card) => cardObeserver.observe(card));
portfolioCard.forEach((card) => cardObeserver.observe(card));