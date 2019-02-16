/*function mostrar()*/
/*Mostrar por alert el mensaje "usted es xxxxx y vive en la localidad de xxxxxxxx". En un solo
alert.*/ 

/*Mostrar un mensaje que informe al cliente el precio final de su compra, teniendo en cuenta que tiene
un 10% de descuento y que el precio no incluye iva.*/

function mostrar()
{
var precio;
var precioConDescuento;
var precioConIva;

precio = prompt("Ingrese el precio");


precioConDescuento = precio - (precio *0.10);
precioConIva = precioConDescuento * 1.21;

precio= parseFloat(precio);
precioConDescuento = parseFloat (precioConDescuento);
precioConIva = parseFloat(precioConIva);

alert("Su compra es de $"+precio+" , con el 10% de descuenta le queda "+ precioConDescuento+", mas el iva es " + precioConIva);

}










/*{
    var nombre = document.getElementById("elNombre").value; 
    var localidad = document.getElementById("laLocalidad").value;   
  
    alert ("Usted es "+nombre+", y vive en la localidad de " +localidad)
}*/
