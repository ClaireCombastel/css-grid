const sliderPrestations = document.querySelector(".slider-prestations");
const srcCurrentSlider = document.querySelector(".img-visible-slider");
const allPicsSlider = Array.from(document.querySelectorAll(".grid-item img"));
const rightSlider = document.querySelector(".btn-right");
const leftSlider = document.querySelector(".btn-left");
const closeSlide = document.querySelector(".btn-close-slider");

let currentPhoto;
let currentIndex;

allPicsSlider.forEach(item => {

    item.addEventListener("click", (e) => {
        sliderPrestations.style.display = "block";
        srcCurrentSlider.src = e.target.src;
        currentPhoto = e.target;
        currentIndex = allPicsSlider.indexOf(currentPhoto);
    })
})

rightSlider.addEventListener("click", () => {

    if (currentIndex === 8) {
        currentIndex = 0;
        srcCurrentSlider.src = allPicsSlider[currentIndex].src;
        currentPhoto = allPicsSlider[currentIndex];
        return;
    }

    srcCurrentSlider.src = allPicsSlider[currentIndex + 1].src;
    currentPhoto = allPicsSlider[currentIndex + 1];
    currentIndex = allPicsSlider.indexOf(currentPhoto);
    console.log(currentIndex);
})

leftSlider.addEventListener("click", () => {

    if (currentIndex === 0) {
        currentIndex = 8;
        srcCurrentSlider.src = allPicsSlider[currentIndex].src;
        currentPhoto = allPicsSlider[currentIndex];
        console.log(currentIndex);
        return;
    }

    srcCurrentSlider.src = allPicsSlider[currentIndex - 1].src;
    currentPhoto = allPicsSlider[currentIndex - 1];
    currentIndex = allPicsSlider.indexOf(currentPhoto);
    console.log(currentIndex);
})

closeSlide.addEventListener("click", () => {
    sliderPrestations.style.display = "none";
})