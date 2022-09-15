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
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
