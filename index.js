const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
