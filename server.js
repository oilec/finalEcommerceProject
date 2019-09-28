// Dependencies
// =============================================================
// Loading environment variables
require('dotenv').config()

const express = require('express')
const helmet = require('helmet')

// Import api routes
const products = require('./route/products');
const contacts = require('./route/contacts');
// Sets up the Express App
// =============================================================
const app = express()
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet())

// Register api routes
app.use(products);
app.use(contacts);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req,res) => {
    res.sendFile('./client/build/index.html');
   });
}

app.listen(PORT, function () {
 console.log(`Server listening on port ${PORT}!`)
});
