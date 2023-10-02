//creamos objeto
const persona={
    nombre:'Juan',
    apellido:'Perez'
}
console.log(persona);
//Cambiamos los valores del objeto
function cambiarVaalor(p1){
    p1.nombre='Mario';
    p1.apellido='Coyo';
}
//paso por referencia
cambiarVaalor(persona);
console.log(persona);