'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
	function User(_surname, _name, _login, _password) {
		_classCallCheck(this, User);

		this.surname = _surname;

		this.name = _name;

		this.login = _login;

		this.password = _password;

		this.getSurname = function () {

			return surname;
		};

		this.getName = function () {

			return name;
		};

		this.getLogin = function () {

			return login;
		};

		this.getPassword = function () {

			return password;
		};
	}

	_createClass(User, [{
		key: 'toString',
		value: function toString() {

			return '<td>' + this._surname + '</td><td>' + this._name + '</td><td>' + this._login + '</td><td>' + this._password + '</td>';
		}
	}]);

	return User;
}();

var Worker = function (_User) {
	_inherits(Worker, _User);

	function Worker(_surname, _name, _login, _password, _job) {
		_classCallCheck(this, Worker);

		var _this = _possibleConstructorReturn(this, (Worker.__proto__ || Object.getPrototypeOf(Worker)).call(this, _surname, _name, _login, _password));

		_this.job = _job;

		_this.getJob = function () {
			return job;
		};

		return _this;
	}

	_createClass(Worker, [{
		key: 'toString',
		value: function toString() {

			var name = _get(Worker.prototype.__proto__ || Object.getPrototypeOf(Worker.prototype), 'toString', this).call(this) + '<td>' + this._job + '</td>';
			return name;
		}
	}]);

	return Worker;
}(User);

var express = require('express');

var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

var mongojs = require('mongojs');
var db = mongojs('lab11', ['user']);

app.get('/', function (req, res) {
	res.sendFile(process.cwd() + '/index.html');
});

app.get('/show-user-data', function (req, res) {
	db.collection("user").find({}).toArray(function (err, result) {
		if (err) throw err;
		var text = '<table style="width: 100%" border="1">';
		text += '<tr><th>Id</th><th>Surname</th><th>Name</th><th>Login</th><th>Password</th></tr>';
		for (var i = 0; i < result.length; i++) {
			text += '<tr><td>' + result[i]._id + '</td><td>' + result[i].surname + '</td><td>' + result[i].name + '</td><td>' + result[i].login + '</td><td>' + result[i].password + '</td></tr>';
		}
		res.send(text + '</table>' + '<form action="/" method="get">' + '<input type="submit" value="Back"/>' + '</form>');
		res.end();
	});
});

app.get('/show-worker-data', function (req, res) {
	db.collection("worker").find({}).toArray(function (err, result) {
		if (err) throw err;
		var text = '<table style="width: 100%" border="1">';
		text += '<tr><th>Id</th><th>Surname</th><th>Name</th><th>Login</th><th>Password</th><th>Job</th></tr>';
		for (var i = 0; i < result.length; i++) {
			text += '<tr><td>' + result[i]._id + '</td><td>' + result[i].surname + '</td><td>' + result[i].name + '</td><td>' + result[i].login + '</td><td>' + result[i].password + '</td><td>' + result[i].job + '</td></tr>';
		}
		res.send(text + '</table>' + '<form action="/" method="get">' + '<input type="submit" value="Back"/>' + '</form>');
		res.end();
	});
});

app.post('/submit-user-data', function (req, res) {
	if (req.body.Job === "") {
		var new_user = new User(req.body.Surname, req.body.Name, req.body.Login, req.body.Password);
		db.collection("user").insertOne(new_user, function (err, res) {
			if (err) throw err;
			console.log("Document inserted");
		});
		res.redirect('/');
	} else {
		var new_worker = new Worker(req.body.Surname, req.body.Name, req.body.Login, req.body.Password, req.body.Job);
		db.collection("worker").insertOne(new_worker, function (err, res) {
			if (err) throw err;
			console.log("Document inserted");
		});
		res.redirect('/');
	}
	res.end();
});

function getUsers(ID) {
	return new Promise(function (resolve, reject) {
		db.collection("user").find().toArray(function (err, result) {
			if (err) {
				// Reject the Promise with an error
				return reject(err);
			}
			var true_id = false;

			for (var i = 0; i < result.length; i++) {
				if (result[i]._id == ID) true_id = true;
			}
			return resolve(true_id);
		});
	});
}

function getWorkers(ID) {
	return new Promise(function (resolve, reject) {
		db.collection("worker").find().toArray(function (err, result) {
			if (err) {

				return reject(err);
			}
			var true_id = false;

			for (var i = 0; i < result.length; i++) {
				if (result[i]._id == ID) true_id = true;
			}
			return resolve(true_id);
		});
	});
}

app.post('/update-user-data', function (req, res) {
	if (req.body.uJob === "") {
		getUsers(req.body.Id).then(function (result) {
			if (result == true) {

				var new_user = new User(req.body.uSurname, req.body.uName, req.body.uLogin, req.body.uPassword);
				var new_var = { $set: new_user };
				var ObjectID = require('mongodb').ObjectID;
				var query = { _id: new ObjectID(req.body.Id) };
				db.collection('user').updateOne(query, new_var, function (err, res) {
					if (err) throw err;
					console.log("1 document updated");
				});
			} else {
				console.log("Wrong id");
			}
		});
		res.redirect('/');
	} else {

		getWorkers(req.body.Id).then(function (result) {
			if (result == true) {

				var new_user = new Worker(req.body.uSurname, req.body.uName, req.body.uLogin, req.body.uPassword, req.body.uJob);
				var new_var = { $set: new_user };
				var ObjectID = require('mongodb').ObjectID;
				var query = { _id: new ObjectID(req.body.Id) };
				db.collection('worker').updateOne(query, new_var, function (err, res) {
					if (err) throw err;
					console.log("1 document updated");
				});
			} else {
				console.log("Wrong id");
			}
		});
		res.redirect('/');
	}
	res.end();
});

app.post('/delete-user-data', function (req, res) {
	var true_id = false;
	db.collection("user").find({}).toArray(function (err, result) {
		for (var i = 0; i < result.length; i++) {
			if (result[i]._id == req.body.dId) true_id = true;
		}db.collection("worker").find({}).toArray(function (err, result) {
			for (var i = 0; i < result.length; i++) {
				if (result[i]._id == req.body.dId) {
					true_id = true;
				}
			}if (true_id == false) {
				res.send('wrong id' + '<form action="/" method="get">' + '<input type="submit" value="Back"/>' + '</form>');
			} else {
				var ObjectID = require('mongodb').ObjectID;
				var query = { _id: new ObjectID(req.body.dId) };
				db.collection('user').remove(query, function (err, res) {
					if (err) throw err;
				});
				db.collection('worker').remove(query, function (err, res) {
					if (err) throw err;
				});
				res.redirect('/');
				res.end();
			}
		});
	});
});

var server = app.listen(5000, function () {
	console.log('Node server is running..');
});