"use strict";

var should = require('should'),
	sinon = require('sinon'),
	mongoose = require('mongoose');

require('sinon-mongoose');

var TodoModel = require('../../../app/models/todo.model');

describe('TodoController testing', function () {
	describe('Get all Todo test', function () {
		it('Should call find once', function (done) {
			var TodoMock = sinon.mock(TodoModel);
			TodoMock
			.expects('find')
			.yields(null, 'TODOS');

			TodoModel.find(function (err, result) {
				TodoMock.verify();
				TodoMock.restore();
				should.equal('TODOS', result, "Test fails due to unexpected result")
				done();
			});
		});
	});
});