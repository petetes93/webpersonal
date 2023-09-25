document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide"); //todas las imagenes
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
               slide.style.opacity = "1"; //Cambiar la opacidad del elemento
            } else {
                slide.style.opacity = "0"; // cambiar imagen que esta detrás
            }
        });
    }

    function changePosition(change){
        const currentElement = Number (document.querySelector('.slider'))

        value = currentElement;
        value += change;

        console.log(sliders.length)
         if (value === 0 || valuesliders.length+1){
            value = value === 0 ? sliders.length : 1;
        };
    }
    

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        console.log(currentSlide);
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        console.log(currentSlide);
        showSlide(currentSlide);
    }
  
    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);
    });
