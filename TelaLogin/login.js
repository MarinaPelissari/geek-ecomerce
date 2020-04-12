$(document).ready(function() {

    jQuery.validator.setDefaults({
        debug: true,
        success: "valid"
    });
    $("#formLogin").validate({
        rules: {
            email: {
                required: true,
            },

            senha: {
                required: true,
                minlength: 6,
                maxlength: 6
            }
        },
        messages: {
            email: "Informe um email válido!",
            senha: "Informe uma senha com 6 caracteres!"

        }

    });


});