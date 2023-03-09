import connectDB from "../../DatabaseConnect/connectDB";
import BookModel from "../../Model/BookModel"
import * as logger from "next/dist/build/output/log";

export default async function readBooks(req, res) {
    try {
        const page = req.query.p || 0
        const booksPerPage = 9
        await connectDB()
        const books = await BookModel.find()
            .sort({ createdAt: 'desc' })
            .skip(page * booksPerPage)
            .limit(booksPerPage)
            .exec()
        res.status(200).json(books);
    } catch (err) {
        logger.error(`Failed to read books: ${err}`)
        res.status(500).json({ error: "Failed to read books" })
    }
}