//Minotorea una descarga

function monitorea(){
/*     window.open("http://www.aon.es/site/wp-content/uploads/sites/80/2018/11/App-Mapfre-Salud.pdf", "_blank", "toolbar=0,scrollbars=1,resizable=0,width=800,height=600,left=0,top=0"); 

    window.addEventListener("onprogress", function(event) {
        // Cierra la ventana emergente si el archivo está descargado por completo
        if (event.loaded === event.total) {
          window.close();
        }
      }); */

    /*let intervalo = setInterval(()=>{
        if(ventana.closed){
            clearInterval(intervalo);
            alert(`La ventana se cerro`);
        }else{
            try{
                if(ventana.document && ventana.document.body && ventana.document.body.children.lenght > 0){
                    clearInterval(intervalo);
                    alert(`La descarga se ha finalizado`);
                    ventana.close();
                }
            }catch(error){
                console.log("No se pudo abrir la ventana")
            }

        }
    }, 1000);*/

    const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
    const corsAnywhereUrl2 = 'https://cors-proxy.htmldriven.com/';
    var url = 'https://www.uam.mx/licenciaturas/pdfs/122_8_Lic_en_Ingenieria_en_Computacion_AZC.pdf';
    var descarga  = 'http://dis.um.es/~lopezquesada/documentos/IES_1415/IAW/curso/UT3/ejercicios.pdf';
    var descarga2 = 'https://zonaliados.mapfre.com.mx/Zonaliados.Negocio/Api/Impresion?num_cotizacion=2341018607327&descarga=1&paquete=T&formapago=T&paqsel=1&pagsel=&cot_sel=2341018607327';
  
    // Realizar una solicitud fetch para obtener el archivo
     fetch(corsAnywhereUrl+descarga2)
      .then(response => response.blob()) // Obtener el archivo como un blob
      .then(blob => {
        // Crear un objeto URL para el blob
        var blobURL = window.URL.createObjectURL(blob);
  
        // Crear un elemento de enlace (<a>) para la descarga
        var enlace = document.createElement('a');
        enlace.href = blobURL;
  
        // Nombre del archivo para la descarga
        enlace.download = 'planEstudio.pdf';
  
        // Simular un clic en el enlace para iniciar la descarga
        enlace.click();
  
        // Liberar el objeto URL después de la descarga
        window.URL.revokeObjectURL(blobURL);
      })
      .catch(error => {
        console.error('Error al descargar el archivo:', error);
      });


        /* // Crear un elemento <a> en JavaScript
        const enlaceDescarga = document.createElement('a');
    
        // Configurar el atributo href con la URL del archivo que deseas descargar
        enlaceDescarga.href = `${descarga2}`;
    
        // Configurar el atributo download con el nombre que deseas para el archivo
        enlaceDescarga.download = `1234.pdf`;
    
        // Hacer clic en el enlace para iniciar la descarga automáticamente
        enlaceDescarga.click(); */
    
    
}


  