import {Schema, model, models} from "mongoose";

const BookSchema = new Schema({
    title: {
        type: String,
    },
    book_body: {
        type: String
    },
    creatAt: {
        type: Date,
        default: Date.now
    }
})

const myBookModel = models.Stories || model("Stories", BookSchema)
export default myBookModel