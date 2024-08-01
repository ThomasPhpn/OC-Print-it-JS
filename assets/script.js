const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let bannerImage = document.getElementById("banner-img");
let tagline = document.getElementById("tagline");
const rightArrow = document.getElementById("arrow-right");
const leftArrow = document.getElementById("arrow-left");
let dots = document.querySelectorAll(".dot");
const url = "./assets/images/slideshow/";
let currentIndex = 0;

function updateSlide(index) {
  bannerImage.src = url + slides[index].image;
  tagline.innerHTML = slides[index].tagLine;
  dots.forEach((dot, i) => {
    dot.classList.toggle("dot_selected", i === index);
  });
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  updateSlide(currentIndex);
}

function previousSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  updateSlide(currentIndex);
}

rightArrow.addEventListener("click", nextSlide);
leftArrow.addEventListener("click", previousSlide);

updateSlide(currentIndex);
