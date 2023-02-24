import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
   
    this.elem = document.createElement('div')
    this.elem.className = "carousel"

    this.elem.innerHTML = `
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
    `
    
    let carouselTamplate = slides.map(slide => {
      return  `
      <div class="carousel__slide" data-id="${slide.id}">
      <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
      <div class="carousel__caption">
        <span class="carousel__price">€${slide.price.toFixed(2)}</span>
        <div class="carousel__title">${slide.name}</div>
        <button type="button" class="carousel__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>
      `
    }).join('')
    
    this.elem.innerHTML += `
      <div class="carousel__inner">${carouselTamplate}</div>
    `

    let btns = this.elem.querySelectorAll('.carousel__button');
    btns.forEach(btn => {
      btn.addEventListener('click', this.onSlideBtnClick);
    });
    
  
  }

  initCarousel = () => {
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

  onSlideBtnClick = (event) => {
    const addProduct = new CustomEvent("product-add", { 
      detail: event.target.closest('[data-id]').dataset.id, 
      bubbles: true
  });

    this.elem.dispatchEvent(addProduct);
  }

  
}