const carouselContainer = document.querySelector(".m-cards");
const cardContainer = document.querySelector(".mentorCard");
const buttons = document.querySelectorAll(".btn");
const cardWidth = cardContainer.clientWidth + 20;
let startX = 0;
let initialScrollLeft = 0;




function handleTouchStart(e) {
    startX = e.touches[0].clientX;
    initialScrollLeft = carouselContainer.scrollLeft;
  }
  
  function handleTouchMove(e) {
    e.preventDefault();
    const x = e.touches[0].clientX;
    const swipeDistance = (x - startX) * 2;
    carouselContainer.scrollLeft = initialScrollLeft - swipeDistance;
  }
  
  
  function handleButtonClick(btn) {
    const scrollDistance = btn.id === "left" ? -cardWidth : cardWidth;
    carouselContainer.scrollLeft += scrollDistance;
  }

  
  carouselContainer.addEventListener("touchstart", handleTouchStart);
  carouselContainer.addEventListener("touchmove", handleTouchMove);
  
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      handleButtonClick(btn);
    });
  });






