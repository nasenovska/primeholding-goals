class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = buildNav().outerHTML;
    }
}

function buildNav() {
    const nav = document.createElement(tags.navigation);
    nav.setAttribute(attributes.id, ids.header.navigation);
    nav.setAttribute(attributes.class, classes.header.nav);

    nav.appendChild(buildDivLogoHolder());
    if (!isMobileView()) {
        nav.appendChild(buildNavHolder());
    } else {
        nav.appendChild(buildNavIcon());
    }

    function buildNavIcon() {
        const i = document.createElement(tags.icon);
        i.setAttribute(attributes.class, classes.header.iconMaterial);
        i.innerText = icons.menu;
        i.style.color = 'white';
        i.style.fontSize = '36px';
        i.style.fontWeight = 'bold';

        return i;
    }

    function buildDivLogoHolder() {
        const div = document.createElement(tags.division);
        div.setAttribute(attributes.class, classes.header.logoHolderDiv);

        const logoSpan = document.createElement(tags.span);
        logoSpan.setAttribute(attributes.class, classes.header.logoSpan);
        logoSpan.innerText = header.logoName;

        const sloganSpan = document.createElement(tags.span);
        sloganSpan.setAttribute(attributes.class, classes.header.sloganSpan);
        sloganSpan.innerText = header.slogan;

        div.appendChild(logoSpan);
        div.appendChild(sloganSpan);

        return div;
    }

    function buildNavHolder() {
        const div = document.createElement(tags.division);
        div.setAttribute(attributes.class, classes.header.navHolderDiv);

        const ul = document.createElement(tags.unorderedList);
        ul.setAttribute(attributes.class, classes.header.navItemsUl);
        buildLis(ul);

        const i = document.createElement(tags.icon);
        i.setAttribute(attributes.class, classes.header.iconSearch);
        i.innerText = icons.search;

        div.appendChild(ul);
        div.appendChild(i);

        return div;
    }

    function buildLis(ul) {
        const items = header.menuItems;

        for (const item of items) {
            const li = document.createElement(tags.list);
            li.setAttribute(attributes.class, classes.header.liItem);

            if (item.dropdownItems === undefined) {
                li.appendChild(buildLink(item.href, item.name));
            } else {
                li.classList.add(classes.header.hierarchicalItemIndicator);
                const i = document.createElement(tags.icon);
                i.setAttribute(attributes.id, ids.header.iconAttribute);
                i.setAttribute(attributes.class, classes.header.iconMaterial);
                i.innerText = icons.arrowDown;

                li.appendChild(i);
                li.appendChild(buildLink(item.href, item.name));
                li.appendChild(buildNestedUl(item.dropdownItems));
            }

            ul.appendChild(li);
        }
    }

    function buildNestedUl(items) {
        const ul = document.createElement(tags.unorderedList);
        ul.setAttribute(attributes.class, classes.header.nestedUlItem);

        for (const item of items) {
            const li = document.createElement(tags.list);
            li.setAttribute(attributes.class, classes.header.nestedLiItem);

            const i = document.createElement(tags.icon);
            i.setAttribute(attributes.id, ids.header.iconAttribute);
            i.setAttribute(attributes.class, classes.header.nestedIconMaterial);
            i.innerText = icons.arrowRight;

            li.appendChild(i);
            li.appendChild(buildLink(item.href, item.name));

            ul.appendChild(li);
        }

        return ul;
    }

    function buildLink(href, name) {
        const a = document.createElement(tags.link);
        a.setAttribute(attributes.class, classes.header.navLink);
        a.setAttribute(attributes.href, href);
        a.innerText = name;

        return a;
    }


    return nav;
}

customElements.define(elements.header, Header);
