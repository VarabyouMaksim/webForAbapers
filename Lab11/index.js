class User{

    	

    constructor(_surname, _name, _login, _password){

	this.surname = _surname;

        this.name = _name;

    	this.login = _login;

    	this.password = _password;	


        this.getSurname = function(){

            return surname;

        }

        this.getName = function(){

            return name;

        }

        this.getLogin = function(){

            return login;

        }



        this.getPassword = function(){

            return password;

        }

    }
	toString(){
	
 	    return '<td>' + this._surname + '</td><td>' + this._name + '</td><td>' + this._login + '</td><td>' + this._password + '</td>'; 
	
	}
}

class Worker extends User{

    constructor(_surname, _name, _login, _password, _job){

        super(_surname, _name, _login, _password);

	this.job = _job;

        this.getJob = function(){
            return job;
        }
	
    }

	toString() {
		
	    var name = super.toString() + '<td>' + this._job + '</td>';
 	    return  name;
	
	}


}

const express = require('express')

const app = express()

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

var mongojs = require('mongojs');
var db = mongojs('lab11',['user']);

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/index.html');
});

app.get('/show-user-data', function (req, res) {
    db.collection("user").find({}).toArray( function(err, result) {
    if (err) throw err;
     var text = '<table style="width: 100%" border="1">';
     text += '<tr><th>Id</th><th>Surname</th><th>Name</th><th>Login</th><th>Password</th></tr>';
     for(var i = 0; i < result.length;i++){
	     text += '<tr><td>' + result[i]._id + '</td><td>' + result[i].surname + '</td><td>' +
	     result[i].name + '</td><td>' + result[i].login + '</td><td>' + result[i].password + '</td></tr>';
     }
      res.send(text + '</table>'
	+ '<form action="/" method="get">'
	+ '<input type="submit" value="Back"/>'
     + '</form>');
	res.end();
     });
});

app.get('/show-worker-data', function (req, res) {
     db.collection("worker").find({}).toArray( function(err, result) {
    if (err) throw err;
     var text = '<table style="width: 100%" border="1">';
     text += '<tr><th>Id</th><th>Surname</th><th>Name</th><th>Login</th><th>Password</th><th>Job</th></tr>';
     for(var i = 0; i < result.length;i++){
	     text += '<tr><td>' + result[i]._id + '</td><td>' + result[i].surname + '</td><td>' +
	     result[i].name + '</td><td>' + result[i].login + '</td><td>' + result[i].password + '</td><td>' + 		     result[i].job + '</td></tr>';
     }
      res.send(text + '</table>'
	+ '<form action="/" method="get">'
	+ '<input type="submit" value="Back"/>'
     + '</form>');
     res.end();
     });
});

app.post('/submit-user-data', function (req, res) {
	if(req.body.Job === ""){
	    var new_user = new User(req.body.Surname, req.body.Name, req.body.Login ,req.body.Password);
	    db.collection("user").insertOne(new_user, function(err, res) { 
		if (err) throw err; 
		console.log("Document inserted");  
	    }); 
	    res.redirect('/');
	}else{
	    var new_worker = new Worker(req.body.Surname, req.body.Name, req.body.Login,
	    req.body.Password, req.body.Job);
	    db.collection("worker").insertOne(new_worker, function(err, res) { 
		if (err) throw err; 
		console.log("Document inserted");  
	    }); 
	    res.redirect('/');
	}
	res.end();
});

function getUsers ( ID ) {
  return new Promise(function(resolve, reject) {
     db.collection("user").find().toArray( function(err, result) {
      if (err) {
        // Reject the Promise with an error
        return reject(err)
      }
	var true_id = false;
	
	for(var i = 0;i < result.length;i++){
		if(result[i]._id == ID)true_id = true;
		
	}
      return resolve(true_id)
    })
  })
}

function getWorkers ( ID ) {
  return new Promise(function(resolve, reject) {
     db.collection("worker").find().toArray( function(err, result) {
      if (err) {
        
        return reject(err)
      }
	var true_id = false;
	
	for(var i = 0;i < result.length;i++){
		if(result[i]._id == ID)true_id = true;
		
	}
      return resolve(true_id)
    })
  })
}

app.post('/update-user-data', function (req, res) {	
		if(req.body.uJob === ""){
			     getUsers(req.body.Id).then(function(result){
				if(result == true){

					var new_user = new User(req.body.uSurname, req.body.uName, req.body.uLogin ,req.body.uPassword);
					var new_var = { $set: new_user};
					const ObjectID = require('mongodb').ObjectID;
					var query = { _id: new ObjectID(req.body.Id)};
					db.collection('user').updateOne( query, new_var, function(err, res) {
						if (err) throw err;
						console.log("1 document updated");
						
					});
					
			        }else{
					console.log("Wrong id");
				}
	
			     });	
			     res.redirect('/');	     
		     
		   }else{
		    
			   getWorkers(req.body.Id).then(function(result){
				if(result == true){

					var new_user = new Worker(req.body.uSurname, req.body.uName, req.body.uLogin ,req.body.uPassword, req.body.uJob);
					var new_var = { $set: new_user};
					const ObjectID = require('mongodb').ObjectID;
					var query = { _id: new ObjectID(req.body.Id)};
					db.collection('worker').updateOne( query, new_var, function(err, res) {
						if (err) throw err;
						console.log("1 document updated");
						
					});
					
			        }else{
					console.log("Wrong id");
				}
	
			     });	
			     res.redirect('/');	
		     
		   
		}
	res.end();
});

app.post('/delete-user-data', function (req, res) {
	var true_id = false;
	db.collection("user").find({}).toArray( function(err, result) {
		for(var i = 0;i < result.length;i++)
			if(result[i]._id == req.body.dId)true_id = true;
		db.collection("worker").find({}).toArray( function(err, result) {
			for(var i = 0;i < result.length;i++)
			if(result[i]._id == req.body.dId){
				true_id = true;
		}
		if(true_id == false){
			res.send('wrong id'+ '<form action="/" method="get">'
			+ '<input type="submit" value="Back"/>'
		  	+ '</form>');
		}else{
			const ObjectID = require('mongodb').ObjectID;
			var query = { _id: new ObjectID(req.body.dId)};
			db.collection('user').remove( query, function(err, res) {
				if (err) throw err;
			});
			db.collection('worker').remove( query, function(err, res) {
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
