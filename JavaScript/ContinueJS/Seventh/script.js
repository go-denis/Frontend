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
                            <a href="#" class="cart__btn" data-name="${product.name}" data-price="${product.price}">
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

    // Добавляем обработчик события для кнопок "Add to Cart"
    const addToCartButtons = document.querySelectorAll('.cart__btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    // Отображаем корзину
    const cartSection = document.querySelector('.cart-bag');
    cartSection.style.display = 'none';

    // Добавляем обработчик события для кнопки "Add to Cart" (после того, как корзина отображена)
    const addToCartButton = document.querySelector('.cart__btn');
    addToCartButton.addEventListener('click', () => {
        // Показываем корзину
        cartSection.style.display = 'block';

        // Устанавливаем таймер для исчезновения корзины через 10 секунд
        setTimeout(() => {
            cartSection.style.display = 'none';
        }, 10000);
    });
}

// Функция для добавления товара в корзину
function addToCart(event) {
    event.preventDefault();
    const productName = event.target.dataset.name;
    const productPrice = parseFloat(event.target.dataset.price);

    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
        <span>${productName}</span>
        <span class="cart-item__price">$${productPrice.toFixed(2)}</span>
        <button class="remove-from-cart-btn">&times;</button>
    `;

    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.appendChild(cartItem);

    // Добавляем обработчик события для кнопок "Remove from Cart"
    const removeFromCartButtons = document.querySelectorAll('.remove-from-cart-btn');
    removeFromCartButtons.forEach(button => {
        button.addEventListener('click', removeFromCart);
    });

    // Отображаем корзину
    const cartSection = document.querySelector('.cart-bag');
    cartSection.style.display = 'block';
}

// Функция для удаления товара из корзины
function removeFromCart(event) {
    event.preventDefault();
    const cartItem = event.target.parentElement;
    cartItem.remove();

    // Проверяем, остались ли товары в корзине
    const cartItemsContainer = document.querySelector('.cart-items');
    if (cartItemsContainer.children.length === 0) {
        const cartSection = document.querySelector('.cart-bag');
        cartSection.style.display = 'none';
    }
}

// Загружаем данные и отображаем товары при загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
    loadProducts(displayProducts);
});
