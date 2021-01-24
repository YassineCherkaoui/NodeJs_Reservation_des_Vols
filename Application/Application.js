const express = require('express')
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const  ejs = require('ejs');

const app = express()
const port = 3000

//Connect Database

const Database = require("./db_Connection");
// Routes
const availble_flight = require("./Routes/availble_flight");


// Configue MiddleWare
app.set('Views', __dirname + '/Views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
const publicDirectory = path.join(__dirname, './Public');
app.use(express.static(path.join(__dirname, 'Public', 'Main','Css')));
app.use(express.static(path.join(__dirname, 'Public', 'Main','Img')));
app.use(express.static(publicDirectory));

//Routes
app.use("/",availble_flight);
//Index Direction
app.get('/', (req, res) => {
    const sql = "SELECT * FROM flight";
    database.query(sql, (err, rows) => {
        console.log(rows);
           if (err) throw err;
           res.render('index', {
            title : 'Flight',
               rows: rows
           });
   
       })
   
   });


   
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
  })