const express = require('express')
const app = express()
const mysql = require('mysql2');
const port = process.env.PORT || 8000;

const pool = mysql.createPool({
    host: '65.21.118.123',
    user: 'specscam_prouser',
    password: 'Mardan8110',
    database: 'specscam_phones',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

if(pool){
    console.log('pool');
}else{

    console.log('else');
}

app.get('/' ,async (req , res)=> {
    try {
        pool.query('select * from `phone-specs`' , (err , rows , fields)=>{
            res.json(rows)
        })
        
    } catch (error) {
        res.send('nothing')
    }
})


  app.listen(port , ()=> {
    console.log('server is running on 8000');
})