const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  start: document.querySelector('button[data-action=start]'),
  stop: document.querySelector('button[data-action=stop]'),
  body: document.querySelector('body'),
};

let intervalValid;

const changeColor = () => {
  const backgroundColor = randomIntegerFromInterval(0, colors.length - 1);
  refs.body.bgColor = colors[backgroundColor];
};
const clickBtnStart = () => {
  refs.start.disabled = true;
  intervalValid = setInterval(changeColor, 1000);
};

const clickBtnStop = () => {
  clearInterval(intervalValid);
  refs.start.disabled = false;
};

refs.start.addEventListener('click', clickBtnStart);
refs.stop.addEventListener('click', clickBtnStop);
