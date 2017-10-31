"use strict";

var should = require('should'),
	request = require('supertest'),
	app = require('../../server.js'),
	mongoose = require('mongoose'),
	Todo = mongoose.model('Todo'),
	agent = request.agent(app);

describe('Todo CRUD integration testing', function () {

	describe('Get all todo', function () {

		it('Should get status equal success and array of todo', function (done) {
			agent
			.get('/api/todos')
			.expect(200)
			.end(function(err, res){
				res.body.status.should.equal(true);
			});
			done();
		});
		
	});

});
