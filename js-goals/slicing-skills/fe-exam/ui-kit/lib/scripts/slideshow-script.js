let currentIndex = 1;
loadSlide(currentIndex);

function switchToSlide(slide) {
    loadSlide(currentIndex += slide);
}

function forwardToSlide(slide) {
    loadSlide(currentIndex = slide);
}

function loadSlide(slide) {
    const slides = document.querySelectorAll(selectors.selectAllSlides);

    if (slide > slides.length) {
        currentIndex = 1;
    } else if (slide < 1) {
        currentIndex = slides.length;
    }

    for (let slideElement of slides) {
        slideElement.style.display = styles.displays.none;
    }

    const slideIndicators = document.querySelectorAll(selectors.selectAllRectangles);
    for (let rectangle of slideIndicators) {
        rectangle.classList.remove(tokens.selected);
    }

    slides[currentIndex - 1].style.display = styles.displays.block;
    slideIndicators[currentIndex - 1].classList.add(tokens.selected);
}
