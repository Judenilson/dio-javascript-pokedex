let urlClass = new URL(window.location.href);
let id = urlClass.searchParams.get('id');

function loadPokemonItens(id) {
    pokeApi.getPokemonDetails(id).then((pokemon) => {
        document.getElementById('poke').innerHTML = (`
        <h1 id="name">${pokemon.name}</h1>
        <span class="number">#${pokemon.number}</span>
        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class= "type ${type}">${type}</li>`).join('')}
            </ol>
            <img src="${pokemon.photo}" alt="">
        </div>
        `);

        const topColor = document.getElementById('top');
        topColor.className += ' ' + pokemon.type;

        document.getElementById('about').innerHTML = (`
            <ul class="detailList">
                <li class="detailData"><label class="detaillabel">Height</label><label class="detailValue">${pokemon.height} cm</label></li>                    
                <li class="detailData"><label class="detaillabel">Weight</label><label class="detailValue">${pokemon.weight} kg</label></li>                    
                <li class="detailData"><label class="detaillabel">Abilities</label><label class="detailValue"> ${pokemon.abilities.map((ability) => ability).join(', ') }</label></li>
            </ul>
        `);

        document.getElementById('base').innerHTML = (`
            <ul class="detailList">
                <li class="detailData"><label class="detaillabel">HP</label><label class="detailValue">${pokemon.hp}</label><div class="bar"><div id="hpBar"></div> <div class="backgroundBar"></div></div</li>
                <li class="detailData"><label class="detaillabel">Attack</label><label class="detailValue">${pokemon.attack}</label><div class="bar"><div id="atkBar"></div> <div class="backgroundBar"></div></div></li>
                <li class="detailData"><label class="detaillabel">Defense</label><label class="detailValue">${pokemon.defense}</label><div class="bar"><div id="defBar"></div> <div class="backgroundBar"></div></div></li>
                <li class="detailData"><label class="detaillabel">Sp. Atk</label><label class="detailValue">${pokemon.specialAttack}</label><div class="bar"><div id="spaBar"></div> <div class="backgroundBar"></div></div></li>
                <li class="detailData"><label class="detaillabel">Sp. Def</label><label class="detailValue">${pokemon.specialDefense}</label><div class="bar"><div id="spdBar"></div> <div class="backgroundBar"></div></div></li>
                <li class="detailData"><label class="detaillabel">Speed</label><label class="detailValue">${pokemon.speed}</label><div class="bar"><div id="speedBar"></div> <div class="backgroundBar"></div></div></li>
                <li class="detailData"><label class="detaillabel">Total</label><label class="detailValue">${pokemon.total}</label><div class="bar"><div id="totalBar"></div> <div class="backgroundBar"></div></div></li>
            </ul>
        `);

        // const hp = toString(pokemon.hp) + 'px';
        
        const hpBar = document.getElementById('hpBar');
        const atkBar = document.getElementById('atkBar');
        const defBar = document.getElementById('defBar');
        const spaBar = document.getElementById('spaBar');
        const spdBar = document.getElementById('spdBar');
        const speedBar = document.getElementById('speedBar');
        const totalBar = document.getElementById('totalBar');
        hpBar.style.width = pokemon.hp + '%';
        if (pokemon.hp < 70){hpBar.style.backgroundColor = '#EE0'}
        if (pokemon.hp < 50){hpBar.style.backgroundColor = '#F00'}
        atkBar.style.width = pokemon.attack + '%'
        if (pokemon.attack < 70){atkBar.style.backgroundColor = '#EE0'}
        if (pokemon.attack < 50){atkBar.style.backgroundColor = '#F00'}
        defBar.style.width = pokemon.defense + '%'
        if (pokemon.defense < 70){defBar.style.backgroundColor = '#EE0'}
        if (pokemon.defense < 50){defBar.style.backgroundColor = '#F00'}
        spaBar.style.width = pokemon.specialAttack + '%'
        if (pokemon.specialAttack < 70){spaBar.style.backgroundColor = '#EE0'}
        if (pokemon.specialAttack < 50){spaBar.style.backgroundColor = '#F00'}
        spdBar.style.width = pokemon.specialDefense + '%'
        if (pokemon.specialDefense < 70){spdBar.style.backgroundColor = '#EE0'}
        if (pokemon.specialDefense < 50){spdBar.style.backgroundColor = '#F00'}
        speedBar.style.width = pokemon.speed + '%'
        if (pokemon.speed < 70){speedBar.style.backgroundColor = '#EE0'}
        if (pokemon.speed < 50){speedBar.style.backgroundColor = '#F00'}
        const total = pokemon.total/6;
        totalBar.style.width = total + '%'
        if (total < 70){totalBar.style.backgroundColor = '#EE0'}
        if (total < 50){totalBar.style.backgroundColor = '#F00'}

        
        document.getElementById('moves').innerHTML = (`
            <ul>
                ${pokemon.moves.map((move) => `<li>${move}</li>`).join('')}
            </ul
        `);
    });
}

loadPokemonItens(id)
