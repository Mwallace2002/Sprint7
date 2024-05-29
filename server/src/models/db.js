const mysql = require('mysql');

   const connection = mysql.createConnection({
       host: 'localhost',
       port: '3306',
       user: 'root',
       password: 'agbdlcid',
       database: 'pp420',
       authPlugin: 'mysql_native_password' 
   });

   module.exports = connection;



