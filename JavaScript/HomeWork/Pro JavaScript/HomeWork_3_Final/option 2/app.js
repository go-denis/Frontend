"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const addReviewBtn = document.getElementById('add-review-btn');
    const viewReviewsBtn = document.getElementById('view-reviews-btn');
    const addReviewSection = document.getElementById('add-review-section');
    const viewReviewsSection = document.getElementById('view-reviews-section');

    addReviewBtn.addEventListener('click', () => {
        addReviewSection.classList.remove('hidden');
        viewReviewsSection.classList.add('hidden');
    });

    viewReviewsBtn.addEventListener('click', () => {
        addReviewSection.classList.add('hidden');
        viewReviewsSection.classList.remove('hidden');
        renderProducts();
    });

    function uid() {
        return Math.random().toString(36).slice(2);
    }

    function saveReview(productName, reviewText) {
        let products = JSON.parse(localStorage.getItem('productReviews')) || [];

        let product = products.find(p => p.product === productName);
        if (!product) {
            product = { id: uid(), product: productName, reviews: [] };
            products.push(product);
        }

        product.reviews.push({ id: uid(), text: reviewText });
        localStorage.setItem('productReviews', JSON.stringify(products));
        console.log("Reviews saved:", products);
    }

    document.getElementById('review-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const productName = document.getElementById('product-name').value.trim();
        const reviewText = document.getElementById('review-text').value.trim();
        const errorElement = document.querySelector('.error');

        if (productName === "" || reviewText === "") {
            errorElement.style.display = "block";
        } else {
            errorElement.style.display = "none";
            saveReview(productName, reviewText);
            alert('Отзыв добавлен!');
            document.getElementById('review-form').reset();
        }
    });

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
});
