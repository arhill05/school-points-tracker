import dbConnect from "../../../lib/dbConnect";
import Student from "../../../models/Student";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET" /* Get a model by its ID */:
      try {
        const student = await Student.findById(id);
        if (!student) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: student });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT" /* Edit a model by its ID */:
      try {
        const student = await Student.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!student) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: student });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE" /* Delete a model by its ID */:
      try {
        const deletedStudent = await Student.deleteOne({ _id: id });
        if (!deletedStudent) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
