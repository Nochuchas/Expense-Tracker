const express = require('express')
const mongoose = require('mongoose')

const port = 3000
const app = express()
const dbURL = 'mongodb+srv://nochuchas:<password>@cluster0.kigbf.mongodb.net/<dbname>?retryWrites=true&w=majority'

// configure dbURL accrodingly first
// mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(res => {
//         console.log('MongoDB connected')
//         app.listen(port)
//     })
//     .catch(err => console.log(err))

app.listen(port)

app.get('/', (request, response) => {
    console.log(request.url, request.method)
    response.send('Hello world')
})
