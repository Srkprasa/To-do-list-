const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

let tasks = [];
let id = 1;

// Get all tasks
app.get('/tasks', (req, res) => res.json(tasks));

// Add a task
app.post('/tasks', (req, res) => {
    const task = { id: id++, ...req.body };
    tasks.push(task);
    res.json(task);
});

// Delete a task
app.delete('/tasks/:id', (req, res) => {
    tasks = tasks.filter((task) => task.id != req.params.id);
    res.sendStatus(200);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
