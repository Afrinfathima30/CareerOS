const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    targetRole: {
      type: String,
      default: "",
      trim: true,
    },

    skills: [
      {
        name: {
          type: String,
          trim: true,
        },

        level: {
          type: String,
          enum: [
            "Beginner",
            "Intermediate",
            "Advanced",
            "Expert",
          ],
          default: "Beginner",
        },
      },
    ],

    careerReadiness: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },

    profile: {
      phone: {
        type: String,
        default: "",
      },

      location: {
        type: String,
        default: "",
      },

      bio: {
        type: String,
        default: "",
      },

      github: {
        type: String,
        default: "",
      },

      linkedin: {
        type: String,
        default: "",
      },

      portfolio: {
        type: String,
        default: "",
      },
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;