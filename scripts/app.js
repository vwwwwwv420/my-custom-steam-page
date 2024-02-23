const dropdown = document.querySelectorAll(".sidebar-dropdown-container")

dropdown.forEach((item) => {
    const title = item.querySelector(".sidebar-header")
    const list = item.querySelector(".sidebar-dropdown")

    title.addEventListener("click", () => {
        list.classList.toggle("hidden");
    })
})
