var canvas = document.getElementById("gameCanvas");
var desenho = canvas.getContext("2d");


var raqueteAltura = 10;
var raqueteLargura = 75;
var raqueteX = (canvas.width - raqueteLargura) / 2; 
var velocidadeRaquete = 7;

var bolaRadius = 10;
var bolaX = canvas.width / 2;
var bolaY = canvas.height - 30;
var bolaDX = 2;                 // Direção da bola em X (Esquerda/Direita)
var bolaDY = -2;                // Direção da bola em Y (Acima/Abaixo)  

var setaDireita = false;
var setaEsquerda = false;


// Movimentação da Raquete - Detectar subir e descer da tecla.
document.getElementById("keydown", descerDaTecla);
document.getElementById("keyup", subirDaTecla);

function descerDaTecla(tecla) {
    if(tecla.key === "Right" || tecla.key === "ArrowRight") {
        setaDireita = true;
    }

    else if (tecla.key === "Left" || tecla.key === "ArrowLeft") {
        setaEsquerda = true;
    }
}

function subirDaTecla() {
    
}

function desenharRaquete() {
    
    desenho.beginPath();
    desenho.rect(raqueteX, canvas.height - raqueteAltura, raqueteLargura, raqueteAltura);
    desenho.fillStyle = "blue";
    desenho.fill();
    desenho.closePach();
    
}

function desenhar() {

    desenho.clearRect(0, 0, canvas.width, canvas.height);
    desenharRaquete();

    if(setaDireita === true && raqueteX < canvas.width - raqueteLargura) {
        raqueteX = raqueteX + velocidadeRaquete;
    }

    requestAnimationFrame(desenhar)

}

desenhar();

