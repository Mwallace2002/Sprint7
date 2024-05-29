const connection = require('../models/db')

module.exports.ping = (req, res) =>{
    const consult = 'SELECT * FROM login';
 
    try {
        connection.query(consult2,  (err, results)=>{
            console.log(results)
            res.json(results)
        });
    } catch (e) {

    }
}


