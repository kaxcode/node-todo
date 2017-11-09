//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let todo = require('../app/models/Todo');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let sinon = require('sinon');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('todos', () => {
    beforeEach((done) => { //Before each test we empty the database
        todo.remove({}, (err) => { 
           done();         
        });     
    });

    describe('/GET todos testing', () => {
        it('it should GET all the todos', (done) => {
            chai.request(server)
            .get('/api/todos')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });
    });
});