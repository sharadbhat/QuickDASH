const express = require('express')
const path = require('path')

const app = express()

let port = process.env.PORT || 80

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
})

app.listen(port, '', () => {
  console.log('Server started at port 8000')
})