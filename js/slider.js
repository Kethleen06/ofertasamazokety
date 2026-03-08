const sliders = {}

function mudarSlide(index, direcao){

const carousel = document.querySelectorAll(`#carousel-${index} img`)

if(!sliders[index]) sliders[index] = 0

carousel[sliders[index]].classList.remove("active")

sliders[index] += direcao

if(sliders[index] >= carousel.length) sliders[index] = 0

if(sliders[index] < 0) sliders[index] = carousel.length-1

carousel[sliders[index]].classList.add("active")

}