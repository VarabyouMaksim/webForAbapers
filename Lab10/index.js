class User{

    constructor(surname, name, login, password){

        let _surname = surname;

        let _name = name;

        let _login = login;

        let _password = password;

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

}

class Worker extends User{

    constructor(surname, name, login, password, job){

        super(surname, name, login, password);

        let _job = job;

        this.getJob = function(){
            return _job;
        }

    }

}

var user1 = new User("Krynitsky", "Oleg", "KROL", "1234");
var worker1 = new Worker("Miadel", "Egor", "LOYD", "_10_", "PE teacher");

console.log(user1.getSurname(), user1.getName(), user1.getLogin(), user1.getPassword());
console.log(worker1.getSurname(), worker1.getName(), worker1.getLogin(), worker1.getPassword(),
     worker1.getJob());


