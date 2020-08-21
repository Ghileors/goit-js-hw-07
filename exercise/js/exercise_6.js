const inputRef = document.querySelector('#validation-input');
const validationInput = inputRef.dataset.length;

inputRef.addEventListener('blur', borderPainter);

function borderPainter(event) {
    const value = event.target.value.length;

    return value >= validationInput
        ? inputRef.setAttribute('class', 'valid')
        : inputRef.setAttribute('class', 'invalid');
}
