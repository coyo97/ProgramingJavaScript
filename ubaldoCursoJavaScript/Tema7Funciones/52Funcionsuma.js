//declaracion de la funcion
function suma(a,b){
    console.log("Suma: "+(a+b));
}
suma(3,9);

function resta(a,b){
    return a-b;
}
let variableResta=resta(3,5);
console.log(variableResta);
//funcion de tipo expresiion
let x=function(a,b){return a+b};
let resultado=x(3,5);
console.log(resultado);