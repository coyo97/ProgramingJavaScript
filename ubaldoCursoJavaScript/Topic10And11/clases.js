//77. clases

class Persona{

    //85. Atributos estaticos
    //static contarObjetosPersona = 0;//atributes of class

    //video number 88: example of use of the word static
    static contadorPersonas = 0;//atributes of class
    //video number 89: Creation of constants Static
    static get MAX_OBJ(){
        return 5;
    }

    //video87: static atributes vs not estatic
    email = 'value dedault email';//atribute of objects
    constructor(nombre,apellido){
        this._nombre=nombre;
        this._apellido=apellido;
        //Persona.contardorPersonas++;
        //console.log("Se incrementa contador Persa ona: " + Persona.contardorPersonas);
        if(Persona.contadorPersonas < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersonas;//87
        }
        else {
            console.log('The maximum number of people to enter has been exceeded.');
        }

    }
    //78. Metodo set y get
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    set apellido(apellido){
        this._apellido=this.apellido;
    }
    get apellido(){
        return this._apellido
    }
    nombreCompleto(){
        return this.idPersona + ' ' + this._nombre + '' + this._apellido;
    }
    //83. sobreescritura de metodo toString del clase object
    toString(){
        //Se aplica poliformismo( multiples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si es una referencia de tipo padre o de tipo hijo
        return this.nombreCompleto();
    }
    //84. Palabra Static
    static saludar(){
        console.log('Saludos desde metodo Static.');
    }
    //como parametro un objeto
    static saludar2(persona){
        console.log(persona.nombre);
    }
}

let persona1 = new Persona('Juan','Perez');
//console.log(persona1);
console.log( persona1.toString() );
persona1.nombre = 'Juan Carlos';//metodo set
console.log(persona1.nombre);//metodo get

//79. Hoisting
//este termino se refiere cuando sea un objeto en una linea de codigo antes que la linea de codigo de la clase y no funciona
//Pero en funciones si es posible hoisting

//80. Herencia

class Empleado extends Persona{
    constructor(nombre,apellido,departamento){
        super(nombre,apellido);
        this._departamnto=departamento;
    }
    set departamento(departamento){
        this._departamnto=departamento
    }
    get departamento(){
        return this._departamnto;
    }
    //82. sobreescritura
    nombreCompleto(){
        return super.nombreCompleto()+', '+this._departamnto;
    }
}

let empleado1=new Empleado('Maria','Coyo','Santa');
//console.log(empleado1);
//console.log(empleado1.nombre)
//81. Herencia de metodos
//console.log(empleado1.nombreCompleto());
/*
//83. 
console.log(persona1.toString());
console.log(empleado1.toString());
// 84
//persona1.saludar();//no es posible llamar un metodo estatico desde un objeto
Persona.saludar();
//como parametro un objeto
Persona.saludar2(persona1);
//Llamamos desde la clase hija los metodos estaticos de la clase padre
Empleado.saludar();
Empleado.saludar2(empleado1);

//video number 85 0r 86, it was updated
console.log(persona1.contardorPersonas);//when using an object------>undefined
console.log(Persona.contardorPersonas);//when using an class father------> 0

console.log(Empleado.contardorPersonas);//Other an using class children------> 0
//87
console.log(persona1.email);//it will show
console.log(empleado1.email);// it will show
console.log(Empleado.email);//will not show
*/
//88
console.log(empleado1.toString());
console.log(Persona.contadorPersonas);

let persona2 = new Persona('Karla', 'Ramirez');
console.log(persona2.toString());
console.log(Persona.contadorPersonas);
//89
console.log(Persona.MAX_OBJ);//remember: when you declare get and set methods you don't need parentheses
Persona.MAX_OBJ = 10;//not is possible
console.log(Persona.MAX_OBJ);//will show 5 and not 10, MAX_OBJ is constants
let person3 = new Persona('Milca','Cruz');
let person4 = new Persona('Karen','Mamani');
let person5 = new Persona('Viviana','Aricoma');
console.log(person5.toString());


