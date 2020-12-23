// importing core modules
const path = require('path');

// importing 3rd party modules
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// importing Controllers
const errorController = require('./controllers/error');

// importing Routes
const adminRoutes = require('./routes/admin');

// imporint EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

// adding body-parser
app.use(bodyParser.urlencoded({extended:false}));
// adding public folder
app.use(express.static(path.join(__dirname, 'public')));

// using Routes
app.use('/admin', adminRoutes);

app.use(errorController.get404);

app.listen(3000);