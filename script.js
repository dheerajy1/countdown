const timeleft = document.getElementById("time-left");

const birthday = new Date("11/25/2022");

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24; // milliseconds
let timerId;
function countdown() {
  const today = new Date();
  const timespan = birthday - today;
  if (timespan <= -day) {
    timeleft.innerHTML = "Hope you had a great day!";
    clearInterval(timerId);
    return;
  }
  if (timespan <= 0) {
    timeleft.innerHTML = " Happy Birthday";
    clearInterval(timerId);
    return;
  }
}

timerId = setInterval(countdown, second);
