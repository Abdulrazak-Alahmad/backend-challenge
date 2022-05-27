const express = require('express');
require('./config/mongoose')
const router=  require('./config/router')
const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use( router)
app.listen(80);