$(document).ready(function(){
//
console.log("document rady");
    // $.ajax Obtencion de datos y muestra de datos en el dom 
        $.get('./json/datos.json', function(datos){
            console.log(datos);
            
        });
    
    /* 
            $.get('./joson/datos.json', function(datos){
                    console.log(datos);
                    $("#info").append(datos.Nombre+"  "+datos.Apellido)
            });
   
    */
            
            

});