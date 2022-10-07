//--------------------Import-----------------
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const { check, validationResult } = require("express-validator");
require("dotenv").config();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

let Payment = require("../models/Payment");

//route Get api/payments
//desc Get all Payments
//access public
router.get("/", authMiddleware, async (req, res) => {
    try {
        const payments = await Payment.find({});
        res.send(payments);
    } catch (err) {
        return res.status(500).send("Server error");
    }
});

//route Get api/payment/:id
//desc Get payment by id
//access public
router.get("/:id", authMiddleware, async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.id);
        if (!payment) {
            return res.status(404).send("payment history not found");
        }
        res.send(payment);
    } catch (err) {
        return res.status(500).send("Server error");
    }
});

//route Post api/payment
//desc Insert payment
//access public
router.post(
    "/",
    [
        check("pname", "Person Name is required").not().isEmpty(),
        check("cardNo", "Card no is required").notEmpty().isInt().isLength({ min: 16, max: 16 }),
        check("cvv", "CVV is required").notEmpty().isInt().isLength({ max: 3 }),
        check("expiry", "Expiry is required").not().isEmpty(),
        check("paymentAmount", "Payment Amount is required").notEmpty().isNumeric(),
    ],
    authMiddleware,
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const newPayment = await Payment.create({
                pname: req.body.pname,
                cardNo: req.body.cardNo,
                cvv: req.body.cvv,
                expiry: req.body.expiry,
                paymentAmount: req.body.paymentAmount,
            });

            res.send({ newPayment });
        } catch (err) {
            return res.status(500).send("Server error");
        }
    }
);

//route Post api/payment
//desc Update Payment
//access public
router.put(
    "/",
    [
        check("pname", "Person Name is required").not().isEmpty(),
        check("cardNo", "Card no is required").notEmpty().isLength({ max: 16 }),
        check("cvv", "CVV is required").notEmpty().isLength({ max: 3 }),
        check("expiry", "Expiry is required").not().isEmpty(),
        check("paymentAmount", "Payment Amount is required").notEmpty().isNumeric(),
    ],
    authMiddleware,
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const Payment = await Payment.findById(req.body.id);
            if (!Payment) {
                return res.status(404).send("Payment history not found");
            }

            (Payment.cardNo = req.body.cardNo),
                (Payment.pname = req.body.pname),
                (Payment.cvv = req.body.cvv),
                (Payment.expiry = req.body.expiry),
                (Payment.paymentAmount = req.body.paymentAmount),
                await Payment.save();
            res.send(Payment);
        } catch (err) {
            return res.status(500).send("Server error");
        }
    }
);

//--------------------Export----------------
module.exports = router;