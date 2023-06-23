function buscar() {
    var entrada = document.getElementById("entrada").value.toLowerCase();

    if(entrada.length < 1) {
        entrada = contador 
    }

        var url = "https://pokeapi.co/api/v2/pokemon/"+entrada;

    fetch(url)
    .then (response => response.json())
    .then(data => {

        var tela = document.getElementById("tela");
        tela.innerHTML = 
        '<div><h2>'+ data.name +'</h2></div>'

        +' <p> ID:' + data.id + '</p>'
        +' <p> Tipo' + data.types.map(type => type.type.name) + '</p>'
        +' <p> Habilidades:' + data.abilities.map(ability => ability.ability.name) 
        +'<br><br><br><br><br><br>'

        +' <img class="pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/'+data.id+'.gif" > '
        +' <img class="pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/'+data.id+'.gif" > '

        +' <img class="pokemon" src="'+ data.sprites.front_shiny + '" > '
        +' <img class="pokemon" src="'+ data.sprites.back_shiny + '" > '
        
        
        contador = data.id;
        document.getElementById("entrada").value="";

    }).catch(error => {

        var tela = document.getElementById("tela");
        tela.innerHTML = "<p> Pokémon não encontrado! </p>"

    })

        

}

var contador= 0;

function proximo() {
    contador = contador + 1;
    buscar();

}

var contador= 0;

function anterior() {
    contador = contador - 1;
    buscar();

}
