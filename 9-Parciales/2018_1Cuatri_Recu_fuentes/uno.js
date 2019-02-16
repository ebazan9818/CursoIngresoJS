
/*Emitir un mensaje que diga lo siguiente: Tenes 2 mascotas xxxx y xxxx que pesan xx y xx, la suma
de los kilos es xxxx*/
    function mostrar()
    {
        var nombreMascota1;
        var pesoMascota1;
        var nombreMascota2;
        var pesoMascota2;
        


        nombreMascota1 = prompt ("Ingrese el nombre de la primer mascota");
        pesoMascota1 = prompt ("Ingrese el peso de la primer mascota");

        nombreMascota2 =prompt("Ingrese el nombre de la segunda mascota");
        pesoMascota2 = prompt("Ingrese el peso de la segunda mascota");

        pesoMascota1 = parseInt(pesoMascota1);
        pesoMascota2= parseInt(pesoMascota2);
        
        var pesoTotal = pesoMascota1 + pesoMascota2 ;
        
        alert("Tenes 2 mascotas: "+nombreMascota1+" y "+nombreMascota2+" que pesan "+pesoMascota1+
        " y "+pesoMascota2+", la suma de los kilos es "+ pesoTotal);

    }









//Realizar el algoritmo que pida la base y la altura de un triángulo equilátero, informar la
//superficie y el perímetro en una sola ventana alert.
/*function mostrar()
{
    var base =parseInt(prompt("Ingrese la base y altura del triangulo")); 
    var altura =parseInt(prompt("Ingrese la altura del triangulo")); 

    var superficie = parseInt(((base * altura)/2));
    var perimetro = parseInt((base *3));

    alert(superficie);
    alert(perimetro);
    
    
}
*/