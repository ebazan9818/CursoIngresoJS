//Realizar el algoritmo que pida la base y la altura de un triángulo equilátero, informar la
//superficie y el perímetro en una sola ventana alert.
function mostrar()
{
    var base =parseInt(prompt("Ingrese la base y altura del triangulo")); 
    var altura =parseInt(prompt("Ingrese la altura del triangulo")); 

    var superficie = parseInt(((base * altura)/2));
    var perimetro = parseInt((base *3));

    alert(superficie);
    alert(perimetro);
    
    
}
