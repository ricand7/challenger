const { listTasks, createTask } = require('../services/taskService');
const cors = require('cors');

// app.use(cors());
// https://stackoverflow.com/questions/57009371/access-to-xmlhttprequest-at-from-origin-localhost3000-has-been-blocked
const list = async (req, res, next) => {
res.setHeader("Access-Control-Allow-Origin", "*")
res.setHeader("Access-Control-Allow-Credentials", "true");
res.setHeader("Access-Control-Max-Age", "1800");
res.setHeader("Access-Control-Allow-Headers", "content-type");
res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
  try {
    const tasks = await listTasks();

    return res.status(200).json(tasks);
  } catch (err) {
    console.log('erro: ', err.message);
    return next(err);
  }
};

const registerTask = async (req, res, next) => {
res.setHeader("Access-Control-Allow-Origin", "*")
res.setHeader("Access-Control-Allow-Credentials", "true");
res.setHeader("Access-Control-Max-Age", "1800");
res.setHeader("Access-Control-Allow-Headers", "content-type");
res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
  try {
    const task = req.body;

    const newTask = await createTask(task);

    return res.status(201).json(newTask);
  } catch (err) {
    console.log('erro: ', err.message);
    return next(err);
  }
};

module.exports = {
  list,
  registerTask,
};
