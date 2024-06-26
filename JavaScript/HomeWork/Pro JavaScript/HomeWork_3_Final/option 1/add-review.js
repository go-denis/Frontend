"use strict";

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
