class Slideshow extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = buildSlideshowDiv().outerHTML;
    }
}

function buildSlideshowDiv() {
    const div = document.createElement(tags.division);
    div.setAttribute(attributes.class, classes.slideshow.slideshowHolderDiv);

    div.appendChild(buildSlidesDiv());
    div.appendChild(buildRectanglesDiv());

    function buildSlidesDiv() {
        const div = document.createElement(tags.division);
        div.setAttribute(attributes.class, classes.slideshow.slideshowContainerDiv);

        appendSlides(div);

        const iconLeft = document.createElement(tags.icon);
        iconLeft.setAttribute(attributes.class, classes.slideshow.prevArrow);
        iconLeft.setAttribute(attributes.onclick, `switchToSlide(${-1})`);
        iconLeft.innerText = icons.doubleArrowLeft;
        div.appendChild(iconLeft);

        const iconRight = document.createElement(tags.icon);
        iconRight.setAttribute(attributes.class, classes.slideshow.nextArrow);
        iconRight.setAttribute(attributes.onclick, `switchToSlide(${1})`);
        iconRight.innerText = icons.doubleArrowRight;
        div.appendChild(iconRight);

        return div;
    }

    function buildRectanglesDiv() {
        const div = document.createElement(tags.division);
        div.setAttribute(attributes.class, classes.slideshow.rectanglesHolderDiv);

        appendRectangles(div);

        return div;
    }

    function appendRectangles(div) {
        for (let i = 1; i <= 3; ++i) {
            const span = document.createElement(tags.span);
            span.setAttribute(attributes.class, classes.slideshow.rectangleDiv);
            span.setAttribute(attributes.onclick, `forwardToSlide(${i})`)

            div.appendChild(span);
        }
    }

    function appendSlides(div) {
        for (const slide of slides) {
            div.appendChild(buildSlideDivContainer(slide));
        }
    }

    function buildSlideDivContainer(slide) {
        const slideDiv = document.createElement(tags.division);
        slideDiv.setAttribute(attributes.class, classes.slideshow.slideDiv);

        slideDiv.appendChild(buildSlideImg(slide));
        slideDiv.appendChild(buildText(slide));

        return slideDiv;
    }

    function buildSlideImg(slide) {
        const img = document.createElement(tags.image);
        img.src = slide.path;
        img.alt = slide.alt;

        return img;
    }

    function buildText(slide) {
        const div = document.createElement(tags.division);
        div.setAttribute(attributes.class, classes.slideshow.textDiv);

        const h1 = document.createElement(tags.header1);
        h1.setAttribute(attributes.class, classes.slideshow.slideshowHeaderDiv);
        h1.innerText = slide.title;

        const p = document.createElement(tags.paragraph);
        p.setAttribute(attributes.class, classes.slideshow.slideshowSubheaderDiv);
        p.innerText = slide.subtitle;

        div.appendChild(h1);
        div.appendChild(p);

        return div;
    }

    return div;
}

customElements.define(elements.slideshow, Slideshow);
