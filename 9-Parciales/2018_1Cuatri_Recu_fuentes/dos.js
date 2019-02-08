function mostrar()

/*Mostrar por alert el mensaje "usted es xxxxx y vive en la localidad de xxxxxxxx". En un solo
alert.*/ 
{
    var nombre = document.getElementById("elNombre").value; 
    var localidad = document.getElementById("laLocalidad").value;   
  
    alert ("Usted es "+nombre+", y vive en la localidad de " +localidad)
}
