class Cards extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = buildCardsWrapperDiv().outerHTML;
    }
}

function buildCardsWrapperDiv() {
    const div = document.createElement(tags.division);
    div.setAttribute(attributes.class, classes.cards.cardsWrapperDiv);

    appendCards(div);

    function appendCards(div) {
        for (const card of cards) {
            const holderDiv = document.createElement(tags.division);
            holderDiv.setAttribute(attributes.class, classes.cards.cardHolderDiv);

            appendIcon(holderDiv, card);
            appendTexts(holderDiv, card);
            appendButton(holderDiv, card);

            div.appendChild(holderDiv);
        }
    }

    function appendIcon(holderDiv, card) {
        const div = document.createElement(tags.division);
        div.setAttribute(attributes.class, classes.cards.cardIconHolder);

        const i = document.createElement(tags.icon);
        i.setAttribute(attributes.class, classes.cards.cardIcon);
        i.innerText = card.icon;

        div.appendChild(i);

        holderDiv.appendChild(div);
    }

    function appendTexts(holderDiv, card) {
        const div = document.createElement(tags.division);
        div.setAttribute(attributes.class, classes.cards.cardTextHolder);

        const h1 = document.createElement(tags.header1);
        h1.setAttribute(attributes.class, classes.cards.cardTitle);
        h1.innerText = card.title;

        const p = document.createElement(tags.paragraph);
        p.setAttribute(attributes.class, classes.cards.cardText);
        p.innerText = card.subtitle;

        div.appendChild(h1);
        div.appendChild(p);

        holderDiv.appendChild(div);
    }

    function appendButton(holderDiv, card) {
        const div = document.createElement(tags.division);
        div.setAttribute(attributes.class, classes.cards.cardButtonHolder);

        const button = document.createElement(tags.button);
        button.setAttribute(attributes.class, classes.cards.cardButton);
        button.innerText = card.button;

        div.appendChild(button);

        holderDiv.appendChild(div);
    }

    return div;
}

customElements.define(elements.cards, Cards);
