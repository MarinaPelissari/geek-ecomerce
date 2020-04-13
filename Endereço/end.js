$(document).ready(function() {
    jQuery.validator.setDefaults({
        debug: true,
        success: "valid"
    });
    $("#formEnd").validate({
        rules: {
            bar: {
                required: true,
            },

            end: {
                required: true,
            },
            cid: {
                required: true,
            },
            est: {
                required: true,

            },
            pais: {
                required: true,

            },

            num: {
                required: true
            },

            cep: {
                required: true,
                minlength: 8,
                maxlength: 8
            },
        },
        messages: {
            bar: "Informe seu bairro!",
            end: "Informe seu endereço!",
            num: "Informe o número da casa/bloco/apartamento!",
            cep: "Informe um CEP válido!",
            pais: "Informe seu País!",
            est: "Informe seu Estado!",
            cid: "Informe sua Cidade!"

        },
    });


});