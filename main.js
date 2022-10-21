import "./style.css";

const dayEl = document.querySelector("[data-day]");
const hourEl = document.querySelector("[data-hour]");
const minuteEl = document.querySelector("[data-minute]");
const secondEl = document.querySelector("[data-second]");

function updateElapsedTime() {
  const start = new Date();
  const end = new Date("12/20/22");
  const elapsed = end - start;

  const newDay = Math.round(elapsed / 1000 / 60 / 60 / 24);
  const newhour = 24 - new Date().getHours();
  const newMinute = 60 - new Date().getMinutes();
  const newSecond = 60 - new Date().getSeconds();

  if (newDay < 10) {
    dayEl.innerText = "0" + newDay;
  } else {
    dayEl.innerText = newDay;
  }

  if (newhour < 10) {
    hourEl.innerText = ": 0" + newhour;
  } else {
    hourEl.innerText = ": " + newhour;
  }

  if (newMinute < 10) {
    minuteEl.innerText = ": 0" + newMinute;
  } else {
    minuteEl.innerText = ": " + newMinute;
  }

  if (newSecond < 10) {
    secondEl.innerText = ": 0" + newSecond;
  } else {
    secondEl.innerText = ": " + newSecond;
  }

  setTimeout(() => {
    updateElapsedTime();
  }, 1000);
}

updateElapsedTime();
