const router = require("express").Router();
const Product = require("../models/Product");

//route for creating database insertion
router.route("/create").post(async (req, res) => {
  const {
    productNumber,
    productName,
    productCatergory,
    image,
    dateModified,
    status,
  } = req.body;

  const productPrice = Number(req.body.productPrice);

  const dateCreated = Date(req.body.dateCreated);

  const qty = Number(req.body.qty);

  const resolved = Boolean(req.body.resolved);

  // create a new object using database schema
  const newProduct = new Product({
    productNumber,
    productName,
    productCatergory,
    productPrice,
    qty,
    image,
    dateCreated,
    dateModified,
    status,
    resolved,
  });

  // check the availability of saving data
  const isAvailable = await Product.findOne({
    productNumber: { $regex: new RegExp(productNumber, "i") },
    productName: productName,
  });

  if (isAvailable) {
    return res
      .status(401)
      .json({ error: "Already Product ! Plz add something new 😀" });
  }

  await newProduct
    .save()
    .then(() => res.status(200).json({ success: true }))
    .catch(
      (error) => res.status(500).json({ success: false, error: error }) // else save to the db
    );
});

//route for fetching all the data
router.route("/").get(async (req, res) => {
  await Product.find()
    .then((product) => res.json(product))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for getting a relavant document using id
router.route("/get/:id").get(async (req, res) => {
  const { id } = req.params;

  await Product.findById(id)
    .then((products) => res.json(products))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for deleting a relavant document using id
router.route("/delete/:id").delete(async (req, res) => {
  const { id } = req.params;

  await Product.findByIdAndRemove(id) //find by the document by id and delete
    .then(() => res.json({ message: "Successfully Deleted" }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for updating a relavant document using id
router.route("/update/:id").put(async (req, res) => {
  //backend route for updating relavant data and passing back
  const { id } = req.params;
  const {
    productNumber,
    productName,
    productCatergory,
    productPrice,
    qty,
    image,
    state,
    dateModified,
  } = req.body;

  //find the document by and update the relavant data
  await Product.findByIdAndUpdate(id, {
    productNumber,
    productName,
    productCatergory,
    productPrice,
    image,
    qty,
    state,
    dateModified,
  })
    .then(() => res.json({ success: true }))
    .catch((error) => res.json({ success: false, error: error }));
});

//custom update route
router.route("/resolve/:id").put(async (req, res) => {
  const { id } = req.params;
  const resolved = Boolean(req.body.resolved);
  const { dateModified } = req.body;

  await Product.findByIdAndUpdate(id, { resolved, dateModified })
    .then(() => req.json({ message: "successfully updated" }))
    .catch((error) => req.status(500).json({ success: false, error: error }));
});

module.exports = router;
