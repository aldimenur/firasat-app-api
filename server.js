const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const server = "mongodb://127.0.0.1:27017/firasat";

mongoose
  .connect(server, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const Todo = require("./models/Todo");

app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.post("/todo/new", (req, res) => {
  const todo = new Todo({
    title: req.body.title,
  });

  todo.save();

  res.json(todo);
});

app.delete("/todo/delete/:id", async (req, res) => {
  const result = await Todo.findByIdAndDelete(req.params.id);

  res.json(result);
});

app.put("/todo/update/:id", async (req, res) => {
  const result = await Todo.findByIdAndUpdate(req.params.id);

  result.title = req.body.title;
  result.description = req.body.description;
  result.enabled = req.body.enabled;

  result.save();

  res.json(result);
});

const Task = require("./models/Task");

app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post("/task/new", (req, res) => {
  const task = new Task({
    title: req.body.title,
  });

  task.save();

  res.json(task);
});

app.delete("/task/delete/:id", async (req, res) => {
  const result = await Task.findByIdAndDelete(req.params.id);

  res.json(result);
});

app.put("/task/update/:id", async (req, res) => {
  const result = await Task.findByIdAndUpdate(req.params.id);

  result.title = req.body.title;
  result.description = req.body.description;
  result.dubber = req.body.dubber;
  result.enabled = req.body.enabled;

  result.save();

  res.json(result);
});

app.listen(5000, () => console.log("server started on port 5000"));
