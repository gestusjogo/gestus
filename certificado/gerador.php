<?php


// --------- Variáveis do Formulário ----- //
// $email    = $_POST['email'];
// $nome     = utf8_decode($_POST['nome']);
// $cpf      = $_POST['cpf'];
$email    = 'jonathanmonteirodev@gmail.com';
$nome     =  'teste';
$cpf      = '05109064350';
$idade = 12;

// --------- Variáveis que podem vir de um banco de dados por exemplo ----- //
$pessoa  = "";
$curso    = "Enactus UFC";
$data = new DateTime();
$data = ($data->sub(new DateInterval('PT3H')))->format('d/m/Y');
$carga_h  = "8 horas";


$texto1 = '';
$texto2 = utf8_decode("Certificamos que ".$nome.", de ".$idade." anos,\n completou com sucesso o jogo Gestus,\n ferramenta voltada para apresentar LIBRAS\n a crianças ouvintes no dia ".$data.".");
$texto3 = '';


echo $nome;
echo $idade;
?>
