const refs = {
    input: document.querySelector('#controls input'),
    render: document.querySelector('button[data-action="render"]'),
    destroy: document.querySelector('button[data-action="destroy"]'),
    boxes: document.querySelector('#boxes'),
};

refs.render.addEventListener('click', () => createBoxes(refs.input.value));
refs.destroy.addEventListener('click', destroyBoxes);

function generateColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function createBoxes(amount) {
    let boxes = [];

    for (let i = 0; i < amount; i += 1) {
        const newBox = document.createElement('div');
        newBox.style.width = `${30 + i * 10}px`;
        newBox.style.height = `${30 + i * 10}px`;
        newBox.style.backgroundColor = generateColor();
        boxes.push(newBox);
    }
    refs.boxes.append(...boxes);
}

function destroyBoxes() {
    refs.boxes.innerHTML = '';
}
