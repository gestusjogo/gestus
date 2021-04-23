<?php

setlocale( LC_ALL, 'pt_BR', 'pt_BR.iso-8859-1', 'pt_BR.utf-8', 'portuguese' );
date_default_timezone_set( 'America/Sao_Paulo' );
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<script src="js/jquery.min.js"></script>
	<!-- ARQUIVOS JS -->
	<script type='text/javascript' src='js/multi_jogadores.js'></script>
	<script type='text/javascript' src='js/som.js'></script>
	<script type="text/javascript" src="js/play.js"></script>
	<script type="text/javascript" src="js/menu.js"></script>
	<script type="text/javascript" src="js/textos.js"></script>
	<script type='text/javascript' src='js/jogo_das_cores.js'></script>
	<script type='text/javascript' src='js/animation.js'></script>
	<script type='text/javascript' src='js/falas.js'></script>
	<script type='text/javascript' src='js/escala_likert.js'></script>
	<!-- ARQUIVOS CSS -->
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/style2.css">
	<link rel="stylesheet" type="text/css" href="css/bg.css">
	<link rel="stylesheet" type="text/css" href="css/style_inicio.css">
	<link rel="stylesheet" type="text/css" href="css/style_dialogo.css">
	<link rel="stylesheet" type="text/css" href="css/style_jogomemoria.css">
	<link rel="stylesheet" type="text/css" href="css/style_supermercado.css">
	<link rel="stylesheet" type="text/css" href="css/style_jogoerros.css">

	<script type="text/javascript" src="./js/swal.min.js"></script>
	<title>GESTUS</title>
