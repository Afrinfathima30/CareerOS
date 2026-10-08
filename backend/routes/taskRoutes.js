const express = require("express");

const protect = require("../middleware/authMiddleware");

const {
  createTask,
  getTasks,
  getTask,
  updateTask,
  toggleTask,
  deleteTask,
} = require("../controllers/taskController");

const router = express.Router();

// ==========================================
// TASK ROUTES
// ==========================================

// Create task
router.post(
  "/",
  protect,
  createTask
);

// Get all tasks
router.get(
  "/",
  protect,
  getTasks
);

// Get single task
router.get(
  "/:id",
  protect,
  getTask
);

// Update task
router.put(
  "/:id",
  protect,
  updateTask
);

// Toggle task completion
router.patch(
  "/:id/toggle",
  protect,
  toggleTask
);

// Delete task
router.delete(
  "/:id",
  protect,
  deleteTask
);

module.exports = router;