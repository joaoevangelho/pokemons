const http = require('http');
let Pokedex = require('pokedex'),
    pokedex = new Pokedex();

let pikachu = pokedex.pokemon('pikachu');

console.log(pokedex.pokemon('pikachu'));
let i = 0;

const server = http.createServer((request, response) => {
    response.writeHead(200, {
        "Content-Type": "text/html",
    });

    switch (request.url) {
        case '/pikachu':
            response.write(`<img src= "${pokedex.pokemon('pikachu').sprites.animated}"/>`);
            response.write(`${pokedex.pokemon('pikachu').name}`);
            break;
        default:
            response.statusCode = 404;
            response.write(`We could not find the pokemon you're looking for`);
            break;
    }
    response.end();
});

server.listen(3000); //3000 is a convention for tests