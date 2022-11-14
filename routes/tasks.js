const express = require('express');
const {
  getAllTasks,
  getTaskById,
  createNewTask,
  updateTask,
  deleteTask,
//   searchTasksByName,
} = require('../controllers/tasks');

const router = express.Router();

router.route('/')

  .get(getAllTasks)

  .post(createNewTask);

router.route('/:id')

  .get(getTaskById)

  .patch(updateTask)

  .delete(deleteTask);

// router.route('/?q=').get(searchTasksByName);

module.exports = router;
