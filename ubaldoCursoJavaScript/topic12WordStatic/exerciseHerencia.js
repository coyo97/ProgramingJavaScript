

class Person{

    static counterPersons = 0;

    constructor(name, lastName, age){
        this._name = name;
        this._lastName = lastName;
        this._age = age;
        this._idPerson = ++Person.counterPersons;
    }

    get idPerson(){
        return this._idPerson;
    }

    get name(){
        return this._name;
    }
    get lastName(){
        return this._lastName;
    }
    get age(){
        return this._age;
    }
    set name(name){
        this._name = name;
    }
    set lastName(lastName){
        this._lastName = lastName;
    }
    set age(age){
        this._age = age;
    }
    toString(){
        return this._idPerson + ' ' +  this._name + ' ' + this._lastName + ' ' + this._age;
    }
}

class Employee extends Person {
    static counterEmployee = 0;
    constructor(name, lastName, age, sueldo){
        super(name, lastName, age);
        this._idEmployee = ++Employee.counterEmployee;
        this._sueldo = sueldo;
    }
    get idEmployee(){
        return this._idEmployee;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    get sueldo(){
        return this._sueldo;
    }
    toString(){
        return super.toString() + ' ' + this._idEmployee + ' ' + this._sueldo;
    }

}

class Client extends Person{
    static counterClients = 0;

    constructor(name, lastName, age, registerDate){
        super(name, lastName, age);
        this._idClients = ++Client.counterClients;
        this._registerDate = registerDate;
    }
    get idClient(){
        return this._idClients
    }
    get registerDate(){
        return this._registerDate;
    }
    set registerDate(registerDate){
        this._registerDate = registerDate;
    }

    toString(){
        return super.toString() + ' ' + this._idClients + ' ' + this._registerDate;
    }
}
console.log("test");

//test class person
let person1 = new Person('Juan','Perez',25);
console.log(person1.toString());
let person2 = new Person('Carlos','Ramirez', 23);
console.log(person2.toString());

//test class Employee
let employee1 = new Employee('Karla', 'Gomez','25',5000);
console.log(employee1.toString());
let employee2 = new Employee('Marta','Mamami','30', 600);
console.log(employee2.toString());
//test class Client
let client1 = new Client('Pedro','Aramayo', '33',new Date());
console.log(client1.toString());
let client2 = new Client('Wilfredo','Quispe','40',new Date());
console.log(client2.toString());
