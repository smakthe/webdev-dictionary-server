import express, {json} from 'express'
import cors from 'cors'
import connectDB from './db/connection.js'
import wordsRouter from './routes/words.js'

const app = express();

app.use('/api', wordsRouter);

const PORT = process.env.PORT || 5000

connectDB()

app.use(cors(),json()).listen(PORT,() => {
    console.log("Application listening on Port",PORT)
})