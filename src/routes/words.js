import express from 'express'
import wordController from '../controllers/words.js'

const router = express.Router();

const [wordsIndex, wordsShow] = wordController

router.get('/words', wordsIndex)
router.get('/words/filter', wordsShow)

export default router