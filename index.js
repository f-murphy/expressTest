import express from 'express'
import mongoose from 'mongoose';

const PORT = 5000;
const DB_URL = 'mongodb+srv://testExpress:EWQ5doMQs2nhjIup@cluster0.4olxvpw.mongodb.net/?retryWrites=true&w=majority'

const run = express()

run.use(express.json())

run.post('/', (req, res) => {
    console.log(req.body)
    res.status(200).json('server works')
})
   

run.listen(PORT, () => console.log('Server started on port ' + PORT))