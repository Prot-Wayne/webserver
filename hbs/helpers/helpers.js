const hbs = require('hbs');

//hbs Helper
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
})

hbs.registerHelper('capitalizar', (text) => {

    let palabaras = text.split(' ');
    palabaras.forEach( (palabra, idx) => {
        palabaras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabaras.join(' ');
})