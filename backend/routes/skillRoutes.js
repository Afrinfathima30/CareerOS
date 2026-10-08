const express = require("express");

const protect = require("../middleware/authMiddleware");

const {
  getSkills,
  addSkill,
  updateSkill,
  deleteSkill,
} = require("../controllers/skillController");

const router = express.Router();

// ==========================================
// SKILL ROUTES
// ==========================================

// Get all skills
router.get(
  "/",
  protect,
  getSkills
);

// Add skill
router.post(
  "/",
  protect,
  addSkill
);

// Update skill
router.put(
  "/:id",
  protect,
  updateSkill
);

// Delete skill
router.delete(
  "/:id",
  protect,
  deleteSkill
);

module.exports = router;