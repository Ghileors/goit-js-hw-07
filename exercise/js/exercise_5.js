const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

function handleInputChange(event) {
    const value = event.target.value;
    outputRef.textContent = value || 'незнакомец';
    // outputRef.textContent = value ? value : 'незнакомец';
}

inputRef.addEventListener('input', handleInputChange);
