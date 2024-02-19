// Импортируем функцию для загрузки данных из data.js
import { fetchData } from './data.js';

// Функция для добавления контента в верстку
async function addContent() {
    // Загружаем данные из API
    const data = await fetchData();

    // Создаем элементы для отображения данных
    const catFactContainer = document.getElementById('catFact');
    const catFactTitle = document.createElement('h2');
    const catFactText = document.createElement('p');

    // Устанавливаем заголовок и текст факта о кошках
    catFactTitle.textContent = 'Random Cat Fact';
    catFactText.textContent = data.text;

    // Добавляем элементы в контейнер
    catFactContainer.appendChild(catFactTitle);
    catFactContainer.appendChild(catFactText);
}

// Вызываем функцию добавления контента при загрузке страницы
addContent();
