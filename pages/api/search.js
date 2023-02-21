import connectDB from "../../DatabaseConnect/connectDB";
import BookModel from "../../Model/BookModel"

function search(data, q) {
    return data.filter((item) => item.title.toLowerCase().includes(q.toLowerCase()))
}

export default async function searchBooks(req, res) {
    const q = req.query.q

    await connectDB()
    const books = await BookModel.find({title: {$regex: q, $options: "i"}})

    res.json(search(books, q))
}
