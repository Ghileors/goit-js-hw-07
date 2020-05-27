const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

function handleInputChange(event) {
    outputRef.textContent = event.target.value;
}

inputRef.addEventListener('input', handleInputChange);
