const router = require("express").Router();
const Cart = require("../models/Cart");

router.route("/create").post(async (req, res) => {
  const { user, productNumber, productName, productCategory, productImage } =
    req.body;

  const productQty = Number(req.body.productQty);

  const productPrice = Number(req.body.productPrice);

  const newCart = new Cart({
    user,
    productNumber,
    productName,
    productCategory,
    productPrice,
    productQty,
    productImage,
  });

  await newCart
    .save()
    .then(() => res.json({ success: true }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

router.route("/").get(async (req, res) => {
  await Cart.find()
    .then((cart) => res.json(cart))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

router.route("/get/:id").get(async (req, res) => {
  const { id } = req.params;

  await Cart.findById(id)
    .then((cart) => res.json(cart))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

router.route("/delete/:id").delete(async (req, res) => {
  const { id } = req.params;

  await Cart.findByIdAndRemove(id) //find by the document by id and delete
    .then(() => res.json({ message: "Successfully Deleted" }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

router.route("/deleteCartItems").delete(async (req, res) => {
  await Cart.deleteMany({})
    .then(() => res.json({ message: "Successfully Deleted" }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

module.exports = router;