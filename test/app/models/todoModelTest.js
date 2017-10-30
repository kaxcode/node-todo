"use strict";

var should = require('should'),
	sinon = require('sinon'),
	mongoose = require('mongoose');

require('sinon-mongoose');

var Todo = require('../../../app/models/Todo');

describe('TodoController testing', function () {
  describe("Get all todos", function(){
    // Test will pass if we get all todos
    it("should return all todos", function(done){
      var TodoMock = sinon.mock(Todo);
      var expectedResult = {status: true, todo: []};

      TodoMock
      .expects('find')
      .yields(null, expectedResult);

      Todo.find(function (err, result) {
        TodoMock.verify();
        TodoMock.restore();
        should.equal(expectedResult, result, "Test fails due to unexpected result")
        done();
      });
    });


    // Test will pass if we fail to get a todo
    it("should return error", function(done){
      //Arrange
      var TodoMock = sinon.mock(Todo);
      var expectedResult = {status: false, error: "Something went wrong"};

      TodoMock
      .expects('find')
      .yields(expectedResult, null);

      Todo.find(function (err, result) {
        TodoMock.verify();
        TodoMock.restore();
        should.equal(expectedResult, err, "Something went wrong")
        done();
      });
    });
  });
});
