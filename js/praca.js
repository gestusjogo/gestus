$("#voltar_para_cidade").click(function(){
	trocarTela('#tela_cidade','bg_menu');
	$("#modal_reiniciar_jogo").hide();
});
$("#reiniciar_jogo").click(function(){
	trocarTela('#menu','bg_inicio');
	voltar_menu();
	primeira_vez_casa = true;
	first_time_inicio = true;
	fase_fliperama_completa = false;
	fase_supermercado_completa = false;
	fase_casa_completa = false;
	fase_sorveteria_completa = false;
	fase_escola_completa = false;
	fase_liberada = false;
	$("#modal_reiniciar_jogo").hide();
	$("#nome").val('');
	$("#idade").val('');
});
function teclado_libras_apagar(campo){
	if(campo == 'nome'){
		var nome_libras = document.getElementById('nome_libras');
		nome_libras.value = nome_libras.value.substr(0,nome_libras.value.length-1);
	}else{
		var idade_libras = document.getElementById('idade_libras');
		idade_libras.value = idade_libras.value.substr(0,idade_libras.value.length-1);
	}
}
function teclado_libras_enviar(campo){
	$("#myCanvas").removeClass('bg_praca_fundo');
	if(jogador_atual.includes(1)){
		if(campo == 'nome'){
			if($("#nome_libras").val().toLowerCase() == nome){
				falas();
			}else{
				praca_parte = 'erro_nome';
				falas();
			}
		}else{
			if($("#idade_libras").val().toLowerCase() == idade){
				falas();
			}else{
				praca_parte = 'erro_idade';
				falas();
			}
		}
	}else if(jogador_atual.includes(2)){
		if(campo == 'nome'){
			if($("#nome_libras").val().toLowerCase() == nome2){
				falas();
			}else{
				praca_parte = 'erro_nome';
				falas();
			}
		}else{
			if($("#idade_libras").val().toLowerCase() == idade2){
				falas();
			}else{
				praca_parte = 'erro_idade';
				falas();
			}
		}
	}
}
$(".tecla_espaco").click(function(){
	document.getElementById('nome_libras').value += ' ';
});
$(".tecla_numero").click(function(){
	document.getElementById('idade_libras').value += $(this).val();
});
$(".tecla_letra").click(function(){
	document.getElementById('nome_libras').value += $(this).val();
});

$( ".tecla_letra" ).each(function() {
  $( this ).css('background-image',"url('assets/images/alfabeto/teclado/"+$(this).val().toUpperCase()+".png')");
});
$( ".tecla_numero" ).each(function() {
  $( this ).css('background-image',"url('assets/images/numeros/teclado/"+$(this).val()+".png')");
});
