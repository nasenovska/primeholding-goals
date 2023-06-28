class FreeTextSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = buildFreeTextSection().outerHTML;
    }
}

function buildFreeTextSection() {
    const div = document.createElement(tags.division);
    div.setAttribute(attributes.class, classes.freeTextSection.freeTextSectionDiv);

    div.appendChild(buildSectionImageHolder());
    div.appendChild(buildSectionTextHolder());

    function buildSectionImageHolder() {
        const div = document.createElement(tags.division);
        div.setAttribute(attributes.class, classes.freeTextSection.sectionImageHolder);

        const img = document.createElement(tags.image);
        img.setAttribute(attributes.src, freeTextSection.src);
        img.alt = freeTextSection.alt;

        div.appendChild(img);

        return div;
    }

    function buildSectionTextHolder() {
        const div = document.createElement(tags.division);
        div.setAttribute(attributes.class, classes.freeTextSection.sectionTextHolder);

        const h1 = document.createElement(tags.header1);
        h1.setAttribute(attributes.class, classes.freeTextSection.sectionTitle);
        h1.innerText = freeTextSection.title;

        const p1 = document.createElement(tags.paragraph);
        p1.setAttribute(attributes.class, classes.freeTextSection.sectionParagraph);
        p1.innerText = freeTextSection.paragraph1;

        const p2 = document.createElement(tags.paragraph);
        p2.setAttribute(attributes.class, classes.freeTextSection.sectionParagraph);
        p2.innerText = freeTextSection.paragraph1;

        div.appendChild(h1);
        div.appendChild(p1);
        div.appendChild(p2);

        return div;
    }

    return div;
}

customElements.define(elements.freeTextSection, FreeTextSection);
