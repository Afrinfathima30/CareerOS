const express = require("express");

const protect = require("../middleware/authMiddleware");

const {
  createApplication,
  getApplications,
  getApplication,
  updateApplication,
  deleteApplication,
} = require("../controllers/applicationController");

const router = express.Router();

// ==========================================
// APPLICATION ROUTES
// ==========================================

// Create application
router.post(
  "/",
  protect,
  createApplication
);

// Get all applications for logged-in user
router.get(
  "/",
  protect,
  getApplications
);

// Get single application
router.get(
  "/:id",
  protect,
  getApplication
);

// Update application
router.put(
  "/:id",
  protect,
  updateApplication
);

// Delete application
router.delete(
  "/:id",
  protect,
  deleteApplication
);

module.exports = router;