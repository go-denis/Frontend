"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. 
На странице должны отображаться товары, под каждым товаром должен быть список 
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

Каждый отзыв, как и продукт, должен иметь уникальный id, для упрощения, используем 
функцию `uid()`, она нам будет возвращать случайный id в виде небольшой строки.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

function uid() {
  return Math.random().toString(36).slice(2);
}

const initialData = [
  {
    id: uid(),
    product: "Apple iPhone 13",
    reviews: [
      {
        id: uid(),
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: uid(),
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    id: uid(),
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: uid(),
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    id: uid(),
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: uid(),
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

function loadInitialData() {
  const data = localStorage.getItem('productReviews');
  return data ? JSON.parse(data) : initialData;
}

function saveData(data) {
  localStorage.setItem('productReviews', JSON.stringify(data));
}

document.addEventListener("DOMContentLoaded", () => {
  const productsContainer = document.getElementById("products");
  let products = loadInitialData();

  products.forEach(product => {
    const productElement = document.createElement("div");
    productElement.className = "product";
    productElement.innerHTML = `
            <h2>${product.product}</h2>
            <ul id="reviews-${product.id}">
                ${product.reviews.map(review => `<li>${review.text}</li>`).join('')}
            </ul>
            <form data-product-id="${product.id}">
                <textarea rows="4" cols="50" placeholder="Напишите отзыв..."></textarea>
                <br/>
                <button type="submit">Добавить отзыв</button>
                <label class="error" style="display: none;">Отзыв должен быть не менее 50 символов и не более 500 символов.</label>
            </form>
        `;
    productsContainer.appendChild(productElement);
  });

  productsContainer.addEventListener("submit", event => {
    event.preventDefault();

    const form = event.target;
    const productId = form.getAttribute("data-product-id");
    const textarea = form.querySelector("textarea");
    const errorElement = form.querySelector(".error");
    const reviewText = textarea.value.trim();

    if (reviewText.length < 50 || reviewText.length > 500) {
      errorElement.style.display = "block";
      return;
    }

    errorElement.style.display = "none";

    const review = {
      id: uid(),
      text: reviewText,
    };

    const product = products.find(p => p.id === productId);
    product.reviews.push(review);

    saveData(products);

    const reviewsList = document.getElementById(`reviews-${productId}`);
    const newReviewElement = document.createElement("li");
    newReviewElement.textContent = review.text;
    reviewsList.appendChild(newReviewElement);

    textarea.value = "";
  });
});
