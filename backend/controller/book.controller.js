import bookSchema from '../models/book.model.js'

const getBook = async (req, res) => {
  try {
    const book = await bookSchema.find()
    if (book.length === 0) res.status(200).json({ message: "No Book found" })
    res.status(200).json(book)
  } catch (error) {
    res.status(500).json(error)
    console.log('Getting Books Failed', error)
  }
}
export default getBook