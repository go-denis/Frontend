// data.js

// Функция для загрузки данных из API
async function fetchData() {
    try {
        // Запрос к API для получения случайного факта о кошках
        const response = await fetch('https://cat-fact.herokuapp.com/facts/random');
        return await response.json();
    } catch (error) {
        console.error('Ошибка загрузки данных:', error);
    }
}

// Экспортируем функцию для использования в других файлах
export { fetchData };
