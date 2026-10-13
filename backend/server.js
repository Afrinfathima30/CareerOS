const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const testRoutes = require("./routes/testRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
const skillRoutes = require("./routes/skillRoutes");
const learningRoutes = require("./routes/learningRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

// ==========================================
// DATABASE
// ==========================================

connectDB();

// ==========================================
// MIDDLEWARE
// ==========================================


app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://career-os-one-rose.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

// ==========================================
// ROUTES
// ==========================================

// Root
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "CareerOS API is running",
    version: "1.0.0",
  });
});

// Health
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    service: "CareerOS Backend",
    status: "healthy",
  });
});

// Authentication
app.use(
  "/api/auth",
  authRoutes
);

// Protected test routes
app.use(
  "/api/test",
  testRoutes
);

// Applications
app.use(
  "/api/applications",
  applicationRoutes
);

// Skills
app.use(
  "/api/skills",
  skillRoutes
);

// Learning
app.use(
  "/api/learning",
  learningRoutes
);

// Tasks
app.use(
  "/api/tasks",
  taskRoutes
);

// ==========================================
// SERVER
// ==========================================

app.listen(PORT, () => {
  console.log("");
  console.log("========================================");
  console.log("       CareerOS Backend");
  console.log("========================================");
  console.log("");
  console.log(
    `Server running on: http://localhost:${PORT}`
  );
  console.log("");
  console.log(
    `Health check: http://localhost:${PORT}/api/health`
  );
  console.log("");
  console.log(
    `Register: POST http://localhost:${PORT}/api/auth/register`
  );
  console.log(
    `Login: POST http://localhost:${PORT}/api/auth/login`
  );
  console.log(
    `Applications: http://localhost:${PORT}/api/applications`
  );
  console.log(
    `Skills: http://localhost:${PORT}/api/skills`
  );
  console.log(
    `Learning: http://localhost:${PORT}/api/learning`
  );
  console.log(
    `Tasks: http://localhost:${PORT}/api/tasks`
  );
  console.log("");
  console.log("========================================");
});