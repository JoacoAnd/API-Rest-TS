import mongoose, { Schema, model } from "mongoose";

export interface BookInterface extends mongoose.Document {
    title: string,
    author: string,
    isbn: string
};

const BookSchema = new Schema({
    title: String,
    author: String,
    isbn: String
});

export default model<BookInterface>("Book", BookSchema);