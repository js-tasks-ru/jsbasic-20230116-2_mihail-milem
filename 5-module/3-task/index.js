let activeSlide = 1
let nextSlide = 1
const carouselInner = document.querySelector('.carousel__inner');
const carouselArrowRight = document.querySelector('.carousel__arrow_right');
const carouselArrowLeft = document.querySelector('.carousel__arrow_left');
const carouselWidth = carouselInner.offsetWidth;

carouselArrowRight.addEventListener('click', () => {
  initCarousel('right')
});

carouselArrowLeft.addEventListener('click', () => {
  initCarousel('left')
});

function initCarousel(direction) {
  
  if(direction === 'right'){
    nextSlide -= carouselInner.offsetWidth
    activeSlide++
  }

  if(direction === 'left'){
    nextSlide += carouselInner.offsetWidth
    activeSlide--
  }
  
  (activeSlide === 4) ? carouselArrowRight.style.display = 'none' : carouselArrowRight.style.display = '';
  (activeSlide === 1) ? carouselArrowLeft.style.display = 'none' : carouselArrowLeft.style.display = '';

  carouselInner.style.transform = `translateX(${nextSlide}px)`
  
}