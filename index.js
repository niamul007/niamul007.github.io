let slideIndex = 0;
let interval;
function showSlides() {
    const slides = document.querySelectorAll(".slider img");
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach((slide) => (slide.style.display = "none"))
    slides[slideIndex].style.display = "block";
}
function nextSlide() {
    slideIndex++;
    showSlides();
}

function prevSlide() {
    slideIndex--;
    showSlides();
}
//start slider 
function startSlider() {
    interval = setInterval(nextSlide, 4000);
}
//stop slider
function stopSlider() {
    clearInterval(interval);
}
//for btns
let btn1 = document.querySelector(".pre");
let btn2 = document.querySelector(".next");
btn1.addEventListener("click", () => {
    nextSlide();
    stopSlider();
})
btn2.addEventListener("click", () => {
    prevSlide();
    stopSlider();
})
startSlider();
//mouse oyt
let menus = document.querySelectorAll(".menu");

function mouseOutHandler() {
    this.classList.add("mouseOut");
}


menus.forEach(menu=>{
    menu.addEventListener("mouseout",mouseOutHandler);
})

let menu = document.querySelector(".menuBtn");
menu.addEventListener("click",()=>{
  let sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
  menu.style.display="none";
})
// function showSidebar() {
//   let sidebar = document.querySelector(".sidebar");
//   sidebar.style.display = "flex";
// }
let cross = document.querySelector(".cross");
cross.addEventListener("click",()=>{
  let sidebar = document.querySelector(".sidebar");

  menu.style.display="flex";
  sidebar.style.display="none";

})
