const express = require("express");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// ==========================================
// PROTECTED TEST ROUTE
// ==========================================

router.get("/profile", protect, (req, res) => {
  res.status(200).json({
    success: true,
    message: "You accessed a protected route.",
    user: {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      targetRole: req.user.targetRole,
    },
  });
});

module.exports = router;
