const timeleft = document.getElementById("time-left");

const birthday = new Date("12/25/2022");
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24; // milliseconds
let timerId;
function countdown() {
  const today = new Date();
  const timespan = birthday - today;
  if(timespan<=-day){
    timeleft.innerHTML = "Hope you had a nice Birthday!";
    clearInterval(timerId);
    return;
  }
  else if (timespan <= 0) {
    timeleft.innerHTML = " Happy Birthday";
    clearInterval(timerId);
    return;
  }
const days = Math.floor(timespan/day);
const hours = Math.floor((timespan%day)/hour);
const minutes =Math.floor((timespan%hour)/minute);
const seconds = Math.floor((timespan%minute)/second);
timeleft.innerHTML= days+'days '+hours+'hours '+minutes+'minutes '+seconds+'seconds';
}

timerId = setInterval(countdown, second);
