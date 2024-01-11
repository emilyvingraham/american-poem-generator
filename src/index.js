function generatePoem(event) {
    event.preventDefault();

    new Typewriter('#poem', {
        strings:
            'My sorrow I could not awaken My heart to joy atthe same tone And all I loved, I loved alone',
        autoStart: true,
        delay: 1,
        cursor: null,
    });
}

let poemFormElement = document.querySelector('#poem-generator-form');
poemFormElement.addEventListener('submit', generatePoem);
