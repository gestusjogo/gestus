<?php
setlocale( LC_ALL, 'pt_BR', 'pt_BR.iso-8859-1', 'pt_BR.utf-8', 'portuguese' );
date_default_timezone_set( 'America/Sao_Paulo' );
require('fpdf/alphapdf.php');
require('PHPMailer/class.phpmailer.php');

$nome     =  utf8_decode($_GET['nome']);
$idade = $_GET['idade'];

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

// Orientação Landing Page ///
$pdf->AddPage('L');

$pdf->SetLineWidth(1.5);


// desenha a imagem do certificado
$pdf->Image('certificado.jpg',0,0,297.5);

// opacidade total
$pdf->SetAlpha(1);

// Mostrar texto no topo
$pdf->SetFont('Arial', '', 15); // Tipo de fonte e tamanho
$pdf->SetXY(109,46); //Parte chata onde tem que ficar ajustando a posição X e Y
$pdf->MultiCell(265, 10, $texto1, '', 'L', 0); // Tamanho width e height e posição

// Mostrar o nome
$pdf->AddFont('Quattrocento','','Quattrocento-Regular.php');
$pdf->AddFont('Bukhari Script','','Bukhari Script.php');
$pdf->SetFont('Bukhari Script', '', 40); // Tipo de fonte e tamanho
$pdf->SetXY(20,90); //Parte chata onde tem que ficar ajustando a posição X e Y
$pdf->MultiCell(265, 10, $nome, '', 'C', 0); // Tamanho width e height e posição

// Mostrar o corpo
$pdf->SetFont('Quattrocento', '', 20); // Tipo de fonte e tamanho
$pdf->SetXY(10,110); //Parte chata onde tem que ficar ajustando a posição X e Y
$pdf->MultiCell(0, 10, $texto2, '', 'C', 0); // Tamanho width e height e posição

// Mostrar a data no final
$pdf->SetFont('Arial', '', 15); // Tipo de fonte e tamanho
$pdf->SetXY(32,172); //Parte chata onde tem que ficar ajustando a posição X e Y
$pdf->MultiCell(165, 10, $texto3, '', 'L', 0); // Tamanho width e height e posição

$pdfdoc = $pdf->Output('', 'S');

$certificado="arquivos/111111.pdf"; //atribui a variável $certificado com o caminho e o nome do arquivo que será salvo (vai usar o CPF digitado pelo usuário como nome de arquivo)
$pdf->Output($certificado,'F'); //Salva o certificado no servidor (verifique se a pasta "arquivos" tem a permissão necessária)
// Utilizando esse script provavelmente o certificado ficara salvo em www.seusite.com.br/gerar_certificado/arquivos/999.999.999-99.pdf (o 999 representa o CPF digitado pelo usuário)

$pdf->Output(); // Mostrar o certificado na tela do navegador

?>
