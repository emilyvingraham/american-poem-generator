function displayPoem(response) {
    new Typewriter('#poem', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: null,
    });
}
function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector('#user-poem-entry');
    let apiKey = '47ce0ocdabaf4a2e81b031bb9t47a0e0';
    let prompt = `User instructions: generate an american poem about ${instructionsInput.value} without a heading and separate each line with a <br/>. Sign the poem at the end of the poem with a <br/> with "SheCodes AI" inside a <strong> element`;
    let context =
        'You are a poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML. Make sure to follow the user instructions.';
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElementContainer = document.querySelector('#poem-container');
    poemElementContainer.classList.remove('hidden');
    let poemElement = document.querySelector('#poem');
    poemElement.innerHTML = `<div class="blink">⌛Generating a poem about ${instructionsInput.value}</div>`;

    axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector('#poem-generator-form');
poemFormElement.addEventListener('submit', generatePoem);
