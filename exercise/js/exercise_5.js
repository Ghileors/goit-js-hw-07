const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', handleInputChange);

function handleInputChange(event) {
    refs.output.textContent = event.target.value || 'незнакомец';
}
