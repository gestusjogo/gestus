<?php
setlocale( LC_ALL, 'pt_BR', 'pt_BR.iso-8859-1', 'pt_BR.utf-8', 'portuguese' );
date_default_timezone_set( 'America/Sao_Paulo' );
require('fpdf/fpdf.php');
require('fpdf/alphapdf.php');
require('PHPMailer/class.phpmailer.php');

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


$pdf = new AlphaPDF();

echo $nome;
echo $idade;
?>
