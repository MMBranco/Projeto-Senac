var frase = "O amor de mãe por seu filho é diferente de qualquer outra coisa no mundo. Ele não obedece lei ou piedade, ele ousa todas as coisas e extermina sem remorso tudo o que ficar em seu caminho.";

function gerarFrase() {

    var texto = document.getElementById("frase");
    texto.innerHTML = frase;

}

function lerFrase() {

    var som = window.speechSynthesis;
    var discurso = new SpeechSynthesisUtterance(frase);
    som.speak(discurso);
}
