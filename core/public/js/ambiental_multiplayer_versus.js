function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    }
    else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
}	
var cor_lixo_jogador1 = '';
var altura_lixeira_jogador1 = 0;
var movimento_lateral_jogador1 = 0;
var ambiental_contador_jogador1 = 0;
var cor_lixo_jogador2 = '';
var altura_lixeira_jogador2 = 0;
var movimento_lateral_jogador2 = 0;
var ambiental_contador_jogador2 = 0;
var contador_rotacao1 = 0;
var contador_rotacao2 = 0;
var ambiental_parte = 'inicio';
var lixos = ['vermelho','azul','amarelo','verde'];

var tecla_jogador1 = null;
var tecla_jogador2 = null;
var jogando_ambiental = null;

var vencedor_ambiental = '';

var lixeiras_jogador1 = {
    'lixeira_vermelho' : {
        'min' : getInfo_multiplayer('.parte_jogador1 #lixeira_vermelho','left'),
        'max' : getInfo_multiplayer('.parte_jogador1 #lixeira_vermelho','left') + 75
    },
    'lixeira_azul' : {
        'min' : getInfo_multiplayer('.parte_jogador1 #lixeira_azul','left'),
        'max' : getInfo_multiplayer('.parte_jogador1 #lixeira_azul','left') + 75
    },
    'lixeira_amarelo' : {
        'min' : getInfo_multiplayer('.parte_jogador1 #lixeira_amarelo','left'),
        'max' : getInfo_multiplayer('.parte_jogador1 #lixeira_amarelo','left') + 75
    },
    'lixeira_verde' : {
        'min' : getInfo_multiplayer('.parte_jogador1 #lixeira_verde','left'),
        'max' : getInfo_multiplayer('.parte_jogador1 #lixeira_verde','left') + 75
    }
}
var lixeiras_jogador2 = {
    'lixeira_vermelho' : {
        'min' : getInfo_multiplayer('.parte_jogador2 #lixeira_vermelho','left'),
        'max' : getInfo_multiplayer('.parte_jogador2 #lixeira_vermelho','left') + 75
    },
    'lixeira_azul' : {
        'min' : getInfo_multiplayer('.parte_jogador2 #lixeira_azul','left'),
        'max' : getInfo_multiplayer('.parte_jogador2 #lixeira_azul','left') + 75
    },
    'lixeira_amarelo' : {
        'min' : getInfo_multiplayer('.parte_jogador2 #lixeira_amarelo','left'),
        'max' : getInfo_multiplayer('.parte_jogador2 #lixeira_amarelo','left') + 75
    },
    'lixeira_verde' : {
        'min' : getInfo_multiplayer('.parte_jogador2 #lixeira_verde','left'),
        'max' : getInfo_multiplayer('.parte_jogador2 #lixeira_verde','left') + 75
    }
}
var pontuacao_jogador1 = {
    'vermelho' : 0,
    'azul' : 0,
    'amarelo' : 0,
    'verde' : 0,
    'erros' : 0
}
var pontuacao_jogador2 = {
    'vermelho' : 0,
    'azul' : 0,
    'amarelo' : 0,
    'verde' : 0,
    'erros' : 0
}
var velocidade_caida_jogador1 = 2;
var velocidade_caida_jogador2 = 2;
ambiental_play = false;
var finalizado = false;
function parar_ambiental_multiplayer(){
    clearInterval(jogando_ambiental);
    jogando_ambiental = null;
    ambiental_contador_jogador1 = 1;
    ambiental_contador_jogador2 = 1;
    finalizado = false;
    $("#jogo_ambiental_multiplayer").hide();
}

