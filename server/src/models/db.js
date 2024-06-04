const mysql = require('mysql');

   const connection = mysql.createConnection({
       host: 'localhost',
       port: '3000',
       user: 'root',
       password: 'agbdlcid',
       database: 'pp420',
       authPlugin: 'mysql_native_password' 
   });

   module.exports = connection;



// Conectar a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database, CONTROL 4 LOGGIN:', err);
        return;
    }
    console.log('Connected to the MySQL database');
});

module.exports = connection;
