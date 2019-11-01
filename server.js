
const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json())
var mysqlConnection = mysql.createConnection({
    host : 'localhost',
    user : 'someone',
    password : 'test',
    database : 'medico',
    port : 3306
});

mysqlConnection.connect((err)=> {
    if(!err) {
        console.log('sql connected');
    } else {
        console.log(err);
    }
})

app.listen(3000)
app.get('/details',(req , res)=>{
  mysqlConnection.query('select * from Details',(err , data)=>{
    console.log('its working');
    if(!err){
      res.send(data);
      console.log(data);
    }else{
      console.log('error');
    }
  })
})



