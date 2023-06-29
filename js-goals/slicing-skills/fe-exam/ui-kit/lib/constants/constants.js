const elements = {
    header: 'header-element',
    slideshow: 'slideshow-element',
    info: 'info-element',
    cards: 'cards-element',
    photoSlider: 'photo-slider-element',
    freeTextSection: 'free-text-section-element',
    videosAndForm: 'videos-form-element',
    logosSlideSection: 'logos-slide-element',
    footer: 'footer-element'
};

const tags = {
    navigation: 'nav',
    division: 'div',
    span: 'span',
    unorderedList: 'ul',
    list: 'li',
    icon: 'i',
    link: 'a',
    script: 'script',
    image: 'img',
    header1: 'h1',
    paragraph: 'p',
    button: 'button',
    video: 'video',
    source: 'source',
    form: 'form',
    input: 'input',
    textarea: 'textarea',
    horizontalLine: 'hr',
    footer: 'footer'
};

const attributes = {
    id: 'id',
    class: 'class',
    href: 'href',
    src: 'src',
    alt: 'alt',
    onclick: 'onclick',
    type: 'type',
    width: 'width',
    name: 'name',
    placeholder: 'placeholder',
    rows: 'rows',
    controls: 'controls'
};

const icons = {
    search: 'search',
    arrowDown: 'keyboard_arrow_down',
    arrowLeft: 'keyboard_arrow_left',
    arrowRight: 'keyboard_arrow_right',
    doubleArrowLeft: 'keyboard_double_arrow_left',
    doubleArrowRight: 'keyboard_double_arrow_right',
    hexagon: '&#x2B22;',
    filledArrowRight: 'arrow_right',
    image: 'image',
    airplane: 'airplanemode_active',
    settings: 'settings_suggest',
    pinch: 'pinch',
    domain: 'domain'
};

const selectors = {
    selectAllLisUnderNavItems: '.nav-items>li',
    selectAllActiveLisUnderNavItems: '.nav-items>li.active',
    selectAllSlides: '.slide',
    selectAllRectangles: '.rectangle'
};

const tokens = {
    active: 'active',
    selected: 'selected'
};

const styles = {
    displays: {
        none: 'none',
        block: 'block'
    }
};

const listenerTypes = {
    click: 'click'
};

const ids = {
    header: {
        navigation: 'navigation',
        iconAttribute: 'header-arrow-icon'
    },
    cards: {
        cardsWrapperDiv: 'cards-wrapper',
        cardsHolderDiv: 'card-holder',
        cardIconHolder: 'card-icon-holder',
        cardTextHolder: 'card-text-holder',
        cardButtonHolder: 'card-button-holder'
    },
    photoSlider: {
        leftArrow: 'left-arrow',
        rightArrow: 'right-arrow'
    },
    logosSlider: {
        sliderLeftIcon: 'slider-icon-left',
        sliderRightIcon: 'slider-icon-right',
        logoSwipeIconLeft: 'logo-swipe-icon-left',
        logoSwipeIconRight: 'logo-swipe-icon-right'
    }
};

