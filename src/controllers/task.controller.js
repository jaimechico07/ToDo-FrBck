import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
  try {
    const { active } = req.query;
    const isActive = active === 'true';

    const tasks = await Task.find({
      user: req.user.id,
      active: isActive,
    }).populate("user");
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description, date, category } = req.body;

    const newTask = new Task({
      title,
      description,
      date,
      user: req.user.id,
      category,
    });
    const savedTask = await newTask.save();
    res.json(savedTask);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate("user");
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (error) {
    return res.status(404).json({ message: "Task not found" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    // const task = await Task.findByIdAndDelete(req.params.id);
    // if (!task) return res.status(404).json({ message: "Task not found" });
    // return res.sendStatus(204);

    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });

    // Cambia el estado de la tarea en lugar de eliminarla
    if (task.active) {
      task.active = false;
    } else {
      task.active = true;
    } // Asumiendo que `active` es el campo que usas para determinar si la tarea está activa
    await task.save();

    return res.status(200).json(task);
  } catch (error) {
    return res.status(404).json({ message: "Task not found" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (error) {
    return res.status(404).json({ message: "Task not found" });
  }
};
