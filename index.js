const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/expenses', (req, res) => {
    res.send('Send a list of expenses')
}) 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})