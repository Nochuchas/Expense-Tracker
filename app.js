const express = require('express')
const mongoose = require('mongoose')
const creds = require('./credentials')
const models = require('./models/models')

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
    const newUser = new models.UserModel()
    newUser.name = "SS"
    newUser.save().then(() => {
        const newUser1 = new models.UserModel()
        newUser1.name = "YS"
        newUser1.save().then(() => {
            const t1 = new models.TransactionModel()
            t1.from_user = newUser
            t1.to_user = newUser1
            t1.amount = 1000
            t1.save().then(() => {
                res.send(t1.to_user.name)
            })
        })
    })
})
