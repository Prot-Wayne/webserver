var express = require('express');
var app = express();
const hbs = require('hbs');
require('./hbs/helpers/helpers');

const port = process.env.PORT || 3000;
// hbs Engine
app.use( express.static( __dirname + '/public'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


// peticiones al server
app.get('/', (req, res) =>{
      
    res.render('home',{
        nombre: 'leonardo'
    });
})

app.get('/about', (req, res) => {

    res.render('about');
})

app.listen(port, () => {
    console.log(`Escuchando puerto ${port}`);
});
