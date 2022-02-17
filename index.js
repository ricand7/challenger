const  { list, registerTask } = require('./controllers/taskcontroller');
// const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');

const express = require('express');
const app = express();

const port = 3001
app.use(cors());
app.use(bodyParser.json());

app.get('/tasks', list);
app.post('/tasks/new', registerTask);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;