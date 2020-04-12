$(document).ready(function() {
    jQuery.validator.setDefaults({
        debug: true,
        success: "valid"
    });
    $("#formPag").validate({
        rules: {
            nome: {
                required: true,
            },

            venc: {
                required: true
            },

            cpf: {
                required: true,
                minlength: 11,
                maxlength: 11,

            },
            ncard: {
                required: true,
                minlength: 16,
                maxlength: 16,
            },
            seg: {
                required: true,
                minlength: 3,
                maxlength: 3,
            }

        },
        messages: {
            nome: "Informe o nome do portador!",
            venc: "Informe a data de validade do cartão!",
            cpf: "Informe um CPF válido!",
            ncard: "Informe o número do cartão!",
            seg: "Informe o código de segurança!"
        },
    });
});