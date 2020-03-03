// placeholder
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser')
var exphbs = require('express-handlebars');
var router = require('./controllers/burgers_controller.js');
var PORT = process.env.PORT || 3036;


var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/', router);

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));