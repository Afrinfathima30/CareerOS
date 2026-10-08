const Learning = require("../models/Learning");

// ==========================================
// CREATE LEARNING ITEM
// ==========================================

const createLearning = async (req, res) => {
  try {
    const {
      title,
      provider,
      category,
      progress,
      status,
      courseLink,
      notes,
      startedDate,
      completedDate,
    } = req.body;

    // Validate required field
    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Course title is required.",
      });
    }

    // Create learning item for logged-in user
    const learning = await Learning.create({
      user: req.user._id,
      title,
      provider: provider || "",
      category: category || "",
      progress: progress ?? 0,
      status: status || "Not Started",
      courseLink: courseLink || "",
      notes: notes || "",
      startedDate: startedDate || null,
      completedDate: completedDate || null,
    });

    res.status(201).json({
      success: true,
      message: "Learning item created successfully.",
      learning,
    });
  } catch (error) {
    console.error(
      "Create learning error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Something went wrong while creating the learning item.",
    });
  }
};

// ==========================================
// GET ALL LEARNING ITEMS
// ==========================================

const getLearning = async (req, res) => {
  try {
    const learning = await Learning.find({
      user: req.user._id,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: learning.length,
      learning,
    });
  } catch (error) {
    console.error(
      "Get learning error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Something went wrong while fetching learning items.",
    });
  }
};

// ==========================================
// GET SINGLE LEARNING ITEM
// ==========================================

const getLearningItem = async (req, res) => {
  try {
    const learning = await Learning.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!learning) {
      return res.status(404).json({
        success: false,
        message: "Learning item not found.",
      });
    }

    res.status(200).json({
      success: true,
      learning,
    });
  } catch (error) {
    console.error(
      "Get learning item error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Something went wrong while fetching the learning item.",
    });
  }
};

// ==========================================
// UPDATE LEARNING ITEM
// ==========================================

const updateLearning = async (req, res) => {
  try {
    const learning = await Learning.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!learning) {
      return res.status(404).json({
        success: false,
        message: "Learning item not found.",
      });
    }

    const {
      title,
      provider,
      category,
      progress,
      status,
      courseLink,
      notes,
      startedDate,
      completedDate,
    } = req.body;

    // Update only provided fields
    if (title !== undefined) {
      learning.title = title;
    }

    if (provider !== undefined) {
      learning.provider = provider;
    }

    if (category !== undefined) {
      learning.category = category;
    }

    if (progress !== undefined) {
      learning.progress = progress;
    }

    if (status !== undefined) {
      learning.status = status;
    }

    if (courseLink !== undefined) {
      learning.courseLink = courseLink;
    }

    if (notes !== undefined) {
      learning.notes = notes;
    }

    if (startedDate !== undefined) {
      learning.startedDate = startedDate;
    }

    if (completedDate !== undefined) {
      learning.completedDate = completedDate;
    }

    const updatedLearning =
      await learning.save();

    res.status(200).json({
      success: true,
      message: "Learning item updated successfully.",
      learning: updatedLearning,
    });
  } catch (error) {
    console.error(
      "Update learning error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Something went wrong while updating the learning item.",
    });
  }
};

// ==========================================
// DELETE LEARNING ITEM
// ==========================================

const deleteLearning = async (req, res) => {
  try {
    const learning =
      await Learning.findOneAndDelete({
        _id: req.params.id,
        user: req.user._id,
      });

    if (!learning) {
      return res.status(404).json({
        success: false,
        message: "Learning item not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Learning item deleted successfully.",
    });
  } catch (error) {
    console.error(
      "Delete learning error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Something went wrong while deleting the learning item.",
    });
  }
};

module.exports = {
  createLearning,
  getLearning,
  getLearningItem,
  updateLearning,
  deleteLearning,
};