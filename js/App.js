$(document).ready(function(){
//
console.log("document rady");
    // $.ajax Obtencion de datos y muestra de datos en el dom 
    // usamos el matodo getJson para obtener los datos del documento
    //el metodo recibe 2 parametros la hubicacion de el archivo y una funcion.
        $.getJSON('./json/datos.json', function(datos){
            console.log(datos);
            // iteramos cada parte del arrego con un each " este recive 2 valores los datos y la comubuicacion con el arreglo"
            // una vez recorrido el arreglo de datos imprimimos los resultados con jquery y sus metodos
            $.each(datos.Info, function(index, obj){
                //
                $("#name").prepend("<h1>"+obj.nombre+"</h1>");
                $("#name").append("<h5>"+obj.Job+"</h5>");
                $("#Location").append('<i class="fa fa-home" aria-hidden="true">'+obj.Location+"</i>");
                $("#Tel").append('<i class="fa fa-phone-square" aria-hidden="true">'+obj.Tel+"</i>");
                $("#Email").append('<i class="fa fa-envelope" aria-hidden="true"><a href="mailto:ingjosue.cardona@gmail.com?">'+obj.Email+"</a></i>");                
            });
            $.each(datos.Desc, function(index, obj){
                $("#Desc").append("<p>"+obj.ParrafoA+"</p>");
            });
            $.each(datos.Objetivo,function(index, obj){
                $("#Objetivo").append("<p>"+obj.ObjetivoA+"</p>");
            });
            $.each(datos.Experiencia,function(index, obj){
                $("#Experiencia").append("<h4>"+obj.Empresa+"</h4><details> <summary>"+obj.tiempo+"</summary><P><br/>"+obj.Puesto+"<br/>"+obj.desc+"</P></details>");


            });
            $.each(datos.Proyectos,function(index, obj){
                $("#Proyectos").append("<div class='educacion-ifo'><h3>"+obj.titulo+"</h3><h5>"+obj.Institucion+"</h5><p>"+obj.Desc+"<p></div>");
                

            });
            $.each(datos.Educacion,function(index, obj){
              
                $("#educacion-title").append('<li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#'+obj.Id+'">'+obj.titulo+'</a></li>');
                $("#myTabContent").append('<div class="tab-pane fade" id="'+obj.Id+'"><h4>'+obj.titulo+'</h4><p>'+obj.Periodo+'</br><h6>'+obj.Institucion+'</h6>'+obj.Aprendisaje+'</p></div>');
                

            });
        });
        
});