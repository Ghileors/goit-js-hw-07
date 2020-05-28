const categoriesListRef = document.querySelector('#categories');
const itemListRef = document.querySelectorAll('.item');
const titleRef = document.querySelector('h2');

console.log(`В списке ${itemListRef.length} категории.`);

itemListRef.forEach(item =>
    console.log(`
    - Категория: ${titleRef.textContent}
    - Количество элементов: ${item.querySelectorAll('li').length} `),
);
