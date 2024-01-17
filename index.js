const express = require('express');
const cors =  require('cors');
const path =  require('path');
const winston = require('winston');
const expressLayoutes = require('express-ejs-layouts');
const bodyParser =require('body-parser');

const customerRouter = require('./routes/customerRoute');
const err = require('./middleweare/error');
const config = require('./startup/config');

const app = express();

require('./startup/db');
require('./startup/login');
require('./startup/validation');

app.use(expressLayoutes);
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public'))); 

app.use(customerRouter.routes);
app.use(err);

app.listen(config.port, ()=> winston.info('app sur ecoute sur l\'url http://localhost:' + config.port));