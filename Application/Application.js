const express = require('express')
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const  ejs = require('ejs');
var http = require('http');
const fs = require("fs");
const Handlebars = require('handlebars');

const app = express()
const port = 3000

//Connect Database

const Database = require("./db_Connection");
const { cpuUsage } = require('process');



// Configue MiddleWare
app.set('Views', __dirname + '/Views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
const publicDirectory = path.join(__dirname, './Public');
app.use(express.static(path.join(__dirname, 'Public', 'Main','css')));
app.use(express.static(path.join(__dirname, 'Public', 'Main','img')));
app.use(express.static(path.join(__dirname, 'Public', 'Main','fonts')));
app.use(express.static(publicDirectory));







// app.use("/view",availble_flight);
// app.use("/view",client);
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
         res.render('index', {
          title : 'Flight',
          rows: rows
         });
 
     })
 
 });
 // Reservation
 
app.get('/reservation/:id_airplane/', (req, res) => {
    let id_airplane  = req.params.id_airplane;
    let id_client  = req.params.id_client;
    let code  = req.params.code;
    const sql = "SELECT *  FROM `airplane`";

    Database.query(sql, (err, result) => {
           if (err) throw err;
           res.render('reservation', {
            title : 'reservation',
            id_airplane: id_airplane,
            id_client:id_client,
            code:code,
            row: result[0]
           });
   
       })

});
// app.get('/404', (req, res) => {
// res.render('404')
// });
    app.post("/reservation/:id_airplane", (req, res) => {
        let id_airplane  = req.params.id_airplane;
        const sql = `Select * from airplane where id_airplane = ${id_airplane}` ;
        Database.query(sql, (err, rows) => {
            res.render('confirmation',{
                title : 'confirmation',
                rows :rows,
                nom: req.body.nom,
                email: req.body.email,
                téléphone: req.body.téléphone,
                Départ: req.body.Départ,
                Arrivé: req.body.Arrivé,
                heure_départ: req.body.heure_départ,
                place_reservé: req.body.place_reservé,
                price: req.body.price,
                id_airplane : req.params.id_airplane,
                code  :req.body.code,
                nom : req.body.nom,
                prénom : req.body.prénom,
                email : req.body.email,
                téléphone : req.body.téléphone,
                Passport : req.body.Passport,
                place_reservé : req.body.place_reservé
               });
        });

    });

    app.post('/reservation/:id_airplane', (req, res) => {
        let id_airplane  = req.params.id_airplane;
         const sql = `Select * from airplane where id_airplane = ${id_airplane}` ;
            Database.query(sql, (err, rows) => {
               if (err) throw err;
               res.render('payment',{
                title : 'confirmation',
                rows :rows,
                nom: req.body.nom,
                email: req.body.email,
                téléphone: req.body.téléphone,
                Départ: req.body.Départ,
                Arrivé: req.body.Arrivé,
                heure_départ: req.body.heure_départ,
                place_reservé: req.body.place_reservé,
                price: req.body.price,
                id_airplane : req.params.id_airplane,
                id_client : req.params.id_client,
                code  :req.body.code,
                nom : req.body.nom,
                prénom : req.body.prénom,
                email : req.body.email,
                téléphone : req.body.téléphone,
                Passport : req.body.Passport,
                place_reservé : req.body.place_reservé
               });
            });
    });


    app.post('/confirmation/:id_airplane', (req, res) => {
        let id_client  = req.body.id_client;
        let id_airplane  = req.params.id_airplane;
        let code = req.body.code;
        let nom = req.body.nom;
        let prénom = req.body.prénom;
        let email = req.body.email;
        let téléphone = req.body.téléphone;
        let Passport = req.body.Passport;
        let place_reservé = req.body.place_reservé;
        let sql = "INSERT INTO `client` (`id_airplane`, `code`, `nom`, `prénom`, `email`, `téléphone`, `Passport`, `place_reservé`) VALUES ('" + id_airplane + "','" + code + "','" + nom + "','" + prénom + "','" + email + "','" + téléphone + "','" + Passport + "','" + place_reservé + "')";
            Database.query(sql, (err, rows) => {
               if (err) throw err;
               res.render('payment',{
                title : 'confirmation',
                rows :rows,
                id_airplane : req.params.id_airplane,
                code  :req.body.code,
                nom: req.body.nom,
                email: req.body.email,
                téléphone: req.body.téléphone,
                Départ: req.body.Départ,
                Arrivé: req.body.Arrivé,
                heure_départ: req.body.heure_départ,
                place_reservé: req.body.place_reservé,
                price: req.body.price,
                id_airplane : req.params.id_airplane,
                code  :req.body.code,
                nom : req.body.nom,
                prénom : req.body.prénom,
                email : req.body.email,
                téléphone : req.body.téléphone,
                Passport : req.body.Passport,
                place_reservé : req.body.place_reservé
                
               });
               const source ="Email :{{email}} Name:{{nom}} prénom :{{prénom}} place_reservé :{{place_reservé}} Passport:{{Passport}} téléphone :{{téléphone}}";
    const template = Handlebars.compile(source);

    const contents = template({
    email: email,
    nom:nom,
    prénom:prénom,
    Passport:Passport,
    téléphone:téléphone,
    place_reservé:place_reservé
});
fs.writeFile('Ticket_Text/Ticket.txt', contents, err => {
    if (err) {
        return console.error(`Failed!! ${err.message}.`);
    }
});
            });
    });




