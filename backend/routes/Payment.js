const router = require("express").Router();
const Payment = require("../models/Payment");

//route for inserting data to db
router.route("/create").post(async (req, res) => {
    const {
        itemDetails,
        cardType,
    } = req.body;

    const qty = Number(req.body.qty);

    const payDate = Date(req.body.payDate);

    const netPrice = Number(req.body.netPrice);

    //create new object using the schema
    const newPayment = new Payment({
        itemDetails,
        qty,
        payDate,
        cardType,
        netPrice,
    });

    await newPayment
    .save()
    .then(() => res.status(200).json({ success: true }))
    .catch(
      (error) => res.status(500).json({ success: false, error: error }) // else save to the db
    );
});

//route for fetching payment details
router.route("/").get(async (req, res) => {
    await Payment.find()
    .then((payment) => res.json(payment))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for getting relevant payment information using id
router.route("/get/:id").get(async (req, res) => {
    const { id } = req.params;

    await Payment.findById(id)
    .then((payment) => res.json(payment))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for deleting a relavant payment detail using id
router.route("/delete/:id").delete(async (req, res) => {
    const { id } = req.params;

    await Payment.findByIdAndRemove(id) //find_by_id_and_remove
    .then(() => res.json({ message: "Successfully Deleted" }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for updating a relevant payment detail using id
router.route("/update/:id").put(async (req, res) => {
    //backend route for updating relevant data and passing it back
    const { id } = req.params;
    const {
        itemDetails,
        qty,
        payDate,
        cardType,
        netPrice,
    } = req.body;

    //find the payment by id and update the relevant payment details
    await Payment.findByIdAndUpdate(id ,{
        itemDetails,
        qty,
        payDate,
        cardType,
        netPrice,
    })
    .then(() => res.json({ success: true }))
    .catch((error) => res.json({ success: false, error: error }));
});

module.exports = router;