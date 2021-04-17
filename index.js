const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const users = require("./routes/api/users")
const expenses = require("./routes/api/expenses")

const app = express()
const port = 3000

dotenv.config();

app.use(cors())
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, 
 useUnifiedTopology: true})

const connection = mongoose.connection

connection.once('open', () => {
  console.log("connect to db success")
})


app.use("/api/users", users)
app.use("/api/expenses", expenses)
//TODO get expense based on month
//TODO get expense based on day
//TODO get expense based on year
//TODO user authentication

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})