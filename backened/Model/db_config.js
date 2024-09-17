const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config()

const connection = mysql.createConnection({
    user:"root",
    password:"",
    host:"localhost",
    database:"ems",
    mysql:3306



});

connection.connect((err)=>{
    if(err){
        console.log("Database not connected",err)
    }
    else{
        console.log("Database connected successfully")
    }
});

module.exports = connection