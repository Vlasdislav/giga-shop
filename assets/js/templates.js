const productCard = ({ id, img, title }) => {
    return (`
            <div class="product-item" data-id="${id}">
                <img class="product-item-image" src="./assets/images/products/${img}" alt="">
                <div class="product-item-footer">
                    <h3 class="product-item-title">${title}</h3>
                    <a href="product.html?id=${id}" class="product-item-more">Подробнее</a>
                </div>
            </div>
    `)
}

export { productCard };