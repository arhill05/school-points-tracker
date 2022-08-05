import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  first_name: {
    /* The first name of the student */

    type: String,
    required: [true, "Please provide first name for the student"],
  },
  last_name: {
    /* The last name of the student */

    type: String,
    required: [true, "Please provide the last name for the student name"],
  },
  points: {
    /* The number of points the student has */

    type: Number,
    default: 0
  },
});

export default mongoose.models.Student ||
  mongoose.model("Student", StudentSchema);
