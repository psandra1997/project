const searchInput = document.getElementById("search-input")
const searchButton = document.getElementById("search-button");
const pokemonInfo=document.getElementById("pokemon-info");


const getPokemon = async () => {

  try {
    const input = searchInput.value.toLowerCase();
    const onePokemon = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${input}`;
    const res = await fetch(onePokemon);
    const data = await res.json(); 

    const type = data.types
      .map(object => `<span class="type ${object.type.name}">${object.type.name}</span>`).join(' ').toUpperCase();
    
    pokemonInfo.innerHTML=`
    <img id="sprite" src="${data.sprites.front_default}" alt="${data.name} pictures">
    <table>
        <tbody>
            <tr>
              <th id="info">Info</th>
              <th>Value</th>
            </tr>
            <tr>
              <td>ID</td>
              <td id="pokemon-id">${data.id}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td id="pokemon-name">${data.name.charAt(0).toUpperCase()+data.name.slice(1)}</td>
            </tr>
<tr>
              <td>Weight</td>
              <td id="weight">${data.weight}</td>
            </tr>
             <tr>
              <td>Height</td>
              <td id="height">${data.height}</td>
            </tr>
             <tr>
              <td>Types</td>
              <td id="types">${type}
             
              </td>
            </tr>
             <tr>
              <td>HP</td>
              <td id="hp">${data.stats[0].base_stat}</td>
            </tr>
             <tr>
              <td>Attack</td>
              <td id="attack">${data.stats[1].base_stat}</td>
            </tr>
             <tr>
              <td>Defense</td>
              <td id="defense">${data.stats[2].base_stat}</td>
            </tr>
            <tr>
              <td>Sp. Attack</td>
              <td id="special-attack">${data.stats[3].base_stat}</td>
            </tr>
             <tr>
              <td>Sp. Defense</td>
              <td id="special-defense">
              ${data.stats[4].base_stat}</td>
            </tr>
             <tr>
              <td>Speed</td>
              <td id="speed">${data.stats[5].base_stat}</td>
            </tr>
            </tbody>
        </table>` 

  } catch (err) {
    console.log(err);
     alert('Pokémon not found');
  }
};

searchButton.addEventListener("click",
getPokemon)