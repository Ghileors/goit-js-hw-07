const refs = {
    decrement: document.querySelector(
        '#counter button[data-action="decrement"]',
    ),
    increment: document.querySelector(
        '#counter button[data-action="increment"]',
    ),
    value: document.querySelector('#value'),
};

refs.increment.addEventListener('click', increment);
refs.decrement.addEventListener('click', decrement);

let counter = 0;

function decrement() {
    refs.value.textContent = counter -= 1;
}

function increment() {
    refs.value.textContent = counter += 1;
}
