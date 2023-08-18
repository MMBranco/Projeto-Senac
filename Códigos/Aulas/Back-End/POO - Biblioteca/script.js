 class Livro {
    // Classe livro.
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }
}

// Classe gerenciamento, responsável por gerenciar os elementos em tela.
class gerenciamento {
    constructor() {
        this.livros = []; // Lista de livros.
        this.formulario = document.getElementById('formulario');
        this.listagem = document.getElementById('listagem');

        // Monitorar o submit (Clique do botão) do formulário.
        this.formulario.addEventListener('submit', this.adicionar.bind(this)); 
    }

    adicionar(event){
        // alert('teste');
        event.preventDefault();
        var titulo = document.getElementById('titulo').value;
        var autor = document.getElementById('autor').value;

        var livro = new Livro(titulo, autor); // Criando objeto livro.
        this.livros.push(livro); // Adiciona objeto livro na listra livros.
        this.exibirTela();
        titulo.value = ''; // Limpar campo titulo.
        autor.value = '';  // Limpar campo autor.
    }
    exibirTela(){
        this.listagem.innerHTML = ''; // Limpa lista.
        for(var i=0; i < this.livros.length; i++){  // Percorrer toda lista de livros.
            var livro = this.livros [i];
            var li = document.createElement('li');
            li.textContent = livro.titulo + ' por ' +livro.autor;
            this.listagem.appendChild(li);
        }
    }
}
var gerencia = new gerenciamento(); // Instanciando um novo objeto para gerenciamento.