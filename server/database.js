const mysql = require('mysql2');

const connection = mysql.createConnection({
    port: process.env.PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

connection.query('SELECT * FROM park', (error, results) => {
    if (error) throw error;
  
    console.log(results);
  });
