//SLIDER
const sliderBtnLeft = document.querySelector('.slider__btn--left');
const sliderBtnRight = document.querySelector('.slider__btn--right');

const slide = document.querySelectorAll('.slide');
let curSlide = 0;
let maxSlide = slide.length - 1;

const slider = function (cursl) {
  slide.forEach(
    (s, i) => (s.style.transform = `translate(${55 * (i - cursl)}%) scale(0.8)`)
  );
  slide.forEach((s, i) =>
    i === cursl
      ? ((slide[cursl].style.opacity = 1),
        (slide[cursl].style.transform = 'scale(1)'))
      : (s.style.opacity = 0.3)
  );
};
const nextSlide = function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  // console.log(curSlide);
  slider(curSlide);
};
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }
  // console.log(curSlide);

  slider(curSlide);
};

slider(0);

sliderBtnLeft.addEventListener('click', prevSlide);
sliderBtnRight.addEventListener('click', nextSlide);
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') {
    prevSlide();
  } else if (e.key === 'ArrowRight') {
    nextSlide();
  }
});
// Reveal section
const allSection = document.querySelectorAll('.section');

const revealSection = function (entries, SecObserver) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('sec-hidden');
  SecObserver.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
  // rootMargin: '-50px',
});
allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('sec-hidden');
});
//Smooth scroll
document.querySelector('.nav__ul').addEventListener('click', function (e) {
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    hideMobNav();
    let id = e.target.getAttribute('href');
    let sid = document.querySelector(id);
    let idcord = sid.getBoundingClientRect();
    // revealSection();
    window.scrollTo({
      left: idcord.left + window.pageXOffset,
      top: idcord.top + window.pageYOffset,
      behavior: 'smooth',
    });
  }
});

//sticky nav
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
//....Functions
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add('nav__sticky');
  } else {
    nav.classList.remove('nav__sticky');
  }
};
//....Observer
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-100px`,
});
headerObserver.observe(header);
//tab Pane
let tabpane = document.querySelector('.operations__container');
let optBtn = document.querySelectorAll('.operations__btn');
let tabs = document.querySelectorAll('.tab');
tabpane.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('operations__btn')) {
    optBtn.forEach(s => s.classList.remove('op--active'));
    tabs.forEach(s => s.classList.remove('tab__active'));
    let tab = document.querySelector(`.tab__${e.target.dataset.btn}`);
    tab.classList.add('tab__active');
    e.target.classList.add('op--active');
  } else {
    return;
  }
});
//
//
//
//MOBILE NAV
//
//
//
const navMobBtn = document.querySelector('.nav__mob-btn');
const navMobBtnClose = document.querySelector('.nav__mob-btn--close');
const navMob = document.querySelector('.nav__ul');
const showMobNav = function () {
  navMob.classList.add('visible');
  navMobBtn.classList.add('hide');
};
const hideMobNav = function () {
  navMob.classList.remove('visible');
  navMobBtn.classList.remove('hide');
};
navMobBtn.addEventListener('click', showMobNav);
navMobBtnClose.addEventListener('click', hideMobNav);
