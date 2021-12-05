// FUNÇÕES PARA JOGADOR 1
function animaNumero_j1() {
	var id = document.getElementById("idade_j1").value;
	if(id.length > 3){
		id = id.substr(0,3);
	}
	document.getElementById("idade_j1").value = id;
	var lastChar = id.substr(id.length - 1);
	if (lastChar == "" || lastChar == ";" || lastChar == "," || lastChar == "." || lastChar == "/" || lastChar == "~" 
		|| lastChar == "]" || lastChar == "´" || lastChar == "[" || lastChar == "=" || lastChar == "-" || lastChar == "'"
		|| lastChar == " ") {
		document.getElementById("pacote_j1").src = "assets/images/jogador.png";
	}else{
		document.getElementById("pacote_j1").src = "./assets/images/numeros/" + lastChar +".png";
	}
}

function animaLetra_j1() {
	var id = document.getElementById("nome_j1").value;
	id = removeAcento(id);
	if(id.length > 20){
		id = id.substr(0,20);
	}
	document.getElementById("nome_j1").value = id;
	var lastChar = id.substr(id.length - 1);
	if (lastChar == "" || lastChar == ";" || lastChar == "," || lastChar == "." || lastChar == "/" || lastChar == "~" 
		|| lastChar == "]" || lastChar == "´" || lastChar == "[" || lastChar == "=" || lastChar == "-" || lastChar == "'"
		|| lastChar == " " || lastChar == "1" || lastChar == "2" || lastChar == "3"  || lastChar == "4" || lastChar == "5"
		|| lastChar == "6" || lastChar == "7" || lastChar =="8" || lastChar =="9" || lastChar == "0") {
		document.getElementById("pacote_j1").src = "assets/images/jogador.png";
	}else{
		var letra = lastChar.toLowerCase();
		document.getElementById("pacote_j1").src = "./assets/images/alfabeto/" + letra + ".png";
	}
}

// FUNÇÕES PARA JOGADOR 2
function animaNumero_j2() {
	var id = document.getElementById("idade_j2").value;
	if(id.length > 3){
		id = id.substr(0,3);
	}
	document.getElementById("idade_j2").value = id;
	var lastChar = id.substr(id.length - 1);
	if (lastChar == "" || lastChar == ";" || lastChar == "," || lastChar == "." || lastChar == "/" || lastChar == "~" 
		|| lastChar == "]" || lastChar == "´" || lastChar == "[" || lastChar == "=" || lastChar == "-" || lastChar == "'"
		|| lastChar == " ") {
		document.getElementById("pacote_j2").src = "assets/images/jogador.png";
	}else{
		document.getElementById("pacote_j2").src = "./assets/images/numeros/" + lastChar +".png";
	}
}

function animaLetra_j2() {
	var id = document.getElementById("nome_j2").value;
	id = removeAcento(id);
	if(id.length > 20){
		id = id.substr(0,20);
	}
	document.getElementById("nome_j2").value = id;
	var lastChar = id.substr(id.length - 1);
	if (lastChar == "" || lastChar == ";" || lastChar == "," || lastChar == "." || lastChar == "/" || lastChar == "~" 
		|| lastChar == "]" || lastChar == "´" || lastChar == "[" || lastChar == "=" || lastChar == "-" || lastChar == "'"
		|| lastChar == " " || lastChar == "1" || lastChar == "2" || lastChar == "3"  || lastChar == "4" || lastChar == "5"
		|| lastChar == "6" || lastChar == "7" || lastChar =="8" || lastChar =="9" || lastChar == "0") {
		document.getElementById("pacote_j2").src = "assets/images/jogador.png";
	}else{
		var letra = lastChar.toLowerCase();
		document.getElementById("pacote_j2").src = "./assets/images/alfabeto/" + letra + ".png";
	}
}