/*Realizar el algoritmo que permita el ingreso por prompt de las velocidades en
kilómetros (validar entre 0 y 250) , el tipo de combustible, validar el tipo “s” o “l”
para solido o liquido, de 5 vehículos de prueba ,informar por alert:
1-El promedio de las velocidades totales.
2-La velocidad más baja y el tipo de combustible de ese vehículo.
3-La cantidad de combustibles líquidos que su velocidad supere los 100
kilómetros.
4-la velocidad más alta de los de combustible sólido*/

function mostrar()
{   
    var pruebas;
    var velocidadIngresada;
    var totalVelocidades;
    var tipoCombustible;
    var tipoCombustibleMasBajo;
    var velocidadMasBaja;
    totalVelocidades = 0;
    pruebas = 0;
    velocidadMasBaja = 0;



    while(pruebas <5)
    {
        
    velocidadIngresada = prompt ("Ingrese la velocidad del vehiculo, debe ser entre 0 y 250");
    if(velocidadIngresada >= 0 || velocidadIngresada <= 250)
    
    {
        totalVelocidades = parseInt(totalVelocidades) + parseInt(velocidadIngresada);
    
    }
    else {
        velocidadIngresada = prompt ("Ingrese la velocidad del vehiculo, debe ser entre 0 y 250");
        
    }
    tipoCombustible = prompt ("Ingrese el tipo de combustible, siendo S para solido y L para liquido")

    //console.log (velocidadIngresada)
     if(velocidadIngresada < velocidadMasBaja || pruebas == 0){
         velocidadMasBaja = velocidadIngresada;
         tipoCombustibleMasBajo = tipoCombustible;
    }
    
    pruebas++;
    }
    
    //tipoCombustible = prompt("Ingrese el tipo de combustible siendo L para liquido y S para solido"); 
    
    alert ("El promedio de las velocidad es  = "+ (totalVelocidades/5))
    alert ("La velocidad mas baja es   = "+ velocidadMasBaja)
}
    

