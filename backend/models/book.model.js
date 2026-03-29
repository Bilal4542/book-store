import mongoose  from "mongoose";

const bookSchema = new mongoose.Schema({
  bookName:String,
  bookDesc:String,
  bookPrice:Number,
  bookCategory:String,
  bookImage:String
})
const Book = mongoose.model('Book', bookSchema)
export default Book