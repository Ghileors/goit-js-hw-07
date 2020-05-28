const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const listRef = document.querySelector('#ingredients');

function ceateElement(arr) {
    let itemsArr = [];
    arr.forEach(item => {
        const ilstItem = document.createElement('li');
        ilstItem.textContent = item;
        itemsArr.push(ilstItem);
        listRef.prepend(...itemsArr);
    });
    return listRef;
}

console.log(ceateElement(ingredients));
