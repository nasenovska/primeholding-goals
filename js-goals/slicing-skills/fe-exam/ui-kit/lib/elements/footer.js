class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = buildFooterWrapper().outerHTML;
    }
}

function buildFooterWrapper() {
    const div = document.createElement(tags.division);
    div.setAttribute(attributes.class, classes.footer.footerWrapper);

    div.appendChild(buildFooterInfoHolder());
    div.appendChild(buildFooter());

    function buildFooterInfoHolder() {
        const div = document.createElement(tags.division);
        div.setAttribute(attributes.class, classes.footer.footerInfoHolder);

        div.appendChild(buildFooterInfo());
        div.appendChild(buildFooterCompany());
        div.appendChild(buildFooterCommunity());
        div.appendChild(buildFooterBlog());

        return div;
    }

    function buildFooter() {
        const footer = document.createElement(tags.footer);

        const div = document.createElement(tags.division);
        div.setAttribute(attributes.class, classes.footer.socialNetworksHolder);

        for (const social of footerInfo.socialNetworks) {
            const img = document.createElement(tags.image);
            img.setAttribute(attributes.class, classes.footer.marginSocialNetworksImages);
            img.setAttribute(attributes.src, social.src);
            img.setAttribute(attributes.alt, social.alt);

            div.appendChild(img);
        }

        footer.appendChild(div);

        return footer;
    }

    function buildFooterCompany() {
        const div = document.createElement(tags.division);
        div.setAttribute(attributes.class, classes.footer.footerCompany);

        div.appendChild(buildFooterTitle(footerInfo.company.title));
        appendResources(div, footerInfo.company.resources);

        return div;
    }

    function buildFooterCommunity() {
        const div = document.createElement(tags.division);
        div.setAttribute(attributes.class, classes.footer.footerCommunity);

        div.appendChild(buildFooterTitle(footerInfo.community.title));
        appendResources(div, footerInfo.community.resources);

        return div;
    }

    function buildFooterBlog() {
        const div = document.createElement(tags.division);
        div.setAttribute(attributes.class, classes.footer.footerBlog);

        div.appendChild(buildFooterTitle(footerInfo.blog.title));
        appendPosts(div, footerInfo.blog.posts);

        return div;
    }

    function appendPosts(element, posts) {
        for (const post of posts) {
            const blogPostDiv = document.createElement(tags.division);
            blogPostDiv.setAttribute(attributes.class, classes.footer.blogPost);

            const imageIconDiv = document.createElement(tags.division);
            imageIconDiv.setAttribute(attributes.class, classes.footer.imageIcon);

            const i = document.createElement(tags.icon);
            i.setAttribute(attributes.class, classes.footer.iconMaterial);
            i.innerText = post.icon;

            const blogTextInfo = document.createElement(tags.division);
            blogTextInfo.setAttribute(attributes.class, classes.footer.blogTextInfo);

            const p = document.createElement(tags.paragraph);
            p.innerText = post.text;

            const span = document.createElement(tags.span);
            span.innerText = post.date;

            blogTextInfo.appendChild(p);
            blogTextInfo.appendChild(span);

            imageIconDiv.appendChild(i);
            blogPostDiv.appendChild(imageIconDiv);
            blogPostDiv.appendChild(blogTextInfo);

            element.appendChild(blogPostDiv);
        }
    }

    function appendResources(element, resources) {
        for (const resource of resources) {
            const div = document.createElement(tags.division);
            div.setAttribute(attributes.class, classes.footer.resourceLink);

            const i = document.createElement(tags.icon);
            i.setAttribute(attributes.class, classes.footer.iconMaterial);
            i.innerText = resource.icon;

            const a = document.createElement(tags.link);
            a.setAttribute(attributes.href, resource.href);
            a.innerText = resource.label;

            div.appendChild(i);
            div.appendChild(a);

            element.appendChild(div);
        }
    }

    function buildFooterTitle(title) {
        const div = document.createElement(tags.division);
        div.setAttribute(attributes.class, classes.footer.footerTitle);

        const h1 = document.createElement(tags.header1);
        h1.innerText = title;

        div.appendChild(h1);

        return div;
    }

    function buildFooterInfo() {
        const div = document.createElement(tags.division);
        div.setAttribute(attributes.class, classes.footer.footerInfo);

        const h1 = document.createElement(tags.header1);
        h1.innerText = footerInfo.info.title;

        const span = document.createElement(tags.span);
        span.innerText = footerInfo.info.text;

        div.appendChild(h1);
        div.appendChild(span);
        div.appendChild(buildContactInfo());

        return div;
    }

    function buildContactInfo() {
        const div = document.createElement(tags.division);
        div.setAttribute(attributes.class, classes.footer.contactInfo);

        for (const contact of footerInfo.info.contacts) {
            const contactDiv = document.createElement(tags.division);
            contactDiv.setAttribute(attributes.class, contact.class);

            const labelSpan = document.createElement(tags.span);
            labelSpan.setAttribute(attributes.class, classes.footer.marginContactLabel);
            labelSpan.innerText = contact.label;

            const valueSpan = document.createElement(tags.span);
            valueSpan.setAttribute(attributes.class, classes.footer.contactHighlight);
            valueSpan.innerText = contact.value;

            contactDiv.appendChild(labelSpan);
            contactDiv.appendChild(valueSpan);

            div.appendChild(contactDiv);
        }

        return div;
    }

    return div;
}

customElements.define(elements.footer, Footer);
