/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
var numUno = parseInt(document.getElementById("numeroUno").value);
var numDos = parseInt(document.getElementById("numeroDos").value);
var resultado = numUno + numDos;

alert ("La suma es "+ resultado);
}

