/**
 * Напишите HTTP сервер и реализуйте два обработчика, где:
 * — По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
 * — А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
 * — Также реализуйте обработку несуществующих роутов (404).
 * — * На каждой странице реализуйте счетчик просмотров. Значение счетчика должно увеличиваться на единицу каждый раз, когда загружается страница.
 */

const express = require('express');
const app = express();

// Объект для хранения счетчика просмотров страниц
const pageViews = {
    '/': 0,
    '/about': 0
};

// Middleware для увеличения счетчика просмотров на каждом запросе
app.use((req, res, next) => {
    const path = req.path;
    pageViews[path]++;
    next();
});

// Обработчик для главной страницы
app.get('/', (req, res) => {
    res.send(`
        <h1>Home Page</h1>
        <p>Page views: ${pageViews['/']}</p>
        <a href="/about">About</a>
    `);
});

// Обработчик для страницы "О нас"
app.get('/about', (req, res) => {
    res.send(`
        <h1>About Page</h1>
        <p>Page views: ${pageViews['/about']}</p>
        <a href="/">Home</a>
    `);
});

// Обработка несуществующих маршрутов
app.use((req, res) => {
    res.status(404).send('<h1>404 Not Found</h1>');
});

// Запуск сервера на порте 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

