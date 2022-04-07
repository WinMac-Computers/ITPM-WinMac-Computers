const router = require("express").Router();
const Customer = require("../models/Customer");

//route for creating database insertion
router.route("/create").post(async (req, res) => {
  const {
    name,
    address,
    email,
    image,
  } = req.body;

  const age = Number(req.body.age);

  const phoneNumber = Number(req.body.phoneNumber);

  const password = Number(req.body.Password);
  const gender = Boolean(req.body.gender);

  // create a new object using database schema
  const newCustomer = new Customer({
    name,
    age,
    address,
    phoneNumber,
    email,
    password,
    image,
    gender,
  });

  // check the availability of saving data
  const isAvailable = await Customer.findOne({
    phoneNumber: { $regex: new RegExp(phoneNumber, "i") },
    email: email,
  });

  if (isAvailable) {
    return res
      .status(401)
      .json({ error: "The customer had created a profile!😀" });
  }

  await newCustomer
    .save()
    .then(() => res.status(200).json({ success: true }))
    .catch(
      (error) => res.status(500).json({ success: false, error: error }) // else save to the db
    );
});

//route for fetching all the data
router.route("/").get(async (req, res) => {
  await Customer.find()
    .then((customer) => res.json(customer))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for getting a relavant document using id
router.route("/get/:id").get(async (req, res) => {
  const { id } = req.params;

  await Customer.findById(id)
    .then((customer) => res.json(customer))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for deleting a relavant document using id
router.route("/delete/:id").delete(async (req, res) => {
  const { id } = req.params;

  await Customer.findByIdAndRemove(id) //find by the document by id and delete
    .then(() => res.json({ message: "Successfully Deleted" }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for updating a relavant document using id
router.route("/update/:id").put(async (req, res) => {
  //backend route for updating relavant data and passing back
  const { id } = req.params;
  const {
    name,
    age,
    address,
    phoneNumber,
    email,
    Password,
    image,
    gender,
  } = req.body;

  //find the document by and update the relavant data
  await Customer.findByIdAndUpdate(id, {
    name,
    age,
    address,
    phoneNumber,
    email,
    Password,
    image,
    gender,
  })
    .then(() => res.json({ success: true }))
    .catch((error) => res.json({ success: false, error: error }));
});



module.exports = router;