</head>
<body>
	<div id="myCanvas" class="bg_inicio">
		<button class="som somativo somaqui"></button>
		<div id="fim_jogo" style="background-image: url('assets/images/fim.png'); height: 100%; ">
			<center><input type="button" style="margin-top: 350px;" class="voltar_cidade btn_alertas btn_alertas_sim" value=" Voltar para a cidade "></center>
		</div>
		<audio id="myAudio" autoplay>
			<source src="./assets/musica.mp3" type="audio/mpeg">
			</audio>
			<!-- Modal voltar inicio -->
			<div id="modal_voltar_cidade" class="modal">
				<div class="modal-content">
					<p class="text-center text-modal">Você tem certeza que deseja parar de jogar?</p>
					<div class="btns_confirmacao">
						<input type="button" id="close_voltar_cidade" class="btn_alertas btn_alertas_nao" value=" Não ">	
						<input type="button" class="voltar_cidade btn_alertas btn_alertas_sim" value=" Sim ">
					</div>
				</div>
			</div>
			<div id="modal_certificado" class="modal" style="display: block">
				<div class="modal-content">
					<p class="text-center text-modal">Seu certificado</p>
					<input type="button" class="voltar_cidade btn_alertas btn_alertas_sim" value=" Clique aqui para ver seu certificado ">
					
				</div>
			</div>
			<div id="modal_votacao" class="modal">
				<div class="modal-content">
					<p class="text-center text-modal">O que você achou dessa fase?</p>
					<div class="btns_escala">
						<div onclick="enviar_escala(1)"><img src="assets/images/pin.png"></div>
						<div onclick="enviar_escala(2)"><img src="assets/images/pin.png"></div>
						<div onclick="enviar_escala(3)"><img src="assets/images/pin.png"></div>
						<div onclick="enviar_escala(4)"><img src="assets/images/pin.png"></div>
						<div onclick="enviar_escala(5)"><img src="assets/images/pin.png"></div>
					</div>
				</div>
			</div>
			<button id="butt_pular" onclick="pular_falas()">PULAR</button>
			<!-- Modal repetir animação -->
			<div id="modal_voltar_menu" class="modal">
				<div class="modal-content">
					<p class="text-center text-modal">Você tem certeza que deseja voltar ao menu?</p>
					<div class="btns_confirmacao">
						<input type="button" id="fechar_modal_menu" class="btn_alertas btn_alertas_nao" value=" Não ">	
						<input type="button" id="voltar_menu" class="btn_alertas btn_alertas_sim" value=" Sim ">
					</div>
				</div>
			</div>
			
			<div id="modal_modo_jogo" class="modal">
				<div class="modal-content">
					<p class="text-center text-modal">Escolham o modo de jogo:</p>
					<div class="btns_confirmacao">
						<input type="button" id="juntos" class="btn_alertas btn_alertas_nao" value="Juntos ">	
						<input type="button" id="versus" class="btn_alertas btn_alertas_sim" value="Versus">
					</div>
				</div>
			</div>
			<div id="modal_feedback" class="modal">
				<div class="modal-content" style="height: 300px;">
					<p class="text-center text-modal" style="margin: 16px;">O que achou do jogo?</p>
					<textarea class="feedback_textarea" maxlength="1000"></textarea>						
					<div class="btns_confirmacao" style="margin-top: 10px;">
						<input type="button" id="feedback" style="font-size: 31px;" onclick="deixar_feedback()" class="btn_alertas btn_alertas_sim" value="Enviar">
						<input type="button" id="pular_feedback" onclick="pular_feedback()" style="font-size: 31px;" class="btn_alertas btn_alertas_sim" value="Pular" style="margin-top: 20px;">
					</div>
				</div>
			</div>
			
			<div id="modal_reiniciar_jogo" class="modal">
				<div class="modal-content">
					<p class="text-center text-modal"  style="margin: 16px;">Obrigado por jogar!</p>
					<div class="btns_confirmacao">
						<input type="button" id="reiniciar_jogo" style="margin-top: -30px;margin-bottom: 20px;" class="btn_alertas btn_alertas_sim" value="Reiniciar jogo">
						<input type="button" id="voltar_para_cidade" class="btn_alertas btn_alertas_sim" value="Voltar para cidade">	
					</div>
				</div>
			</div>
			<div class="pontuacao">
				<div class="jogador1 jogador_atual" style="position: absolute;top: 20%; font-family: AristaPro-Fat; src: url('../assets/fonts/AristaPro-Fat.otf'); border: solid transparent;padding: 10px;  font-size: 2.2vw"><p>Jogador 1</p><p style="margin: auto; text-align: center;">0</p></div>
				<div class="jogador2" style="position: absolute;top: 20%; font-family: AristaPro-Fat; src: url('../assets/fonts/AristaPro-Fat.otf'); border: solid transparent;padding: 10px;  font-size: 2.2vw"><p>Jogador 2</p><p style="margin: auto; text-align: center;">0</p></div>
			</div>
			<!-- Botão voltar cidade -->
			<button class="butt_voltar" id="butt_voltar_cidade" style="display: none"> VOLTAR </button>

			<div id="dialogo" style="display: none">
				<div class="dialogo_pers">JONAS</div>
				<div class="caixa_dialogo" onclick="falas();">
					<p id="fala"></p>
				</div>
				<img class="jonas_cutscene" src="assets/images/jonas.png">
				<div class="caixa_seta bounce" onclick="falas();"> 
					<img class="arrow" src="assets/images/arrow.png">
				</div>
			</div>
			<img class="jonas_cutscene_center" src="assets/images/jonas.png" style="display: none">
			<img class="marina_cutscene" src="assets/images/marina.png" style="display: none">
			<div id="animacao">
				<canvas id="animation"></canvas>
			</div>
			<!-- Tela menu -->
			<div id="menu">
				<button class="button_menu play_game" onclick="trocarTela('#tela_escolher_player','bg_fundo')"></button> 
				<button class="button_menu som somMenu somativo somaqui"></button>
				<button class="button_menu ajuda" onclick="return trocarTela('#tela_ajuda','bg_ajuda')"></button>
				<button class="button_menu infor" onclick="return trocarTela('#tela_infor','bg_infor')"></button>
				<!--<button class="button_menu infor" onclick="window.location.href='certificado/gerador.php?nome=Jonathan%20e%20Maria&idade=18%20e%2020';"></button>-->
			</div>

			<div class="tela" id="tela_escolher_player">
				<button class="butt_voltar" onclick="return trocarTela('#menu','bg_inicio')"> VOLTAR </button>
				<button class="btn_jogadores btn_j1" onclick=" multi_jogadores = false;return trocarTela('#tela1','bg_fundo')"> 1 jogador </button>
				<button class="btn_jogadores btn_j2" onclick=" multi_jogadores = true;return trocarTela('#tela_j1','bg_fundo')"> 2 jogadores </button>
			</div>

			<div class="tela" id="tela_ajuda">
				<button class="butt_voltar" onclick="return trocarTela('#menu','bg_inicio')"> VOLTAR </button>

			</div>

			<div class="tela" id="tela_infor">
				<button class="butt_voltar" onclick="return trocarTela('#menu','bg_inicio')"> VOLTAR </button>

			</div>

			<div class="tela" id="tela1">
				<button class="butt_voltar" onclick="return trocarTela('#tela_escolher_player','bg_fundo')"> VOLTAR </button>
				<form name="formulario" id="formulario_inicio">
					<div class="circulo_azul">
						<img id="pacote" src="assets/images/jogador.png">
					</div>
					<input type="text" autocomplete="off" name="nome" id="nome" placeholder="Nome" onkeypress="return isLetterKey(event)" onkeyup="animaLetra()">
					<input type="text" autocomplete="off" name="idade" id="idade" placeholder="Idade" min="1" max="3" onkeypress="return isNumberKey(event)" onkeyup="animaNumero()">
					<input type="button" value="Jogar" id="play" class="btn_jogadores play" onclick="if(validacoes()){ getDados(this);return trocarTela('#tela_casa','bg_casa')}">
				</form>
			</div>

			<div class="tela" id="tela_j1">
				<button class="butt_voltar" onclick="return trocarTela('#tela_escolher_player','bg_fundo')"> VOLTAR </button>

				<form name="formulario" id="formulario_inicio">
					<div class="circulo_rosa">
						<img id="pacote_j1" src="assets/images/jogador.png">
					</div>
					<input type="text" autocomplete="off" name="nome" id="nome_j1" placeholder="Nome" onkeypress="return isLetterKey(event)" onkeyup="animaLetra_j1()">
					<input type="text" autocomplete="off" name="idade" id="idade_j1" placeholder="Idade" min="1" onkeypress="return isNumberKey(event)" onkeyup="animaNumero_j1()">
					<input type="button" value="Próximo" class="btn_jogadores proximo" onclick="if(validacoes(1)){ return trocarTela('#tela_j2','bg_j2')}">
				</form>
			</div>

			<div class="tela" id="tela_j2">
				<button class="butt_voltar" onclick="return trocarTela('#tela_j1','bg_j1')"> VOLTAR </button>

				<form name="formulario" id="formulario_inicio">
					<div class="circulo_azul">
						<img id="pacote_j2" src="assets/images/jogador.png">
					</div>
					<input type="text" autocomplete="off" name="nome" id="nome_j2" placeholder="Nome" onkeypress="return isLetterKey(event)" onkeyup="animaLetra_j2()">
					<input type="text" autocomplete="off" name="idade" id="idade_j2" placeholder="Idade" min="1" onkeypress="return isNumberKey(event)" onkeyup="animaNumero_j2()">
					<input type="button" value="Jogar" id="play" class="btn_jogadores play" onclick="if(validacoes(2)){getDadosMulti();return trocarTela('#tela_casa','bg_casa')}">
				</form>
			</div>

			<!-- tela inicio -->
			<div class="tela" id="tela_casa">
				<div id="saudacoes" style="display: none">
					<div id="ini_oi" onclick="if(fim_animacao){saudacao_executada('oi'); executa_animacao('jonas','oi');}">Oi</div>
					<div id="ini_bd" onclick="if(fim_animacao){saudacao_executada('bom_dia'); executa_animacao('jonas','bom_dia');}">Bom dia</div>
					<div id="ini_bt" onclick="if(fim_animacao){saudacao_executada('boa_tarde'); executa_animacao('jonas','boa_tarde');}">Boa tarde</div>
					<div id="ini_bn" onclick="if(fim_animacao){saudacao_executada('boa_noite'); executa_animacao('jonas','boa_noite');}">Boa noite</div>
				</div>
				<div class="bounce">	
					<img id="seta" class="arrow2" onclick="proxima_fala();" src="assets/images/arrow.png">
				</div>

			</div>

			<!-- tela cidade -->
			<div class="tela" id="tela_cidade">
				<button class="butt_voltar" id="volta_menu" onclick="$('#modal_voltar_menu').show();"> MENU </button>
				<input type="button" class="pin" id="escola" onclick="return trocarTela('#tela_escola', 'bg_escola')">
				<img id="pin_escola" src="assets/images/pin.png">
				<input type="button" class="pin" id="supermercado" onclick="trocarTela('#tela_supermercado', 'bg_supermercado1')">
				<img id="pin_supermercado" src="assets/images/pin.png">
				<input type="button" class="pin" id="sorveteria" onclick="return trocarTela('#tela_sorveteria', 'bg_sorveteria')">
				<img id="pin_sorveteria" src="assets/images/pin.png">
				<input type="button" class="pin" id="fliperama" onclick="return trocarTela('#tela_fliperama', 'bg_fliperama')">
				<img id="pin_fliperama" src="assets/images/pin.png">
				<input type="button" class="pin" id="casa" onclick="return trocarTela('#tela_casa','bg_casa')">
				<img id="pin_casa" src="assets/images/pin.png">
				<input type="button" class="pin" id="praca" style="display: none" onclick="return trocarTela('#tela_praca','bg_praca')">
				<img id="pin_praca" src="assets/images/pin.png">
				<!--<input type="button" class="pin" id="parque" onclick="return trocarTela('#tela_parque','bg_parque')">
				<img id="pin_parque" src="assets/images/pin.png">-->
			</div>

			<!-- tela escola -->
			<div class="tela" id="tela_escola">
				<div id="game">
					<div class="card" id="card0">
						<div class="face back"></div>
						<div class="face front"></div>
					</div>
					<div class="card" id="card1">
						<div class="face back"></div>
						<div class="face front"></div>
					</div>
					<div class="card" id="card2">
						<div class="face back"></div>
						<div class="face front"></div>
					</div>
					<div class="card" id="card3">
						<div class="face back"></div>
						<div class="face front"></div>
					</div>
					<div class="card" id="card4">
						<div class="face back"></div>
						<div class="face front"></div>
					</div>
					<div class="card" id="card5">
						<div class="face back"></div>
						<div class="face front"></div>
					</div>
					<div class="card" id="card6">
						<div class="face back"></div>
						<div class="face front"></div>
					</div>
					<div class="card" id="card7">
						<div class="face back"></div>
						<div class="face front"></div>
					</div>
					<div class="card" id="card8">
						<div class="face back"></div>
						<div class="face front"></div>
					</div>
					<div class="card" id="card9">
						<div class="face back"></div>
						<div class="face front"></div>
					</div>
					<img id="match" src="assets/images/jogo_memoria/match.png" />

					<div id="gameOver">
						<img id="imgGameOver" src="assets/images/jogo_memoria/gameover.png" />
					</div>
				</div>
			</div>		

			<!-- tela supermercado -->
			<div class="tela" id="tela_supermercado">
				<!-- BOTÕES PRODUTOS -->			
				<input type="button" id="item1" class="item_lista" onclick="executa_animacao('jonas','maça');item_encontrado('.p1')">
				<input type="button" id="item2" class="item_lista" name="ovo" onclick="executa_animacao('jonas','ovo');item_encontrado('.p2')">
				<input type="button" id="item3" class="item_lista" name="agua" onclick="executa_animacao('jonas','agua');item_encontrado('.p3')">
				<input type="button" id="item4" class="item_lista" name="chocolate" onclick="executa_animacao('jonas','chocolate');item_encontrado('.p4')">
				<input type="button" id="item5" class="item_lista" name="queijo" onclick="executa_animacao('jonas','queijo');item_encontrado('.p5')">


				<!-- LISTA DE COMPRAS -->
				<div class="lista_supermercado">
					<ol>
						<li class="p1">Maçã</li>
						<li class="p2">Ovo</li>
						<li class="p3">Água</li>
						<li class="p4">Chocolate</li>
						<li class="p5">Queijo</li>
					</ol>
				</div>
				<img id="fim_super" src="assets/images/fim.png" />
			</div>

			<!-- tela sorveteria -->
			<div class="tela" id="tela_sorveteria">
				<div id="exibir_numero" class="modal-erros">
					<input type="button" id="close_numero">	
					<div class="modal-erros-content">
						<img id="imagem_erro" src="">
						<p class="text-center text-modal-erros" id="numero_erro"></p>
					</div>
				</div>
				<input type="button" id="erro0" class="erros" onclick="erro_aqui('#x0')">
				<input type="button" id="erro1" class="erros" onclick="erro_aqui('#x1')">
				<input type="button" id="erro2" class="erros" onclick="erro_aqui('#x2')">
				<input type="button" id="erro3" class="erros" onclick="erro_aqui('#x3')">
				<input type="button" id="erro4" class="erros" onclick="erro_aqui('#x4')">
				<input type="button" id="erro5" class="erros" onclick="erro_aqui('#x5')">
				<input type="button" id="erro6" class="erros" onclick="erro_aqui('#x6')">
				<input type="button" id="erro7" class="erros" onclick="erro_aqui('#x7')">
				<input type="button" id="erro8" class="erros" onclick="erro_aqui('#x8')">
				<input type="button" id="erro9" class="erros" onclick="erro_aqui('#x9')">
				<img class="imagem_erro" id="x0" src="assets/images/cross.png" >
				<img class="imagem_erro" id="x1" src="assets/images/cross.png" >
				<img class="imagem_erro" id="x2" src="assets/images/cross.png" >
				<img class="imagem_erro" id="x3" src="assets/images/cross.png" >
				<img class="imagem_erro" id="x4" src="assets/images/cross.png" >
				<img class="imagem_erro" id="x5" src="assets/images/cross.png" >
				<img class="imagem_erro" id="x6" src="assets/images/cross.png" >
				<img class="imagem_erro" id="x7" src="assets/images/cross.png" >
				<img class="imagem_erro" id="x8" src="assets/images/cross.png" >
				<img class="imagem_erro" id="x9" src="assets/images/cross.png" >
			</div>

			<!-- tela fliperama -->
			<div class="tela" id="tela_fliperama">
			</div>

			<!-- tela jogo das cores -->
			<div class="tela" id="tela_fliperama2">
				<div id="score_cc"> 
					<a id="score_cc_text">Pontuação: 000</a>
				</div>
				<div id="cores">
					<div class="cor" id="amarelo" onclick="executa_animacao('jonas','amarelo');"></div>
					<div class="cor" id="verde" onclick="executa_animacao('jonas','verde');"></div>
					<div class="cor" id="azul" onclick="executa_animacao('jonas','azul');"></div>
					<div class="cor" id="vermelho" onclick="executa_animacao('jonas','vermelho');"></div>
				</div>
				<canvas id="viewport" width="640" height="480"></canvas>
				<img id="fim_fliper" src="assets/images/fim.png" />
			</div>

			<!-- tela praca -->
			<div class="tela bg_blur" id="tela_praca">
				<div class="formulario_nome">
					<form name="formulario" id="form_nome_libras">
						<input type="text" name="nome" id="nome_libras" placeholder="Nome" disabled="">
					</form>
					<div class="teclado_libras">
						<button class="tecla_letra" value='a'></button>
						<button class="tecla_letra" value='b'></button>
						<button class="tecla_letra" value='c'></button>
						<button class="tecla_letra" value='d'></button>
						<button class="tecla_letra" value='e'></button>
						<button class="tecla_letra" value='f'></button>
						<button class="tecla_letra" value='g'></button>
						<button class="tecla_letra" value='h'></button>
						<button class="tecla_letra" value='i'></button>
						<button class="tecla_letra" value='j'></button>
						<button class="tecla_letra" value='k'></button>
						<button class="tecla_letra" value='l'></button>
						<button class="tecla_letra" value='m'></button>
						<button class="tecla_letra" value='n'></button>
						<button class="tecla_letra" value='o'></button>
						<button class="tecla_letra" value='p'></button>
						<button class="tecla_letra" value='q'></button>
						<button class="tecla_letra" value='r'></button>
						<button class="tecla_letra" value='s'></button>
						<button class="tecla_letra" value='t'></button>
						<button class="tecla_letra" value='u'></button>
						<button class="tecla_letra" value='v'></button>
						<button class="tecla_letra" value='w'></button>
						<button class="tecla_letra" value='x'></button>
						<button class="tecla_letra" value='y'></button>
						<button class="tecla_letra" value='z'></button>
						<button class="tecla_letra" value='ç'></button>
						<button class="tecla_espaco">Espaço</button>
						<button class="tecla_apagar" onclick="teclado_libras_apagar('nome')">Apagar</button>
					</div>
					<img class="tecla_enviar" onclick="teclado_libras_enviar('nome')" src="assets/images/arrow line.png">
				</div>
				<div class="formulario_idade">
					<form name="formulario" id="form_idade_libras">
						<input type="text" name="nome" id="idade_libras" placeholder="Idade" disabled="">
					</form>
					<div class="teclado_libras_numero">
						<button class="tecla_numero" value='0'></button>
						<button class="tecla_numero" value='1'></button>
						<button class="tecla_numero" value='2'></button>
						<button class="tecla_numero" value='3'></button>
						<button class="tecla_numero" value='4'></button>
						<button class="tecla_numero" value='5'></button>
						<button class="tecla_numero" value='6'></button>
						<button class="tecla_numero" value='7'></button>
						<button class="tecla_numero" value='8'></button>
						<button class="tecla_numero" value='9'></button>
						<button class="tecla_apagar tecla_apagar_idade" onclick="teclado_libras_apagar('idade')">Apagar</button>
					</div>
					<img class="tecla_enviar" onclick="teclado_libras_enviar('idade')" src="assets/images/arrow line.png">
				</div>
			</div>
			<div class="tela" id="tela_parque">
				<div id="libras_ambiental" style="position: initial; display: none">
					<div id="libras_lixeiras">
						<div id="libras_lixeira_verde" class="lixeira lixo_verde"  onclick="executa_animacao('jonas','vidro');ambiental_executada('vidro');"></div>
						<div id="libras_lixeira_vermelho" class="lixeira lixo_vermelho" onclick="executa_animacao('jonas','plastico');ambiental_executada('plastico');"></div>
						<div id="libras_lixeira_amarelo" class="lixeira lixo_amarelo" onclick="executa_animacao('jonas','metal');ambiental_executada('metal');"></div>
						<div id="libras_lixeira_azul" class="lixeira lixo_azul" onclick="executa_animacao('jonas','papel');ambiental_executada('papel');"></div>
					</div>
					<div class="bounce">	
						<img id="seta2" class="arrow2" onclick="mostrar_animacoes = true; proxima_fala();" src="assets/images/arrow.png">
					</div>
				</div>
				<div id="jogo_ambiental" style="position: initial; display: none">
						<div id="lixo">
							<div id="lixo_imagem"></div>
							<div id="lixo_inicio"></div>
							<div id="lixo_fim"></div>
						</div>
					<div id="lixeiras">
						<div id="lixeira_verde" class="lixeira lixo_verde"></div>
						<div id="lixeira_vermelho" class="lixeira lixo_vermelho"></div>
						<div id="lixeira_amarelo" class="lixeira lixo_amarelo"></div>
						<div id="lixeira_azul" class="lixeira lixo_azul"></div>
					</div>
				</div>
				<div id="jogo_ambiental_multiplayer" style="position: initial; display: none">
					<div class="parte_jogador1">
						<div class="lixo" id="lixo1">
							<div id="lixo_imagem1"></div>
							<div id="lixo_inicio"></div>
							<div id="lixo_fim"></div>
						</div>
						<div id="lixeiras_multiplayer">
							<div id="lixeira_verde" class="lixeira_multiplayer lixo_verde"></div>
							<div id="lixeira_vermelho" class="lixeira_multiplayer lixo_vermelho"></div>
							<div id="lixeira_amarelo" class="lixeira_multiplayer lixo_amarelo"></div>
							<div id="lixeira_azul" class="lixeira_multiplayer lixo_azul"></div>
						</div>
					</div>
					<div id="divisor" style="width: 4px; height: 562px; position: absolute; left: 498px;background-color: black;"></div>
					<div class="parte_jogador2">
						<div class="lixo" id="lixo2">
							<div id="lixo_imagem2"></div>
							<div id="lixo_inicio"></div>
							<div id="lixo_fim"></div>
						</div>
						<div id="lixeiras_multiplayer">
							<div id="lixeira_verde" class="lixeira_multiplayer lixo_verde"></div>
							<div id="lixeira_vermelho" class="lixeira_multiplayer lixo_vermelho"></div>
							<div id="lixeira_amarelo" class="lixeira_multiplayer lixo_amarelo"></div>
							<div id="lixeira_azul" class="lixeira_multiplayer lixo_azul"></div>
						</div>
					</div>
				</div>
			</div>
			<iframe id="envio" style="display: none;"></iframe>
		</div>
		<!-- ARQUIVOS JS -->
		<script type="text/javascript" src="js/textos.js"></script>
		<script type="text/javascript" src="js/jogo_supermercado.js"></script>
		<script type="text/javascript" src="js/jogo_memoria.js"></script>
		<script type="text/javascript" src="js/jogo_erros.js"></script>
		<script type="text/javascript" src="js/modal.js"></script>
		<script type="text/javascript" src="js/praca.js"></script>
		<script type="text/javascript" src="js/ambiental.js"></script>
		<script type="text/javascript" src="js/ambiental_multiplayer_versus.js"></script>
	</body>
	</html>
