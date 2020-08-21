const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};

function fontSizeChange() {
    refs.text.setAttribute('style', `font-size: ${refs.input.value}px`);
}

refs.input.addEventListener('input', fontSizeChange);
