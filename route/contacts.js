const router = require('express').Router()

// Grab db connection
const db = require('../db/index').db;

//fetch all contacts
router.get('/api/contacts', (req, res) => {
    return db.query('SELECT * FROM Customers', (err, data) => {
        if (err) throw err;
        
        return res.json(data)
    })
});

module.exports = router;
