const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express()
const port = 3000

dotenv.config();

app.use(cors())
app.use(express.json())

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, 
 useUnifiedTopology: true})

const connection = mongoose.connection

connection.once('open', () => {
  console.log("connect to db success")
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/expenses', (req, res) => {
    res.send('Send a list of expenses')
}) 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})