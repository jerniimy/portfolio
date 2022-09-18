let frontendButton = document.getElementById("frontendBlock");
let designButton = document.getElementById("designBlock");
let design = document.getElementById('design');
let frontend = document.getElementById('frontend');
let cinemaTitle = document.getElementById('cinema');
let cinemaPoster = document.getElementById('cinemaPoster');
let ringsTitle = document.getElementsById('rings');
let ringsPoster = document.getElementById('ringsPoster');
let planetTitle = document.getElementsById('planet');
let planetPoster = document.getElementById('planetPoster');
let cosmeticsTitle = document.getElementById('cosmetics');
let cosmeticsPoster = document.getElementById('cosmeticsPoster');

function cinemaHover() {
  cinemaPoster.classList.add("activePoster");
}
function cinemaStop() {
  cinemaPoster.classList.remove("activePoster");
}
function ringsHover() {
  ringsPoster.classList.add("activePoster");
}
function ringsStop() {
  ringsPoster.classList.remove("activePoster");
}
function planetHover() {
  planetPoster.classList.add("activePoster");
}
function planetStop() {
  planetPoster.classList.remove("activePoster");
}
function cosmeticsHover() {
  cosmeticsPoster.classList.add("activePoster");
}
function cosmeticsStop() {
  cosmeticsPoster.classList.remove("activePoster");
}
function switchToFrontend() {
  designButton.classList.remove("active");
  frontendButton.classList.add("active");
  design.classList.remove("active");
  frontend.classList.add("active");
}
function switchToDesign() {
  designButton.classList.add("active");
  frontendButton.classList.remove("active");
  design.classList.add("active");
  frontend.classList.remove("active");
}
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  });
}
