import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const startBtn = document.querySelector('button[data-start]');
const daysValue = document.querySelector('span[data-days]');
const hoursValue = document.querySelector('span[data-hours]');
const minutesValue = document.querySelector('span[data-minutes]');
const secondsValue = document.querySelector('span[data-seconds]');
const input = document.querySelector('#datetime-picker');

let userSelectedDate;
let isActive = false;
let intervalId = null;
startBtn.disabled = true;


const showIziToast = () => {
  iziToast.show({
    message: 'Please choose a date in the future',
    messageColor: '#fff',
    messageSize: '16px',
    messageLineHeight: '24px',
    backgroundColor: '#EF4040',
    iconUrl: '/img/error.svg',
    imageWidth: 50,
    maxWidth: '302px',
    closeOnClick: true,
    position: 'topRight',
    progressBarColor: '#B51B1B',
  });
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    const selectedDate = selectedDates[0];
    const currentDate = new Date();

    if (selectedDate <= currentDate) {
      showIziToast();
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    };
    userSelectedDate = selectedDate;
  },
};

flatpickr('#datetime-picker', options);

const onBtnClick = () => {
  if (isActive) {
    return;
  }

  const startTime = new Date(userSelectedDate).getTime();
  isActive = true;

  intervalId = setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = startTime - currentTime;

    if (deltaTime <= 0) {
      stopTimer();
    } else {
      const time = convertMs(deltaTime);
      updateTimer(time);
      startBtn.disabled = true;
      input.disabled = true;
    }
  }, 1000);
};

startBtn.addEventListener('click', onBtnClick);

function convertMs(ms) {

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

const addLeadingZero = value => String(value).padStart(2, '0');

const stopTimer = () => {
  clearInterval(intervalId);
  isActive = false;
  input.disabled = false;
  const time = convertMs(0);
  updateTimer(time);
};

function updateTimer({ days, hours, minutes, seconds }) {
  daysValue.textContent = `${addLeadingZero(days)}`;
  hoursValue.textContent = `${addLeadingZero(hours)}`;
  minutesValue.textContent = `${addLeadingZero(minutes)}`;
  secondsValue.textContent = `${addLeadingZero(seconds)}`;
};



