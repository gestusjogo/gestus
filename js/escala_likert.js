function enviar_escala(votacao){
    alert(votacao);
    tela_atual = 'tela_fliperama';
    var script = 'https://script.google.com/macros/s/AKfycby6jpw46M8skmDisc66y6Am5K8IMTNiJEx2cemDTu8tl8UwXh6s/exec?tela='+tela_atual+'&nome='+nome+'&votacao='+votacao;
	document.getElementById('envio').src = 'https://script.google.com/macros/s/AKfycbxEpZk4L4EhAkRqlLWlVARPcgHqIp_rnumhoA3bnrjwjKP5rVRr/exec?nome=1&idade=1&data=1';
    $("#modal_votacao").hide();
}