const mongoose = require("mongoose");

const learningSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    provider: {
      type: String,
      default: "",
      trim: true,
    },

    category: {
      type: String,
      default: "",
      trim: true,
    },

    progress: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },

    status: {
      type: String,
      enum: [
        "Not Started",
        "In Progress",
        "Completed",
      ],
      default: "Not Started",
    },

    courseLink: {
      type: String,
      default: "",
      trim: true,
    },

    notes: {
      type: String,
      default: "",
      trim: true,
    },

    startedDate: {
      type: Date,
      default: null,
    },

    completedDate: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Learning = mongoose.model(
  "Learning",
  learningSchema
);

module.exports = Learning;