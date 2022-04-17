const router = require("express").Router();
const Customer = require("../models/Customer");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
let path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./frontend/public/images");
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, fileFilter });

//route for creating database insertion
router.route("/create").post(upload.single("image"), async (req, res) => {
  

  const { name, address, email, gender } = req.body;

  const age = Number(req.body.age);

  const phone = req.body.phone;
  const image = req.file.filename;

  console.log(req.body);

  // create a new object using database schema
  const newCustomer = new Customer({
    name,
    age,
    address,
    phone,
    email,
    image,
    gender,
  });

  // check the availability of saving data
  const isAvailable = await Customer.findOne({
    name: { $regex: new RegExp(name, "i") },
    email: email,
  });

  if (isAvailable) {
    return res
      .status(401)
      .json({ error: "The customer profile! already exists 😒😒😒" });
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
  const { name, age, address, phone, email, image, gender } =
    req.body;

  //find the document by and update the relavant data
  await Customer.findByIdAndUpdate(id, {
    name,
    age,
    address,
    phone,
    email,
    image,
    gender,
  })
    .then(() => res.json({ success: true }))
    .catch((error) => res.json({ success: false, error: error }));
});

module.exports = router;
