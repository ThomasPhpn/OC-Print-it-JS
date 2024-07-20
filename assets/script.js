const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let currentIndex = 0;
const baseURL = './assets/images/slideshow/';

function showSlide(index) {
	if (index >= slides.length) {
		currentIndex = 0;
	} else if (index < 0) {
		currentIndex = slides.length - 1;
	} else {
		currentIndex = index;
	}

	const imageElement = document.getElementById('banner-img');
	const taglineElement = document.getElementById('tagline');
	imageElement.src = baseURL + slides[currentIndex].image;
	taglineElement.innerHTML = slides[currentIndex].tagLine;

	updateDots();
}

function nextSlide() {
	showSlide(currentIndex + 1);
}

function prevSlide() {
	showSlide(currentIndex - 1);
}

function updateDots() {
	const dots = document.querySelectorAll('.dot');
	dots.forEach((dot, index) => {
		dot.classList.remove('dot_selected');
		if (index === currentIndex) {
			dot.classList.add('dot_selected');
		}
	});
}

document.getElementById('arrow-right').addEventListener('click', nextSlide);
document.getElementById('arrow-left').addEventListener('click', prevSlide);

// Initialiser la première diapositive
showSlide(currentIndex);