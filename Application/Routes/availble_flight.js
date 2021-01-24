const express = require('express');
const Router = express.Router();
const Database = require("../db_Connection");


// ================================= show all flight ================================


Router.get('/', (req, res) => {
    const sql = "SELECT * from flight";
    Database.query(sql, (err, rows) => {
        console.log(rows);
        if (err) throw err;
        res.render('index', {
            title: 'Flight',
            rows: rows
        });

    })

});
module.exports = Router;

// =================================   add Client ================================


Router.get('/Client/Reserve/:id_flight', (req, res) => {

    res.render('reserve/:id_flight', {
        title: 'reserve',

    });

});

Router.post("/Client/Reserve/:id_flight", (req, res) => {
    let id_Client = req.body.id_Client;
    let id_flight = req.body.id_flight;
    let code = req.body.code;
    let nom = req.body.nom;
    let prénom = req.body.prénom;
    let email = req.body.email;
    let téléphone = req.body.téléphone;
    let Passport = req.body.Passport;
    let place_reservé = req.body.place_reservé;

    let query = "INSERT INTO `client`(`id_Client`, `id_flight`, `code`, `nom`, `prénom`, `email`, `téléphone`, `Passport`, `place_reservé`) VALUES ('" + id_Client + "''" + id_flight + "''" + code + "''" + nom + "''" + prénom + "''" + email + "''" + téléphone + "''" + Passport + "''" + place_reservé + "')";
    Database.query(query, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
    });
    res.render('reserve');
});
// Router.get("/Client/Reserve/:id_flight", (req, res) => {

//     let id_flight = req.params.id_flight;
//     let sql = `Select num_place from flight where id_flight = ${id_flight}`;
//     let query = Database.query(sql, (err, result) => {
//         if (err) throw err;
//         res.render('index', {
//             id_flight: id_flight,
//             row: result[0]
//         });
//     });
// });
// Router.post("/Client/Reserve/:id_flight", (req, res) => {

//     let id_flight = req.params.id_flight;
//     let num_place = req.body.num_place;

//     num_place2 = place_reservé-num_place;
//     let query = "UPDATE `category` SET `num_place` = '" + num_place2 + "' WHERE `flight`.`id_flight` = '" + id_flight + "'";
//     Database.query(query, (err, result) => {
//         if (err) {
//             return res.status(500).send(err);
//         }
//         res.redirect('/index');
//     });

// });