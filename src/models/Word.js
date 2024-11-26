import mongoose from 'mongoose'

const Word = mongoose.model('Word', new mongoose.Schema({
  word: { type: String, required: true },
  definition: { type: String, required: true },
}))

export default Word