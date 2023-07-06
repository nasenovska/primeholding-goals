class AbstractSlider {
    constructor(slidesSelector,
                hasArrows,
                leftArrows,
                rightArrows,
                arrowToken,
                beginIndex,
                endIndex) {
        if (this.constructor === AbstractSlider) {
            throw new Error('Abstract class cannot be instantiated!')
        }

        this.slidesSelector = slidesSelector;
        this.hasArrows = hasArrows;
        this.leftArrows = leftArrows;
        this.rightArrows = rightArrows;
        this.arrowToken = arrowToken;
        this.beginIndex = beginIndex;
        this.endIndex = endIndex;
        this.slides = document.querySelectorAll(this.slidesSelector);
    }

    loadSlides() {
        if (this.hasArrows) {
            this.loadArrows();
        } else {
            this.configIndexes();
        }

        this.hideSlides();
        this.showVisibleSlides();
    }

    loadArrows() {
        this.addClassesToArrow();
    }

    addClassesToArrow() {
        if (this.beginIndex === 0) {
            for (const arrow of this.leftArrows){
                arrow.classList.add(this.arrowToken);
            }
        } else if (this.endIndex === this.slides.length - 1) {
            for (const arrow of this.rightArrows){
                arrow.classList.add(this.arrowToken);
            }
        } else {
            for (const arrow of this.leftArrows){
                arrow.classList.remove(this.arrowToken);
            }

            for (const arrow of this.rightArrows){
                arrow.classList.remove(this.arrowToken);
            }
        }
    }

    hideSlides() {
        for (let slide of this.slides) {
            slide.style.display = styles.displays.none;
        }
    }

    switchToSlide(slide) {
        this.beginIndex += slide;
        this.endIndex += slide;
        this.loadSlides();
    }

    showVisibleSlides() {
        for (let i = this.beginIndex; i <= this.endIndex; ++i) {
            if (this.endIndex < this.slides.length) {
                this.slides[i].style.display = styles.displays.block;
            }
        }
    }

    configIndexes() {
    }
}
