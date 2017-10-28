var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;

var mongoose = require('mongoose');
require('sinon-mongoose');

//Importing our todo model for our unit testing.
var Todo = require('../../app/models/Todo');

describe('TodoController testing', function () {
    describe('Todo Post test', function () {
        it('Should call save only once', function () {
            var saveStub = sinon.stub();
            function Book(){
                this.save = saveStub
            }
            var req = {
                body: {
                    todo: "Test todo from mock"
                }
            }
            var res = {}, next = {};
            var TodoController = require('../../../app/controllers/todoController')(Book);
            TodoController.PostTodo(req, res, next);
            sinon.assert.calledOnce(saveStub);
        });
    });
});