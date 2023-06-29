class VideoForm extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = buildVideosFormWrapper().outerHTML;
    }
}

function buildVideosFormWrapper() {
    const div = document.createElement(tags.division);
    div.setAttribute(attributes.class, classes.videosAndForm.videosFormWrapper);

    appendVideos(div);
    appendForm(div);

    function appendVideos(div) {
        for (const video of videos) {
            const videoHolder = document.createElement(tags.division);
            videoHolder.setAttribute(attributes.class, classes.videosAndForm.videoHolder);

            videoHolder.appendChild(buildTitle(video.title, classes.videosAndForm.videoTitle));
            videoHolder.appendChild(buildVideo(video));
            videoHolder.appendChild(buildVideoDescription(video));
            videoHolder.appendChild(buildButton(video.button, classes.videosAndForm.videoButtonHolder));

            div.appendChild(videoHolder);
        }
    }

    function appendForm(div) {
        const formHolder = document.createElement(tags.division);
        formHolder.setAttribute(attributes.class, classes.videosAndForm.formHolder);

        formHolder.appendChild(buildTitle(formInfo.title, classes.videosAndForm.formTitle));
        formHolder.appendChild(buildForm());
        formHolder.appendChild(buildButton(formInfo.button, classes.videosAndForm.formButton));

        div.appendChild(formHolder);
    }

    function buildForm() {
        const div = document.createElement(tags.division);
        div.setAttribute(attributes.class, classes.videosAndForm.form);

        const form = document.createElement(tags.form);

        for (const input of formInputs) {
            switch (input.tag) {
                case formInputTags.input:
                    form.appendChild(buildInputFormField(input));
                    break;
                case formInputTags.textarea:
                    form.appendChild(buildTextareaFormField(input));
                    break;
                default:
                    break;

            }
        }

        div.appendChild(form);

        return div;
    }

    function buildInputFormField(input) {
        const inputField = document.createElement(input.tag);
        inputField.setAttribute(attributes.class, input.class);
        inputField.setAttribute(attributes.type, input.type);
        inputField.setAttribute(attributes.name, input.name);
        inputField.setAttribute(attributes.placeholder, input.placeholder);

        return inputField;
    }

    function buildTextareaFormField(input) {
        const textarea = document.createElement(input.tag);
        textarea.setAttribute(attributes.class, input.class);
        textarea.setAttribute(attributes.rows, input.rows);
        textarea.setAttribute(attributes.name, input.name);
        textarea.setAttribute(attributes.placeholder, input.placeholder);

        return textarea;
    }

    function buildTitle(title, className) {
        const div = document.createElement(tags.division);
        div.setAttribute(attributes.class, className);

        const h1 = document.createElement(tags.header1);
        h1.innerText = title;

        div.appendChild(h1);

        return div;
    }

    function buildVideo(video) {
        const div = document.createElement(tags.division);
        div.setAttribute(attributes.class, classes.videosAndForm.video);

        const videoElement = document.createElement(tags.video);
        videoElement.setAttribute(attributes.width, video.width);
        videoElement.setAttribute(attributes.controls, '');

        const source = document.createElement(tags.source);
        source.setAttribute(attributes.src, video.source);
        source.setAttribute(attributes.type, video.type);

        videoElement.appendChild(source);

        div.appendChild(videoElement);

        return div;
    }

    function buildVideoDescription(video) {
        const div = document.createElement(tags.division);
        div.setAttribute(attributes.class, classes.videosAndForm.videoDescription);

        const p = document.createElement(tags.paragraph);
        p.setAttribute(attributes.class, classes.videosAndForm.videoParagraph);
        p.innerText = video.description;

        div.appendChild(p);

        return div;
    }

    function buildButton(text, className) {
        const div = document.createElement(tags.division);
        div.setAttribute(attributes.class, className);

        const button = document.createElement(tags.button);
        button.setAttribute(attributes.class, classes.videosAndForm.videoRoundedButton);
        button.innerText = text;

        const i = document.createElement(tags.icon);
        i.setAttribute(attributes.class, classes.videosAndForm.buttonIcon);
        i.innerText = icons.filledArrowRight;

        button.appendChild(i);

        div.appendChild(button);

        return div;
    }

    return div;
}


customElements.define(elements.videosAndForm, VideoForm);
