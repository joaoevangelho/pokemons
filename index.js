const http = require('http');
let Pokedex = require('pokedex'),
    pokedex = new Pokedex();

let pikachu = pokedex.pokemon('pikachu');

console.log(pokedex.pokemon('pikachu'));
let i = 0;

const server = http.createServer((request, response) => {
    i++;
    response.writeHead(200, {
        "Content-Type": "text/html",
    });

    let pokemon = request.url;
    pokemon = pokemon.replace('/', '');

    switch (pokemon) {
        case pokemon:
            response.write(`<img src= "${pokedex.pokemon(pokemon).sprites.animated}"/>`);
            //response.write(`${pokedex.pokemon(pokemon).name}`);
            break;
        default:
            response.statusCode = 404;
            response.write(`We could not find the pokemon you're looking for`);
            break;
    }
    response.end();
});

server.listen(3000); //3000 is a convention for tests