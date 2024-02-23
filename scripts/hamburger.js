const hamburger = document.querySelector(".hamburger-icon");
const hamburgerContent = document.querySelector(".hamburger-content")
const hideIt = document.querySelector(".hideit");


hamburger.addEventListener("click", () => {
    hamburgerContent.classList.toggle("hamburger-content--active");
})

hideIt.addEventListener("click", ()  => {
    hamburgerContent.classList.toggle("hamburger-content--active");
})
