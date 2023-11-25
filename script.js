
function updateClock() {
  currentTime = new Date();
  hours = currentTime.getHours();
  minutes = currentTime.getMinutes();
  seconds = currentTime.getSeconds().toString().padStart(2, '0');

  console.log(`Current time: ${hours}:${minutes}:${seconds}`);

  totaltime = `${hours}:${minutes}:${seconds}`;
  time.textContent = totaltime;
}
setInterval(updateClock, 1000);


let i = 0

function cng_color() {
  i = Math.floor(Math.random() * 255)


  mycolor = `rgb(${i * 20 % 255}, ${i * 30 % 255}, ${i * 30 % 255})`
  time.style.color = mycolor

}
setInterval(cng_color, 300);
