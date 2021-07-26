const http = require('http'),
    fs = require('fs'),
    path = require('path'),
    env = process.env;



// DECLARAR ROUTES
//var usuarioRoutes = require('./routes/usuario');
var mailRoute = require ('./mail.js');


express = require('express');
bodyParser = require('body-parser');
var cfg = require('./config.js');
var jwt = require('jwt-simple');

var auth = require("./auth.js")();
app = express();



// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, authorization');

    // Set to true if you need the website to include cookies in the requests sent to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json()); //para peticiones application/json
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(auth.initialize());

// USAR ROUTES
//app.use('/usuario', usuarioRoutes);
app.post("/contacto",mailRoute.sendMail)



//#########################################################
//            INDEX RENDER PARA ANGULAR2
//######################################################
app.set('views', path.join(__dirname, 'dist'));
// engine
app.set('view enginer', 'ejs');
app.engine('html', require('ejs').renderFile);
// angular  dist -- VERY IMPORTANT
app.use(express.static(__dirname + '/dist'));


app.get('/', function (req, res, next) {
    res.render('index.html');
});






app.get('/nuevo', function (req, res) {
    var u = new Usuario({
        username: "Lucas",
        password: "asd",
        firstName: "Lucas",
        lastName: "Sala"
    });
    u.save().then(function (u) {
        res.status(201).json({
            message: 'Usuario creado',
            obj: u
        });
    });
});

var reportingApp = express();
app.use('/reporting', reportingApp);

var jsreport = require('jsreport-core')();
jsreport.use(require('jsreport-templates')());
jsreport.use(require('jsreport-express')({
    app: reportingApp
}));

jsreport.init();


var server = http.createServer(app);
server.listen(4000, function () {
    console.log("Servidor Corriendo");
});