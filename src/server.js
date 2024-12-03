import express, {json} from 'express'
import connectDB from './db/connection.js'
import wordsRouter from './routes/words.js'
import cors from 'cors'

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5000'
const PORT = process.env.PORT || 5000

const app = express();

app.use(cors(),json())

app.use('/api', wordsRouter);

connectDB()

app.listen(PORT,() => {
    console.log("Application listening on Port",PORT)
})