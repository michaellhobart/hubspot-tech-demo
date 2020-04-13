const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path');

app.use(cors())
const bodyParser = require('body-parser')

// app.get('/', (req, res) => {
//   res.json({ message: 'Hello Fake Company! This is coming from your new EC2 instance!' })
// })

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'))
})

app.listen(5000, () => {
  console.log(`Server listening on Port 5000`)
})

app.use(bodyParser.json())
