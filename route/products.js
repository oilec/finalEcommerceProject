const router = require('express').Router()

// Grab db connection
const db = require('../db/index').db;

//fetch all products and prices
router.get('/api/products', (req, res) => {
    return db.query('SELECT Products.productName, Price.productPrice, Products.productDescription, Products.productImage FROM Products LEFT JOIN price ON Products.productID = Price.productID', (err, data) => {
      if (err) throw err;
      
      return res.json(data)
    });
});

router.get('/api/productfilter/:query', (req, res) => {
    return db.query('SELECT Products.productName, Price.productPrice, Products.productDescription, Products.productImage FROM Products LEFT JOIN price ON Products.productID = Price.productID WHERE Products.productType = ?', [req.params.query], (err, data) => {
        if (err) throw err;
        
        return res.json(data)
    });
});

module.exports = router;
  