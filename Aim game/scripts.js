const startBtn = document.querySelector('#start');
const board = document.querySelector('#board');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');

const colors = ['aqua', 'burlywood', 'chartreuse', 'cornflowerblue', 'coral', 'crimson', 'darkseagreen', 'violet'];
let time = 0;
let score = 0;

const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

const timeFormat = (time) => `00:${time > 9 ? time : `0${time}`}`;

startBtn.addEventListener('click', (event) => {
  event.preventDefault()
  screens[0].classList.add('up');
});

timeList.addEventListener('click', (event) => {
  if (event.target.classList.contains('time-btn')) {
    time = +event.target.getAttribute('data-time');
    screens[1].classList.add('up');
    startGame();
  }
});

board.addEventListener('click', () => {
  if (event.target.classList.contains('circle')) {
    score++;
    event.target.remove();
    createRandomCircle();
  }
});

function setTime(time) {
  timeEl.innerHTML = timeFormat(time);
}

function startGame() {
  setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTime(time);
}

function finishGame() {
  board.innerHTML = `<h1>Score: <span class="primary">${score}</span></h1>`;
  timeEl.parentNode.classList.add('hide');
}

function getRandomColor() {
  const colorIndex = getRandomNumber(0, colors.length - 1);
  return colors[colorIndex];
}

function createRandomCircle() {
  const circle = document.createElement('div');
  const { width, height } = board.getBoundingClientRect();
  const size = getRandomNumber(10, 60);
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);

  circle.classList.add('circle');

  circle.style.background = getRandomColor();
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;

  board.append(circle);
}

function decreaseTime() {
  if (time <= 0) return finishGame();
  return setTime(--time);
}