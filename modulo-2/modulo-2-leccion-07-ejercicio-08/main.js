const alarmButton = document.querySelectorAll('.alarm');
const background = document.querySelector('.body');

function changeBackgroundColor() {
  background.classList.toggle('background-change');
}

function createAlarmButtonListeners() {
  for (let i = 0; i < alarmButton.length; i++) {
    alarmButton[i].addEventListener('click', changeBackgroundColor);
  }
}

createAlarmButtonListeners();
