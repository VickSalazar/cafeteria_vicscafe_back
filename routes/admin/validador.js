var cantidad = "cantidad";
var error_campo_requerido = "Campo requerido";
var error_campo_longitud = "El campo debe tener hasta " + cantidad + " caracteres";

async function validarNovedades(obj) {
    let obj_error = {
        error: false, 
        error_titulo: false,       
        error_subtitulo: false,
        error_cuerpo: false,
        message_titulo: " ",
        message_subtitulo: " ",
        message_cuerpo: " "        
    }  

    // validar título
    if ((obj.titulo == '') || (obj.titulo.trim() == '')) {       
        obj_error.message_titulo = error_campo_requerido;
    } else {
        obj.titulo = obj.titulo.trim();
        if (obj.titulo.length > 250) {
            obj_error.message_titulo = error_campo_longitud.replace(cantidad, "250");            
        }
    }        

    // validar subtítulo
    if ((obj.subtitulo == '') || (obj.subtitulo.trim() == '')) {       
        obj_error.message_subtitulo = error_campo_requerido;        
    } else {
        obj.subtitulo = obj.subtitulo.trim();
    }

    // validar cuerpo
    if ((obj.cuerpo == '') || (obj.cuerpo.trim() == '')) {
        obj_error.message_cuerpo = error_campo_requerido;        
    } else {
        obj.cuerpo = obj.cuerpo.trim();
    }

    // cargar cada error boolean
    obj_error.error_titulo    = (obj_error.message_titulo.trim() != '');
    obj_error.error_subtitulo = (obj_error.message_subtitulo.trim() != '');
    obj_error.error_cuerpo    = (obj_error.message_cuerpo.trim() != '');

    // cargar error general boolean
    obj_error.error = obj_error.error_titulo  || 
                      obj_error.error_subtitulo || 
                      obj_error.error_cuerpo;
  

    return 	obj_error;
}

module.exports = { validarNovedades }