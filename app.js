let currentImgIndex = 0;
let previousImgIndex = 0;

const images = document.getElementsByClassName("me-img");
console.log(images);
function cycle(nextToPrevious) {
    previousImgIndex = currentImgIndex
    currentImgIndex = currentImgIndex + nextToPrevious
    images[previousImgIndex].style.display = "none";
    if (currentImgIndex >= images.length) {
        currentImgIndex = 0;
    } else if (currentImgIndex < 0) {
        currentImgIndex = images.length + nextToPrevious;
    }
    images[currentImgIndex].style.display = "block";
}

const prev = document.querySelector("#prev");
prev.addEventListener("click", () => {cycle(-1)});

const next = document.querySelector("#next");
next.addEventListener("click", () => cycle(1));



const hover = (id) => {
    const element = document.getElementById (id)
    element.style.backgroundColor="#005b96"
}

const leave = (id) => {
    const element = document.getElementById (id)
    element.style.backgroundColor="white"
}
