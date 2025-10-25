const express = require('express');

// It will help in defining multiple routes
const router = express.Router();

// Importing these functions from taskController.js present inside controllers folder
const { scheduleTask, getTasks, cancelTask } = require('../controllers/taskController');


// Defining routes, when someone will send request Express will call these functions
router.post('/schedule', scheduleTask);
router.get('/tasks', getTasks);
router.delete('/cancel/:id', cancelTask);


// Exporting the router object so that other modules can use it
module.exports = router;
