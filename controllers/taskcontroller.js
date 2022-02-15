const { listTasks, createTask } = require('../services/taskService');

const list = async (req, res, next) => {
  try {
    const tasks = await listTasks();

    return res.status(200).json(tasks);
  } catch (err) {
    console.log('erro: ', err.message);
    return next(err);
  }
};

const registerTask = async (req, res, next) => {
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
