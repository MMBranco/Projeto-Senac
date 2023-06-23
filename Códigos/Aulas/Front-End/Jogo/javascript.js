var jogador = "x";

function joga(celula){
    // alert ("Funcionou!");

    if (celula.innerHTML == "") {
        celula.innerHTML = jogador;

        if(jogador == "x") {
            jogador = "o";
        
        }else { 

            jogador = "x";
        
        }
    }
}

// Função reinicia a página.
function reiniciar() {
    window.location.reload();
}


// Fulano = 0, Ciclano = 1, Deltrano = 2, Beltrano = 3
const nomes = ['Fulano', 'Ciclano', 'Deltrano', 'Beltrano', 'Reclano', 'Teclano'];

function gerarBatalha() {
    
    // Sorteia um nome da lista, "Math.random vai sortear os itens", "Math.floor arredonda o número da lista."
    const nome1 = nomes[ Math.floor( Math.random() * nomes.length ) ];
    const nome2 = nomes[ Math.floor( Math.random() * nomes.length ) ];
    
    // Enquanto nome1 - nome2, sorteia novamente
    while(nome1 === nome2){
    
        gerarBatalha();

    }
    
    // Escreve na tela
    document.getElementById('jogador1').textContent = nome1;
    document.getElementById('jogador2').textContent = nome2;


}

function adicionar() {

    var nome = document.getElementById("nome").value;
    nomes.push(nome)

    listar();

}

function listar() {

    var listagem = document.getElementById("lista");
    listagem.innerHTML = "";                            // Limpa a lista em tela.

    for(var i = 0; i < nomes.length; i++) {             // Percorre os itens da lista.

        var item = document.createElement("li");        // Cria elemento <li> para o HTML.

        var nomeItem = nomes[i];                        // Guarda na variável NomeItem o nome específico da lista.
        item.innerHTML = nomeItem;                      // Colocar o valor dentro do <li>
        listagem.appendChild(item);                     // Adiciona o <li> na lista do HTML, dentro do <ul>.

    }

}

