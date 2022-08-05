import mongoose, { ObjectId } from "mongoose";

const TeacherSchema = new mongoose.Schema({
  first_name: {
    /* The first name of the teacher */

    type: String,
    required: [true, "Please provide first name for the teacher"],
  },
  last_name: {
    /* The last name of the teacher */

    type: String,
    required: [true, "Please provide the last name for the teacher"],
  },
  classes: [{ type: mongoose.Types.ObjectId, ref: "Class" }],
});

export default mongoose.models.Teacher ||
  mongoose.model("Teacher", TeacherSchema);
