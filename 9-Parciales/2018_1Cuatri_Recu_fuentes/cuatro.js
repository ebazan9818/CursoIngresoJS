/*En una libreria hacer que si el cliente se lleva +2 libros  10% fr desc y si ademas
la compra supera los 2000 tenes un 15% de desc adicional., eite un mensaje para el cleinte done se ecplique todo el proces y recuerda que 
si tiene que abonar con tarjeta tiene un 10% de descuento en el precio finalo/ */

function mostrar()

    {
    var cantidadLibros;
    var valorCompra;
    var descuento;
    var metodoPago;
    //son 3 posibilidades o a) lleva mas de 2 libros o compra +2000 o paga con tajeta

    cantidadLibros = prompt ("Ingrese la cantidad de libros comprados");
    valorCompra = prompt ("Ingrese el valor de la compra"); //aca lo que ingresamos es un string, ya que lo toma por prompt
    metodoPago= prompt ("Ingrese medio de pago, si paga con tarjeta escriba : tarjeta")
    descuento = 0;

    cantidadLibros = parseInt(cantidadLibros);
    valorCompra = parseFloat (valorCompra);
    descuento= parseInt(descuento);

    if (cantidadLibros > 2 )
    { descuento =descuento+10


    }
   
    if (valorCompra > 2000)
    {
    descuento =descuento+15
    } 
    if(metodoPago = "tarjeta"){
        descuento =descuento+10
    }

    alert(descuento)
    //alert("Llevas "+cantidadLibros+ "libros, tu compra es de "+(valorCompra-valorCompra*descuento/100));

    }