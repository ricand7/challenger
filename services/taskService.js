
const { findAll, addTasks } = require('../models/taskModel');

const listTasks = async () => {
  const tasks = await findAll();

  return tasks;
};

const createTask = async (task) => {
  const { nametask, status } = task;

  if (!nametask || !status) return { message: 'Taskname and status are required.' };

  const taskId = await addTasks(task);

  return {
    id: taskId,
    nametask,
    status,
  };
};

module.exports = {
  listTasks,
  createTask,
};