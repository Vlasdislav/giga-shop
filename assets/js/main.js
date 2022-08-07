import { productCard } from "./templates.js";

const products_container = document.querySelector('.products-container');

const getData = async (path) => {
    const response = await fetch(path);
    if (!response.ok) {
        throw new Error(`Ошибка по адресу ${path}, статус ошибки ${response.status}!`);
    }
    return await response.json();
};

const creteCardProduct = (data) => {
    products_container.innerHTML += productCard(data);
}

getData(`./assets/db/products-info.json`).then((data) => {
    data.forEach(creteCardProduct)
});

const choose_page = () => {
    const more_buttons = document.querySelectorAll('.product-item-more');
    more_buttons.forEach(elem => {
        elem.addEventListener('click', event => {
            const target = event.target;
            const id = target.closest('.product-item').dataset.id;
            localStorage.setItem('product-id', id);
        });
    });
}

setInterval(choose_page, 1000);