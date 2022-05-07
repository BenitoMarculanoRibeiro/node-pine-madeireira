const PORT = 8085;
const HOST = 'localhost';
const express = require('express');
const app = express();
const { engine } = require('express-handlebars')
const bodyParser = require('body-parser')
var path = require('path');
app.use(express.static(path.join(__dirname,'/assets/')))



app.engine('handlebars', engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '/views'));
app.use('/assets', express.static('assets'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())




app.get('/', function (req, res) {
    res.render('home')
})

app.get('/form', function (req, res) {
    res.render('formulario')
})



app.listen(PORT, function () {
    console.log(`Running on http://${HOST}:${PORT}`);
})