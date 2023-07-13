class LogosSlideSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = buildLogosSliderHolder().outerHTML;
    }
}

function buildLogosSliderHolder() {
    const div = document.createElement(tags.division);
    div.setAttribute(attributes.class, classes.logosSlideSection.logosSlideHolder);

    div.appendChild(buildLogosSliderHeader());
    div.appendChild(buildLogosSlider());

    function buildLogosSlider() {
        const div = document.createElement(tags.division);
        div.setAttribute(attributes.class, classes.logosSlideSection.logosSlider);

        div.appendChild(buildIcon(ids.logosSlider.logoSwipeIconLeft, classes.logosSlideSection.logoSwipeIcon, -1, icons.arrowLeft));

        for (const logo of logosSliderInfo.logos) {
            const img = document.createElement(tags.image);
            img.setAttribute(attributes.class, classes.logosSlideSection.logoImage);
            img.setAttribute(attributes.src, logo.src);
            img.setAttribute(attributes.alt, logo.alt);

            div.appendChild(img);
        }

        div.appendChild(buildIcon(ids.logosSlider.logoSwipeIconRight, classes.logosSlideSection.logoSwipeIcon, 1, icons.arrowRight));

        return div;
    }

    function buildLogosSliderHeader() {
        const div = document.createElement(tags.division);
        div.setAttribute(attributes.class, classes.logosSlideSection.logosSlideHeader);

        const span = document.createElement(tags.span);
        span.setAttribute(attributes.class, classes.logosSlideSection.headerText);
        span.innerText = logosSliderInfo.title;

        div.appendChild(span);

        if (!isMobileView()) {
            const hr = document.createElement(tags.horizontalLine);
            hr.setAttribute(attributes.class, classes.logosSlideSection.horizontalLineMargin);

            const arrowsDiv = document.createElement(tags.division);
            arrowsDiv.setAttribute(attributes.class, classes.logosSlideSection.logosSliderButtons);
            arrowsDiv.appendChild(buildIcon(ids.logosSlider.sliderLeftIcon, classes.logosSlideSection.sliderHeaderIcon, -1, icons.arrowLeft));
            arrowsDiv.appendChild(buildIcon(ids.logosSlider.sliderRightIcon, classes.logosSlideSection.sliderHeaderIcon, 1, icons.arrowRight));


            div.appendChild(hr);
            div.appendChild(arrowsDiv);
        }

        return div;
    }

    function buildIcon(id, className, direction, icon) {
        const i = document.createElement(tags.icon);
        i.setAttribute(attributes.id, id);
        i.setAttribute(attributes.class, className);
        i.setAttribute(attributes.onclick, `logos.switchToSlide(${direction})`);
        i.innerText = icon;

        return i;
    }

    return div;
}

customElements.define(elements.logosSlideSection, LogosSlideSection);
