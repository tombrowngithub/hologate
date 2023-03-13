import connectDB from "../../DatabaseConnect/connectDB";
import BookModel from "../../Model/BookModel"

// export default async function readBooks(req, res) {
//     try {
//         const page = req.query.p || 0
//         const booksPerPage = 9
//         await connectDB()
//         const books = await BookModel.find()
//             .sort({ createdAt: 'desc' })
//             .skip(page * booksPerPage)
//             .limit(booksPerPage)
//             .exec()
//         res.status(200).json(books);
//     } catch (err) {
//         logger.error(`Failed to read books: ${err}`)
//         res.status(500).json({ error: "Failed to read books" })
//     }
// }

export default async function readBooks(req, res) {
    try {
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
    }catch (error){
        res.status(500).json({ error: "Failed to read books" })
    }
}