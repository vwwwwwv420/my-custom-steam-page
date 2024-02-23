const backgrounds = document.querySelectorAll(".game-background")
let timeoutID = 1, box, intervalID, leaveTimeout;

const body = document.querySelector("body");
const boxesContainer = document.querySelector(".boxes-container");

body.appendChild(boxesContainer);
// var ssMain = 1;
// var cssRules = (document.all) ? 'rules': 'cssRules';

// function changeCSSStyle(selector, cssProp, cssVal) {

//   for (i=0, len=document.styleSheets[ssMain][cssRules].length; i<len; i++) {

//     if (document.styleSheets[ssMain][cssRules][i].selectorText === selector) {
//       document.styleSheets[ssMain][cssRules][i].style[cssProp] = cssVal;
//       return;
//     }
//   }
// }

// document.documentElement.style.setProperty('--text', themes[themes[theme.value][9]]);

const createBox = (message = "") => {
    let box = document.createElement("div")
    box.classList.add("cursor-box");
    box.innerText = message;
    return box;
}

const createZoom = (src) => {
    const cover = document.createElement("div");
    cover.classList.add("dark-overlay");

    const window = document.createElement("div");
    window.classList.add("zoom-window")

    const image = document.createElement("img")

    image.setAttribute("src", src);

    const goBack = document.createElement("div")
    goBack.classList.add("go-back");
    goBack.innerText = "✖";
    goBack.addEventListener("click", () => {
        cover.remove();
        clearInterval(intervalID);
    })

    window.append(goBack, image)
    cover.appendChild(window);

    return cover;
}

box = createBox("Press to show the full picture")
backgrounds.forEach((background) => {
    background.addEventListener("mouseenter", () => {
        if(boxesContainer.classList.contains("hidden"))
            boxesContainer.classList.remove("hidden");
    })
    background.addEventListener("mousemove", (e) => {
        box.remove();
        box = createBox("Press to show the full picture");
        clearTimeout(timeoutID);
        box.style.left = (e.clientX).toString() + "px";
        box.style.top = (e.clientY).toString() + "px";
        timeoutID = setTimeout(() => {
            boxesContainer.appendChild(box)
            clearTimeout(timeoutID);
        }, 1000)
    })
    background.addEventListener("click", () => {
        intervalID = setInterval(() => {
            clearTimeout(timeoutID)
            if(box != null) box.remove();
        }, 50);
        if(box != null) box.remove();
        clearTimeout(timeoutID);
        let zoom = createZoom(background.getAttribute("src"))
        body.appendChild(zoom);
        clearTimeout(timeout);
    })
    background.addEventListener("mouseleave", () => {
        if(boxesContainer.classList.contains("hidden")) 
            boxesContainer.classList.remove("hidden");
        boxesContainer.classList.add("hidden");
        if(box != null) box.remove();
        clearTimeout(timeoutID);
    })
})
