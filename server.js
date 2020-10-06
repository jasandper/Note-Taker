const express = require('express');
const fs = require('fs');
const app = express()
const path = require('path')
PORT = process.env.PORT || 8080;

//html routes
app.use(express.static('public'))
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
  })
//end html routes

app.get("/api/notes", (req,res) => {
    fs.readFile("db/db.json", "UTF-8", (err, data) => {
      res.json(JSON.parse(data))
    })
})





app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})

