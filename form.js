$(document).ready(function(){
    
    $('#btnSend').click(function(){
        
        var errores = '';

        //Validado de nombre
        if( $('#names').val() == ''){
            errores += '<p>Escriba un nombre</p>';
            $('#names').css("border-bottom-color", "red")
        } else {
            $('#names').css("border-bottom-color", "#41f321")
        }

        //Validado de mail
        if( $('#email').val() == ''){
            errores += '<p>Ingrese un correo</p>';
            $('#email').css("border-bottom-color", "red")
        } else {
            $('#email').css("border-bottom-color", "#41f321")
        }

        //Validado de mensaje
        if( $('#mensaje').val() == ''){
            errores += '<p>Escriba un mensaje</p>';
            $('#mensaje').css("border-bottom-color", "red")
        } else {
            $('#mensaje').css("border-bottom-color", "#41f321")
        }

        //Mensaje de error
        if( errores == '' == false){
            var mensajeModal = '<div class="modal-wrap">'+
                                    '<div class="mensaje-error">'+
                                        '<h3>Coloca datos válidos</h3>'+
                                        errores+
                                        '<span id="btnClose">Cerrar</span>'+
                                    '</div>'+
                                '</div>'
            $('body').append(mensajeModal);                              
        }

        //Cerrar Alerta
        $('#btnClose').click(function(){
            $('.modal-wrap').remove();
        });

    });

});
