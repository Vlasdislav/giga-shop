const id = window.location.href.split('id')[1].replace(/[^0-9]/g,"");
const page_title = document.querySelector('title');
const section_title = document.querySelector('.block-1 .section-title');
const section_title_second = document.querySelector('.block-2 .section-title');
const section_img = document.querySelector('.block-1 .section-image');
const section_cost = document.querySelector('.section-cost');
const section_img_second = document.querySelector('.block-2 .section-image');
const section_text = document.querySelector('.section-text');
const form_button = document.querySelector('.form-button');

const getData = async (path) => {
    const response = await fetch(path);
    if (!response.ok) {
        throw new Error(`Ошибка по адресу ${path}, статус ошибки ${response.status}!`);
    }
    return await response.json();
};

const createPageProduct = ({ img, title, cost, imgSecond, text, titleSecond }) => {
    page_title.innerHTML = `Giga Shop — ${title}`;
    section_title.innerHTML = title;
    section_img.src = `./assets/images/products/${img}`;
    section_img_second.src = `./assets/images/products/${imgSecond}`
    section_cost.innerHTML = cost;
    section_text.innerHTML = text;
    section_title_second.innerHTML = titleSecond;
}

getData(`./assets/db/products-info.json`).then((data) => {
    const product = data[id];
    createPageProduct(product);
});

form_button.addEventListener('click', () => {
    alert('Заявка создана, ожидайте звонка оператора.');
});