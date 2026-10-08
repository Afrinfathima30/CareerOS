const Application = require("../models/Application");

// ==========================================
// CREATE APPLICATION
// ==========================================

const createApplication = async (req, res) => {
  try {
    const {
      company,
      role,
      location,
      jobType,
      status,
      appliedDate,
      applicationLink,
      notes,
    } = req.body;

    // Validate required fields
    if (!company || !role) {
      return res.status(400).json({
        success: false,
        message: "Company and role are required.",
      });
    }

    // Create application for logged-in user
    const application = await Application.create({
      user: req.user._id,
      company,
      role,
      location: location || "",
      jobType: jobType || "Full-time",
      status: status || "Applied",
      appliedDate: appliedDate || Date.now(),
      applicationLink: applicationLink || "",
      notes: notes || "",
    });

    res.status(201).json({
      success: true,
      message: "Application created successfully.",
      application,
    });
  } catch (error) {
    console.error(
      "Create application error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Something went wrong while creating the application.",
    });
  }
};

// ==========================================
// GET ALL USER APPLICATIONS
// ==========================================

const getApplications = async (req, res) => {
  try {
    const applications = await Application.find({
      user: req.user._id,
    }).sort({
      appliedDate: -1,
    });

    res.status(200).json({
      success: true,
      count: applications.length,
      applications,
    });
  } catch (error) {
    console.error(
      "Get applications error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Something went wrong while fetching applications.",
    });
  }
};

// ==========================================
// GET SINGLE APPLICATION
// ==========================================

const getApplication = async (req, res) => {
  try {
    const application = await Application.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found.",
      });
    }

    res.status(200).json({
      success: true,
      application,
    });
  } catch (error) {
    console.error(
      "Get application error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Something went wrong while fetching the application.",
    });
  }
};

// ==========================================
// UPDATE APPLICATION
// ==========================================

const updateApplication = async (req, res) => {
  try {
    const application = await Application.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found.",
      });
    }

    const {
      company,
      role,
      location,
      jobType,
      status,
      appliedDate,
      applicationLink,
      notes,
    } = req.body;

    // Update only provided fields
    if (company !== undefined) {
      application.company = company;
    }

    if (role !== undefined) {
      application.role = role;
    }

    if (location !== undefined) {
      application.location = location;
    }

    if (jobType !== undefined) {
      application.jobType = jobType;
    }

    if (status !== undefined) {
      application.status = status;
    }

    if (appliedDate !== undefined) {
      application.appliedDate = appliedDate;
    }

    if (applicationLink !== undefined) {
      application.applicationLink =
        applicationLink;
    }

    if (notes !== undefined) {
      application.notes = notes;
    }

    const updatedApplication =
      await application.save();

    res.status(200).json({
      success: true,
      message: "Application updated successfully.",
      application: updatedApplication,
    });
  } catch (error) {
    console.error(
      "Update application error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Something went wrong while updating the application.",
    });
  }
};

// ==========================================
// DELETE APPLICATION
// ==========================================

const deleteApplication = async (req, res) => {
  try {
    const application =
      await Application.findOneAndDelete({
        _id: req.params.id,
        user: req.user._id,
      });

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Application deleted successfully.",
    });
  } catch (error) {
    console.error(
      "Delete application error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Something went wrong while deleting the application.",
    });
  }
};

module.exports = {
  createApplication,
  getApplications,
  getApplication,
  updateApplication,
  deleteApplication,
};