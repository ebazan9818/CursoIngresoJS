/*En una libreria hacer que si el cliente se lleva +2 libros  10% fr desc y si ademas
la compra supera los 2000 tenes un 15% de desc adicional., eite un mensaje para el cleinte done se ecplique todo el proces y recuerda que 
si tiene que abonar con tarjeta tiene un 10% de descuento en el precio finalo/ */

function mostrar()

    {
    var cantidadLibros;
    var valorCompra;
    

    cantidadLibros = prompt ("Ingrese la cantidad de libros comprados");
    valorCompra = prompt ("Ingrese el valor de la compra"); //aca lo que ingresamos es un string, ya que lo toma por prompt
    

    cantidadLibros = parseInt(cantidadLibros);
    valorCompra = parseFloat (valorCompra);
    

    if(cantidadLibros >= 2 && valorCompra <= 2000)
    {

    valorCompra = valorCompra - (valorCompra * 0.10);
    }else
    {
    if(cantidadLibros > 2 && valorCompra > 2000)
    {
    }
    

    alert("Llevas "+cantidadLibros+ "libros, tu compra es de "+valorCompra);

    }