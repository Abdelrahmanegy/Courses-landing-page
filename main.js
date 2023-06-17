const carousel = document.querySelector(".m-cards");
const cards = document.querySelector(".mentorCard")
const buttons =  document.querySelectorAll(".btn")
const cardWidth = cards.clientWidth +20;




carousel.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    scrollLeft = carousel.scrollLeft;
  });
  
  carousel.addEventListener("touchmove", (e) => {
    e.preventDefault();
    const x = e.touches[0].clientX;
    const walk = (x - startX) * 2; // 
    carousel.scrollLeft = scrollLeft - walk;
  });


buttons.forEach(btn =>{

    btn.addEventListener("click", () => {

    carousel.scrollLeft +=  btn.id === "left" ?  -cardWidth         : cardWidth;
  
    
})})






