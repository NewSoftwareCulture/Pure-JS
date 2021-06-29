const board = document.querySelector('#board');

const colors = ['aqua', 'burlywood', 'chartreuse', 'cornflowerblue', 'coral', 'crimson', 'darkseagreen', 'violet'];
let SQUARES_NUMBER = 500;

function setSquareCount() {
  SQUARES_NUMBER = document.querySelector('#square-count').value;
  board.innerHTML = '';
  addSquares(SQUARES_NUMBER);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomColor() {
  const colorIndex = getRandomInt(colors.length - 1);
  return colors[colorIndex];
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function clearColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `0 0 2px #000`;
}

function addSquares(count) {
  for (let i = 0; i < count; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
  
    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseleave', () => clearColor(square));
  
    board.append(square);
  }
}

addSquares(SQUARES_NUMBER);