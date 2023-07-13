class SlideshowSliderBehavior extends AbstractSlider {
    constructor() {
        super(selectors.selectAllSlides,
            false,
            undefined,
            undefined,
            undefined,
            -1,
            -1);

        this.currentIndex = 1;

        super.loadSlides();
    }

    configIndexes() {
        if (this.currentIndex > this.slides.length) {
            this.currentIndex = 1;
        } else if (this.currentIndex < 1) {
            this.currentIndex = this.slides.length;
        }
    }

    showVisibleSlides() {
        const slideIndicators = document.querySelectorAll(selectors.selectAllRectangles);
        for (let rectangle of slideIndicators) {
            rectangle.classList.remove(tokens.selected);
        }

        this.slides[this.currentIndex - 1].style.display = styles.displays.block;
        slideIndicators[this.currentIndex - 1].classList.add(tokens.selected);
    }

    switchToSlide(slide) {
        this.currentIndex += slide;
        super.loadSlides();
    }

    forwardToSlide(slide) {
        this.currentIndex = slide;
        super.loadSlides();
    }
}
