const container = document.getElementById('container');
const xhr = new XMLHttpRequest();
const url = 'https://pokeapi.co/api/v2/pokemon/?limit=100000&offset=0';
let json = null;
xhr.open('GET', url);
xhr.send();
xhr.responseType = 'json';

xhr.onload = function () {
    if (xhr.status != 200) { // analyse l'état HTTP de la réponse
        console.log(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
    } else { // show the result
        json = xhr.response.results;
        console.log(json);
        makeList(json);
    }
};

xhr.onprogress = function (event) {
    if (event.lengthComputable) {
        console.log(`Received ${event.loaded} of ${event.total} bytes`);
    } else {
        console.log(`Received ${event.loaded} bytes`); // pas de Content-Length
    }

};

xhr.onerror = function () {
    alert("Request failed");
};

function makeList(json) {
    json.forEach((pokemon) => {
        let li = document.createElement("li");
        li.innerHTML = pokemon.name;
        container.appendChild(li);
    });
}