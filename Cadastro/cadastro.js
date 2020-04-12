$(document).ready(function() {
    jQuery.validator.setDefaults({
        debug: true,
        success: "valid"
    });
    $("#formCadastro").validate({
        rules: {
            email: {
                required: true,
            },
            nome: {
                required: true,
                minWords: 1,
                maxWords: 1
            },
            sobrenome: {
                required: true,
                minWords: 1,
                maxWords: 1
            },

            nasc: {
                required: true
            },

            senha: {
                required: true,
                minlength: 6,
                maxlength: 6
            },

            senha2: {
                required: true,
                equalTo: "#senha",
            },

            cpf: {
                required: true,
                minlength: 11,
                maxlength: 11,
                cpf: "000.000.000-00"

            },

            rg: {
                required: true,
                minlength: 9,
                maxlength: 9,

            }

        },
        messages: {
            email: "Informe um email válido!",
            nome: "Informe seu primeiro nome!",
            sobrenome: "Informe seu sobrenome!",
            nasc: "Informe a data de nascimento!",
            senha: "Informe uma senha válida!",
            senha2: "As senhas não se correspondem!",
            cpf: "Informe um CPF válido!",
            rg: "Informe um RG válido!"

        },
    });


});

$(document).ready(function() {
    $("#cpf").mask("999.999.999-99");
});