const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: String
})

const TransactionSchema = new Schema({
    amount: Number,
    from_user: UserSchema,
    to_user: UserSchema
})

const UserModel = mongoose.model('user', UserSchema)
const TransactionModel = mongoose.model('transaction', TransactionSchema)

module.exports = { UserModel, TransactionModel }