const classes = {
    header: {
        nav: 'px-8 py-2',
        logoHolderDiv: 'logo-holder',
        logoSpan: 'logo',
        sloganSpan: 'slogan',
        navHolderDiv: 'nav-holder',
        navItemsUl: 'nav-items',
        iconSearch: 'icon material-icons mx-4 px-2 py-2',
        liItem: 'nav-item mx-2 px-2 py-2',
        hierarchicalItemIndicator: 'hierarchical-item',
        iconMaterial: 'icon icon-down material-icons',
        nestedUlItem: 'nested-nav-items mt-6',
        nestedLiItem: 'nav-item mx-2 my-2 px-2 py-1',
        nestedIconMaterial: 'icon material-icons',
        navLink: 'nav-link'
    },
    slideshow: {
        slideshowHolderDiv: 'slideshow-holder',
        slideshowContainerDiv: 'slideshow-container',
        prevArrow: 'prev material-icons',
        nextArrow: 'next material-icons',
        rectanglesHolderDiv: 'rectangles-holder my-6',
        rectangleDiv: 'rectangle',
        slideDiv: 'slide fade',
        textDiv: 'text my-2',
        slideshowHeaderDiv: 'slideshow-header pl-4',
        slideshowSubheaderDiv: 'slideshow-subheader pl-4'
    },
    info: {
        infoSectionWrapperDiv: 'info-section-wrapper px-6 py-6',
        textHolderDiv: 'text-holder',
        headerInfoTitle: 'info-title pl-4',
        headerInfoSubtitle: 'info-subtitle pl-4',
        buttonHolder: 'button-holder pl-4',
        viewMoreButton: 'view-more px-4 py-4'
    },
    cards: {
        cardsWrapperDiv: 'cards-wrapper my-7',
        cardHolderDiv: 'card-holder px-6 py-4',
        cardIconHolder: 'card-icon-holder my-4',
        cardIcon: 'icon material-icons',
        cardTextHolder: 'card-text-holder my-4',
        cardTitle: 'card-title my-2',
        cardText: 'card-text my-2',
        cardButtonHolder: 'card-button-holder',
        cardButton: 'card-button px-6 py-4'
    },
    photoSlider: {
        photoSliderWrapper: 'photos-slider-wrapper mt-8 py-8 px-8',
        photosSliderHolder: 'photos-slider-holder',
        arrowHolder: 'arrow-holder',
        arrowIcon: 'icon material-icons',
        sliderHolder: 'slider-holder',
        imageHolder: 'image-holder',
        imageClass: 'slide-img',
        searchIcon: 'icon search-icon material-icons'
    },
    freeTextSection: {
        freeTextSectionDiv: 'free-text-section',
        sectionImageHolder: 'section-image-holder',
        sectionTextHolder: 'section-text-holder px-8',
        sectionTitle: 'section-title my-4',
        sectionParagraph: 'section-paragraph my-4'
    },
    videosAndForm: {
        videosFormWrapper: 'videos-form-wrapper parent py-8 px-8',
        videoHolder: 'video-holder child mx-8',
        videoTitle: 'video-title py-6',
        video: 'video my-6',
        videoDescription: 'video-description mb-6',
        videoParagraph: 'video-paragraph-description',
        videoButtonHolder: 'video-button',
        videoRoundedButton: 'rounded-button pl-7 py-2',
        buttonIcon: 'icon material-icons ml-6',
        formInputs: {
            firstName: 'firstName-input my-2 mr-1 px-2',
            lastName: 'lastName-input my-2 ml-1 px-2',
            company: 'company-input my-2 px-2',
            email: 'email-input my-2 px-2',
            phoneNumber: 'phoneNumber-input my-2 px-2',
            content: 'content-input my-2 px-2'
        },
        formHolder: 'form-holder child mx-8',
        formTitle: 'form-title py-6',
        form: 'form my-6',
        formButton: 'form-button'
    },
    logosSlideSection: {
        logosSlideHolder: 'logos-slider-holder my-7 mx-8',
        logosSlideHeader: 'logos-slider-header',
        headerText: 'header-text',
        horizontalLineMargin: 'mx-4',
        logosSliderButtons: 'logos-slider-buttons',
        sliderHeaderIcon: 'icon material-icons px-2 py-2 mx-1',
        logosSlider: 'logos-slider my-6',
        logoSwipeIcon: 'icon logo-swipe-icon material-icons px-4 py-4 my-2',
        logoImage: 'logo-image-holder'
    },
    footer: {
        footerWrapper: 'footer-wrapper mt-7',
        footerInfoHolder: 'footer-info-holder parent px-8 py-6 mt-7',
        footerInfo: 'footer-info child mx-4',
        contactInfo: 'contact-info',
        marginContactLabel: 'mr-2',
        contactHighlight: 'contact-highlight',
        footerCompany: 'footer-company child mx-4',
        footerTitle: 'footer-title mb-3',
        resourceLink: 'resource-link ml-4',
        iconMaterial: 'icon material-icons',
        footerCommunity: 'footer-community child mx-4',
        footerBlog: 'footer-blog child mx-4',
        blogPost: 'blog-post my-2',
        imageIcon: 'image-icon mr-3 px-4 py-4',
        blogTextInfo: 'blog-text-info',
        socialNetworksHolder: 'social-networks-holder py-2',
        marginSocialNetworksImages: 'mx-4'
    }
};
