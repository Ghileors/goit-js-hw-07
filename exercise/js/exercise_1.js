const refs = {
    list: document.querySelector('#categories'),
    item: document.querySelectorAll('.item'),
};

console.log(`In list ${refs.item.length} categories`);

refs.item.forEach(item =>
    console.log(`
    - Категория: ${item.querySelector('h2').textContent}
    - Количество элементов: ${item.querySelectorAll('li').length} `),
);
