"use strict";

// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span.
document.getElementById('from').addEventListener('input', function(event) {
    document.querySelector('span').textContent = event.target.value;
});

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
document.querySelector('.messageBtn').addEventListener('click', function() {
    const message = document.querySelector('.message');
    // - добавить два класса: animate_animated и animate_fadeInLeftBig
    message.classList.add('animate_animated', 'animate_fadeInLeftBig');
    // - поставить данному элементу стиль visibility в значение 'visible'.
    message.style.visibility = 'visible';
});

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме.
document.getElementById('myForm').addEventListener('submit', function(event) {
    const form = event.target;
    let formIsValid = true;

    // Проходим по всем элементам формы
    form.querySelectorAll('input, select').forEach(function(input) {
        // Если поле пустое и не является селектом с пустым значением, то помечаем его как невалидное
        if (!input.value.trim() && !(input.tagName.toLowerCase() === 'select' && !input.value)) {
            input.classList.add('error');
            formIsValid = false;
        } else {
            input.classList.remove('error');
        }
    });

    // Если форма невалидна, отменяем отправку
    if (!formIsValid) {
        event.preventDefault();
    }
});
