const pokemonList = document.getElementById('pokemonList')
const pokemonId = document.get

let id = 1

function loadPokemonItens(id) {
    pokeApi.getPokemonDetails(id).then((pokemons) => {
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>            
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class= "type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>            
            </li>`
        ).join('');
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(id)