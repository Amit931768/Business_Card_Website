// Hero heading par scroll effect
window.addEventListener('scroll', () => {
  const heroHeading = document.querySelector('.hero h1');
  heroHeading.style.transform = `translateY(${window.scrollY * 0.2}px)`;
});
// Scroll animation trigger
const scrollElements = document.querySelectorAll('.scroll-animate');

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
};

const displayScrollElement = (element) => {
  element.classList.add('show');
};

const hideScrollElement = (element) => {
  element.classList.remove('show');
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else {
      hideScrollElement(el);
    }
  })
}

window.addEventListener('scroll', () => {
  handleScrollAnimation();
});
