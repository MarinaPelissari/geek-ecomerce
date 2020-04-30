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

            civil: {
                required: true,
            },

            tel: {
                required: true,
                minlength: 10,
                maxlength: 10
            },

            cel: {
                required: true,
                minlength: 11,
                maxlength: 11
            }

        },
        messages: {
            email: "Informe um email válido!",
            nome: "Informe seu primeiro nome!",
            sobrenome: "Informe seu sobrenome!",
            nasc: "Informe a data de nascimento!",
            senha: "Informe uma senha válida!",
            senha2: "As senhas não se correspondem!",
            cel: "Informe o celular com DDD",
            tel: "Informe o telefone com DDD",
            civil: "Informe o estado Civil"

        },

        submitHandler: function(form) {
            form.submit();
        }

    });


});
