//SLIDER
const sliderBtnLeft = document.querySelector('.slider__btn--left');
const sliderBtnRight = document.querySelector('.slider__btn--right');

const slide = document.querySelectorAll('.slide');
let curSlide = 0;
let maxSlide = slide.length - 1;

const slider = function (cursl) {
  slide.forEach(
    (s, i) =>
      (s.style.transform = `translateX(${55 * (i - cursl)}%) scale(0.8)`)
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
document.querySelector('.nav__ul').addEventListener('click', function (e) {
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    // hideMobNav();
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
