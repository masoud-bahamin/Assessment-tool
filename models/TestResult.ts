const mongoose = require("mongoose");
import quizModel from "./quizModel";
import userModel from "./userModel";

const schema = mongoose.Schema(
  {
    quizId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: quizModel,
    },
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "User",
    },
    result: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const resultModel = mongoose.models.Result || mongoose.model("Result", schema);

export default resultModel;
