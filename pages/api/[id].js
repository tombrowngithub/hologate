import connectDB from "../../DatabaseConnect/connectDB"; //Database connection link
import BookModel from "../../Model/BookModel"; //Database model


export default async (req, res) => {
    const {body, query: {id}} = req
    await connectDB()
    const SingleTask = await BookModel.findById(id)
    if (!SingleTask) return res.status(404).json({msg: "Task does not exist"})
    return res.status(200).json(SingleTask)

}