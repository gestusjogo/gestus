//Classe de armazenamento de variaveis dialogo e id_dialogo
var index_dialogo = 0;
var dialogo = {
	"false" : {
		'#tela_casa' : {
			'primeira_vez' : [
				"Prazer em te conhecer",
				"Sou o Jonas e vou te ajudar a aprender LIBRAS.",
				"Você sabe o que é LIBRAS?",
				"LIBRAS é a Língua Brasileira de Sinais.",
				"Ela é a segunda língua oficial do Brasil.",
				"E é a língua mais usada pelos surdos do país.",
				"Minha irmã que se chama Marina é surda",
				"E ela que me ensinou LIBRAS.",
				"Agora eu vou ensinar você.",
				"Vamos lá?",
			],
			'inicio' :[
				"Vamos começar com alguns sinais.", 
				"Clique em um dos botões e te mostrarei o sinal."
			],
			'saida' : [
				"Muito bem, agora você sabe algumas saudações",
				"Vamos aprender mais pela cidade?",
			]
		},
		'#tela_cidade' : {
			'inicio' : [
				"Temos muitas coisas para aprender!",
				"Escolha algum local clicando nele.",
			],
			'fase_liberada' : [
				"Agora posso te apresentar minha irmã. Ela está nos esperando na praça, vamos lá!"
			]
		},
		'#tela_sorveteria' : {
			"inicio" : [
				"Da última vez que vim aqui tirei uma foto.",
				"Tente achar 10 objetos que faltam aqui",
				"Clique no local onde o item deveria estar.",
				"Para cada objeto vou te ensinar o sinal do número",
				"Vamos começar?"
			],
			"resultado" : [
				"Mandou bem! Você conseguiu encontrar todos os itens!",
				"Temos outros lugares para explorar!",
				"Vamos lá!"
			]
		},
		'#tela_fliperama' : {
			"inicio" : [
				"Eu amo jogos e você?",
				"Vamos aprender as cores enquanto nos divertimos?",
				"Nesse jogo seu objetivo é combinar cores iguais",
				"Junte três cores na mesma linha ou coluna",
				"Também posso te ensinar o sinal dessas cores",
				"Basta clicar no botão da cor selecionada",
				"Vamos lá!"
			],
			"resultado" : [
				"Mandou bem! Você conseguiu fazer todos os pontos!",
				"Temos outros lugares para explorar!",
				"Vamos lá!"
			]
		},
		'#tela_praca' : {
			'inicio' :[
				"O nome dela é Marina",
				"Ela é surda e só se comunica em LIBRAS",
				"Pode conversar com ela.",
				"Eu vou te ajudar a entender o que ela diz."
			],
			'qual_nome' :[
				"Ela está perguntando o seu nome.",
				"Aperte nas letras do alfabeto e diga seu nome"
			],
			'erro_nome' : [
				"Esse não foi o nome que você me disse",
				"Digite %nome% usando o teclado de libras",
				"Uma dica, ele está em ordem alfabética com o ç no final",
				"Tente novamente"
			],
			'muito_bem_nome' : [
				"Muito bem!"
			],
			'qual_idade' :[
				"Agora ela quer saber a sua idade",
				"Apertem nos números e diga a sua idade"
			],
			'erro_idade' : [
				"Essa não foi a sua idade que você me disse",
				"Digite %idade% usando o teclado de libras",
				"Uma dica, ele está em ordem",
				"Tente novamente"
			],
			'muito_bem_idade' : [
				"Muito bem!"
			],
			'despedida' : [
				"Ela disse que foi um prazer te conhecer",
				"Viu só? Você conseguiu.",
				"Foi bem divertido. Não foi?",
				"Agora está na hora de me despedir",
				"E vou ensinar como diz tchau em LIBRAS"
			]
		},
		'#tela_supermercado' : {
			"inicio" : [
				"Nossa, tenho que comprar algumas coisas",
				"Vou te dar uma lista dos produtos.",
				"Que tal acharmos esses itens no mercado?",
				"É só clicar neles que te ensino o sinal deles",
				"Vamos lá!"
			],
			"resultado" : [
				"Mandou bem! Você conseguiu encontrar todos os itens!",
				"Temos outros lugares para explorar!",
				"Vamos lá!"
			]
		},
		'#tela_escola' : {
			"inicio" : [
				"O alfabeto em LIBRAS é muito importante",
				"Eu aprendi com um jogo da memória",
				"Tente imitar o que aparece nas cartas",
				"As setinhas que aparecem são movimentos das mãos",
				"Vamos lá!"
			],
			"resultado" : [
				"Mandou bem! Você conseguiu encontrar todos os pares!",
				"Temos outros lugares para explorar!",
				"Vamos lá!"
			]
		},
		'#tela_parque' : {
			'inicio' : [
				'Nossa, eu adorava vir a esse parque, mas ele está tão sujo.',
				'O que será que aconteceu? Será que as pessoas não percebem que isso prejudica o meio ambiente?',
				'Todos devemos fazer a nossa parte para preservar o meio ambiente',
				'E com pequenas ações todo mundo pode ajudar.',
				'Que tal se a gente ajudasse as pessoas a cuidar do parque?',
				'Jogar o lixo no canto certo é uma ação que ajuda bastante na preservação',
				'E a separação desse lixo pela coleta seletiva também é uma maneira de ajudar.',
				'Quando separamos o lixo em garantimos que eles cheguem ao destino adequado',
				'E chegando no destino adequado, ele pode ser reciclado com mais facilidade',
				'Ah, você sabia que coleta seletiva divide em cores para facilitar o tipo de lixo?',
				'Vermelho é para o plástico. Azul é para o papel. Amarelo é para o metal e verde é para o vidro.',
				'Agora que você já sabe disso. Vamos começar a separar os lixos?',
				'Você pode usar as teclas do seu computador para jogar o lixo no canto certo.',
				'Utilize as teclas com as setas para movimentar o lixo,',
				'sendo a seta esquerda para movimentar o lixo para esquerda e', 
				'a seta direita para movimentar o lixo para direita.',
				'Você também pode apertar e segurar a tecla com seta para baixo', 
				'para que o lixo se mova mais rapidamente na tela.',
				'Ganhe pontos ao acertar o tipo de lixo na lixeira correspondente. Valendo!'

			],
			'erro_lixeira' : [
				"Você errou! Coloque esse lixo na lixeira correta!"
			],
			'erro_chao' : [
				"Você errou! Não devemos deixar nenhum lixo no chão! Coloque esse lixo na lixeira correta!"
			],
			'resultado' : [
				"Uau! Olha como esse parque ficou mais bonito!",
				"Vou mostrar como se faz o sinal de cada um dos tipos de lixo reciclável",
				"Clique na lixeira que realizarei o sinal"
			],
			'final' : [
				"Temos outros lugares para explorar! Vamos lá!"
			]
		},
		"repetir" : [
			"Ei, Já passamos por aqui!",
			"Mas pode explorar o local se quiser."
		]
	},
	"true" : { 
		'#tela_casa' : {
			'primeira_vez' : [
				"Prazer em conhecer vocês ",
				"Sou o Jonas e vou lhes ajudar a aprender LIBRAS.",
				"Vocês sabem o que é LIBRAS?",
				"LIBRAS é a Língua Brasileira de Sinais.",
				"Ela é a segunda língua oficial do Brasil.",
				"E é a língua mais usada pelos surdos do país.",
				"Minha irmã que se chama Marina é surda",
				"E ela que me ensinou LIBRAS.",
				"Agora eu vou ensinar vocês.",
				"Vamos lá?",
			],
			'inicio' :[
				"Vamos começar com alguns sinais.", 
				"Cliquem em um dos botões e mostrarei o sinal."
			],
			'saida' : [
				"Muito bem, agora vocês sabem algumas saudações",
				"Vamos aprender mais pela cidade?",
			]
		},
		'#tela_cidade' : {
			'inicio' : [
				"Temos muitas coisas para aprender!",
				"Escolham algum local clicando nele.",
			],
			'fase_liberada' : [
				"Agora posso lhes apresentar minha irmã. Ela está nos esperando na praça, vamos lá!"
			]
		},
		'#tela_sorveteria' : {
			"inicio" : [
				"Da última vez que vim aqui tirei uma foto.",
				"Tentem achar 10 objetos que faltam aqui",
				"Cliquem no local onde o item deveria estar.",
				"Para cada objeto vou lhes ensinar o sinal do número",
			],
			"versus" : {
				"jogador1" : [
					"Vamos ver quem consegue encontrar todos os itens em menor tempo?",
					"Não se esqueçam de imitar o sinal do número",
					"Fiquem tranquilos, o tempo não é contado enquanto o sinal estiver na tela",
					"Vamos começar com o jogador 1! Jogador 2 vire de costas ou feche os olhos. Sem espiar!",
					"Vamos lá!"
				],
				"jogador2" : [
					"Agora é a vez do jogador 2! Jogador 1 vire de costas ou feche os olhos. Sem espiar!",
					"Vamos lá!"
				],
				"resultado" : [
					"Quem será o vencedor?",
					"resultado",
					"Temos outros lugares para explorar!",
					"Vamos lá!"
				]
			},
			"juntos" : {
				"inicio" : [
					"Vamos ver em quanto tempo vocês encontram todos?",
					"Vamos lá!"
				],
				"resultado" : [
					"Mandaram bem! Vocês conseguiram encontrar todos os itens!",
					"Temos outros lugares para explorar!",
					"Vamos lá!"
				]
			}
		},
		'#tela_fliperama' : {
			"inicio" : [
				"Eu amo jogos e vocês?",
				"Vamos aprender as cores enquanto nos divertimos?",
				"Nesse jogo o objetivo é combinar cores iguais",
				"Juntem três cores na mesma linha ou coluna",
				"Também posso lhes ensinar o sinal dessas cores",
				"Basta clicar no botão da cor selecionada"
			],
			"versus" : {
				"inicio" : [
					"Vamos ver quem consegue alcançar 2000 pontos primeiro!",
					"Cada um tem sua vez de jogar, a marca mostra de quem é a vez.",
					"Vamos lá!"
				],
				"resultado" : [
					"Mandaram bem! Quem será o vencedor?",
					"resultado",
					"Temos outros lugares para explorar!",
					"Vamos lá!"
				]
			},
			"juntos" : {
				"inicio" : [
					"Temos alcançar 2000 pontos jogando juntos!",
					"Vamos lá!"
				],
				"resultado" : [
					"Mandaram bem! Vocês conseguiram fazer todos os pontos!",
					"Temos outros lugares para explorar!",
					"Vamos lá!"
				]
			}
		},
		'#tela_praca' : {
			'inicio' :[
				"O nome dela é Marina",
				"Ela é surda e só se comunica em LIBRAS",
				"Podem conversar com ela.",
				"Eu vou ajudar vocês a entender o que ela diz.",
				"Vamos com o Jogador 1"
			],
			'qual_nome' :[
				"Ela está perguntando o seu nome.",
				"Aperte nas letras do alfabeto e diga seu nome"
			],
			'erro_nome' : [
				"Esse não foi o nome que você me disse",
				"Digite %nome% usando o teclado de libras",
				"Uma dica, ele está em ordem alfabética com o ç no final",
				"Tente novamente"
			],
			'muito_bem_nome' : [
				"Muito bem!"
			],
			'qual_idade' :[
				"Agora ela quer saber a sua idade",
				"Apertem nos números e diga a sua idade"
			],
			'erro_idade' : [
				"Essa não foi a sua idade que você me disse",
				"Digite %idade% usando o teclado de libras",
				"Uma dica, ele está em ordem",
				"Tente novamente"
			],
			'muito_bem_idade' : [
				"Muito bem!"
			],
			'fim_jogador_1' : [
				"Mandou bem %nome_j1%",
				"Agora é sua vez %nome_j2%"
			],
			'despedida' : [
				"Ela disse que foi um prazer conhecer vocês",
				"Viu só? Vocês conseguiram.",
				"Foi bem divertido. Não foi?",
				"Agora está na hora de me despedir",
				"E vou ensinar como diz tchau em LIBRAS"
			]
		},
		'#tela_supermercado' : {
			"inicio" : [
				"Nossa, tenho que comprar algumas coisas",
				"Vou lhes dar uma lista dos produtos.",
				"Que tal acharmos esses itens no mercado?",
				"É só clicar neles que ensino o sinal deles",
				"Vamos lá!"
			],
			"resultado" : [
				"Mandaram bem! Vocês conseguiram encontrar todos os itens!",
				"Temos outros lugares para explorar!",
				"Vamos lá!"
			]
		},
		'#tela_escola' : {
			"inicio" : [
				"O alfabeto em LIBRAS é muito importante",
				"Eu aprendi com um jogo da memória",
				"Tentem imitar o que aparece nas cartas",
				"As setinhas que aparecem são movimentos das mãos"
			],
			"versus" : {
				"inicio" : [
					"Vamos ver quem consegue encontrar mais pares!",
					"Cada um tem sua vez de jogar, a marca mostra de quem é a vez.",
					"Vamos lá!"
				],
				"resultado" : [
					"Mandaram bem! Quem será o vencedor?",
					"resultado",
					"Temos outros lugares para explorar!",
					"Vamos lá!"
				]
			},
			"juntos" : {
				"inicio" : [
					"Vamos encontrar todos os pares juntos!",
					"Vamos lá!"
				],
				"resultado" : [
					"Mandaram bem! Vocês conseguiram encontrar todos os pares!",
					"Temos outros lugares para explorar!",
					"Vamos lá!"
				]
			}
		},
		'#tela_parque' : {
			'inicio' : [
				'Nossa, eu adorava vir a esse parque, mas ele está tão sujo.',
				'O que será que aconteceu? Será que as pessoas não percebem que isso prejudica o meio ambiente?',
				'Todos devemos fazer a nossa parte para preservar o meio ambiente',
				'E com pequenas ações todo mundo pode ajudar.',
				'Que tal se a gente ajudasse as pessoas a cuidar do parque?',
				'Jogar o lixo no canto certo é uma ação que ajuda bastante na preservação',
				'E a separação desse lixo pela coleta seletiva também é uma maneira de ajudar.',
				'Quando separamos o lixo em garantimos que eles cheguem ao destino adequado',
				'E chegando no destino adequado, ele pode ser reciclado com mais facilidade',
				'Ah, você sabia que coleta seletiva divide em cores para facilitar o tipo de lixo?',
				'Vermelho é para o plástico. Azul é para o papel. Amarelo é para o metal e verde é para o vidro.',
				'Agora que vocês já sabem disso. Vamos começar a separar os lixos?',
				'Vocês podem usar as teclas do seu computador para jogar o lixo no canto certo',
			],
			'versus' : {
				"inicio" : [
					'Vocês podem usar as teclas do computador para jogar o lixo no canto certo.',
					'Cada jogador ficará com teclas algumas teclas do computador para movimentar o lixo na tela.',
					'%%jogador_1%% controlará com as teclas “A”, “S” e “D”, sendo A para movimentar o lixo para esquerda,', 
					'D para movimentar o lixo para direita e S para movimentar o lixo mais rapidamente para baixo.',
					'Já %%jogador_2%% controlará com as teclas com setas para esquerda, baixo e direita,', 
					'sendo cada tecla correspondente ao movimento para esquerda, baixo e direita, respectivamente.',
					'Ganhem pontos ao acertarem o tipo de lixo na lixeira correspondente.',
					'O jogador com mais pontos, ganha a disputa.  Valendo!'
				],
				'resultado' : [
					'Uau! Olha como esse parque ficou mais bonito!',
					"resultado",
					"Vou mostrar como se faz o sinal de cada um dos tipos de lixo reciclável",
					"Clique na lixeira que realizarei o sinal"
				]
			},
			'juntos' : {
				'inicio' : [
					'Vocês podem usar as teclas do computador para jogar o lixo no canto certo.',
					'Cada jogador ficará com teclas algumas teclas do computador para movimentar o lixo na tela.',
					'%%jogador_1%% controlará com as teclas “A”, “S” e “D”, sendo A para movimentar o lixo para esquerda,', 
					'D para movimentar o lixo para direita e S para movimentar o lixo mais rapidamente para baixo.',
					'Já %%jogador_2%% controlará com as teclas com setas para esquerda, baixo e direita,', 
					'sendo cada tecla correspondente ao movimento para esquerda, baixo e direita, respectivamente.',
					'Cada jogador controlará 2 tipos de lixo. %%jogador_1%% ficará com %lixo_jogador_1%,', 
					'e %%jogador_2%% ficará com %lixo_jogador_2%',
					'Ganhem pontos ao acertarem o tipo de lixo na lixeira correspondente. Valendo!'
				],
				'resultado' : [
					'Uau! Olha como esse parque ficou mais bonito!',
					"Vocês trabalharam muito bem juntos!",
					"Vou mostrar como se faz o sinal de cada um dos tipos de lixo reciclável",
					"Clique na lixeira que realizarei o sinal"
				]
			},
			'final' : [
				"Temos outros lugares para explorar! Vamos lá!"
			]
		},
		"repetir" : [
			"Ei, Já passamos por aqui!",
			"Mas podem explorar o local se quiser."
		]
	}
};