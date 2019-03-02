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

    velocidadMasBaja = parseInt(velocidadMasBaja);
    
    totalVelocidades = 0;
    pruebas = 0;
    velocidadMasBaja = 251;
    velocidadIngresada = 0;


    do{
        velocidadIngresada = prompt ("Ingrese la velocidad del vehiculo, debe ser entre 0 y 250");
        tipoCombustible = prompt ("Ingrese el tipo de combustible del vehiculo, L o S")
        totalVelocidades = parseInt(totalVelocidades) + parseInt(velocidadIngresada)
        console.log(velocidadIngresada)
    if (velocidadIngresada < velocidadMasBaja)
    {
        velocidadMasBaja = velocidadIngresada
        tipoCombustibleMasBajo = tipoCombustible
    } else{
        
    }

        pruebas ++;
    } while(pruebas < 5)
    alert("El promedio de la velocidad es de "+(totalVelocidades/5))
    alert(velocidadMasBaja)
   
        
        
    }

    

