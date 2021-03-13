const express = require("express");
// const orm = require( './config/orm');

const app = express();
const exphbs = require('express-handlebars');

// Set the port of our application
// process.env.PORT lets the port be set by Heroku

const PORT = process.env.PORT || 3000;

// for POSTING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));


// for HANDLEBARS paths
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');

var router = require('./controllers/burgers_contoller')

app.use('/', router)

app.listen(PORT, () => {
  console.log(`==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT} in your browser.`);
});