const container = document.getElementById('container');
const url = 'https://pokeapi.co/api/v2/pokemon/?limit=100000&offset=0';

(async function() {
  const json = await getData(url);
  makeList(json);
})();

function makeList(json) {
  json.forEach((pokemon) => {
    let li = document.createElement("li");
    li.innerHTML = pokemon.name;
    container.appendChild(li);
  })
}

async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
    return data.results
  }

