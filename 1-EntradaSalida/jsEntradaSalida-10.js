/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var numImporte = parseInt(document.getElementById("importe").value);
    porImporte = numImporte * 0.25;
    restaSueldo= numImporte -  porImporte;
    document.getElementById("resultado").value = restaSueldo;
}
