class PhotoSliderBehavior extends AbstractSlider {
    constructor() {
        super(selectors.selectAllImageHolder,
            true,
            [document.getElementById(selectors.selectLeftArrowId)],
            [document.getElementById(selectors.selectRightArrowId)],
            tokens.notClickable,
            0,
            2);

        super.loadSlides();
    }
}
