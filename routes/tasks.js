// routes/tasks.js

const express = require('express');

// Router Object will help in defining multiple
const router = express.Router();

// Importing these functions from taskController.js present inside controllers folder
const { scheduleTask, getTasks, cancelTask } = require('../controllers/taskController');


// Defining routes, when someone will send request Express will call these functions
router.post('/schedule', scheduleTask);
router.get('/tasks', getTasks);
router.delete('/cancel/:id', cancelTask);


// Exports the router object so that other modules can use it
module.exports = router;
