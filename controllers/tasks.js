const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const createNewTask = async (req, res) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(201).json({ newTask });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById({ _id: req.params.id });
    if (!task) {
      return res.status(404).json({ message: 'Task does not exist' });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
  return 1;
};

const updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ updatedTask });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({ deletedTask });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const searchTasksByName = async (req, res) => {
  try {
    // const tasks =
    // await (await Task.find({})).filter((result) => result.title.includes(req.query.q));
    // res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createNewTask,
  updateTask,
  deleteTask,
  searchTasksByName,
};
