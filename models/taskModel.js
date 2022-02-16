const connection = require('./connection');

const findAll = async () => {
  const conn = await connection();
  const tasks = await conn.collection('tasks').find().toArray();

  return tasks;
};

const addTasks = async ({ nametask, status }) => {
  const conn = await connection();
  const { insertedId } = await conn.collection('tasks').insertOne({ nametask, status });

  return insertedId;
};

module.exports = {
  findAll,
  addTasks,
};
