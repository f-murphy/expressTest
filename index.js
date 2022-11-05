import express from 'express'

const PORT = 5000;

const appRun = express()

appRun.use(express.json())

appRun.post('/', (req, res) => {
    console.log(req.body)
    res.status(200).json('server works')
})
   

appRun.listen(PORT, () => console.log('Server started on port ' + PORT))