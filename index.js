const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.json(todoList)
})

app.listen(port, () => {
  console.log(`Web server listening at http://localhost:${port}`)
})