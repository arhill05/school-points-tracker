import mongoose from "mongoose";
import { PeriodSchema } from "./Period";

export const ClassSchema = new mongoose.Schema({
  name: String,
  periods: [PeriodSchema],
});

export default mongoose.models.Class || mongoose.model("Class", ClassSchema);
