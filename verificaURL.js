
/* function verificarURL(ruta, callback) {
    $.ajax({
        url: ruta,
        type: 'head',
        success: function () {
            callback(true);
        },
        error: function () {
            callback(false);
            
        }
    });
} */


/*  function regresaURL(){
    let prueba = 'http://127.0.0.1:5500/index2.html';
    verificarURL(prueba, (response) =>{ response ? console.log(response): console.log(response) });
} */




/* function verificarURL(ruta, callback) {
    $.ajax({
        url: ruta,
        type: 'get',
        statusCode:{
            200: function(){
                callback(true);
            }
        },
        error: function(){
            callback(false);
        }
    });
} */

/* function verificarURL() {
    $.ajax({
        url: 'https://www.google.com/',
        type: 'GET',
        statusCode:{
            200: function(){
                console.log("La url responde correctamente");
            }
        },
        error: function(){
            console.log("El servidor no responde");
        }
    });
}

function regresaURL(){
    let google = 'https://www.google.com/';
    verificarURL(google, function(responde){
        if(responde){
            console.log("La url responde correctamente");
        }
    });
} */


/* function verificarURL(ruta, callback) {
    $.ajax({
        url: ruta,
        type: 'head',
        complete: function (xhr) {
            if(typeof callback === 'function'){
                callback(xhr.status);
            }
        }
    });
} 


function regresaURL(){
    let mapfre = 'https://10.184.48.78/zonaliados/login.aspx';
    let google = 'https://www.google.com/';
    verificarURL(google, function(estado){
        console.log(`El código de estado es ${estado}`);
    });
} */








//Funcione, siempre y cuando este dentro del mismo dominio, o en la misma red 
/* function verificarURL(ruta, callback) {
    $.ajax({
        url: ruta,
        type: 'GET',
        statusCode:{
            200: function(){
                callback(true)
            },
            404: function(){
                callback(true)
            },
        error: function(){
            //Servidor apagado
            callback(false);
            }
        }
    });
}

function regresaURL(){
    let google = 'http://127.0.0.1:5500/index3.html';
    verificarURL(google, (response) =>{ response ? console.log(response): console.log(response) });
} */




/* function verificarURL(url) {
    return fetch(url)
        .then(response => {
            if (response.ok) {
                return true; // Devolver true si la solicitud fue exitosa
            } else {
                return false; // Devolver false si hubo un error en la solicitud
            }
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return false; // En caso de error, devolver false
        });
} */

/* function regresaURL(){

    const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
    const corsAnywhereUrl2 = 'https://cors-proxy.htmldriven.com/';
    let ruta = "https://www.uam.mx/";
    let google = 'https://www.google.com.mx/'
    let developerMozilla= "https://developer.mozilla.org/";
    let pdfUAM = "https://www.uam.mx/licenciaturas/pdfs/122_8_Lic_en_Ingenieria_en_Computacion_AZC.pdf";
    let youtube = "https://www.youtube.com.mx/";
    let pdf = 'http://dis.um.es/~lopezquesada/documentos/IES_1415/IAW/curso/UT3/ejercicios.pdf';
    let spotify = 'https://www.spotify.com/mx/premium/';
    verificarURL(corsAnywhereUrl+ruta)
                .then(resultado => {
                    if (resultado) {
                        alert("URL exitosa");
                    } else {
                        alert("URL no exitosa");
                    }
                });
} */


function verificarURL(url) {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
    
    xhr.onload = function () {
      if (xhr.status === 200) {
        console.log("La URL esta disponible");
      } else {
        console.log("La URL no esta disponible");
      }
    };
    xhr.send();
}

function regresaURL(){
    let ruta = "https://www.uam.mx/";
    let google = 'https://www.google.com.mx/'
    let developerMozilla= "https://developer.mozilla.org/";
    let pdfUAM = "https://www.uam.mx/licenciaturas/pdfs/122_8_Lic_en_Ingenieria_en_Computacion_AZC.pdf";
    let youtube = "https://www.youtube.com.mx/";
    let pdf = 'http://dis.um.es/~lopezquesada/documentos/IES_1415/IAW/curso/UT3/ejercicios.pdf';
    let spotify = 'https://www.spotify.com/mx/premium/';
    verificarURL(google);
}