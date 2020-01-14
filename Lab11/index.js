class User{

    	

    constructor(surname, name, login, password){

	this._surname = surname;

        this._name = name;

    	this._login = login;

    	this._password = password;	


        this.getSurname = function(){

            return _surname;

        }

        this.getName = function(){

            return _name;

        }

        this.getLogin = function(){

            return _login;

        }



        this.getPassword = function(){

            return _password;

        }

    }
	toString(){
	
 	    return '<td>' + this._surname + '</td><td>' + this._name + '</td><td>' + this._login + '</td><td>' + this._password + '</td>'; 
	
	}
}

class Worker extends User{

    constructor(surname, name, login, password, job){

        super(surname, name, login, password);

	this._job = job;

        this.getJob = function(){
            return _job;
        }
	
    }

	toString() {
		
	    var name = super.toString() + '<td>' + this._job + '</td>';
 	    return  name;
	
	}


}

var user1 = new User("Krynitsky", "Oleg", "KROL", "1234");
var worker1 = new Worker("Miadel", "Egor", "LOYD", "_10_", "PE teacher");

var users = [];
users[0] = user1;
users[1] = worker1;

const express = require('express')

const app = express()

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/index.html');
});

app.get('/show-user-data', function (req, res) {
    var text = '<table style="width: 100%" border="1">';
    text += '<tr><th>Id</th><th>Surname</th><th>Name</th><th>Login</th><th>Password</th><th>Job</th></tr>'
    for(var i = 0; i < users.length; i++)
      text += '<tr> <td>' + i + '</td>' + users[i].toString() + '</tr>';
      res.send(text + '</table>'
	+ '<form action="/" method="get">'
	+ '<input type="submit" value="Back"/>'
   + '</form>');
    res.end();
});

app.post('/submit-user-data', function (req, res) {
	if(req.body.Job === ""){
	    var new_user = new User(req.body.Surname, req.body.Name, req.body.Login ,req.body.Password);
	    users[users.length] = new_user;
	    var name = req.body.Surname + ' ' + req.body.Name + ' ' + req.body.Login +
		' ' + req.body.Password;
	    res.redirect('/');
	}else{
	    var new_worker = new Worker(req.body.Surname, req.body.Name, req.body.Login,
	    req.body.Password, req.body.Job);
	    users[users.length] = new_worker;
	    var name = req.body.Surname + ' ' + req.body.Name + ' ' + req.body.Login +
		' ' + req.body.Password + ' ' + req.body.Job;
	    res.redirect('/');
	}
	res.end();
});

app.post('/update-user-data', function (req, res) {// ?
	if(Number(req.body.Id) < users.length && Number(req.body.Id) >= 0){
		if(req.body.uJob === ""){
		    var new_user = new User(req.body.uSurname, req.body.uName, req.body.uLogin ,req.body.uPassword);
		    users[req.body.Id] = new_user;
		    var name = req.body.uSurname + ' ' + req.body.uName + ' ' + req.body.uLogin +
			' ' + req.body.uPassword;
		    res.redirect('/');
		}else{
		    var new_worker = new Worker(req.body.uSurname, req.body.uName, req.body.uLogin,
		    req.body.uPassword, req.body.uJob);
		    users[req.body.Id] = new_worker;
		    var name = req.body.uSurname + ' ' + req.body.uName + ' ' + req.body.uLogin +
			' ' + req.body.uPassword + ' ' + req.body.uJob;
		    res.redirect('/');
		}
	}else{
		res.send('wrong id'+ '<form action="/" method="get">'
			+ '<input type="submit" value="Back"/>'
		  	 + '</form>');
	}
	res.end();
});

app.post('/delete-user-data', function (req, res) {// ??
	if(Number(req.body.dId) < users.length && Number(req.body.dId) >= 0){
		users.splice(Number(req.body.dId),1);
		res.redirect('/');
	}else{
		res.send('wrong id'+ '<form action="/" method="get">'
			+ '<input type="submit" value="Back"/>'
		  	 + '</form>');
	}
	res.end();

});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});
