const express = require('express');
const bodyParser	= require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.redirect('index.html');
});



app.listen(PORT, () => {
	console.log(`Listening on ${ PORT }`);
});