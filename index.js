
// const app = require('express')();
const bodyParser = require('body-parser');

const express = require('express');
const app = express();

const port = 3000

app.use(bodyParser.json());

app.get('/', (req, res) => {
  
  res.status(200).json({ok: true})
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))