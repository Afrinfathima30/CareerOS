const Task = require("../models/Task");

// ==========================================
// CREATE TASK
// ==========================================

const createTask = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      priority,
      dueDate,
    } = req.body;

    // Validate required field
    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Task title is required.",
      });
    }

    // Create task for logged-in user
    const task = await Task.create({
      user: req.user._id,
      title,
      description: description || "",
      category: category || "Career",
      priority: priority || "Medium",
      dueDate: dueDate || null,
    });

    res.status(201).json({
      success: true,
      message: "Task created successfully.",
      task,
    });
  } catch (error) {
    console.error(
      "Create task error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Something went wrong while creating the task.",
    });
  }
};

// ==========================================
// GET ALL TASKS
// ==========================================

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      user: req.user._id,
    }).sort({
      completed: 1,
      dueDate: 1,
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: tasks.length,
      tasks,
    });
  } catch (error) {
    console.error(
      "Get tasks error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Something went wrong while fetching tasks.",
    });
  }
};

// ==========================================
// GET SINGLE TASK
// ==========================================

const getTask = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found.",
      });
    }

    res.status(200).json({
      success: true,
      task,
    });
  } catch (error) {
    console.error(
      "Get task error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Something went wrong while fetching the task.",
    });
  }
};

// ==========================================
// UPDATE TASK
// ==========================================

const updateTask = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found.",
      });
    }

    const {
      title,
      description,
      category,
      priority,
      dueDate,
    } = req.body;

    if (title !== undefined) {
      task.title = title;
    }

    if (description !== undefined) {
      task.description = description;
    }

    if (category !== undefined) {
      task.category = category;
    }

    if (priority !== undefined) {
      task.priority = priority;
    }

    if (dueDate !== undefined) {
      task.dueDate = dueDate;
    }

    const updatedTask = await task.save();

    res.status(200).json({
      success: true,
      message: "Task updated successfully.",
      task: updatedTask,
    });
  } catch (error) {
    console.error(
      "Update task error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Something went wrong while updating the task.",
    });
  }
};

// ==========================================
// TOGGLE TASK COMPLETION
// ==========================================

const toggleTask = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found.",
      });
    }

    task.completed = !task.completed;

    if (task.completed) {
      task.completedAt = new Date();
    } else {
      task.completedAt = null;
    }

    const updatedTask = await task.save();

    res.status(200).json({
      success: true,
      message: task.completed
        ? "Task completed successfully."
        : "Task marked as incomplete.",
      task: updatedTask,
    });
  } catch (error) {
    console.error(
      "Toggle task error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Something went wrong while updating task completion.",
    });
  }
};

// ==========================================
// DELETE TASK
// ==========================================

const deleteTask = async (req, res) => {
  try {
    const task =
      await Task.findOneAndDelete({
        _id: req.params.id,
        user: req.user._id,
      });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Task deleted successfully.",
    });
  } catch (error) {
    console.error(
      "Delete task error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Something went wrong while deleting the task.",
    });
  }
};

module.exports = {
  createTask,
  getTasks,
  getTask,
  updateTask,
  toggleTask,
  deleteTask,
};