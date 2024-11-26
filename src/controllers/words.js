import Word from "../models/Word.js"

const wordsIndex = async (req, res) => {
    try {
        const words = await Word.find()
        res.json(words)
    } catch (error) {
        console.error('Error fetching all words:', error)
        res.status(500).json({ message: 'Error fetching words.', error })
    }
}

const wordsShow = async (req, res) => {
    const { letter } = req.query
    if (!letter) return res.status(400).json({ message: 'Letter query parameter is required.' })
    try {
        const words = await Word.find({
            word: { $regex: `^${letter}`, $options: 'i' },
        });
        res.json(words)
    } catch (error) {
        console.error('Error filtering words:', error)
        res.status(500).json({ message: 'Error filtering words.', error })
    }
}

export default [wordsIndex, wordsShow]