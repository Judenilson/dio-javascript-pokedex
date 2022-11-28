let urlClass = new URL(window.location.href);
let id = urlClass.searchParams.get("id");

function loadPokemonItens(id) {
    pokeApi.getPokemonDetails(id).then((pokemon) => {
        document.getElementById('poke').innerHTML = (`
        <h1 id="name">${pokemon.name}</h1>
        <span class="number">#001</span>
        <div class="detail">
            <ol class="types">
                <li class="type grass">grass</li>
                <li class="type fire">fire</li>
                <li class="type water">water</li>
            </ol>
            <img src="${pokemon.photo}" alt="">
        </div>
        `)
    //     const newHtml = (pokemon) => `
    //         <li class="pokemon ${pokemon.type}">
    //             <span class="number">#${pokemon.number}</span>
    //             <span class="name">${pokemon.name}</span>            
    //             <div class="detail">
    //                 <ol class="types">
    //                     ${pokemon.types.map((type) => `<li class= "type ${type}">${type}</li>`).join('')}
    //                 </ol>
    //                 <img src="${pokemon.photo}" alt="${pokemon.name}">
    //             </div>            
    //         </li>`
        
    //     pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(id)
