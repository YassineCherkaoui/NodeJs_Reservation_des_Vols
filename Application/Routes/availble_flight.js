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