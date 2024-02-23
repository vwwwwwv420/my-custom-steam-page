const navContainer = document.querySelector(".nav-container");
const followers = document.querySelectorAll(".follow")
let timeout;


followers.forEach((follower, index) => {
    follower.addEventListener("mouseover", () => {
        clearTimeout(timeout);
        if(!navContainer.classList.contains("nav-container--active"))
        navContainer.classList.add("nav-container--active")
    navContainer.classList.add("nav-container--fix")
    navContainer.classList.add("nav-container--move")
    })
    navContainer.addEventListener("mouseleave", () => {
        clearTimeout(timeout);
        navContainer.classList.remove("nav-container--active")
        navContainer.classList.remove("nav-container--move")
        timeout = setTimeout(() => {
            navContainer.classList.remove("nav-container--fix")
        }, 400)
    })
})
