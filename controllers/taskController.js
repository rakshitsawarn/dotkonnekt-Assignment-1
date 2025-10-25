// Using Map for better concurrency & easy cancellation

const tasks = new Map();

// nextId is used for generating unique Tasks IDs
let nextId = 1;


const scheduleTask = (req, res) => {
  try {
    const { message, delay } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: "Message must be a string" });
    }
    if (typeof delay !== 'number' || delay <= 0) {
      return res.status(400).json({ error: "Delay must be a positive number" });
    }

    const id = nextId++;

    const task = {
      id,
      message,
      delay,
      status: "pending"
    };

    // Schedule timer and save its reference
    const timeoutId = setTimeout(() => {
      task.status = "completed";
      console.log(`Task ${task.id} completed!`);
    }, delay * 1000);

    // Storing both task and its timeout for cancellation
    tasks.set(id, { task, timeoutId });

    res.status(201).json(task);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getTasks = (req, res) => {
  const allTasks = Array.from(tasks.values()).map(entry => entry.task);
  res.json(allTasks);
};


const cancelTask = (req, res) => {
  const taskId = parseInt(req.params.id);

  if (!tasks.has(taskId)) {
    return res.status(404).json({ error: "Task not found" });
  }

  const { task, timeoutId } = tasks.get(taskId);

  if (task.status === "completed") {
    return res.status(400).json({ error: "Task already completed, cannot cancel" });
  }
  if (task.status === "cancelled") {
    return res.status(400).json({ error: "Task already cancelled" });
  }

  // Cancel timer
  clearTimeout(timeoutId);
  task.status = "cancelled";

  console.log(`Task ${task.id} cancelled.`);
  res.json({ message: `Task ${task.id} cancelled successfully`, task });
};

module.exports = { scheduleTask, getTasks, cancelTask };
