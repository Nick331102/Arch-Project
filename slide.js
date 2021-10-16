const carouselSlide = document.querySelector(".carousel__slide")
const carouselImage = document.querySelectorAll(".carousel__slide img")

// buttons
const prevButton = document.querySelector(".prev__button")
const nextButton = document.querySelector(".next__button")

//counter 
let counter = 1;

const size = carouselImage[0].clientWidth;
carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)"

// button events 
nextButton.addEventListener("click", () => {
    carouselSlide.style.transition = "transform 0.4s ease-in-out"
    counter++;
    console.log(counter)
})