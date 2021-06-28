const buttonUp = document.querySelector('.up-button');
const buttonDown = document.querySelector('.down-button');
const container = document.querySelector('.container');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');

sidebar.style.top = `-${(mainSlide.childElementCount - 1) * 100}vh`;

let activeSlideIndex = 0;

function changeSlide(direction) {
  if (direction === 'up') {
    activeSlideIndex++;
    if (activeSlideIndex === mainSlide.childElementCount) activeSlideIndex = 0;
  }
  if (direction === 'down') {
    activeSlideIndex--;
    if (activeSlideIndex === -1) activeSlideIndex = mainSlide.childElementCount - 1;
  }

  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}

buttonUp.addEventListener('click', () => {
  changeSlide('up');
});

buttonDown.addEventListener('click', () => {
  changeSlide('down');
});

document.addEventListener('keydown', (event) => {
  console.log(event.key);
  if (event.key === 'ArrowUp') changeSlide('up');
  if (event.key === 'ArrowRight') changeSlide('up');
  if (event.key === 'ArrowDown') changeSlide('down');
  if (event.key === 'ArrowLeft') changeSlide('down');
  if (event.key === ' ') changeSlide('down');
})