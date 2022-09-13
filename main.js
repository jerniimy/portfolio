let frontendButton = document.getElementById("frontendBlock");
let designButton = document.getElementById("designBlock");
function switchToFrontend() {
  designButton.classList.remove("active");
  frontendButton.classList.add("active");
}
function switchToDesign() {
  designButton.classList.add("active");
  frontendButton.classList.remove("active");
}
