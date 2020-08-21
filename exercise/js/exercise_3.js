import images from './images.js';

const galleryRef = document.querySelector('#gallery');

const createElements = arr => {
    let markup = '';
    arr.forEach(
        image =>
            (markup += `<li class="gallery-list__item"><img src="${image.url}" alt="${image.alt}" /></li>`),
    );

    return galleryRef.insertAdjacentHTML('beforeend', markup);
};

createElements(images);
