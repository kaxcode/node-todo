//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Todo = require('../app/models/Todo');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let sinon = require('sinon');
let server = require('../server');
let should = chai.should();
let todo = new Todo({
    todo: 'Finish API testing',
    completed: 'false',
});


chai.use(chaiHttp);
//Our parent block
describe('todos', () => {
    describe('Test /GET todos', () => {
        it('it should GET all the todos', (done) => {
            chai.request(server)
            .get('/api/todos')
            .end(function (err, res) {
                res.should.have.status(200); 
                done(err);
            });
        });
    });

    describe('Test /POST todos', () => {
        it('it should post todos', (done) => {
            chai.request(server)
            .post('/api/todos')
            .end(function (err, res) {
                res.should.have.status(200); 
                done(err);
            });
        });
    });

    describe('Test /GET a todo with id', () => {
        it('it should GET a todo with id', (done) => {
            todo.save((err, todo)  => {
                chai.request(server)
                .get('/api/todo/' + todo.id)
                .send(todo)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('todo');
                    res.body.should.have.property('completed');
                  done();
                });
            });
        });
    });

    describe('Test /PUT to update a todo', () => {
        it('it should UPDATE a todo given the id', (done) => {
            todo.save((err, todo) => {
                    chai.request(server)
                    .put('/api/todo/' + todo.id)
                    .send({completed: 'true'})
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.have.property('message').eql('Todo updated!');
                        res.body.todo.should.have.property('completed').eql(true);
                      done();
                    });
              });
          });
    });

    describe('Test /DELETE a todo', () => {
        it('it should DELETE a todo given the id', (done) => {
            todo.save((err, todo) => {
                    chai.request(server)
                    .delete('/api/todo/' + todo.id)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('message').eql('Todo successfully deleted!');
                        res.body.result.should.have.property('ok').eql(1);
                        res.body.result.should.have.property('n').eql(1);
                      done();
                    });
              });
          });
    });

    after(function(){
        mongoose.connection.close();
        server.close();
    });
});