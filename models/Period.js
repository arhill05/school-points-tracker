import mongoose, { ObjectId } from "mongoose";

export const PeriodSchema = new mongoose.Schema({
  name: String,
  students: [{ type: ObjectId, ref: "Student" }],
});

export default mongoose.models.Period || mongoose.model("Period", PeriodSchema);
