const  { list } = require('./controllers/taskcontroller');
// const app = require('express')();
const bodyParser = require('body-parser');

const express = require('express');
const app = express();

const port = 3000

app.use(bodyParser.json());

app.get('/', list);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))