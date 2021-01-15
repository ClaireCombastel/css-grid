const itemsSlide = document.querySelectorAll('.container-slides img');
const nbSlides = itemsSlide.length;
const next = document.querySelector('.right');
const previous = document.querySelector('.left');
let count = 0;

next.addEventListener ('click', nextSlide);

function nextSlide(){
    itemsSlide[count].classList.remove('active');

    if(count < nbSlides -1) {
        count++;
    } else {
        count = 0;
    }

    itemsSlide[count].classList.add('active');
}

previous.addEventListener('click', previousSlide);

function previousSlide(){
    itemsSlide[count].classList.remove('active');

    if(count > 0) {
        count --;
    } else {
        count = nbSlides - 1;
    }

    itemsSlide[count].classList.add('active');
}