const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types    

    pokemon.types = types
    pokemon.type = type
    
    pokemon.photo = pokeDetail.sprites.other.home.front_default

    const abilities = pokeDetail.abilities.map((abilitiesSlot) => abilitiesSlot.ability.name)
    const [ability] = abilities
    pokemon.abilities = abilities
    pokemon.ability = ability
    
    pokemon.weight = pokeDetail.weight;
    pokemon.height = pokeDetail.height;

    // const stats = pokeDetail.stats.map((statsSlot) => statsSlot.stats.base_stat)
    // const [stat] = stats
    // pokemon.stats = stats
    // pokemon.stat = stat
    // console.log(stats)
    // pokemon.total += stat.map();

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
        // .then((poke) => console.log(poke))
        .then((pokemons) => convertPokeApiDetailToPokemon(pokemons)) //transformando a lista em uma lista de busca do detalhe, pois o map vai iterar sobre a url de cada pokemon        
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