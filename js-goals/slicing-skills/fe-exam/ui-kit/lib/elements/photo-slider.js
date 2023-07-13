class PhotoSlider extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = buildPhotoSliderWrapper().outerHTML;
    }
}

function buildPhotoSliderWrapper() {
    const div = document.createElement(tags.division);
    div.setAttribute(attributes.class, classes.photoSlider.photoSliderWrapper);

    const holderDiv = document.createElement(tags.division);
    holderDiv.setAttribute(attributes.class, classes.photoSlider.photosSliderHolder);

    holderDiv.appendChild(buildSliderArrow(ids.photoSlider.leftArrow, -1, icons.arrowLeft));
    holderDiv.appendChild(buildSliderHolder());
    holderDiv.appendChild(buildSliderArrow(ids.photoSlider.rightArrow, 1, icons.arrowRight));

    div.appendChild(holderDiv);

    function buildSliderArrow(id, direction, icon) {
        const div = document.createElement(tags.division);
        div.setAttribute(attributes.class, classes.photoSlider.arrowHolder);

        const arrow = document.createElement(tags.icon);
        arrow.setAttribute(attributes.id, id);
        arrow.setAttribute(attributes.class, classes.photoSlider.arrowIcon);
        arrow.setAttribute(attributes.onclick, `photos.switchToSlide(${direction})`);
        arrow.innerText = icon;

        div.appendChild(arrow);

        return div;
    }

    function buildSliderHolder() {
        const div = document.createElement(tags.division);
        div.setAttribute(attributes.class, classes.photoSlider.sliderHolder);

        for (const slide of photoSearchSlides) {
            const imageHolder = document.createElement(tags.division);
            imageHolder.setAttribute(attributes.class, classes.photoSlider.imageHolder);

            const img = document.createElement(tags.image);
            img.setAttribute(attributes.class, classes.photoSlider.imageClass);
            img.setAttribute(attributes.src, slide.src);
            img.setAttribute(attributes.alt, slide.alt);

            const icon = document.createElement(tags.icon);
            icon.setAttribute(attributes.class, classes.photoSlider.searchIcon);
            icon.innerText = icons.search;

            imageHolder.appendChild(img);
            imageHolder.insertAdjacentHTML('beforeend', buildHexagon());
            imageHolder.appendChild(icon);

            div.appendChild(imageHolder);
        }

        return div;
    }

    function buildHexagon() {
        return `<span class="hexagon">&#x2B22;</span>`;
    }

    return div;
}

customElements.define(elements.photoSlider, PhotoSlider);
