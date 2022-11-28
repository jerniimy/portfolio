let frontendButton = document.getElementById("frontendBlock");
let designButton = document.getElementById("designBlock");
let design = document.getElementById('design');
let frontend = document.getElementById('frontend');

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

document.getElementById('cinema').addEventListener('mouseover', (e) => {
  document.getElementById('cinemaPoster').style.opacity = '1';
});
document.getElementById('cinema').addEventListener('mouseout', (e) => {
  document.getElementById('cinemaPoster').style.opacity = '0';
});

document.getElementById('rings').addEventListener('mouseover', (e) => {
  document.getElementById('ringsPoster').style.opacity = '1';
});
document.getElementById('rings').addEventListener('mouseout', (e) => {
  document.getElementById('ringsPoster').style.opacity = '0';
});

document.getElementById('planet').addEventListener('mouseover', (e) => {
  document.getElementById('planetPoster').style.opacity = '1';
});
document.getElementById('planet').addEventListener('mouseout', (e) => {
  document.getElementById('planetPoster').style.opacity = '0';
});

document.getElementById('cosmetics').addEventListener('mouseover', (e) => {
  document.getElementById('cosmeticsPoster').style.opacity = '1';
});
document.getElementById('cosmetics').addEventListener('mouseout', (e) => {
  document.getElementById('cosmeticsPoster').style.opacity = '0';
});

document.getElementById('work').addEventListener('mouseover', (e) => {
  document.getElementById('workBanner').style.opacity = '1';
});
document.getElementById('work').addEventListener('mouseout', (e) => {
  document.getElementById('workBanner').style.opacity = '0';
});

if (location.hash) {
  history.replaceState({}, document.title, location.href.split('#')[0]);
}
