var itens_coletados = [];
var add_itens = true
var sair_super = false;
var fim_super = document.getElementById("fim_super");
fim_super.style.display = "none";

function item_encontrado(id) {
	$(id).css({"text-decoration": "line-through", "-webkit-text-decoration-color": "red", "text-decoration-color": "red"});
	if (itens_coletados.length >= 0) {
		for (var i = itens_coletados.length - 1; i >= 0; i--) {
			if (id == itens_coletados[i]){
				add_itens = false;
			}
		}
	}

	if(add_itens){
		itens_coletados.push(id);
	}
}