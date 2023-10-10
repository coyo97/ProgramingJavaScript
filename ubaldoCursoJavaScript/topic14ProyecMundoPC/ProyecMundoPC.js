class InputDevice{

    constructor(inputType, brand){//brand=marca
        this._inputType = inputType;
        this._brand = brand;
    }
    get inputType(){
        return this._inputType;
    }
    set inputType(inputType){
        this._inputType = inputType;
    }
    get brand(){
        return this._brand;
    }
    set brand(brand){
        this._brand = brand;
    }
}


class Mause extends InputDevice {

    static counterMause = 0;
    constructor(inputType, brand){
        super(inputType, brand);
        this._idMause = ++Mause.counterMause;
    }
    get idMause(){
        return this._idMause;
    }
    toString(){
        return`Mause: [idMause: ${this._idMause}, inputType: ${this._inputType}, brand: ${this._brand}]`;
    }
}

class Keyboard extends InputDevice {
    static counterKeyboard = 0;
    
    constructor(inputType, brand){
        super(inputType, brand);
        this._idKeyboard = ++Keyboard.counterKeyboard;
    }
    get idKeyboard(){
        return this._idKeyboard;
    }
    toString(){
        return `Keyboard: [idKeyboard: ${this._idKeyboard}, inputType: ${this._inputType}, brand: ${this._brand}]`;
    }
}

class Monitor{
    static counterMonitor = 0;
    constructor(brand, size){
        this._idMonitor = ++Monitor.counterMonitor;
        this._brand = brand;
        this._size = size;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    set brand(brand){
        this._brand = brand;
    }
    get brand(){
        return this._brand;
    }
    set size(size){
        this._size = size;
    }
    get size(){
        return this._size;
    }
    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, brand: ${this._brand}, size: ${this._size}]`;
    }
}
class Computer{//is the agregation
    static counterComputer = 0;

    constructor(name, monitor, mause, keyboard){
        this._idComputer = ++Computer.counterComputer;
        this._name = name;
        this._monitor = monitor;
        this._mause = mause;
        this._keyboard = keyboard;
    }
    toString(){
        return `Computer: ${this._idComputer}: ${this._name} \n ${this._monitor} \n ${this._mause} \n ${this._keyboard}`;
    }
}

class Order{//relation of agregation
    static counterOrder = 0;
    constructor(){
        this._idOrder = ++Order.counterOrder;
        this._computers = [];
    }
    get idOrder(){
        return this._idOrder;
    }
    addComputer(computer){//Here is the relationship between computers and order
        this._computers.push(computer);
    }
    showOrder(){
        let computersOrder = '';
        for(let computer of this._computers){
            computersOrder += `\n ${computer}`;
        }
        console.log(`Order: ${this._idOrder}, Computer: ${computersOrder}`);
    }
}

let mause1 = new Mause('USB','HP');
let mause2 = new Mause('USB','Dell');
console.log(mause1.toString());
console.log(mause2.toString());

//change mause
mause1.brand = 'Dell';
console.log(mause1.toString());

//test Keyboard
let keyboard1 = new Keyboard('Bluetooth', 'MSI');
console.log(keyboard1.toString());
let keyboard2 = new Keyboard('USB', 'Meetion');
console.log(keyboard2.toString());

//test Monitor
let monitor1 = new Monitor('HP', 15);
let monitor2 = new Monitor('Dell', 27);
console.log(monitor1.toString());
console.log(monitor2.toString());

//test Computer
let computer1 = new Computer('HP', monitor1, mause1, keyboard1);
console.log(computer1.toString());
//another way of printing
console.log(`${computer1}`);
let computer2 = new Computer('Armada', monitor2, mause2, keyboard2);
console.log(`${computer2}`);

//test Order
let order1 = new Order();
order1.addComputer(computer1);
order1.addComputer(computer2);
order1.showOrder();
let order2 = new Order();
order2.addComputer(computer2);
order2.showOrder();

