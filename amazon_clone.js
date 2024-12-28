
const slides = document.querySelectorAll(".image1");
let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goprev = () => {
    if (counter > 0) {
        counter--;
        slideImages();
    }
}

const gonext = () => {
    if (counter < slides.length - 1) {
        counter++;
        slideImages();
    }
}

const slideImages = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}
