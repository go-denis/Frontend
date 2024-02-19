// script.js

// Функция для загрузки данных из JSON-файла
function loadProducts(callback) {
    fetch('products.json')
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error('Ошибка загрузки данных:', error));
}

// Функция для отображения товаров в блоке "Featured Items"
function displayProducts(products) {
    const productsContainer = document.querySelector('.prod__cards');

    // Создаем HTML-разметку для каждого товара
    products.forEach((product) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
                <div class="prod__card">
                    <div class="card__img">
                        <img src="${product.image}" alt="${product.name}">
                        <div class="cart">
                            <a href="#" class="cart__btn">
                                <img src="img/prod_cart.svg" alt="Basket image">
                                <div>Add to Cart</div>
                            </a>
                        </div>
                    </div>
                    <div class="card__info">
                        <h1 class="card__title">${product.name}</h1>
                        <p class="card__text">
                            ${product.description}
                        </p>
                        <p class="card__price">$${product.price.toFixed(2)}</p>
                    </div>
                </div>
        `;
        productsContainer.appendChild(productCard);
    });
}

// Загружаем данные и отображаем товары при загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
    loadProducts(displayProducts);
});
