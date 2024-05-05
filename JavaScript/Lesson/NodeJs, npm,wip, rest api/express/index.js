const express =  require('express');

const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});

app.get('/', (req, res) => {
    res.send('<h1>Welcome</h1>')
});