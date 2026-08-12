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

// _____________________________

const wishesContainer = document.querySelector(".wishes-container");
const wishes = [...wishesContainer.children];

let positions = [];
let totalWidth = 0;

let isPaused = false;


// Pause when the mouse enters the wishes container
wishesContainer.addEventListener("mouseenter", () => {
    isPaused = true;
});


// Resume when the mouse leaves the wishes container
wishesContainer.addEventListener("mouseleave", () => {
    isPaused = false;
});


wishes.forEach((wish) => {
    positions.push(wish.offsetLeft);
    totalWidth += wish.offsetWidth;
});

const gap = 20;
totalWidth += gap * (wishes.length - 1);


function moveWishes() {

    // Stop moving while the mouse is over the wishes
    if (isPaused) {
        requestAnimationFrame(moveWishes);
        return;
    }


    wishes.forEach((wish, index) => {

        positions[index] -= 1;


        // When the wish leaves the left side,
        // move it to the right side while keeping the same order.
        if (positions[index] + wish.offsetWidth < 0) {

            const previousIndex =
                (index - 1 + wishes.length) % wishes.length;

            positions[index] =
                positions[previousIndex] +
                wishes[previousIndex].offsetWidth +
                gap;
        }


        wish.style.transform =
            `translateX(${positions[index] - wish.offsetLeft}px)`;
    });


    requestAnimationFrame(moveWishes);
}


moveWishes();