async function buscarClima() {

    var cidade = document.getElementById("cidade").value;
    var chave = 'c88aea555876b63bc3631708b65208de';
    var url = 'https://api.openweathermap.org/data/2.5/weather?q='+cidade+'&appid='+chave+'&units=metric';

    try {

        var resposta = await fetch(url);
        var dado = await resposta.json();

        var resultado = document.getElementById("resultado");
        resultado.innerHTML = 
        '<h2> Previsão do Tempo para '+ dado.name +'</h2>'
        +'<p> Temperatura: ' + dado.main.temp + ' C° '
        +'<p> Temperatura Máxima: ' + dado.main.temp_max + ' C° '
        +'<p> Temperatura Mínima: ' + dado.main.temp_min + ' C° '
        +'<p> Temperatura Ambiente: ' + dado.main.feels_like + ' C° '
        +'<p> Umidade: ' + dado.main.humidity + ' % '
        +'<p> Velocidade do Vento: ' + dado.wind.speed + ' Km/h '
        +'<p> Nuvens: ' + dado.clouds.all + ' % '
        +'<p> Condição ' + dado.weather[0].description + ' </p> '
        + '<img class="imgTempo" src="https://openweathermap.org/img/wn/' + dado.weather[0].icon + '@4x.png">'

        
    }catch(error) {
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = "<p>Erro ao buscar o clima:" + error + "</p>";

    }

}
