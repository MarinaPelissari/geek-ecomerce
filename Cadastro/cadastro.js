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