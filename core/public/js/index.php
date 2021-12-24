<?php
    echo "Hello gesters";    
?>
<html>
    <head></head>
    <body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>
        armazenar_dados_single('Jonathan',12);
        armazenar_dados_multi('Jonathan',12,'Tiago',18);
        var id_usuario;
        var id_usuario2;
        function armazenar_dados_single(nome, idade){
            dados_result = {
                nome: nome,
                idade: idade
            };
            $.ajax({
                url: "usuario_ajax.php?acao=inserir_single",
                type: "POST",
                data: dados_result,
                cache: false,
                success: function (data) {
                    console.log(data);
                    id_usuario = data;
                },
                error: function (err, exception) {
                    console.log(err.responseText);
                }
            });
        }
        function armazenar_dados_multi(nome, idade, nome2, idade2){
            dados_result = {
                nome: nome,
                idade: idade,
                nome2: nome2,
                idade2: idade2,
            };
            $.ajax({
                url: "usuario_ajax.php?acao=inserir_multi",
                type: "POST",
                data: dados_result,
                cache: false,
                success: function (data) {
                    console.log(data);
                    var ids = data.split(',');
                    id_usuario = ids[0];
                    id_usuario2 = ids[1];
                },
                error: function (err, exception) {
                    console.log(err.responseText);
                }
            });
        }
    </script>

    </body>
</html>