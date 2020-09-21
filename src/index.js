const express = require('express');
const app = express();

const User = require('./model/user');

const PORT = 8080;

// TODO: Move routes to controllers.

app.get('/', (req, res) => {
  res.send({message: 'Hello World!'});
});

app.get('/users', User.getAll);

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
