"use strict";

var should = require('should'),
	sinon = require('sinon'),
	mongoose = require('mongoose');

require('sinon-mongoose');

var TodoModel = require('../../../app/models/todo.model');

describe('TodoController testing', function () {
	describe("Get all todos", function(){
        // Test will pass if we get all todos
       it("should return all todos", function(done){
           var TodoMock = sinon.mock(Todo);
           var expectedResult = {status: true, todo: []};
           TodoMock.expects('find').yields(null, expectedResult);
           Todo.find(function (err, result) {
               TodoMock.verify();
               TodoMock.restore();
               expect(result.status).to.be.true;
               done();
           });
       });

       // Test will pass if we fail to get a todo
       it("should return error", function(done){
           var TodoMock = sinon.mock(Todo);
           var expectedResult = {status: false, error: "Something went wrong"};
           TodoMock.expects('find').yields(expectedResult, null);
           Todo.find(function (err, result) {
               TodoMock.verify();
               TodoMock.restore();
               expect(err.status).to.not.be.true;
               done();
           });
       });
   });
});
