const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ExpenseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    remarks: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: String,
        required: true
    }
})

module.exports = Expense = mongoose.model("expenses", ExpenseSchema)