
const { findAll, addTasks } = require('../models/taskModel');

const listTasks = async () => {
  const tasks = await findAll();

  return tasks;
};

const createTask = async (task) => {
  const { nameTask, status } = task;

  if (!nameTask || !status) throw { message: 'Taskname and status are required.' };

  const taskId = await addTasks(task);

  return {
    id: taskId,
    nameTask,
    status,
  };
};

module.exports = {
  listTasks,
  createTask,
};