app.post('/payment', (req, res) => {
    let id_airplane  = req.params.id_airplane;
        const sql = `Select * from airplane` ;
        Database.query(sql, (err, rows) => {
res.render('payment',{
    title : 'Flight',
    rows :rows,
    nom: req.body.nom,
    email: req.body.email,
    téléphone: req.body.téléphone,
    Départ: req.body.Départ,
    Arrivé: req.body.Arrivé,
    heure_départ: req.body.heure_départ,
    place_reservé: req.body.place_reservé,
    price: req.body.price,
    id_airplane : req.params.id_airplane,
    code  :req.body.code,
    nom : req.body.nom,
    prénom : req.body.prénom,
    email : req.body.email,
    téléphone : req.body.téléphone,
    Passport : req.body.Passport,
    place_reservé : req.body.place_reservé
            })
        })
});
    app.post('/payment/:id_airplane', (req, res) => {
        let id_airplane  = req.params.id_airplane;
        const sql = `Select * from airplane` ;
        Database.query(sql, (err, rows) => {
               if (err) throw err;
               res.render('/payment/:id_airplane', {
                title : 'Flight',
                rows :rows,
                nom: req.body.nom,
                email: req.body.email,
                téléphone: req.body.téléphone,
                Départ: req.body.Départ,
                Arrivé: req.body.Arrivé,
                heure_départ: req.body.heure_départ,
                place_reservé: req.body.place_reservé,
                price: req.body.price,
                id_airplane : req.params.id_airplane,
                code  :req.body.code,
                nom : req.body.nom,
                prénom : req.body.prénom,
                email : req.body.email,
                téléphone : req.body.téléphone,
                Passport : req.body.Passport,
                place_reservé : req.body.place_reservé

               });
       
           })
       
       });
       //ezzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

       app.post('/paymen', (req, res) => {
        let id_Client  = req.body.code;
        let firstname  = req.body.firstname;
        let email = req.body.email;
        let address = req.body.address;
        let state = req.body.state;
        let zip = req.body.zip;
        let cardname = req.body.cname;
        let cardnumber = req.body.ccnum;
        let expmonth = req.body.expmonth;
        let expyear = req.body.expyear;
        let cvv = req.body.cvv;
        let sql = "INSERT INTO `payment` ( `id_Client`, `firstname`, `email`, `address`, `state`, `zip`, `cardname`, `cardnumber`, `expmonth`, `expyear`, `cvv`) VALUES ('" + id_Client + "','" + firstname + "','" + email + "','" + address + "','" + state + "','" + zip + "','" + cardname + "','" + cardnumber + "','" + expmonth + "','" + expyear + "','" + cvv + "')";
            Database.query(sql, (err, rows) => {
               if (err) throw err;
               res.render('welcome',{
                title : 'confirmation',
                rows :rows,
                id_airplane : req.params.id_airplane,
                code  :req.body.code,
                nom: req.body.nom,
                email: req.body.email,
                téléphone: req.body.téléphone,
                Départ: req.body.Départ,
                Arrivé: req.body.Arrivé,
                heure_départ: req.body.heure_départ,
                place_reservé: req.body.place_reservé,
                price: req.body.price,
                id_airplane : req.params.id_airplane,
                code  :req.body.code,
                nom : req.body.nom,
                prénom : req.body.prénom,
                email : req.body.email,
                téléphone : req.body.téléphone,
                Passport : req.body.Passport,
                place_reservé : req.body.place_reservé
               });
            });
    });

   
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
  })