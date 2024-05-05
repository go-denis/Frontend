/**
 * Урок 3. Модули и фреймворк Express (WIP)
 *
 * Напишите HTTP сервер на express и реализуйте два обработчика “/” и “/about”, где:
 *
 * — На каждой странице реализован счетчик просмотров
 * — Значение счетчика необходимо сохранять в файл каждый раз, когда обновляется страница
 * — Также значение счетчика должно загружаться из файла, когда запускается обработчик страницы
 * — Таким образом счетчик не должен обнуляться каждый раз, когда перезапускается сервер.
 *
 *
 *
 * Подсказка:
 * Вы можете сохранять файл в формате JOSN,
 * где в объекте ключом будет являться URL страницы, а значением количество просмотров страницы
 *
 * Формат сдачи работы:
 * — Ссылка на гитхаб/гитлаб
 * — Файл с кодом.
 */

const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Создаем или загружаем данные счетчика из файла
let counters = {};
try {
    counters = JSON.parse(fs.readFileSync('counters.json', 'utf8'));
} catch (err) {
    console.error('Error loading counters from file:', err);
}

// Функция сохранения данных счетчика в файл
const saveCountersToFile = () => {
    fs.writeFile('counters.json', JSON.stringify(counters), err => {
        if (err) {
            console.error('Error saving counters to file:', err);
        }
    });
};

// Обработчик для главной страницы
app.get('/', (req, res) => {
    // Увеличиваем счетчик для текущего URL
    counters['/'] = (counters['/'] || 0) + 1;
    // Сохраняем данные счетчика в файл
    saveCountersToFile();
    // Отправляем ответ с количеством просмотров текущей страницы
    res.send(`Home Page Views: ${counters['/']}`);
});

// Обработчик для страницы "/about"
app.get('/about', (req, res) => {
    // Увеличиваем счетчик для текущего URL
    counters['/about'] = (counters['/about'] || 0) + 1;
    // Сохраняем данные счетчика в файл
    saveCountersToFile();
    // Отправляем ответ с количеством просмотров текущей страницы
    res.send(`About Page Views: ${counters['/about']}`);
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
