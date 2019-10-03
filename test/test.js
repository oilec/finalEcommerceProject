var expect  = require('chai').expect;
var request = require('request');

it('Returns home page', function(done) { 
    request('http://localhost:3000/' , function(err, response, body) {
        expect(err).to.be.null;
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('Returns array of products from db', function(done) {
        request('http://localhost:3001/api/products' , function(err, response, body) {
        expect(err).to.be.null;
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('Returns array of product that matches query from db', function(done) {
    request('http://localhost:3001/api/productfilter/:query' , function(err, response, body) {
        expect(err).to.be.null;

        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('Returns array of contacts from db', function(done) {
    request('http://localhost:3001/api/contacts' , function(err, response, body) {
        expect(err).to.be.null;

        let data = JSON.parse(body)        
        expect(data).to.be.an('array')
        done();
    });
});
