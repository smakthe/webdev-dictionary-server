import express, {json} from 'express'
import connectDB from './db/connection.js'
import wordsRouter from './routes/words.js'

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5000'
const PORT = process.env.PORT || 5000

const app = express();

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", FRONTEND_URL);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use('/api', wordsRouter);

connectDB()

app.use(json()).listen(PORT,() => {
    console.log("Application listening on Port",PORT)
})