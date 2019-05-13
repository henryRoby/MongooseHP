var express = require("express")
var bodyParser = require("body-parser")
var Router = require('router')
var r = require("./Route/route").route
const dbConfig = require('./Config/database');
const mongoose = require('mongoose');
var app = express();
var cors = require('cors');
var methodOverride = require('method-override')
mongoose.Promise = global.Promise;

// Connecting to the database

 //app.use('/',r);
    app.use(express.json())
app.use(bodyParser.json())

   app.use(bodyParser.urlencoded({ extended:true}));
   app.use(bodyParser.json());
   app.use(cors());

   app.use(methodOverride('X-HTTP-Method'));
   app.use(methodOverride('X-HTTP-Method-Override'));
   app.use(methodOverride('X-Method-Override'));
   app.use(methodOverride('_method'));


    mongoose.connect(dbConfig.url, {
        useNewUrlParser: true
    }).then(() => {
        console.log("Successfully connected to the database");    
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
    });

r(app)
app.listen(8080);




