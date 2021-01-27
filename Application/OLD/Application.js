const express = require('express')
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const  ejs = require('ejs');
var http = require('http');

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
app.use("/view",availble_flight);
//Index Direction
app.get('/', (req, res) => {
    const sql = "SELECT * FROM airplane";
    Database.query(sql, (err, rows) => {
        console.log(rows);
           if (err) throw err;
           res.render('index', {
            title : 'Flight',
            rows: rows
           });
   
       })
   
   });

//    app.post('/view', function(req,res){
//     Database.serialize(()=>{
//         Database.each('SELECT Départ,Arrivé  FROM airplane WHERE Départ =?,Arrivé =?', [req.body.Départ][req.body.Arrivé][req.body.heure_départ][req.body.heure_arrivé][req.body.date_départ][req.body.date_arrivé], function(err,row){
//       if(err){
//         res.send("Error encountered while displaying");
//         return console.error(err.message);
//       }
//       res.send(` Départ: ${row.Départ},    Arrivé: ${row.Arrivé},    heure_départ: ${row.heure_départ},    heure_arrivé: ${row.heure_arrivé},    date_départ: ${row.date_départ},    date_arrivé: ${row.v},    num_place: ${row.num_place}`);
//       console.log("Entry displayed successfully");
//     });
//   });
// });
app.post('/view', (req, res) => {
  let Départ = req.body.Départ;
  let Arrivé = req.body.Arrivé;
  const sql = "SELECT *  FROM `airplane` WHERE `Départ` = '"+Départ+"' and `Arrivé`= '"+Arrivé+"'";
  Database.query(sql, (err, rows) => {
      console.log(rows);
         if (err) throw err;
         res.render('view', {
          title : 'Flight',
          rows: rows
         });
 
     })
 
 });
// app.post("/view", (req, res) => {

//   let Départ = req.body.Départ;
//   let Arrivé = req.body.Arrivé;


//   let query = "SELECT *  FROM `airplane` WHERE `Départ` = '"+Départ+"' and `Arrivé`= '"+Arrivé+"'";
//   Database.query(query, (err,rows)=> {
//       if (err) {
//           return res.status(500).send(err);
//       }
//     res.send(` Départ: ${rows.Départ},    Arrivé: ${rows.Arrivé}`);
//   });

// });









   
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
  })