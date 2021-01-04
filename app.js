// importing core modules
const path = require('path');

// importing 3rd party modules
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// adding body-parser
app.use(bodyParser.urlencoded({extended:false}));
// adding public folder
app.use(express.static(path.join(__dirname, 'public')));

// importing EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

// importing Routes
const adminRoutes = require('./routes/admin');

// importing Controllers
const errorController = require('./controllers/error');

// importing util/database
const sequelize = require('./util/database');

// importing Models
const Movie = require('./models/movie');
const Admin = require('./models/admin');


// using Routes
app.use('/admin', adminRoutes);

// Handling unknown URLs
app.use(errorController.get404);

// Syncing Sequelized Database to the Application
sequelize.sync()
.then(result => {
    console.log('Coonected with Database Successfully....');
    app.listen(3001);
})
.catch(err => console.log(err));