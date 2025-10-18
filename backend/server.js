const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3000;

// Подключение к базе
const db = new sqlite3.Database('./database.db');

// Создание таблицы (один раз)
db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT
)`);

// Отдача фронта
app.use(express.static(path.join(__dirname, '../frontend')));

// API: получить всех пользователей
app.get('/api/users', (req, res) => {
  db.all('SELECT * FROM users', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// API: добавить пользователя (пример)
app.get('/api/add/:name', (req, res) => {
  const name = req.params.name;
  db.run('INSERT INTO users (name) VALUES (?)', [name], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, name });
  });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
