function initCarousel() {
    const carouselInner = document.querySelector('.carousel__inner');
    const carouselArrowRight = document.querySelector('.carousel__arrow_right');
    const carouselArrowLeft = document.querySelector('.carousel__arrow_left');
    const slideWidth = carouselInner.offsetWidth;
    let activeSlide = 1;
    let nextWithSlide = 0;

    function handleClick(direction) {
      if(direction === 'right'){
        nextWithSlide -= slideWidth
        activeSlide++
      }

      if(direction === 'left'){
        nextWithSlide += slideWidth
        activeSlide--
      }
  
      (activeSlide === carouselInner.children.length) ? carouselArrowRight.style.display = 'none' : carouselArrowRight.style.display = '';
      (activeSlide === 1) ? carouselArrowLeft.style.display = 'none' : carouselArrowLeft.style.display = '';

      carouselInner.style.transform = `translateX(${nextWithSlide}px)`;
    }

    if(activeSlide) carouselArrowLeft.style.display = 'none';

    carouselArrowRight.addEventListener('click', () => {
      handleClick('right')
    });
  
    carouselArrowLeft.addEventListener('click', () => {
      handleClick('left')
    });

}