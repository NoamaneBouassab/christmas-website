const christmasDate = new Date("2026-12-25T00:00:00")
const countdownNumbers  = document.querySelectorAll(".countdown-box span:first-child");

function updateCountdown() {


const now = new Date()
const difference = christmasDate - now

const days = Math.floor(difference / (1000*60*60*24));
const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
const minutes = Math.floor((difference /(1000*60)) % 60);
const seconds = Math.floor((difference / 1000) % 60)



countdownNumbers[0].textContent = days
countdownNumbers[1].textContent = hours
countdownNumbers[2].textContent = minutes
countdownNumbers[3].textContent = seconds

}
updateCountdown();
setInterval(updateCountdown,1000)