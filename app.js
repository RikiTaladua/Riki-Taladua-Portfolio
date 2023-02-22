// Add active class to navigation links on click
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(link => link.classList.remove('active'));
    link.classList.add('active');
  });
});

// Toggle mobile navigation menu
const menuButton = document.querySelector('.menu-button');
const navMenu = document.querySelector('nav ul');

menuButton.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Change image on hover
const projectImages = document.querySelectorAll('.project img');

projectImages.forEach(image => {
  image.addEventListener('mouseenter', () => {
    const src = image.getAttribute('src');
    image.setAttribute('src', `${src.slice(0, -4)}-hover.jpg`);
  });

  image.addEventListener('mouseleave', () => {
    const src = image.getAttribute('src');
    image.setAttribute('src', `${src.slice(0, -10)}.jpg`);
  });
});
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');

let counter = 0;
const size = carouselImages[0].clientWidth;

function slideNext() {
  if (counter >= carouselImages.length - 1) return;
  counter++;
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
  updateActive();
}

function slidePrev() {
  if (counter <= 0) return;
  counter--;
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
  updateActive();
}

function updateActive() {
  carouselImages.forEach((image, index) => {
    if (index === counter) {
      image.parentElement.classList.add('active');
    } else {
      image.parentElement.classList.remove('active');
    }
  });
}

nextBtn.addEventListener('click', slideNext);
prevBtn.addEventListener('click', slidePrev);
