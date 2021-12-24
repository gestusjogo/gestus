//MODAL REPETIR ANIMACAO
$("#fechar_modal_menu").click(function(){
  $('#modal_voltar_menu').hide();
});

$("#voltar_menu").click(function(){
  $('#modal_voltar_menu').hide();
  voltar_menu();
  primeira_vez_casa = true;
  primeira_vez_cidade = true;
  return trocarTela('#menu','bg_inicio');
});

function fecharModalAnimacao(){
  switch(tela_atual){
    case '#tela_casa':
      if($("#dialogo").css('display') != "block"){
        $(".jonas_cutscene_center").show();
      }
      fim_animacao = true;
      if (saudacoes_finalizadas) {
        $("#seta").show();
        saudacoes_fim = true;
        fase_casa_completa = true;
        atualizar_andamento(id_usuario,'Inicio');
        if(multi_jogadores)
            atualizar_andamento(id_usuario2, 'Inicio');
        console.log(id_usuario);
      }
    break;
    case '#tela_parque':
      fim_animacao = true;
      $("#libras_ambiental").show();
      if (lixos_finalizadas) {
        $("#seta2").show();
      }
    break;
    case '#tela_fliperama2':      
      $("#viewport").show();
      $("#cores").show();
    break;
    case '#tela_supermercado':
      $(".item_lista").show();
      if(itens_coletados.length == 5) {
        fim_fase = true;
        itens_coletados = [];
        falas();
      }
    break;
    case '#tela_praca':
      if(praca_parte == 'qual_nome'){
        falas();
        $(".marina_cutscene").show();
      }else if(praca_parte == 'qual_idade'){
        $(".marina_cutscene").show();
        falas();
      }else if(praca_parte == 'prazer_conhecer'){
        $(".marina_cutscene").show();
        praca_parte = 'despedida';
        falas();
      }else if(praca_parte == 'despedida'){
        $("#modal_feedback").show();
      }
    break;
  }
  $("#animacao").hide();
}
function mostrarModalAnimacao(){
  if(temAnimacao){
    $('#modal_repetir_animacao').show();
  }else{
    fecharModalAnimacao();
  }
}

$("#fim_jogo").hide();
//MODAL VOLTAR CIDADE
$("#butt_voltar_cidade").click(function(){
  $("#modal_modo_jogo").hide();
  $("#modal_voltar_cidade").show();
  clearInterval(fase_ambiental);
});
$(".voltar_cidade").click(function(){
  trocarTela('#tela_cidade', 'bg_menu');
  modo_jogo = null;
  repetir_escola = false;
  $("#fim_jogo").hide();
  $("#modal_voltar_cidade").hide();
  if(jogando_ambiental != null){
    parar_ambiental_multiplayer();
  }
});
$("#close_voltar_cidade").click(function(){
  $("#modal_voltar_cidade").hide();  
});

$("#juntos").click(function(){
  $("#modal_modo_jogo").hide();
  modo_jogo = "juntos";
  repetir_fase = true;
  fim_fase = false;
  falas();
});
$("#versus").click(function(){
  $("#modal_modo_jogo").hide();
  modo_jogo = "versus";
  repetir_fase = true;
  fim_fase = false;
  falas();
});