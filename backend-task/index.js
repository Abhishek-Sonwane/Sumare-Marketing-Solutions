const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const port = 3000;

app.use(express.json());

let tasks = [];
let currentId = 1;

// Get All Tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Get task by ID
app.get("/tasks/:id", (req, res) => {
  const { id } = req.params;

  const task = tasks.find((item) => item.id === parseInt(id));
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json(task);
});

// Create a new task
app.post("/tasks", (req, res) => {
  const { title, description } = req.body;
  if (!title) return res.status(400).json({ message: "Title is required" });

  const newTask = {
    id: currentId++,
    title,
    description: description || "",
    completed: false,
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Update a task by ID
app.put("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const task = tasks.find((item) => item.id === parseInt(id));

  if (!task) return res.status(404).json({ message: "Task not found" });

  const { title, description, completed } = req.body;
  if (title !== "" || title.length > 0) task.title = title;
  if (description !== "" || description > 0) task.description = description;
  if (completed !== "" || completed > 0) task.completed = completed;

  res.json(task);
});

// Delete a task by ID
app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex((item) => item.id === parseInt(id));
  if (taskIndex === -1)
    return res.status(404).json({ message: "Task not found" });

  const deletedTask = tasks.splice(taskIndex, 1)[0];

  res.json({ message: "Task deleted", task: deletedTask });
});

app.listen(port, () => {
  console.log(`Running on PORT :${port}`);
});
