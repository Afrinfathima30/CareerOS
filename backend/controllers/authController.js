const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

// ==========================================
// GENERATE JWT TOKEN
// ==========================================

const generateToken = (userId) => {
  return jwt.sign(
    {
      userId,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
};

// ==========================================
// REGISTER USER
// ==========================================

const registerUser = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      targetRole,
    } = req.body;

    // Validate required fields
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message:
          "Name, email and password are required.",
      });
    }

    // Validate password length
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message:
          "Password must contain at least 6 characters.",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({
      email: email.toLowerCase(),
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message:
          "An account with this email already exists.",
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(
      password,
      salt
    );

    // Create user
    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      targetRole: targetRole || "",
    });

    // Generate JWT
    const token = generateToken(user._id);

    // Send response
    res.status(201).json({
      success: true,
      message: "Account created successfully.",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        targetRole: user.targetRole,
        careerReadiness: user.careerReadiness,
      },
    });
  } catch (error) {
    console.error(
      "Registration error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Something went wrong while creating the account.",
    });
  }
};

// ==========================================
// LOGIN USER
// ==========================================

const loginUser = async (req, res) => {
  try {
    const {
      email,
      password,
    } = req.body;

    // Validate fields
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message:
          "Email and password are required.",
      });
    }

    // Find user
    const user = await User.findOne({
      email: email.toLowerCase(),
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message:
          "Invalid email or password.",
      });
    }

    // Compare passwords
    const isPasswordValid =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message:
          "Invalid email or password.",
      });
    }

    // Generate JWT
    const token = generateToken(user._id);

    // Successful login
    res.status(200).json({
      success: true,
      message: "Login successful.",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        targetRole: user.targetRole,
        careerReadiness:
          user.careerReadiness,
      },
    });
  } catch (error) {
    console.error(
      "Login error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Something went wrong while logging in.",
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};