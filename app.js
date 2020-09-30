const express = require('express')
const mongoose = require('mongoose')
const creds = require('./credentials')

const port = 3000
const app = express()
const dbURL = `mongodb+srv://${creds.username}:${creds.password}@${creds.cluster}.kigbf.mongodb.net/${creds.db}?retryWrites=true&w=majority`

// configure dbURL accordingly first
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected')
        app.listen(port)
    })
    .catch(err => console.log(err))


app.get('/', (req, res) => {
    console.log(req.url, req.method)
    res.send('Hello world')
})
