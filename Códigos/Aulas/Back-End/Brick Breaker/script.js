//definir área do canvas
var canvas = document.getElementById("gameCanvas");
var desenho = canvas.getContext("2d");

//configurar raquete
var raqueteAltura = 10;
var raqueteLargura = 90;
var raqueteX = (canvas.width - raqueteLargura) / 2; // Centraliza a raquete
var velocidadeRaquete = 20;

//configurar a bola
var bolaRadius = 3;
var bolaX = canvas.width / 2;
var bolaY = canvas.height - 30;
var bolaDX = 3;                         // Direção de bola em X (esquerda/direita)
var bolaDY = -3;                        // Direção da bola em Y (acima/abaixo)

var tijolosPorLinha = 3;
var tijolosPorColuna = 8;
var tijoloLargura = 73;
var tijoloAltura = 20;
var tijoloEspacamento = 2;
var espacamentoSuperiorQuadro = 1;
var espacamentoEsquerdoQuadro = 1;
var tijolos = []; // Lista com tijolos.

var totalPotuacao = tijolosPorLinha * tijolosPorColuna * progressao;
var pontuacao = 0;
var progressao = 100;

function facil(){
    raqueteLargura = 100;
    tijolosPorLinha = 3;
    tijolosPorColuna = 7;
    tijoloLargura = 90;
    tijoloAltura = 40;
    bolaRadius = 20; // Tamanho da bola.
    bolaDX = 2; // Velocidade da bola direita/esquerda.
    bolaDY = -1; // Velocidade da bola cima/baixo.

    totalPotuacao = tijolosPorLinha * tijolosPorColuna * progressao;
    pontuacao = 0;
    progressao = 100;

    iniciarTijolos();

}

function medio(){
    raqueteLargura = 70;
    tijolosPorLinha = 3;
    tijolosPorColuna = 8;
    tijoloLargura = 73;
    tijoloAltura = 20;
    bolaRadius = 10; // Tamanho da bola.
    bolaDX = 3; // Velocidade da bola direita/esquerda.
    bolaDY = 1; // Velocidade da bola cima/baixo.

    totalPotuacao = tijolosPorLinha * tijolosPorColuna * progressao;
    pontuacao = 0;
    progressao = 100;

    iniciarTijolos();

}

function dificil(){
    raqueteLargura = 75;
    tijolosPorLinha = 3;
    tijolosPorColuna = 8;
    tijoloLargura = 75;
    tijoloAltura = 20;
    tijoloEspacamento = 2;
    bolaRadius = 10;
    bolaDX = 7;
    bolaDY = -7;
    bolaX = canvas.width / 2;
    bolaY = canvas.height - 30; 
    totalPontuacao = tijolosPorLinha * tijolosPorColuna * 100;
    pontuacao = 0;
    iniciarTijolos();
}

function ultra(){
    raqueteLargura = 70;
    velocidadeRaquete = 18;
    tijolosPorLinha = 3;
    tijolosPorColuna = 8;
    tijoloLargura = 75;
    tijoloAltura = 20;
    tijoloEspacamento = 2;
    bolaRadius = 8;
    bolaDX = 12;
    bolaDY = -12;
    bolaX = canvas.width / 2;
    bolaY = canvas.height - 30; 
    totalPontuacao = tijolosPorLinha * tijolosPorColuna * 100;
    pontuacao = 0;
    iniciarTijolos();
}


function iniciarTijolos(){
    // Dedicado a inicialização dos tijolos.
    for(var coluna=0; coluna < tijolosPorColuna; coluna++ ){
        tijolos[coluna] = [] ;//0 1 2 3 4 5

        for(var linha=0; linha < tijolosPorLinha; linha ++){

            tijolos[coluna][linha] = {x:0, y:0, ativo:1}
            // X é a posição esquerda/direita no Canva
            // Y é a posição acima/abaixo no canva
            // Ativo, deermina se o tijolo aparece ou não

            desenho.beginPath();
            desenho.rect(20,20,tijoloAltura, tijoloLargura);
            desenho.fill();
            desenho.closePath();
        }
    }
}
iniciarTijolos();


// Dedicado a inicialização dos tijolos.
for(var coluna=0; coluna < tijolosPorColuna; coluna++ ){
    tijolos[coluna] = [] ;//0 1 2 3 4 5

    for(var linha=0; linha < tijolosPorLinha; linha ++){

        tijolos[coluna][linha] = {x:0, y:0, ativo:1}
        // X é a posição esquerda/direita no Canva
        // Y é a posição acima/abaixo no canva
        // Ativo, deermina se o tijolo aparece ou não

        desenho.beginPath();
        desenho.rect(20,20,tijoloAltura, tijoloLargura);
        desenho.fill();
        desenho.closePath();
    }
}

var setaDireita = false;
var setaEsquerda = false;

//movimentação da raquete
document.addEventListener("keydown", descerDaTecla);
document.addEventListener("keyup", subirDaTecla);

function descerDaTecla(tecla){
    if(tecla.key === "d" || tecla.key === "D" || tecla.key === "ArrowRight" || tecla.key === "Right"){
        setaDireita = true;

    }else if(tecla.key === "a" || tecla.key === "A" || tecla.key === "ArrowLeft" || tecla.key === "Left"){
        setaEsquerda = true;
    }
}

function subirDaTecla(tecla){
    
    if(tecla.key === "d" || tecla.key === "D" || tecla.key === "ArrowRight" || tecla.key === "Right"){
        setaDireita = false;

    }else if(tecla.key === "a" || tecla.key === "A" || tecla.key === "ArrowLeft" || tecla.key === "Left"){
        setaEsquerda = false;
    }
}

