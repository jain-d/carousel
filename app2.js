let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let jump = document.querySelector('.slide').offsetWidth;
let secondJump = document.querySelector('.secondSlide').offsetWidth;

let nwidth = document.querySelector(".fetch").offsetWidth;

let slides = Array.from(document.querySelectorAll('.thirdSlide'));

    slides.forEach(element => {
        element.style.width = nwidth + 'px';
       
    });
    


if(next) {
    next.addEventListener('click', function() {
        document.querySelector('.slider').scrollLeft += jump;
        document.querySelector('.secondSlider').scrollLeft += secondJump;
        document.querySelector('.thirdSlider').scrollLeft += nwidth;
        console.log(nwidth);
      });
}

if(prev) {
    prev.addEventListener('click', function() {
        document.querySelector('.slider').scrollLeft -= jump;
        document.querySelector('.secondSlider').scrollLeft -= secondJump;
        document.querySelector('.thirdSlider').scrollLeft -= nwidth;
        console.log(nwidth);
      });
}
