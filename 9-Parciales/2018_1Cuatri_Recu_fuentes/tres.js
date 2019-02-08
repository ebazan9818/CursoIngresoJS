function mostrar()
/*Pedir por prompt el precio y el porcentaje de descuento, mostrar: 1-el descuento en dinero, 2-el
precio con el descuento ,3-el IVA , todos los anteriores e un solo alert. 4-y solo el precio con descuento
más el IVA por id .*/ 
{
    var precio =parseInt(prompt("Ingrese el precio")); 
    var descuento =parseInt(prompt("Ingrese el porcentaje del descuento"));
    var descuentoDinero = parseInt((precio * descuento)/100);
    var iva= parseInt(precio*0.21);
    var precioFinal = (precio - (precio * descuento/100));
    var descIva= (precioFinal+iva);

    
    alert("El descuento en dinero es "+descuentoDinero+", el precio con el descuento es "+precioFinal+", el iva es de "+
    iva);
    
    document.getElementById("elPrecioFinal").value=descIva;
}
