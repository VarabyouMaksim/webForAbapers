'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
	function User(surname, name, login, password) {
		_classCallCheck(this, User);

		this._surname = surname;

		this._name = name;

		this._login = login;

		this._password = password;

		this.getSurname = function () {

			return _surname;
		};

		this.getName = function () {

			return _name;
		};

		this.getLogin = function () {

			return _login;
		};

		this.getPassword = function () {

			return _password;
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

	function Worker(surname, name, login, password, job) {
		_classCallCheck(this, Worker);

		var _this = _possibleConstructorReturn(this, (Worker.__proto__ || Object.getPrototypeOf(Worker)).call(this, surname, name, login, password));

		_this._job = job;

		_this.getJob = function () {
			return _job;
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

var user1 = new User("Krynitsky", "Oleg", "KROL", "1234");
var worker1 = new Worker("Miadel", "Egor", "LOYD", "_10_", "PE teacher");

var users = [];
users[0] = user1;
users[1] = worker1;

var express = require('express');

var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
	res.sendFile(process.cwd() + '/index.html');
});

app.get('/show-user-data', function (req, res) {
	var text = '<table style="width: 100%" border="1">';
	text += '<tr><th>Id</th><th>Surname</th><th>Name</th><th>Login</th><th>Password</th><th>Job</th></tr>';
	for (var i = 0; i < users.length; i++) {
		text += '<tr> <td>' + i + '</td>' + users[i].toString() + '</tr>';
	}res.send(text + '</table>' + '<form action="/" method="get">' + '<input type="submit" value="Back"/>' + '</form>');
	res.end();
});

app.post('/submit-user-data', function (req, res) {
	if (req.body.Job === "") {
		var new_user = new User(req.body.Surname, req.body.Name, req.body.Login, req.body.Password);
		users[users.length] = new_user;
		var name = req.body.Surname + ' ' + req.body.Name + ' ' + req.body.Login + ' ' + req.body.Password;
		res.redirect('/');
	} else {
		var new_worker = new Worker(req.body.Surname, req.body.Name, req.body.Login, req.body.Password, req.body.Job);
		users[users.length] = new_worker;
		var name = req.body.Surname + ' ' + req.body.Name + ' ' + req.body.Login + ' ' + req.body.Password + ' ' + req.body.Job;
		res.redirect('/');
	}
	res.end();
});

app.post('/update-user-data', function (req, res) {
	// ?
	if (Number(req.body.Id) < users.length && Number(req.body.Id) >= 0) {
		if (req.body.uJob === "") {
			var new_user = new User(req.body.uSurname, req.body.uName, req.body.uLogin, req.body.uPassword);
			users[req.body.Id] = new_user;
			var name = req.body.uSurname + ' ' + req.body.uName + ' ' + req.body.uLogin + ' ' + req.body.uPassword;
			res.redirect('/');
		} else {
			var new_worker = new Worker(req.body.uSurname, req.body.uName, req.body.uLogin, req.body.uPassword, req.body.uJob);
			users[req.body.Id] = new_worker;
			var name = req.body.uSurname + ' ' + req.body.uName + ' ' + req.body.uLogin + ' ' + req.body.uPassword + ' ' + req.body.uJob;
			res.redirect('/');
		}
	} else {
		res.send('wrong id' + '<form action="/" method="get">' + '<input type="submit" value="Back"/>' + '</form>');
	}
	res.end();
});

app.post('/delete-user-data', function (req, res) {
	// ??
	if (Number(req.body.dId) < users.length && Number(req.body.dId) >= 0) {
		users.splice(Number(req.body.dId), 1);
		res.redirect('/');
	} else {
		res.send('wrong id' + '<form action="/" method="get">' + '<input type="submit" value="Back"/>' + '</form>');
	}
	res.end();
});

var server = app.listen(5000, function () {
	console.log('Node server is running..');
});