const mongoose = require("mongoose");
const Quiz = require("@/models/quizModel");

const schema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["ADMIN", "USER", "TEACHER"],
      default: "USER",
    },
  },
  {
    timestamps: true,
  }
);

schema.virtual("Tests", {
  ref: "Quiz",
  localField: "_id",
  foreignField: "userId",
});

const userModel = mongoose.models.User || mongoose.model("User", schema);

export default userModel;
