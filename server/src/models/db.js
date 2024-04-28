const mysql = require('mysql');

   const connection = mysql.createConnection({
       host: 'localhost',
       port: '3306',
       user: 'root',
       password: '12345678',
       database: 'pp420',
       authPlugin: 'mysql_native_password' 
   });

   module.exports = connection;