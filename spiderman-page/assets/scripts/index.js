const carousel = document.querySelector(".s-cards-carousel");

function handleMouseEnterCard() {
	document.body.id = `${this.id}--hovered`;
}

function handleMouseLeaveCard() {
	document.body.id = '';
}

function addEventListenerToCards() {
	const cardsElement = document.getElementsByClassName("s-card");
	for (const card of cardsElement) {
		card.addEventListener('mouseenter', handleMouseEnterCard);
		card.addEventListener('mouseleave', handleMouseLeaveCard);
	}
}

function onSelectController(element) {
	updateActiveController(element);
	const transform = carousel.style.transform;
	const newRotateYDeg = -120 * (element.id - 1);
	carousel.style.transform = transform.replace(/rotateY\(-?\d+deg\)/, `rotateY(${newRotateYDeg}deg)`);
}

function updateActiveController(element) {
	const activeController = document.querySelector(".s-controller__button--active");
	activeController.classList.remove("s-controller__button--active");
	element.classList.add("s-controller__button--active");
}


document.addEventListener("DOMContentLoaded", addEventListenerToCards, false);