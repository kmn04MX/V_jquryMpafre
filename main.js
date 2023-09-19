//$("selector").accion 

/* $("h1").hide();
$("p").hide(); */


$(document).ready(function(){
    //Aquí se puede ejecutar una función y dentro de esta función se puede ejecutar código de Jquery o de javaScript
    //Se asegura que el documento ha terminado de cargar 


});

$(function(){
    //Función resumida del document ready (la de arriba)
    //$(".primero").css({"background-color": "red"});
    /*
    $("#btn-hide").click(function(){
        $("#segundo").hide();
    });
    $("#btn-show").click(function(){
        $("#segundo").show();
    });
    */

    /*
    $(".primero").mouseenter(function(){
        //$("#segundo").hide();
        //$("#segundo").fadeOut();
        $("#segundo").slideDown();
    });

    $(".primero").mouseleave(function(){
        //$("#segundo").fadeIn();
        $("#segundo").slideUp();
    });
    */

});

$(function(){
    $("#btn-hide").click(function(){
        alert($("#segundo").text());
    });
});

//Crea una función con Jquery que cambie el color de un parrafo

