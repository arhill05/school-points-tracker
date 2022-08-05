import dbConnect from "../../../lib/dbConnect";
import Teacher from "../../../models/Teacher";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET" /* Get a model by its ID */:
      try {
        const teacher = await Teacher.findById(id);
        if (!teacher) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: teacher });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT" /* Edit a model by its ID */:
      try {
        const teacher = await Teacher.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!teacher) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: teacher });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE" /* Delete a model by its ID */:
      try {
        const deletedTeacher = await Teacher.deleteOne({ _id: id });
        if (!deletedTeacher) {
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
