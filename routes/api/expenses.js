const Expense = require("../../models/Expense")
const express = require("express")
const router = express.Router()
const auth = require("../../middleware/auth")

router.post("/", auth, async (req, res) => {
    const newExpense = new Expense({
      name: req.body.name,
      amount: req.body.amount,
      remarks: req.body.remarks,
      date: req.body.date,
      userId: req.user.id
    })

    try {
        const item = await newExpense.save();
        if(!item)
            throw Error("Soemthing went wrong while trying to save the expense")
        res.status(200).json(item)
    } catch(e) {
        res.status(400).json({ mes: e.message })
    }
})

router.get("/", auth, async (req, res) => {
    try {
        const expenses = await Expense.find({ userId: req.user.id });
        if(!expenses)
            throw Erorr("No expense")
        
        res.status(200).json(expenses)
    } catch(e) {
        res.status(400).json({ msg: e.message })
    }
})

module.exports = router