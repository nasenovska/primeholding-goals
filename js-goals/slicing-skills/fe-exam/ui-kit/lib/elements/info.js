class Info extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = buildInfoSectionDiv().outerHTML;
    }
}

function buildInfoSectionDiv() {
    const div = document.createElement(tags.division);
    div.setAttribute(attributes.class, classes.info.infoSectionWrapperDiv);

    div.appendChild(buildTextHolderDiv());
    div.appendChild(buildButtonHolderDiv());

    function buildTextHolderDiv() {
        const div = document.createElement(tags.division);
        div.setAttribute(attributes.class, classes.info.textHolderDiv);

        const h1 = document.createElement(tags.header1);
        h1.setAttribute(attributes.class, classes.info.headerInfoTitle);
        h1.innerText = infoSection.title;

        const p = document.createElement(tags.paragraph);
        p.setAttribute(attributes.class, classes.info.headerInfoSubtitle);
        p.innerText = infoSection.subtitle;

        div.appendChild(h1);
        div.appendChild(p);

        return div;
    }

    function buildButtonHolderDiv() {
        const div = document.createElement(tags.division);
        div.setAttribute(attributes.class, classes.info.buttonHolder);

        const button = document.createElement(tags.button);
        button.setAttribute(attributes.class, classes.info.viewMoreButton);
        button.innerText = infoSection.button;

        div.appendChild(button);

        return div;
    }

    return div;
}

customElements.define(elements.info, Info);
