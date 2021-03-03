const express = require('express')
// const mime = require('mime-types')
const path = require('path')

const app = express()

let port = process.env.PORT || 80

// express.static.mime.define({'video/mp4': ['mp4']})
// app.use(express.static(path.join(__dirname, 'public')))

app.get('/public/:filename', function(req, res) {
  res.sendFile(path.join(__dirname, req.params.filename));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
})

app.listen(port, '', () => {
  console.log('Server started at port ' + port)
})