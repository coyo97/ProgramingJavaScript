let persona={
    nombre:'Mario',
    apellido:'Coyo',
    email:'coyo@gmail.com',
    edad:25,
    idioma:'es',
    //funcion para convertir a mayuscula
    get lang(){
        return this.idioma.toUpperCase();
    },
    //agregamos un metodo
    nombreCompleto: function(){
        return  this.nombre +' '+this.apellido;
    },
    set lang(lang){
        this.idioma=lang.toUpperCase();
    }
}
console.log(persona.lang);
console.log(persona.idioma);
//agregamos un valor nuevo
persona.lang='en';
console.log(persona.lang)
//para estar seguros
console.log(persona.idioma);

//70. Metodo constructor
function Persona(nombre,apellido,email){
    this.nombre=nombre;
    this.apellido=apellido;
    this.email=email;
}
//creamso el objeto
let padre=new Persona('Juan','Perez','juanperez@gmail.com');
console.log(padre);
//cambio de nombre
padre.nombre='Carlos';
console.log(padre)

//71. Agregamos metodos a un metodo constructor de objetos
 function Persona(nombre,apellido,email){
    this.nombre=nombre;
    this.apellido=apellido;
    this.email=email;
    this.nombreCompleto=function(){
        return this.nombre + ' ' + this.apellido;
    }
 }

 console.log(padre.nombreCompleto());

 //72. Distintas formas de crear objetos en JavaSrcipt
 let miObjeto=new Object();
 let miObjeto2={};//forma simplificada del anterior codigo, es mas recomedabble esta linea.

 let miCadena=new String('-Hola');//es mas formal pero no la mas recomendable
 let miCadena2='Hola';//es mas recomendable que el anterior

 let miNumro=new Number(1);//menos recomendable
 let miNumro1=1;//mas recomedable

 let miBoolean=new Boolean(false);
 let miBoolean1=false;

 let miArray=new Array();
 let miArray1=[];

 let miFuncion=new Function();
 let miFuncion1=function(){};

 //73. Uso del Prototype
 let madre=new Persona('Laura','Cruz','lauraC@gmail.com');
 padre.tel='1234';
 console.log(padre.tel);
 console.log(madre.tel);
//para corejir
Persona.prototype.tel='123457';
console.log(padre.tel);
 console.log(madre.tel);


 //74. Uso de Call
 let persona1={
    nombre:'Pedro',
    apellido:'Coyo',
    nombreCompleto:function(titulo,tel){
        return titulo+' '+this.nombre+' '+this.apellido+' '+tel;
    }
 }
 let persona2={
    nombre:'Carlos',
    apellido:'Lara'
 }
 //uso de Call
 console.log(persona1.nombreCompleto());
 //podemos usar el atributo de nombreCompleto del objeto persona1 para el objeto persona2 asi:
 console.log(persona1.nombreCompleto.call(persona2));

 //75. Paso de argumentos de Call
 //Es caundo la funcion de dentro del objeto tiene argumentos que recibe nombreCompleto:function(titulo,tel){}
//y se llama asi console.log(persona1.nombreCompleto.apply(persona2,'Ingeniero','687595')));

 //76.Metodo Apply 
 //El metodo appli funciona de la misma forma solo cambia cuando la funcion tiene argumentos
console.log(persona1.nombreCompleto.apply(persona2));
let arrar=['ing','45453454']
console.log(persona1.nombreCompleto.apply(persona2,arrar));