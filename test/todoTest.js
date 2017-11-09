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
    describe('/GET todos testing', () => {
        it('it should GET all the todos', (done) => {
            chai.request(server)
            .get('/api/todos')
            .end(function (err, res) {
                if (err) {
                    res.send.equal(err)
                };
                res.should.have.status(200); 
                done();
            });
        });
    });

    describe('Test error in /GET todos', () => {
        it("should return error", (done) => {
            //Arrange
            const TodoMock = sinon.mock(todo);
            const expectedResult = {status: false, error: "Something went wrong"};

            TodoMock
            .expects('find')
            .yields(expectedResult, null);

            todo.find(function (err, result) {
                TodoMock.verify();
                TodoMock.restore();
                should.equal(expectedResult, err, "Something went wrong")
                done();
            });
        });
    });

    after(function(){
        mongoose.connection.close();
        server.close();
    });
});