"use strict";

// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.
document.addEventListener('DOMContentLoaded', function() {
    console.log('все теги прогрузились');
});

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.
window.addEventListener('load', function() {
    console.log('страница загрузилась');
});

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.
document.body.addEventListener('click', function(event) {
    const target = event.target;
    const classPresent = target.classList.contains('super_element');
    const tag = target.tagName.toLowerCase();
    console.log(`Класс "super_element" ${classPresent ? 'присутствует' : 'отсутствует'} в элементе "${tag}".`);
});

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."
document.querySelector('textarea').addEventListener('mouseover', function() {
    console.log('Вы навели на textarea.');
});

// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.
document.querySelector('ul').addEventListener('click', function(event) {
    const target = event.target;
    if (target.tagName.toLowerCase() === 'button') {
        console.log(target.textContent);
    }
});

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.
const liElements = document.querySelectorAll('li');
liElements.forEach(function(li, index) {
    if (index % 2 !== 0) {
        li.style.backgroundColor = 'lightgray';
    }
});
