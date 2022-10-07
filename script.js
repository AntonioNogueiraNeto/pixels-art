const paiPalet = document.getElementById('color-palette');
const coresPalet = document.getElementsByClassName('color');
const colors = ['black', 'blue', 'green', 'red'];

function colorPalet() {
  for (let i = 0; i < coresPalet.length; i += 1) {
    coresPalet[i].style.backgroundColor = colors[i];
    coresPalet[i].style.border = '1px cor solid black';
  }
}
colorPalet();

const paiPixel = document.getElementById('pixel-board');
function createPixel() {
  for (let index = 0; index < 25; index += 1) {
    const divColor = document.createElement('div');
    divColor.className = 'pixel';
    divColor.style.backgroundColor = 'white';
    paiPixel.appendChild(divColor);
  }
}
createPixel();
let cores = document.querySelectorAll('.color');

for (let i = 0; i < cores.length; i += 1) {
  cores[i].addEventListener('click', function (event) {
    for (let cor of cores) {
      if (cor.classList.contains('selected')) {
        cor.classList.remove('selected');
      }
    }
    event.target.classList.add('selected');
  });
}
// 8

let selected = document.getElementsByClassName('selected');
let fatherBoard = document.getElementById('pixel-board');

fatherBoard.addEventListener('click', function (evento) {
  let colorElement = selected[0].style.backgroundColor;
  evento.target.style.backgroundColor = colorElement;
});

// 9

let pixels = document.querySelectorAll('.pixel');
const clearBoardButton = document.getElementById('clear-board');

clearBoardButton.addEventListener('click', clearBoard);

function clearBoard() {
  for (let pixel of pixels) {
    pixel.style.backgroundColor = 'white';
  }
}

// 10

