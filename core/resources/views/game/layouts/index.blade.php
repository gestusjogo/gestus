<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<script src="js/jquery.min.js"></script>
	<!-- ARQUIVOS JS -->
	<script type='text/javascript' src='/js/multi_jogadores.js'></script>
	<script type='text/javascript' src='/js/som.js'></script>
	<script type="text/javascript" src="/js/play.js"></script>
	<script type="text/javascript" src="/js/menu.js"></script>
	<script type="text/javascript" src="/js/textos.js"></script>
	<script type='text/javascript' src='/js/jogo_das_cores.js'></script>
	<script type='text/javascript' src='/js/animation.js'></script>
	<script type='text/javascript' src='/js/falas.js'></script>
	<script type='text/javascript' src='/js/escala_likert.js'></script>
	<!-- ARQUIVOS CSS -->
	<link rel="stylesheet" type="text/css" href="/css/style.css">
	<link rel="stylesheet" type="text/css" href="/css/style2.css">
	<link rel="stylesheet" type="text/css" href="/css/bg.css">
	<link rel="stylesheet" type="text/css" href="/css/style_inicio.css">
	<link rel="stylesheet" type="text/css" href="/css/style_dialogo.css">
	<link rel="stylesheet" type="text/css" href="/css/style_jogomemoria.css">
	<link rel="stylesheet" type="text/css" href="/css/style_supermercado.css">
	<link rel="stylesheet" type="text/css" href="/css/style_jogoerros.css">

	<script type="text/javascript" src="./js/swal.min.js"></script>
	<title>GESTUS</title>
</head>
<body>
	<div id="myCanvas" class="bg_inicio">
        @yield('game')
    </div>
		<!-- ARQUIVOS JS -->
		<script type="text/javascript" src="/js/textos.js"></script>
		<script type="text/javascript" src="/js/jogo_supermercado.js"></script>
		<script type="text/javascript" src="/js/jogo_memoria.js"></script>
		<script type="text/javascript" src="/js/jogo_erros.js"></script>
		<script type="text/javascript" src="/js/modal.js"></script>
		<script type="text/javascript" src="/js/praca.js"></script>
		<script type="text/javascript" src="/js/ambiental.js"></script>
		<script type="text/javascript" src="/js/ambiental_multiplayer_versus.js"></script>
</body>
</html>
