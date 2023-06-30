//definir área do canvas
var canvas = document.getElementById("gameCanvas");
var desenho = canvas.getContext("2d");

//configurar raquete
var raqueteAltura = 10;
var raqueteLargura = 75;
var raqueteX = (canvas.width - raqueteLargura) / 2; // Centraliza a raquete
var velocidadeRaquete = 10;

//configurar a bola
var bolaRadius = 10;
var bolaX = canvas.width / 2;
var bolaY = canvas.height - 30;
var bolaDX = 2;                         // Direção de bola em X (esquerda/direita)
var bolaDY = -2;                        // Direção da bola em Y (acima/abaixo)

var tijolosPorLinha = 3;
var tijolosPorColuna = 6;
var tijoloLargura = 75;
var tijoloAltura = 20;
var tijoloEspacamento = 10;
var espacamentoSuperiorQuadro = 30;
var espacamentoEsquerdoQuadro = 30;
var tijolos = []; // Lista com tijolos.

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
    desenho.fillStyle = "blue";
    desenho.fill();
    desenho.closePath();
}

function desenharBola(){
    desenho.beginPath();
    desenho.arc(bolaX, bolaY, bolaRadius, 0, Math.PI * 2);
    desenho.fillStyle = "black";
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
                desenho.fillStyle = "green";
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

                if(bolaX > tijolo.x
                    && bolaX < tijolo.x + tijoloLargura
                    && bolaY > tijolo.y 
                    && bolaY < tijolo.y + tijoloAltura){
                        bolaDY = -bolaDY;
                        tijolo.ativo = 0;
                }
            }
        }
    }
}

function desenhar(){

    desenho.clearRect(0,0, canvas.width, canvas.height); // Limpa o frame anterior
    desenharRaquete();
    desenharBola();
    desenharTijolos();
    detectarColisao(    );

    // Analisa colisão do eixoX, colisão cantos direita/esquerda
    if(bolaX + bolaDX > canvas.width - bolaRadius || bolaX + bolaDX < bolaRadius){
        bolaDX = -bolaDX;
    }

    // Analisa a colição com o topo
    if(bolaY + bolaDY < bolaRadius){
        bolaDY = -bolaDY;
    }

    else if(bolaY + bolaDY > canvas.height - bolaRadius){
        
        if(bolaX > raqueteX && bolaX < raqueteX + raqueteLargura){
            bolaDY = -bolaDY;
        }else{
            document.location.reload(); // Reinicia caso a bola passe a base
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