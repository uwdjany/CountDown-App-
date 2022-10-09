const daysel = document.getElementById("days");
const hoursel = document.getElementById("hours");
const minsel = document.getElementById("mins");
const secondsel = document.getElementById("seconds");

const newYears = "1 Jan 2023";

function countdown() {
  const newYearDate = new Date(newYears);
  const currentDate = new Date();
  const totalSeconds = (newYearDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysel.innerHTML = days; 
  hoursel.innerHTML = formatTime(hours);
  minsel.innerHTML = formatTime(mins);
  secondsel.innerHTML = formatTime(seconds);

  // console.log(days, hours, minutes ,seconds)
  // console.log(newYearDate - currentDate)
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown, 1000);
