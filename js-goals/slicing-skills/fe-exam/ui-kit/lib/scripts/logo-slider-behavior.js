class LogoSliderBehavior extends AbstractSlider {
    constructor() {
        super(selectors.selectAllLogoSlides,
            true,
            isMobileView()
                ? [document.getElementById(selectors.selectLogoSwipeIconLeftId)]
                : [document.getElementById(selectors.selectSliderIconLeftId),
                    document.getElementById(selectors.selectLogoSwipeIconLeftId)],
            isMobileView()
                ? [document.getElementById(selectors.selectLogoSwipeIconRightId)]
                : [document.getElementById(selectors.selectSliderIconRightId),
                    document.getElementById(selectors.selectLogoSwipeIconRightId)],
            tokens.notActive,
            0,
            isMobileView() ? 2 : 4);

        super.loadSlides();
    }
}
