const express = require("express");

const protect = require("../middleware/authMiddleware");

const {
  createLearning,
  getLearning,
  getLearningItem,
  updateLearning,
  deleteLearning,
} = require("../controllers/learningController");

const router = express.Router();

// ==========================================
// LEARNING ROUTES
// ==========================================

// Create learning item
router.post(
  "/",
  protect,
  createLearning
);

// Get all learning items
router.get(
  "/",
  protect,
  getLearning
);

// Get single learning item
router.get(
  "/:id",
  protect,
  getLearningItem
);

// Update learning item
router.put(
  "/:id",
  protect,
  updateLearning
);

// Delete learning item
router.delete(
  "/:id",
  protect,
  deleteLearning
);

module.exports = router;