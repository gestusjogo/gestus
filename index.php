<?php 
// abre o arquivo colocando o ponteiro de escrita no final
$arquivo = fopen('meuarquivo.txt','r+');
if ($arquivo) {
	if (!fwrite($arquivo, 'Novo conteúdo')) die('Não foi possível atualizar o arquivo.');
	echo 'Arquivo atualizado com sucesso';
	fclose($arquivo);
}
?>