function iniciar_ambiental_multiplayer(){
			
    $("#myCanvas").addClass("bg_parque_blur");
    $("#myCanvas").removeClass("bg_parque");
        vencedor_ambiental = '';
        ambiental_reiniciar_multiplayer(1);
        ambiental_reiniciar_multiplayer(2);
        ambiental_contador_jogador1 = 1;
        ambiental_contador_jogador2 = 1;
        finalizado = false;
        $('#lixo1').show();	
        $('#lixo2').show();	
        $("#jogo_ambiental_multiplayer").show();
        jogando_ambiental = setInterval(function(){
            if(ambiental_contador_jogador1 <= 10){
                    $('#lixo1').show();	
                    if(getInfo_multiplayer('#lixo1','marginTop') <= 420){
                    if(ambiental_play){
                        va = altura_lixeira_jogador1+'px';
                        $("#lixo1").css({'marginTop' : va, WebkitTransform: 'rotate('+contador_rotacao1+'deg)'});
                        contador_rotacao1+= 2; 
                        altura_lixeira_jogador1 += velocidade_caida_jogador1;
                    }
                }else{
                    ondeCaiu_multiplayer(1);	
                }
            }else{
                if(!finalizado){
                    $('#lixo1').hide();	
                    fim_fase = true;
                    if(vencedor_ambiental == ''){
                        vencedor_ambiental = 'Jogador 1';
                        if(modo_jogo == 'versus'){
                            parar_ambiental_multiplayer();
                            finalizado = !finalizado;
                            falas();
                        }
                    }else if(vencedor_ambiental == 'Jogador 2'){
                        parar_ambiental_multiplayer();
                        finalizado = !finalizado;
                        falas();
                    }
                    ambiental_parte = 'final';
                }
            }
            if(ambiental_contador_jogador2 <= 10){
                $('#lixo2').show();	
                if(getInfo_multiplayer('#lixo2','marginTop') <= 420){
                    if(ambiental_play){
                        va = altura_lixeira_jogador2+'px';
                        $("#lixo2").css({'marginTop' : va,  WebkitTransform: 'rotate('+contador_rotacao2+'deg)'});
                        contador_rotacao2+= 2;
                        altura_lixeira_jogador2 += velocidade_caida_jogador2;
                    }
                }else{
                    ondeCaiu_multiplayer(2);	
                }
            }else{
                if(!finalizado){
                    $('#lixo2').hide();	
                    fim_fase = true;
                    if(vencedor_ambiental == ''){
                        vencedor_ambiental = 'Jogador 2';
                        if(modo_jogo == 'versus'){
                            parar_ambiental_multiplayer();
                            finalizado = !finalizado;
                            falas();
                        }
                    }else if(vencedor_ambiental == 'Jogador 1'){
                        parar_ambiental_multiplayer();
                        finalizado = !finalizado;
                        falas();
                    }
                    ambiental_parte = 'final';
                }
            }
            velocidade_caida_jogador1 = 2;
            velocidade_caida_jogador2 = 2;
            if(tecla_jogador2 == 40 || tecla_jogador2 == 39 || tecla_jogador2 == 37){
                if(tecla_jogador2 == 40){
                    velocidade_caida_jogador2 = 10;
                }
                if(tecla_jogador2 == 39){
                    movimento_lateral_jogador2 += 10;
                }
                if(tecla_jogador2 == 37){
                    movimento_lateral_jogador2 -= 10;
                }
                movimento_lateral_jogador2 = limitacoes_multiplayer(2,movimento_lateral_jogador2);
                va2 = movimento_lateral_jogador2+'px';	
                $("#lixo2").animate({ left: va2}, 10, function(){
                    semMeios_multiplayer(2);
                });		
            }

            if(tecla_jogador1 == 83 || tecla_jogador1 == 68 || tecla_jogador1 == 65){
                if(tecla_jogador1 == 83){
                    velocidade_caida_jogador1 = 10;
                }
                if(tecla_jogador1 == 68){
                    movimento_lateral_jogador1 += 10;
                }
                if(tecla_jogador1 == 65){
                    movimento_lateral_jogador1 -= 10;
                }
                movimento_lateral_jogador1 = limitacoes_multiplayer(1,movimento_lateral_jogador1);
                va1 = movimento_lateral_jogador1+'px';	
                $("#lixo1").animate({ left: va1}, 10, function(){
                    semMeios_multiplayer(1);
                });		
            }
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
function semMeios_multiplayer(jogador){
    var inicio = 0;
    var fim = 0;
    var divisor = 0;
    var distancia_inicio = 0;
    var distancia_fim = 0;
    if(jogador == 1){
        for(var i = 0; i < lixos.length; i++){
            if(getInfo_multiplayer('#lixo1','left') > lixeiras_jogador1['lixeira_'+lixos[i]]['min'] && getInfo_multiplayer('#lixo1','left') < lixeiras_jogador1['lixeira_'+lixos[i]]['max']){
                inicio = lixos[i];
                divisor = getInfo_multiplayer('.parte_jogador1 #lixeira_'+lixos[i],'left') + 75;
                break;
            }
        }
        for(var i = 0; i < lixos.length; i++){
            if((getInfo_multiplayer('#lixo1','left')+20) > lixeiras_jogador1['lixeira_'+lixos[i]]['min'] && (getInfo_multiplayer('#lixo1','left')+20) < lixeiras_jogador1['lixeira_'+lixos[i]]['max']){
                fim = lixos[i];
                if(inicio == 0)
                    divisor = getInfo_multiplayer('.parte_jogador1 #lixeira_'+lixos[i],'left');
                break;
            }
        }
        if(inicio != fim && divisor != 0){
            distancia_inicio = divisor-getInfo_multiplayer('#lixo1','left');
            distancia_fim = (divisor-(getInfo_multiplayer('#lixo1','left')+20))*-1;
            if(distancia_inicio < distancia_fim){
                var val = (movimento_lateral_jogador1+distancia_inicio + 1)+'px';
                $("#lixo1").css({'left' : val});
            }else{
                var val = (movimento_lateral_jogador1-distancia_fim)+'px';
                $("#lixo1").css({'left' : val});
            }
        }
    }else{
        for(var i = 0; i < lixos.length; i++){
            if(getInfo_multiplayer('#lixo2','left') > lixeiras_jogador2['lixeira_'+lixos[i]]['min'] && getInfo_multiplayer('#lixo2','left') < lixeiras_jogador2['lixeira_'+lixos[i]]['max']){
                inicio = lixos[i];
                divisor = getInfo_multiplayer('.parte_jogador2 #lixeira_'+lixos[i],'left') + 75;
                break;
            }
        }
        for(var i = 0; i < lixos.length; i++){
            if((getInfo_multiplayer('#lixo2','left')+20) > lixeiras_jogador2['lixeira_'+lixos[i]]['min'] && (getInfo_multiplayer('#lixo2','left')+20) < lixeiras_jogador2['lixeira_'+lixos[i]]['max']){
                fim = lixos[i];
                if(inicio == 0)
                    divisor = getInfo_multiplayer('.parte_jogador2 #lixeira_'+lixos[i],'left');
                break;
            }
        }
        if(inicio != fim && divisor != 0){
            distancia_inicio = divisor-getInfo_multiplayer('#lixo2','left');
            distancia_fim = (divisor-(getInfo_multiplayer('#lixo2','left')+20))*-1;
            if(distancia_inicio < distancia_fim){
                var val = (movimento_lateral_jogador2+distancia_inicio + 1)+'px';
                $("#lixo2").css({'left' : val});
            }else{
                var val = (movimento_lateral_jogador2-distancia_fim)+'px';
                $("#lixo2").css({'left' : val});
            }
        }
    }
}
function ambiental_reiniciar_multiplayer(jogador){
    if(jogador == 1){
        var inicioAleatorio = Math.floor(Math.random() * 468);	
        var tipo = Math.floor(Math.random() * 3);	
        tipo++;
        movimento_lateral_jogador1 = inicioAleatorio;
        movimento_lateral_jogador1 = limitacoes_multiplayer(1, movimento_lateral_jogador1);
        va = movimento_lateral_jogador1+'px';
        
        if(cor_lixo_jogador1 != ''){
            $('#lixo_imagem1').removeClass("lixo_"+cor_lixo_jogador1);
            $('#lixo1').removeClass("lixo_"+cor_lixo_jogador1);
            $('#lixo_imagem1').removeClass("tipo1");
            $('#lixo_imagem1').removeClass("tipo2");
            $('#lixo_imagem1').removeClass("tipo3");
        }
        cor_lixo_jogador1 = lixos[Math.floor(Math.random() * 4)];
        $('#lixo_imagem1').addClass("tipo"+tipo);
        $('#lixo_imagem1').addClass("lixo_"+cor_lixo_jogador1);
        cor_lixo_jogador1 = lixos[Math.floor(Math.random() * 4)];
        $("#lixo1").css({'marginTop' : '50px', 'left' : va});
        semMeios_multiplayer(1);
        altura_lixeira_jogador1 = 50;
        ambiental_contador_jogador1++;

    }else{
        var inicioAleatorio = 502 + Math.floor(Math.random() * 468);	
        movimento_lateral_jogador2 = inicioAleatorio;
        movimento_lateral_jogador2 = limitacoes_multiplayer(2, movimento_lateral_jogador2);
        va = movimento_lateral_jogador2+'px';
        var tipo = Math.floor(Math.random() * 3);	
        tipo++;
        
        if(cor_lixo_jogador2 != ''){
            $('#lixo_imagem2').removeClass("lixo_"+cor_lixo_jogador2);
            $('#lixo2').removeClass("lixo_"+cor_lixo_jogador2);
            $('#lixo_imagem2').removeClass("tipo1");
            $('#lixo_imagem2').removeClass("tipo2");
            $('#lixo_imagem2').removeClass("tipo3");
        }
        cor_lixo_jogador2 = lixos[Math.floor(Math.random() * 4)];
        $('#lixo_imagem2').addClass("tipo"+tipo);
        $('#lixo_imagem2').addClass("lixo_"+cor_lixo_jogador2);
        cor_lixo_jogador2 = lixos[Math.floor(Math.random() * 4)];
        $("#lixo2").css({'marginTop' : '50px', 'left' : va});
        semMeios_multiplayer(2);
        altura_lixeira_jogador2 = 50;
        ambiental_contador_jogador2++;
    }
}
function ambiental_repetir_multiplayer(jogador){
    if(jogador == 1){
        var inicioAleatorio = Math.floor(Math.random() * 468);	
        movimento_lateral_jogador1 = inicioAleatorio;
        movimento_lateral_jogador1 = limitacoes_multiplayer(1, movimento_lateral_jogador1);
        va = movimento_lateral_jogador1+'px';
        $("#lixo1").css({'marginTop' : '50px', 'left' : va});
        semMeios_multiplayer(1);
        altura_lixeira_jogador1 = 50;		
    }else{
        var inicioAleatorio = 502 + Math.floor(Math.random() * 468);	
        movimento_lateral_jogador2 = inicioAleatorio;
        movimento_lateral_jogador2 = limitacoes_multiplayer(2, movimento_lateral_jogador2);
        va = movimento_lateral_jogador2+'px';
        $("#lixo2").css({'marginTop' : '50px', 'left' : va});
        semMeios_multiplayer(2);
        altura_lixeira_jogador2 = 50;		
    }
}
function limitacoes_multiplayer(jogador,val){
    if(jogador == 1){
		var left = parseInt($("#lixo_imagem1").css("marginLeft").substring(1,$("#lixo_imagem1").css("marginLeft").length-1));
		var top = parseInt($("#lixo_imagem1").css("marginTop").substring(1,$("#lixo_imagem1").css("marginTop").length-1));
		var soma = Math.sqrt((left*left)+(top*top))+15;
        if(val <= 0+soma){
            val = 0+soma;
        }else if(val >= 478-soma){
            val = 478-soma;
        }
    }else{
        var left = parseInt($("#lixo_imagem2").css("marginLeft").substring(1,$("#lixo_imagem2").css("marginLeft").length-1));
		var top = parseInt($("#lixo_imagem2").css("marginTop").substring(1,$("#lixo_imagem2").css("marginTop").length-1));
		var soma = Math.sqrt((left*left)+(top*top))+15;
        if(val <= 502+soma){
            val = 502+soma;
        }else if(val >= 980-soma){
            val = 980-soma;
        }
    }
    return val;
}
function ondeCaiu_multiplayer(jogador){
    var dentro = false;
    for(var i = 0; i < lixos.length; i++){
        if(jogador == 1){
            var local = getInfo_multiplayer('#lixo1','left');
            if(local > lixeiras_jogador1['lixeira_'+lixos[i]]['min'] && local < lixeiras_jogador1['lixeira_'+lixos[i]]['max']){
                if($('#lixo_imagem1').hasClass('lixo_'+lixos[i])){
                    pontuacao_jogador1[lixos[i]]++;
                    dentro = true;
                }else{
                    ambiental_parte = 'erro_lixeira';
                }
            }
        }else{
            var local = getInfo_multiplayer('#lixo2','left');
            if(local > lixeiras_jogador2['lixeira_'+lixos[i]]['min'] && local < lixeiras_jogador2['lixeira_'+lixos[i]]['max']){
                if($('#lixo_imagem2').hasClass('lixo_'+lixos[i])){
                    pontuacao_jogador2[lixos[i]]++;
                    dentro = true;
                }else{
                    ambiental_parte = 'erro_lixeira';
                }
            }
        }
    }
    if(!dentro){
        if(ambiental_parte != 'erro_lixeira'){
            ambiental_parte = 'erro_chao';
        }
        if(jogador == 1){
            pontuacao_jogador1['erros']++;
            ambiental_repetir_multiplayer(1);
        }else{
            pontuacao_jogador2['erros']++;
            ambiental_repetir_multiplayer(2);
        }
    }else{
        if(jogador == 1){
            ambiental_reiniciar_multiplayer(1);
        }else{
            ambiental_reiniciar_multiplayer(2);
        }
    }

}
function getInfo_multiplayer(lixeira, attr){
    return Number($(lixeira).css(attr).replace('px',''));
}