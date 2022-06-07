let intervalId = null;
let isActive = false;

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', onClickStartBtn);
stopBtn.addEventListener('click', onClickStopBtn);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onClickStartBtn() {
  if (isActive) {
    return;
  }

  isActive = true;
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onClickStopBtn() {
  clearInterval(intervalId);
  isActive = false;
}
