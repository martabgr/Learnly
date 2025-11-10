const express = require('express'); 
const connection = require('./database');

const server = express(); 
const port = 3000; 

server.use(express.json()); 

server.get('/users', (req, res) => {
    connection.query('SELECT * FROM users', (error, results) => {
        if (error) return res.status(500).send('Ошибка при выполнении запроса');
        res.json(results); 
    });
});

server.listen(port, () => {
    console.log(`Сервер работает на http://localhost:${port}`);
});