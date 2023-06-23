function buscar() {
    var seletor = document.getElementById('moeda').value;
    var resultado = document.getElementById('resultado');

    fetch('https://api.coingecko.com/api/v3/simple/price?ids='+seletor+'&vs_currencies=brl')
    .then(response => response.json())
    .then(data => {

        var preco = data[seletor].brl;
        resultado.textContent = formatar(preco); 
        mudarImagem(seletor);

    }).catch(error => resultado.textContent = error);

}

function formatar(valor) {

    valor = Number(valor).toFixed(2).replace('.',',');
    valor = "R$" + valor;

    return valor;
}

function mudarImagem(seletor) {
    var moeda = document.getElementById('imagem');

    if(seletor =="bitcoin"){
        moeda.innerHTML = '<img width="200px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png">'    
    }else if(seletor == "ethereum"){
        moeda.innerHTML = '<img width="200px" src="https://thumbs.dreamstime.com/b/azul-do-logotipo-de-ethereum-109857612.jpg">'
    }else if(seletor == "litecoin"){ 
        moeda.innerHTML = '<img width="200px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LTC-400.png/800px-LTC-400.png">'
    }else if(seletor == "dogecoin"){ 
        moeda.innerHTML = '<img width="200px" src="https://thumbs.dreamstime.com/b/%C3%ADcone-do-cryptocurrency-doge-de-dogecoin-na-bandeira-136630365.jpg">'
    }
    
}