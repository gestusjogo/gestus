<div class="tela" id="tela_escolher_player">
    <button 
        class="butt_voltar" 
        onclick="return 
        trocarTela('#menu','bg_inicio')"
    > 
        VOLTAR
    </button>

    <button 
        class="btn_jogadores btn_j1" 
        onclick=" multi_jogadores = false;return trocarTela('#tela1','bg_fundo')"
    > 
        1 jogador
    </button>
    <button 
        class="btn_jogadores btn_j2"
        onclick=" multi_jogadores = true;return trocarTela('#tela_j1','bg_fundo')"
    > 
        2 jogadores 
    </button>
</div>