class SwipeCarousel {
    constructor(carouselSelector, cardSelector, buttonSelectors) {
      this.carousel = document.querySelector(carouselSelector);
      this.cards = document.querySelector(cardSelector);
      this.buttons = document.querySelectorAll(buttonSelectors);
      this.cardWidth = this.cards.clientWidth + 20;
      this.startX = 0;
      this.initialScrollLeft = 0;
  
      this.handleTouchStart = this.handleTouchStart.bind(this);
      this.handleTouchMove = this.handleTouchMove.bind(this);
      this.handleButtonClick = this.handleButtonClick.bind(this);
  
      this.init();
    }
  
    init() {
      this.carousel.addEventListener("touchstart", this.handleTouchStart);
      this.carousel.addEventListener("touchmove", this.handleTouchMove);
      this.buttons.forEach((btn) => {
        btn.addEventListener("click", () => this.handleButtonClick(btn));
      });
    }
  
    handleTouchStart(e) {
      this.startX = e.touches[0].clientX;
      this.initialScrollLeft = this.carousel.scrollLeft;
    }
  
    handleTouchMove(e) {
      e.preventDefault();
      const x = e.touches[0].clientX;
      const swipeDistance = (x - this.startX) * 2;
      this.carousel.scrollLeft = this.initialScrollLeft - swipeDistance;
    }
  
    handleButtonClick(btn) {
      const scrollDistance = btn.id === "left" ? -this.cardWidth : this.cardWidth;
      this.carousel.scrollLeft += scrollDistance;
    }
  }

  
//   const mySwipeCarousel = new SwipeCarousel(".m-cards", ".mentorCard", ".btn");  