const mongoose = require("mongoose");
const User = require("@/models/userModel");

const schema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    questions: {
      type: [],
      required: true,
    },
    isOpen: {
      type: Boolean,
      required: true,
    },
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const quizModel = mongoose.models.Quiz || mongoose.model("Quiz", schema);

export default quizModel;
