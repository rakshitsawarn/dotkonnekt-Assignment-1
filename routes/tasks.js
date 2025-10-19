// routes/tasks.js
const express = require('express');
const router = express.Router();
const { scheduleTask, getTasks, cancelTask } = require('../controllers/taskController');

router.post('/schedule', scheduleTask);
router.get('/tasks', getTasks);
router.delete('/cancel/:id', cancelTask);

module.exports = router;
