import dbConnect from "../../../lib/dbConnect";
import Class from "../../../models/Class";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET" /* Get a model by its ID */:
      try {
        const foundClass = await Class.findById(id);
        if (!foundClass) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: foundClass });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT" /* Edit a model by its ID */:
      try {
        const foundClass = await Class.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!foundClass) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: foundClass });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE" /* Delete a model by its ID */:
      try {
        const deletedClass = await Class.deleteOne({ _id: id });
        if (!deletedClass) {
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
