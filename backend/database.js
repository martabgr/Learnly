const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root', 
    password: '""',
    database: 'Lernly' 
});


connection.connect((err) => {
    if (err) {
        console.error('Ошибка подключения: ' + err.stack);
        return;
    }
    console.log('Подключено как ID: ' + connection.threadId);
});

module.exports = connection; 