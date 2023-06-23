// alert('Olá mundo');

var numero = 25; 

if (numero > 10) {
    // alert ('numero maior que 10');
}else if (numero < 0) {
    // alert ('numero inválido');
}else{
    // alert ('maior que 10');
}

var contador = 0;

// enquanto contador for menor que 5 executa

while (contador < 5) {
    // alert ('Numero: '+ contador);
    contador = contador + 1;
}

// criação de lista - Fulano 0, Ciclano 1, Deltrano 2
var nomes = ['Fulano','Ciclano','Deltrano'];
// alert (nomes [0]);


// nomes.lenght = 3
for (contador=0; contador < nomes.length; contador++) {
    // alert(nomes[contador]);

    if(nomes[contador] === 'Ciclano') {
    // alert ('Pessoa Encontrada!')
    }
}

// função

function baixarEstoque () {
    alert ("Baixou Estoque!");
}

function movimentarCaixa () {
    alert ("Caixa movimentado!");
}

function fazerVenda () {
    baixarEstoque ();
    movimentarCaixa ();

    // DOM -
    var titulo = document.getElementById('titulo');
    titulo.innerHTML = "novo texto";
}

var pessoa = { idade:10, nome: 'Ricardo', altura: 1.50};
alert(pessoa.altura);
