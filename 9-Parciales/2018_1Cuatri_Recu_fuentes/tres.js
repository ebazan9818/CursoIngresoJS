function mostrar()
/*En un restaurante un grupo de amigos quiere saber cuanto debe abonar cada uno, teniendo en cuenta que ademas 
de la cuenta abonan un 10% de propina y que el iva no esta incluido en el precio*/ 
{
    var cuenta;
    var cantidadPersonas;
    var cuentaConPropina;
    var cuentaConIva;
    var cuentaFinal;

    cuenta = prompt("Ingrese el monto de la cuenta");
    cantidadPersonas = prompt ("Ingrese la cantidad de personas");

    cuenta= parseFloat (cuenta);
    cantidadPersonas = parseInt (cantidadPersonas);
    cuentaConPropina = parseFloat (cuentaConPropina);
    cuentaconIva = parseFloat (cuentaConPropina);
    cuentaFinal = parseFloat (cuentaFinal)
    
    cuentaConPropina = cuenta + (cuenta *0.10);
    cuentaConIva =  cuentaConPropina + (cuentaConPropina * 0.21)

    cuentaFinal = cuentaConIva / cantidadPersonas;

 

    alert("Gastaron $"+cuenta+" , con el 10% de propina es "+cuentaConPropina+" , mas el iva es de $"+ cuentaConIva+
    " , cada uno debe pagar $"+cuentaFinal);


   




}
