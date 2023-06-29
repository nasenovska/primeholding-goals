const videos = [
    {
        title: 'to Our Clients',
        width: '380',
        source: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        type: 'video/mp4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere neque ut massa scelerisque eu imperdiet purus pellentesque. Aenean nisl turpis, euismod vitae malesuada ac, sagittis sed.',
        button: 'Read More'
    },
    {
        title: 'to Our Executives',
        width: '380',
        source: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        type: 'video/mp4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere neque ut massa scelerisque eu imperdiet purus pellentesque. Aenean nisl turpis, euismod vitae malesuada ac, sagittis sed erat. Suspendisse malesuada est sed purus consectetur.',
        button: 'Read More'
    }
];

const formInputTags = {
    input: 'input',
    textarea: 'textarea'
};

const formInputTypes = {
    text: 'text'
};

const formInputNames = {
    firstName: 'firstName',
    lastName: 'lastName',
    company: 'company',
    email: 'email',
    phoneNumber: 'phoneNumber',
    content: 'content'
}

const formInputPlaceholders = {
    firstName: 'First Name...',
    lastName: 'Last Name...',
    company: 'Company...',
    email: 'Email Address...',
    phoneNumber: 'Phone Number...',
    content: 'What can we help with?'
}

const formInfo = {
    title: 'Can We Help You?',
    button: 'Submit'
}

const formInputs = [
    {
        tag: formInputTags.input,
        class: classes.videosAndForm.formInputs.firstName,
        type: formInputTypes.text,
        name: formInputNames.firstName,
        placeholder: formInputPlaceholders.firstName
    },
    {
        tag: formInputTags.input,
        class: classes.videosAndForm.formInputs.lastName,
        type: formInputTypes.text,
        name: formInputNames.lastName,
        placeholder: formInputPlaceholders.lastName
    },
    {
        tag: formInputTags.input,
        class: classes.videosAndForm.formInputs.company,
        type: formInputTypes.text,
        name: formInputNames.company,
        placeholder: formInputPlaceholders.company
    },
    {
        tag: formInputTags.input,
        class: classes.videosAndForm.formInputs.email,
        type: formInputTypes.text,
        name: formInputNames.email,
        placeholder: formInputPlaceholders.email
    },
    {
        tag: formInputTags.input,
        class: classes.videosAndForm.formInputs.phoneNumber,
        type: formInputTypes.text,
        name: formInputNames.phoneNumber,
        placeholder: formInputPlaceholders.phoneNumber
    },
    {
        tag: formInputTags.textarea,
        class: classes.videosAndForm.formInputs.content,
        rows: 5,
        name: formInputNames.content,
        placeholder: formInputPlaceholders.content
    }
];
