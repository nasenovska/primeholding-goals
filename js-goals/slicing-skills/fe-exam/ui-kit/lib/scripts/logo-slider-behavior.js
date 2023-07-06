class LogoSliderBehavior extends AbstractSlider {
    constructor() {
        super(selectors.selectAllLogoSlides,
            true,
            [document.getElementById(selectors.selectSliderIconLeftId),
                document.getElementById(selectors.selectLogoSwipeIconLeftId)],
            [document.getElementById(selectors.selectSliderIconRightId),
                document.getElementById(selectors.selectLogoSwipeIconRightId)],
            tokens.notActive,
            0,
            4);

        super.loadSlides();
    }
}
