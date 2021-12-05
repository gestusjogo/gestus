	var cor_lixo = '';
	var altura_lixeira = 0;
	var movimento_lateral = 0;
	var ambiental_contador = 0;
	var contador_rotacao = 0;
	var ambiental_parte = 'inicio';
	var lixos = ['vermelho','azul','amarelo','verde'];
	var lixeiras = {
		'lixeira_vermelho' : {
			'min' : getInfo('lixeira_vermelho','left'),
			'max' : getInfo('lixeira_vermelho','left') + 150
		},
		'lixeira_azul' : {
			'min' : getInfo('lixeira_azul','left'),
			'max' : getInfo('lixeira_azul','left') + 150
		},
		'lixeira_amarelo' : {
			'min' : getInfo('lixeira_amarelo','left'),
			'max' : getInfo('lixeira_amarelo','left') + 150
		},
		'lixeira_verde' : {
			'min' : getInfo('lixeira_verde','left'),
			'max' : getInfo('lixeira_verde','left') + 150
		}
	}
	var pontuacao = {
		'vermelho' : 0,
		'azul' : 0,
		'amarelo' : 0,
		'verde' : 0,
		'erros' : 0
	}
	var velocidade_caida = 2;
	ambiental_play = false;
	var finalizado = false;
	function iniciar_ambiental(){
		ambiental_contador = 0;
		fase_ambiental = setInterval(function(){
			
			$("#myCanvas").addClass("bg_parque_blur");
			$("#myCanvas").removeClass("bg_parque");

			if(!multi_jogadores || modo_jogo == 'juntos'){
				if(ambiental_contador <= 1){
					if(getInfo('lixo','marginTop') <= 330){
						if(ambiental_play){
							va = altura_lixeira+'px';
							$("#lixo").css({'marginTop' : va, WebkitTransform: 'rotate('+contador_rotacao+'deg)'});
							altura_lixeira += velocidade_caida;
						}
					}else{
						ondeCaiu();	
					}
				}else{
					if(!finalizado){
						$('#lixo').hide();	
						fim_fase = true;
						finalizado = !finalizado;
						ambiental_parte = 'final';
						falas();
						clearInterval(fase_ambiental);
					}
				}
				velocidade_caida = 2;
				console.log(cor_lixo);
				if(!multi_jogadores || cores_jogador2.includes(cor_lixo)){
					if(tecla_jogador2 == 40 || tecla_jogador2 == 39 || tecla_jogador2 == 37){
						if(tecla_jogador2 == 40){
							velocidade_caida = 10;
						}
						if(tecla_jogador2 == 39){
							movimento_lateral += 10;
						}
						if(tecla_jogador2 == 37){
							movimento_lateral -= 10;
						}
						movimento_lateral = limitacoes(movimento_lateral);
						va2 = movimento_lateral+'px';	
						$("#lixo").animate({ left: va2}, 10, function(){
							semMeios();
						});		
					}
				}
				if(!multi_jogadores || cores_jogador1.includes(cor_lixo)){
					if(tecla_jogador1 == 83 || tecla_jogador1 == 68 || tecla_jogador1 == 65){
						if(tecla_jogador1 == 83){
							velocidade_caida = 10;
						}
						if(tecla_jogador1 == 68){
							movimento_lateral += 10;
						}
						if(tecla_jogador1 == 65){
							movimento_lateral -= 10;
						}
						movimento_lateral = limitacoes(movimento_lateral);
						va1 = movimento_lateral+'px';	
						$("#lixo").animate({ left: va1}, 10, function(){
							semMeios();
						});		
					}
				}
			}
			contador_rotacao+= 2;
		}, 24);
	}

	$(document).keyup(function(event){
		if(event.which == tecla_jogador1){
			tecla_jogador1 = null;
		}
		if(event.which == tecla_jogador2){
			tecla_jogador2 = null;
		}
	});
	$(document).keydown(function(event){

		if(event.which == 32){
			ambiental_play = !ambiental_play;
		}

		if(event.which == 40 || event.which == 39 || event.which == 37){
			tecla_jogador2 = event.which;
		}

		if(event.which == 83 || event.which == 68 || event.which == 65){
			tecla_jogador1 = event.which;
		}
	});
	function semMeios(){
		
		if(!multi_jogadores || modo_jogo == 'juntos'){
			
			var inicio = 0;
			var fim = 0;
			var divisor = 0;
			var distancia_inicio = 0;
			var distancia_fim = 0;
			for(var i = 0; i < lixos.length; i++){
				if(getInfo('lixo','left') > lixeiras['lixeira_'+lixos[i]]['min'] && getInfo('lixo','left') < lixeiras['lixeira_'+lixos[i]]['max']){
					inicio = lixos[i];
					divisor = getInfo('lixeira_'+lixos[i],'left') + 150;
					break;
				}
			}
			for(var i = 0; i < lixos.length; i++){
				if((getInfo('lixo','left')+40) > lixeiras['lixeira_'+lixos[i]]['min'] && (getInfo('lixo','left')+40) < lixeiras['lixeira_'+lixos[i]]['max']){
					fim = lixos[i];
					if(inicio == 0)
					divisor = getInfo('lixeira_'+lixos[i],'left');
					break;
				}
			}
			if(inicio != fim && divisor != 0){
				distancia_inicio = divisor-getInfo('lixo','left');
				distancia_fim = (divisor-(getInfo('lixo','left')+40))*-1;
				if(distancia_inicio < distancia_fim){
					var val = (movimento_lateral+distancia_inicio + 1)+'px';
					$("#lixo").css({'left' : val});
				}else{
					var val = (movimento_lateral-distancia_fim)+'px';
					$("#lixo").css({'left' : val});
				}
			}
		}
	}
	function get_random_cores(){
		var cor1 = lixos[Math.floor(Math.random() * 4)];
		var cor2 = '';
		do{
			cor2 = lixos[Math.floor(Math.random() * 4)];
		}while(cor2 == cor1);
		var cores2  = ['vermelho','azul','amarelo','verde'];
		var cores = [cor1, cor2];
		cores2.splice(cores2.indexOf(cores[0]), 1);
		cores2.splice(cores2.indexOf(cores[1]), 1);
		return {
			'jogador1' : cores,
			'jogador2' : cores2,
		}
	}

 function ambiental_reiniciar(){
		
		$('#lixo').show();
		$("#myCanvas").addClass("bg_parque_blur");
		$("#myCanvas").removeClass("bg_parque");
		if(!multi_jogadores || modo_jogo == 'juntos'){
			var inicioAleatoria = Math.floor(Math.random() * 940);	
			var tipo = Math.floor(Math.random() * 3);	
			tipo++;
			console.log(tipo);
			movimento_lateral = inicioAleatoria;
			movimento_lateral = limitacoes(movimento_lateral);
			va = movimento_lateral+'px';
			if(cor_lixo != ''){
				$('#lixo_imagem').removeClass("lixo_"+cor_lixo);
				$('#lixo').removeClass("lixo_"+cor_lixo);
				$('#lixo_imagem').removeClass("tipo1");
				$('#lixo_imagem').removeClass("tipo2");
				$('#lixo_imagem').removeClass("tipo3");
			}
			cor_lixo = lixos[Math.floor(Math.random() * 4)];
			$('#lixo_imagem').addClass("tipo"+tipo);
			$('#lixo_imagem').addClass("lixo_"+cor_lixo);
			$('#lixo').addClass("lixo_"+cor_lixo);
			var left = parseInt($("#lixo_imagem").css("marginLeft").substring(1,$("#lixo_imagem").css("marginLeft").length-1));
			var top = parseInt($("#lixo_imagem").css("marginTop").substring(1,$("#lixo_imagem").css("marginTop").length-1));
			var soma = Math.sqrt((left*left)+(top*top))+15+ 'px';
			$("#lixo").css({'marginTop' : soma, 'left' : va});
			semMeios();
			altura_lixeira = Math.sqrt((left*left)+(top*top))-15;
			ambiental_contador++;	
		}
	}
	function ambiental_repetir(){
		$("#myCanvas").addClass("bg_parque_blur");
		$("#myCanvas").removeClass("bg_parque");
		if(!multi_jogadores || modo_jogo == 'juntos'){
			
			var inicioAleatoria = Math.floor(Math.random() * 940);	
			inicioAleatoria = limitacoes(inicioAleatoria);
			movimento_lateral = inicioAleatoria;
			va = movimento_lateral+'px';
			var left = parseInt($("#lixo_imagem").css("marginLeft").substring(1,$("#lixo_imagem").css("marginLeft").length-1));
			var top = parseInt($("#lixo_imagem").css("marginTop").substring(1,$("#lixo_imagem").css("marginTop").length-1));
			var soma = Math.sqrt((left*left)+(top*top))+15+ 'px';
			$("#lixo").css({'marginTop' : soma, 'left' : va});
			semMeios();
			altura_lixeira = Math.sqrt((left*left)+(top*top))-15;		
		}
	}
	function limitacoes(val){
		var left = parseInt($("#lixo_imagem").css("marginLeft").substring(1,$("#lixo_imagem").css("marginLeft").length-1));
		var top = parseInt($("#lixo_imagem").css("marginTop").substring(1,$("#lixo_imagem").css("marginTop").length-1));
		var soma = Math.sqrt((left*left)+(top*top))+15;
		if(val <= 0+soma){
			val = 0+soma;
		}else if(val >= 960-soma){
			val = 960-soma;
		}
		return val;
	}
	function ondeCaiu(){
		
		if(!multi_jogadores || modo_jogo == 'juntos'){
			
			var dentro = false;
			var local = getInfo('lixo','left');
			for(var i = 0; i < lixos.length; i++){
				if(local > lixeiras['lixeira_'+lixos[i]]['min'] && local < lixeiras['lixeira_'+lixos[i]]['max']){
					if($('#lixo').hasClass('lixo_'+lixos[i])){
						pontuacao[lixos[i]]++;
						dentro = true;
					}else{
						ambiental_parte = 'erro_lixeira';
						if(!multi_jogadores)
							falas();
					}
				}
			}
			if(!dentro){
				if(ambiental_parte != 'erro_lixeira'){
					ambiental_parte = 'erro_chao';
					if(!multi_jogadores)
						falas();
				}
				pontuacao['erros']++;
				ambiental_repetir();
			}else{
				ambiental_reiniciar();
			}
		}
	}
	function getInfo(lixeira, attr){
		return Number($('#'+lixeira).css(attr).replace('px',''));
	}