const User = require("../models/User");

// ==========================================
// GET USER SKILLS
// ==========================================

const getSkills = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select(
      "skills"
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    res.status(200).json({
      success: true,
      skills: user.skills,
    });
  } catch (error) {
    console.error(
      "Get skills error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message: "Something went wrong while fetching skills.",
    });
  }
};

// ==========================================
// ADD SKILL
// ==========================================

const addSkill = async (req, res) => {
  try {
    const { name, level } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Skill name is required.",
      });
    }

    const allowedLevels = [
      "Beginner",
      "Intermediate",
      "Advanced",
      "Expert",
    ];

    const skillLevel = level || "Beginner";

    if (!allowedLevels.includes(skillLevel)) {
      return res.status(400).json({
        success: false,
        message: "Invalid skill level.",
      });
    }

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    // Prevent duplicate skills
    const existingSkill = user.skills.find(
      (skill) =>
        skill.name.toLowerCase() === name.trim().toLowerCase()
    );

    if (existingSkill) {
      return res.status(409).json({
        success: false,
        message: "This skill already exists.",
      });
    }

    user.skills.push({
      name: name.trim(),
      level: skillLevel,
    });

    await user.save();

    res.status(201).json({
      success: true,
      message: "Skill added successfully.",
      skills: user.skills,
    });
  } catch (error) {
    console.error(
      "Add skill error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message: "Something went wrong while adding the skill.",
    });
  }
};

// ==========================================
// UPDATE SKILL
// ==========================================

const updateSkill = async (req, res) => {
  try {
    const { name, level } = req.body;

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    const skill = user.skills.id(req.params.id);

    if (!skill) {
      return res.status(404).json({
        success: false,
        message: "Skill not found.",
      });
    }

    if (name !== undefined) {
      skill.name = name.trim();
    }

    if (level !== undefined) {
      const allowedLevels = [
        "Beginner",
        "Intermediate",
        "Advanced",
        "Expert",
      ];

      if (!allowedLevels.includes(level)) {
        return res.status(400).json({
          success: false,
          message: "Invalid skill level.",
        });
      }

      skill.level = level;
    }

    await user.save();

    res.status(200).json({
      success: true,
      message: "Skill updated successfully.",
      skills: user.skills,
    });
  } catch (error) {
    console.error(
      "Update skill error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message: "Something went wrong while updating the skill.",
    });
  }
};

// ==========================================
// DELETE SKILL
// ==========================================

const deleteSkill = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    const skill = user.skills.id(req.params.id);

    if (!skill) {
      return res.status(404).json({
        success: false,
        message: "Skill not found.",
      });
    }

    skill.deleteOne();

    await user.save();

    res.status(200).json({
      success: true,
      message: "Skill deleted successfully.",
      skills: user.skills,
    });
  } catch (error) {
    console.error(
      "Delete skill error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message: "Something went wrong while deleting the skill.",
    });
  }
};

module.exports = {
  getSkills,
  addSkill,
  updateSkill,
  deleteSkill,
};