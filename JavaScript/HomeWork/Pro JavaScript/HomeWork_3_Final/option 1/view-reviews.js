"use strict";

function loadProducts() {
    const products = JSON.parse(localStorage.getItem('productReviews')) || [];
    console.log("Loaded products:", products);
    return products;
}

function saveProducts(products) {
    localStorage.setItem('productReviews', JSON.stringify(products));
}

function renderProducts() {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';
    const products = loadProducts();

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <h2>${product.product}</h2>
            <button class="toggle-reviews">Показать отзывы</button>
            <ul class="reviews" id="reviews-${product.id}">
                ${product.reviews.map(review => `
                    <li data-review-id="${review.id}">
                        ${review.text} 
                        <button class="delete-review">Удалить</button>
                    </li>
                `).join('')}
            </ul>
        `;
        productsContainer.appendChild(productElement);
    });

    document.querySelectorAll('.toggle-reviews').forEach(button => {
        button.addEventListener('click', function() {
            const reviewsList = this.nextElementSibling;
            const isHidden = reviewsList.style.display === 'none' || reviewsList.style.display === '';
            reviewsList.style.display = isHidden ? 'block' : 'none';
            this.textContent = isHidden ? 'Скрыть отзывы' : 'Показать отзывы';
        });
    });

    document.querySelectorAll('.delete-review').forEach(button => {
        button.addEventListener('click', function() {
            const reviewElement = this.parentElement;
            const reviewId = reviewElement.getAttribute('data-review-id');
            const productElement = reviewElement.closest('.product');
            const productName = productElement.querySelector('h2').textContent;
            let products = loadProducts();

            const product = products.find(p => p.product === productName);
            product.reviews = product.reviews.filter(review => review.id !== reviewId);

            if (product.reviews.length === 0) {
                products = products.filter(p => p.product !== productName);
                productElement.remove();
            } else {
                reviewElement.remove();
            }

            saveProducts(products);
        });
    });
}

document.addEventListener('DOMContentLoaded', renderProducts);
