import ingredients from './ingredients.js';

const listRef = document.querySelector('#ingredients');

const ceateElements = arr => {
    const items = arr.map(item => {
        const li = document.createElement('li');
        li.textContent = item;
        return li;
    });
    listRef.prepend(...items);
};

ceateElements(ingredients);
