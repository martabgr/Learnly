const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('../frontend')); 

app.get('/api/message', (req, res) => {
  res.json({ message: 'Привет от сервера!' });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
