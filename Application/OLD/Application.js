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
const client = require("./Routes/Client");



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
app.use("/view",client);
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
 // Reservation
 
app.get('/reservation/:id_airplane', (req, res) => {
    const sql = "SELECT *  FROM `airplane`";
    Database.query(sql, (err, rows) => {
        console.log(rows);
           if (err) throw err;
           res.render('reservation', {
            title : 'reservation',
            rows: rows
           });
   
       })

});
app.get('/404', (req, res) => {
res.render('404')
});
    app.post("/reservation/:id_airplane", (req, res) => {
        let id_airplane  = req.body.id_airplane;
        let code = req.body.code;
        let nom = req.body.nom;
        let prénom = req.body.prénom;
        let email = req.body.email;
        let téléphone = req.body.téléphone;
        let Passport = req.body.Passport;
        let place_reservé = req.body.place_reservé;
        let query = "INSERT INTO `client` (`id_airplane`, `code`, `nom`, `prénom`, `email`, `téléphone`, `Passport`, `place_reservé`) VALUES ('" + id_airplane + "','" + code + "','" + nom + "','" + prénom + "','" + email + "','" + téléphone + "','" + Passport + "','" + place_reservé + "')";
        Database.query(query, (err, rows) => {
            if (err) {
                res.render('404',{
                    title : '404'
                });
            }
            res.render('payment',{
                rows: rows
            });
        });

    });








   
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
  })