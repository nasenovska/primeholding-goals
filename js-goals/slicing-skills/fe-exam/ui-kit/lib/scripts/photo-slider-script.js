let beginIndex = 0;
let endIndex = 2;
loadPhotoSlides(beginIndex);

function switchPhotoSlides(slide) {
    beginIndex += slide;
    endIndex += slide;
    loadPhotoSlides();
}

function loadPhotoSlides() {
    const slides = document.querySelectorAll('.image-holder');

    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');
    if (beginIndex === 0) {
        leftArrow.classList.add('not-clickable');
    } else if (endIndex === slides.length - 1) {
        rightArrow.classList.add('not-clickable');
    } else {
        leftArrow.classList.remove('not-clickable');
        rightArrow.classList.remove('not-clickable');
    }

    for (let slideElement of slides) {
        slideElement.style.display = 'none';
    }

    for (let i = beginIndex; i <= endIndex; ++i) {
        slides[i].style.display = 'block';
    }
}
