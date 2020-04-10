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
        },
        messages: {
            email: "Informe o email correto!",

        },
    });
});