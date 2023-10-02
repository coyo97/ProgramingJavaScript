let miNumero ="10";
console.log(miNumero);
console.log(typeof miNumero);
//convertir de String a numero
let edad=Number (miNumero);
console.log(typeof edad);
//ver si es mayor de edad
if(edad>=18)
    console.log("Es mayor de edad");
else
    console.log("No es mayor de edad");
//Utiliza el valor ternario para ver si es mayor de edad
let resultado=(edad>=18)? "Mayor de edad":"Menor de edad";
console.log(resultado)