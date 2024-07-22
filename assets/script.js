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

let bannerImage = document.getElementById("banner-img"); // recuperer l'image
let tagline = document.getElementById("tagline"); // récupérer le p
const flecheDroite = document.getElementById("arrow-right"); // récupérer la flèche droite
const flecheGauche = document.getElementById("arrow-left"); // récupérer la flèche gauche
let dots = document.querySelectorAll(".dot"); // récupérer tous les points
const debutUrl = "/assets/images/slideshow/"; // définir le début de l'URL

let currentIndex = 0; // initialiser un index

flecheDroite.addEventListener("click", function () {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  bannerImage.src = debutUrl + slides[currentIndex].image;
  tagline.innerHTML = slides[currentIndex].tagLine;
  dots.forEach((dot) => {
    dot.classList.remove("dot_selected");
  });
  dots[currentIndex].classList.add("dot_selected");
});

flecheGauche.addEventListener("click", function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = 3;
  }
  bannerImage.src = debutUrl + slides[currentIndex].image;
  tagline.innerHTML = slides[currentIndex].tagLine;
  dots.forEach((dot) => {
    dot.classList.remove("dot_selected");
  });
  dots[currentIndex].classList.add("dot_selected");
});
