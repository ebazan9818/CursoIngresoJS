/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var numUno = parseInt(document.getElementById("numeroDividendo").value); //aca hubo que cambiar el id
    var numDos = parseInt(document.getElementById("numeroDivisor").value);//aca hubo que cambiar el id
    var resultado = numUno % numDos;
    
    alert("El resto es "+ resultado);
}
