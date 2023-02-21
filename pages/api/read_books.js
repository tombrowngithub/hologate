import connectDB from "../../DatabaseConnect/connectDB";
import BookModel from "../../Model/BookModel"

export default async function readBooks(req, res) {
    const page = req.query.p || 0
    const booksPerPage = 9
    await connectDB()
    await BookModel.find()
        .sort({creatAt: 'desc'})
        .skip(page * booksPerPage)
        .limit(booksPerPage)
        .exec(function (err, doc) {
            if (err) {
                res.status(500).json(err);
                return
            }
            res.status(200).json(doc);
        });
}