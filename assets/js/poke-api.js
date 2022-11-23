const pokeApi = {}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url) //buscando na nossa lista de pokemons
        .then((response) => response.json()) //pegando a lista de pokemons (response) e convertendo para json
        .then((jsonBody) => jsonBody.results) //limpando o json p ficar só os resultados de fato, pq a api manda mais coisas, tipo paginação e tal.
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) //transformando a lista em uma lista de busca do detalhe, pois o map vai iterar sobre a url de cada pokemon
        .then((detailRequests) => Promise.all(detailRequests)) //esperando todas as requisições terminarem
        .then((getPokemonsDetail) => getPokemonsDetail)
}

