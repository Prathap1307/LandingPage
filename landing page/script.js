const aboutInst = document.querySelector('.images');
const instDetails = document.querySelector('.inst-details');

function handleScroll() {
  const aboutInstTop = aboutInst.getBoundingClientRect().top;
  const instDetailsTop = instDetails.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  
  if (aboutInstTop < windowHeight / 1) {
    aboutInst.style.opacity = '1';
    aboutInst.style.transform = 'translateX(0)';
  }
  
  if (instDetailsTop < windowHeight / 1) {
    instDetails.style.opacity = '1';
    instDetails.style.transform = 'translateX(0)';
  }
}

window.addEventListener('scroll', handleScroll);

const aboutPortal = document.querySelector('#Aboutportal');

function fadeIn(element) {
  element.style.opacity = 1;
  element.style.transition = 'opacity 1s ease-in';
}

function slideIn(element, offset) {
  element.style.transform = `translateY(${offset}px)`;
  element.style.transition = 'transform 1s ease-in';
}

window.addEventListener('scroll', () => {
  const elementPosition = aboutPortal.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1;

  if (elementPosition < screenPosition) {
    fadeIn(aboutPortal);
    slideIn(aboutPortal.querySelector('img'), 0);
    slideIn(aboutPortal.querySelector('.details'), 0);
  }
});

const testimonials = document.querySelector('#Testimonials');

function handleTestimonialsScroll() {
  const testimonialsTop = testimonials.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  
  if (testimonialsTop < windowHeight / 1) {
    testimonials.classList.remove('hidden');
    testimonials.classList.add('fade-in');
  }
}

window.addEventListener('scroll', handleTestimonialsScroll);

const contactSection = document.querySelector('#animationforfooter');
const contactSectionOffsetTop = contactSection.offsetTop;
const windowHeight = window.innerHeight;

function animateContactSection() {
  if(window.scrollY >= contactSectionOffsetTop - windowHeight / 1) {
    contactSection.classList.add('animate');
  } else {
    contactSection.classList.remove('animate');
  }
}

window.addEventListener('scroll', animateContactSection);

window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  var navbarList = document.querySelector('.navbar-nav');
  var header = document.querySelector('.Header');
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > header.clientHeight) {
    navbar.classList.add('fixed');
    navbarList.classList.add('ms-auto');
    navbar.style.width = "100%";
  } else {
    navbar.classList.remove('fixed');
    navbarList.classList.remove('ms-auto');
    navbar.style.width = "60%";
  }
});

  





