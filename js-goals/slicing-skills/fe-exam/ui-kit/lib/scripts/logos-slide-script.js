let logoInitialIndex = 0;
let logoEndIndex = 4;
loadLogoSlides(logoInitialIndex);

function switchLogoSlides(slide) {
    logoInitialIndex += slide;
    logoEndIndex += slide;
    loadLogoSlides();
}

function loadLogoSlides() {
    const slides = document.querySelectorAll('.logo-image-holder');

    const leftArrow = document.getElementById('slider-icon-left');
    const leftArrowSwipe = document.getElementById('logo-swipe-icon-left');
    const rightArrow = document.getElementById('slider-icon-right');
    const rightArrowSwipe = document.getElementById('logo-swipe-icon-right');
    if (logoInitialIndex === 0) {
        leftArrowSwipe.classList.add('not-active');
        leftArrow.classList.add('not-active');
    } else if (logoEndIndex === slides.length - 1) {
        rightArrowSwipe.classList.add('not-active');
        rightArrow.classList.add('not-active');
    } else {
        leftArrowSwipe.classList.remove('not-active');
        rightArrowSwipe.classList.remove('not-active');
        leftArrow.classList.remove('not-active');
        rightArrow.classList.remove('not-active');
    }

    for (let slideElement of slides) {
        slideElement.style.display = 'none';
    }

    for (let i = logoInitialIndex; i <= logoEndIndex; ++i) {
        slides[i].style.display = 'block';
    }
}
