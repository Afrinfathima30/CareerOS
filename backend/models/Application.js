const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    company: {
      type: String,
      required: true,
      trim: true,
    },

    role: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      default: "",
      trim: true,
    },

    jobType: {
      type: String,
      enum: [
        "Full-time",
        "Part-time",
        "Internship",
        "Contract",
        "Freelance",
      ],
      default: "Full-time",
    },

    status: {
      type: String,
      enum: [
        "Applied",
        "Screening",
        "Interview",
        "Assessment",
        "Offer",
        "Rejected",
        "Withdrawn",
      ],
      default: "Applied",
    },

    appliedDate: {
      type: Date,
      default: Date.now,
    },

    applicationLink: {
      type: String,
      default: "",
      trim: true,
    },

    notes: {
      type: String,
      default: "",
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Application = mongoose.model(
  "Application",
  applicationSchema
);

module.exports = Application;