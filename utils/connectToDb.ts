import mongoose from "mongoose";

function connectToDb() {
  if (mongoose.connections[0].readyState) {
    return;
  }
  mongoose.connect(
    "mongodb+srv://bahaminwp:bahamin1364@bahamincluster.zht7zml.mongodb.net/quiz-app"
  );
}

export default connectToDb;
