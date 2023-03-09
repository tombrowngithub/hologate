import connectDB from "../../DatabaseConnect/connectDB"; //Database connection link
import BookModel from "../../Model/BookModel"; //Database model

export default async function AddBook(req, res) {
    try {
        const data = req.body
        await connectDB()

        const myDoc = await BookModel.create(data)
        res.json({myDoc})
    }catch (err) {
        console.log("This post cannot be published")
    }



}