function desenharRaquete(){
    desenho.beginPath(); // Iniciar desenho da raquete
    desenho.rect(raqueteX, canvas.height - raqueteAltura, raqueteLargura, raqueteAltura);
    desenho.fillStyle = "white";
    desenho.fill();
    desenho.closePath();
}

function desenharBola(){
    desenho.beginPath();
    desenho.arc(bolaX, bolaY, bolaRadius, 0, Math.PI * 2);
    desenho.fillStyle = "white";
    desenho.fill(); 
    desenho.closePath();
}

function desenharTijolos(){
    for(var coluna=0; coluna < tijolosPorColuna; coluna ++){
        for(var linha=0; linha < tijolosPorLinha; linha ++){

            if(tijolos[coluna][linha].ativo == 1){ // Verifica se o tijolo está ativo.
                
                var tijoloX = (coluna * (tijoloLargura + tijoloEspacamento) + espacamentoEsquerdoQuadro);
                var tijoloY = (linha * (tijoloAltura + tijoloEspacamento) + espacamentoSuperiorQuadro);

                tijolos[coluna][linha].x = tijoloX;
                tijolos[coluna][linha].y = tijoloY;

                debugger

                desenho.beginPath();
                desenho.rect(tijoloX, tijoloY, tijoloLargura, tijoloAltura);
                desenho.fillStyle = "white";
                desenho.fill();
                desenho.closePath();
            }
        }
    }
}

function detectarColisao(){
    for(var coluna=0; coluna < tijolosPorColuna; coluna++){
        for(var linha=0; linha < tijolosPorLinha; linha++){
            
            var tijolo = tijolos[coluna][linha];

            if(tijolo.ativo === 1){

                if(bolaX + bolaRadius > tijolo.x
                    && bolaX - bolaRadius < tijolo.x + tijoloLargura
                    && bolaY + bolaRadius > tijolo.y 
                    && bolaY - bolaRadius < tijolo.y + tijoloAltura){
                        bolaDY = -bolaDY;
                        tijolo.ativo = 0;
                        tela = document.getElementById("ponto");
                        pontuacao = pontuacao + progressao;
                        tela.innerHTML = "Score: " + pontuacao;
                        gerarEfeitoSonoro('moeda.mp3');

                        if(pontuacao === totalPotuacao) {
                            vitoria();
                            gerarEfeitoSonoro('nerd.mp3');
                            
                        }
                }
            }
        }
    }
}
// contador = 0;

function gameOver(){
    var gameOver = document.getElementById("gameOver");
    gameOver.style.display = "block";

    // if(contador < 1){
    //     gerarEfeitoSonoro('ugh.mp3');
    // }
    // contador++;

    // ^ Faz o som do "Game Over" se reproduzir só uma vez.


}

function reiniciar(){
    document.location.reload();
    // contador = 0;
}

function vitoria(){
    var mensagem = document.getElementById("vitoria");
    mensagem.style.display = "block";
}

function gerarEfeitoSonoro(som){
    // Cria contexto de áudio.
    var contexto = new (window.AudioContext)
    // Faz uma requisição para carregar o arquivo de som.
    var requisicao = new XMLHttpRequest();
    requisicao.open('GET',som,true);
    requisicao.responseType = 'arraybuffer'; // Armazenar na memória.

    requisicao.onload = function(){
        // Decodificar o arquivo de som.
        contexto.decodeAudioData(requisicao.response, function(buffer) {
            // Reprodução do som.
            var fonte = contexto.createBufferSource();
            fonte.buffer = buffer;
            // Conectar saída de som.
            fonte.connect(contexto.destination);
            fonte.start(0); // Executa o som.
        });
    }
    requisicao.send();
}

document.addEventListener("keydown", function(event) {
    if (event.key === "r" || event.key === "R") {
      location.reload();
    }
  });

function desenhar(){

    desenho.clearRect(0,0, canvas.width, canvas.height); // Limpa o frame anterior
    desenharRaquete();
    desenharBola();
    desenharTijolos();
    detectarColisao();

    // Analisa colisão do eixoX, colisão cantos direita/esquerda
    if(bolaX + bolaDX > canvas.width - bolaRadius || bolaX + bolaDX < bolaRadius){
        bolaDX = -bolaDX;
    }

    // Analisa a colição com o topo
    if(bolaY + bolaDY < bolaRadius){
        bolaDY = -bolaDY;
    }

    else if(bolaY + bolaDY > canvas.height - bolaRadius - raqueteAltura){
        
        if(bolaX > raqueteX && bolaX < raqueteX + raqueteLargura){
            bolaDY = -bolaDY;
            gerarEfeitoSonoro('ugh.mp3');   
        }else{
            // document.location.reload(); // Reinicia caso a bola passe a base
            gameOver()
            gerarEfeitoSonoro('ugh.mp3');
        }
    }

    // Se setaDireita estiver ativo &&"e" raqueteX < largura do canvas - raqueteLargura
    if(setaDireita === true && raqueteX < canvas.width - raqueteLargura){
        raqueteX = raqueteX + velocidadeRaquete; // Anda pra direita
    
    }

    // Se setaEsquerda estiver ativo &&"e" raqueteX > 0"começo do canva"
    else if(setaEsquerda && raqueteX > 0){
        raqueteX = raqueteX - velocidadeRaquete; // Anda pra esquerda
    }

    bolaX = bolaX + bolaDX; // Faz a bola andar para direita/esquerda
    bolaY = bolaY + bolaDY; //                       cima/baixo

    requestAnimationFrame(desenhar) // Atualiazar tela de forma suave
}
desenhar(); // Chama a função desenhar