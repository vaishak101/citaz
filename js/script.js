const sliderBtnLeft = document.querySelector('.slider__btn--left');
const sliderBtnRight = document.querySelector('.slider__btn--right');
const dotsCont = document.querySelector('.dots__container');

//slider
const slide = document.querySelectorAll('.slide');
let curSlide = 0;
let maxSlide = slide.length - 1;
const dotActive = function (slide) {
  document
    .querySelectorAll('.dots__b')
    .forEach(dot => dot.classList.remove('dots__b--active'));

  document
    .querySelector(`.dots__b[data-slide="${slide}"]`)
    .classList.add('dots__b--active');
};
const slider = function (cursl) {
  slide.forEach(
    (s, i) => (s.style.transform = `translateX(${60 * (i - cursl)}%) `)
  );
  slide.forEach((s, i) => console.log(i - cursl));
  dotActive(cursl);
};
const nextSlide = function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  slider(curSlide);
};
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }
  slider(curSlide);
};

const createBtn = function () {
  slide.forEach(function (_, i) {
    dotsCont.insertAdjacentHTML(
      'beforeend',
      ` <button class="dots__b" data-slide="${i}"></button>`
    );
  });
};
createBtn();
slider(0);
dotsCont.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__b')) {
    const dotNum = e.target.dataset.slide;
    slider(dotNum);
  } else {
  }
});
sliderBtnLeft.addEventListener('click', prevSlide);
sliderBtnRight.addEventListener('click', nextSlide);
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') {
    prevSlide();
  } else if (e.key === 'ArrowRight') {
    nextSlide();
  }
});
