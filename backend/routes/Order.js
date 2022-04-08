const router = require("express").Router();
const req = require("express/lib/request");
const res = require("express/lib/response");
const Order = require("../models/Order");

//route for inserting data to db
router.route("/create").post(async, (req, res) => {
    const {
        orderId,
        orderDetails,
        status
    } = req.body;

    const orderedDate = Date(req.body.orderedDate);

    //create new object using the schema
    const newOrder = new Order ({
        orderId,
        orderDetails,
        orderedDate,
        status,
    });

     //check the availability of saving data
     const isAvailable = await Order.findOne({
         orderId: { $regex: new RegExp(orderId, "i") },
     });

     if(isAvailable) {
         return res.status(401).json({
             error :
             "Already exist in the order list plz add new orderID 😊",
         });
     }

     await newOrder
     .save()
     .then(() => res.status(200).json({ success: true }))
     .catch((error) => res.status(500).json({ success: false, error: error })
     ); //else save to the db
});

//route for fetching all the data
router.route("/").get(async (req, res) => {
    await Order.find()
    .then((order) => res.json(order))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for getting a relavant document using id
router.route("/get/:id").get(async (req, res) => {

    const { id } = req.params;

    await Order.findById(id)
    .then((order) => res.json(order))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for deleting a relavant document using id
router.route("/delete/:id").delete(async (req, res) => {
    const { id } = req.params;

    await Order.findByIdAndRemove(id) //find the document by id and remove
    .then(() => res.json({ message: "Successfully Deleted" }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for updating a relevant order detail using id
router.route("/update/:id").put(async (req, res) => {
    const { id } = req.params;
    const {
        orderId,
        orderDetails,
        orderedDate,
        modifiedDate,
        status
    } = req.body;

    //find the order by id and update the relevant order details
    await Order.findByIdAndUpdate(id, {
        orderId,
        orderDetails,
        orderedDate,
        modifiedDate,
        status,
    })
    .then(() => res.json({ success: true }))
    .catch((error) => res.json({ success: false, error: error }));
});

module.exports = router;