# final ecommerce project
Website Description Here

Frank Ocean themed ecommerece site that uses Node, Express, React, MySQL, etc. This ecommerece site sells Ocean vinyls, clothes, and prints. User is allowed to learn about Frank Ocean and his discography and also have a chance to purchase merch and music. 

## Requirements

* Minimum Node v12.10.0
* Minimum NPM 6.11.3
* MySQL Database

## Local development
* Run `npm start` with `NODE_ENV` set to NOT `production` to serve entire application from `localhost:3000`
    * Runs Express API on port `localhost:3001`
    * Runs Client on port `localhost:3000` and proxies `/api` over to Express
    * Start MySQL Server locally
    * Insert schemas into database which are available for use from work folder

## Production build
* Run `npm run build` to get static client files
* Run `NODE_ENV=production npm start` to serve static files and start `Express API`