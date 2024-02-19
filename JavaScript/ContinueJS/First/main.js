"use strict";

// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
let superLinkElement = document.getElementById("super_link");
console.log(superLinkElement);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
let cardLinks = document.querySelectorAll(".card-link");
cardLinks.forEach(link => {
    link.textContent = "ссылка";
});

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
let cardLinksInCardBody = document.querySelectorAll(".card-body .card-link");
console.log(cardLinksInCardBody);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
let elementWithDataNumber50 = document.querySelector("[data-number='50']");
console.log(elementWithDataNumber50);

// 5. Выведите содержимое тега title в консоль.
console.log(document.title);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
let cardTitleElement = document.querySelector(".card-title");
console.log(cardTitleElement.parentNode);

// 7. Создайте тег p, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
let pElement = document.createElement("p");
pElement.textContent = "Привет";
let cardElement = document.querySelector(".card");
cardElement.insertBefore(pElement, cardElement.firstChild);

// 8. Удалите тег h6 на странице.
let h6Element = document.querySelector("h6");
h6Element.parentNode.removeChild(h6Element);