const mongoose = require("mongoose");
const Quiz = require("@/models/quizModel");
import resultModel from "./TestResult";

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
    firstName: {
      type: String,
      default: "firstname",
    },
    lastName: {
      type: String,
      default: "lastname",
    },
    address: {
      type: String,
      default: "address",
    },
    parent: {
      type: String,
      default: "parent",
    },
    phone: {
      type: String,
      default: "000",
    },
    birthDate: {
      type: String,
      default: "04/04/2023",
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
schema.virtual("TestsResult", {
  ref: "Result",
  localField: "_id",
  foreignField: "userId",
});

const userModel = mongoose.models.User || mongoose.model("User", schema);

export default userModel;
