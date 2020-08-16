const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton =  document.querySelector('.carousel-button-right');
const prevButton = document.querySelector('.carousel-button-left');
const dotNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotNav.children);

const  slideWidth = slides[0].getBoundingClientRect().width;

//arrange slides next to each other
//slides[0].style.left =  slideWidth * 0 + 'px';
//slides[1].style.left = slideWidth * 1 + 'px';
//slides[2].style.left = slideWidth * 2 + 'px';
//slides[3].style.left = slideWidth * 3 + 'px';

const setSlidePosition = (slide, index) => {
	slide.style.left= slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
	track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
	currentSlide.classList.remove('current-slide');
	targetSlide.classList.add('current-slide');
};

const updateDots = (currentDot, targetDot) => {
	currentDot.classList.remove('current-slide');
	targetDot.classList.add('current-slide');
};

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
		if (targetIndex === 0) {
		prevButton.classList.add('is-hidden');
		nextButton.classList.remove('is-hidden');
	} else if (targetIndex === slides.length -1) {
		prevButton.classList.remove('is-hidden');
		nextButton.classList.add('is-hidden');		
	} else {
		prevButton.classList.remove('is-hidden');
		nextButton.classList.remove('is-hidden');
	}
};

//clicking left moves left
prevButton.addEventListener('click', e => { 
	const currentSlide = track.querySelector('.current-slide');
	const prevSlide = currentSlide.previousElementSibling;
	const currentDot = dotNav.querySelector('.current-slide');
	const prevDot = currentDot.previousElementSibling;
	const prevIndex = slides.findIndex(slide => slide === prevSlide);
	//move to the  prev slide
	moveToSlide(track, currentSlide, prevSlide);
	
	updateDots(currentDot, prevDot);
	
	hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

//clicking right moves right
nextButton.addEventListener('click', e => { 
	const currentSlide = track.querySelector('.current-slide');
	const nextSlide = currentSlide.nextElementSibling;
	const currentDot = dotNav.querySelector('.current-slide');
	const nextDot = currentDot.nextElementSibling;
	const nextIndex = slides.findIndex(slide => slide === nextSlide);
	//move to the  next slide
	moveToSlide(track, currentSlide, nextSlide);
	
	updateDots(currentDot, nextDot);
	
	hideShowArrows(slides, prevButton, nextButton, nextIndex);
});

//clicking nav indicators moves to that slide

dotNav.addEventListener( 'click', e => {
	//which indicator has been clicked
	const targetDot = e.target.closest('button');
	
	if (!targetDot) return;
	
	const currentSlide = track.querySelector('.current-slide');
	const currentDot = dotNav.querySelector('.current-slide');
	const targetIndex = dots.findIndex(dot => dot === targetDot);
	const targetSlide = slides[targetIndex];
	
	moveToSlide(track, currentSlide, targetSlide);
	
	updateDots(currentDot, targetDot);
	
	hideShowArrows(slides, prevButton, nextButton, targetIndex);
});







