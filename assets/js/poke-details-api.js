const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.held_itens.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types    

    pokemon.types = types
    pokemon.type = type
    
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}
pokeApi.getPokemonDetails = (id = 1) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    return fetch(url) //buscando na nossa lista de pokemons
        .then((response) => response.json()) //pegando a lista de pokemons (response) e convertendo para json        
        .then((jsonBody) => {console.log(jsonBody); jsonBody.results}) //limpando o json p ficar só os resultados de fato, pq a api manda mais coisas, tipo paginação e tal.
        .then((pokemons) => convertPokeApiDetailToPokemon(pokemons)) //transformando a lista em uma lista de busca do detalhe, pois o map vai iterar sobre a url de cada pokemon
        .then((detailRequests) => Promise.all(detailRequests)) //esperando todas as requisições terminarem
        .then((getPokemonsDetail) => getPokemonsDetail)
}

// number;
// name;
// types;
// types = [];
// photo;
// ability;
// abilities = [];
// weight;
// height;
// hp;
// attack;
// defense;
// specialAttack;
// specialDefense;
// speed;
// total;