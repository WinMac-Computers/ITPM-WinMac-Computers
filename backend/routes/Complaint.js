const router = require("express").Router();
const Complaint = require("../models/Complaint");
let path = require("path");



//route for creating database insertion
router.route("/create").post( async (req, res) => {
  

  const { fname, lname, email, selectb,comment } = req.body;

  


  console.log(req.body);

  // create a new object using database schema
  const newComplaint = new Complaint({
    fname,
    lname,
    email,
    selectb,
    comment,
  });

  // check the availability of saving data
  const isAvailable = await Complaint.findOne({
    fname: { $regex: new RegExp(fname, "i") },
    email: email,
  });

  if (isAvailable) {
    return res
      .status(401)
      .json({ error: "The customer profile! already exists 😒😒😒" });
  }

  
  await newComplaint
    .save()
    .then(() => res.status(200).json({ success: true }))
    .catch(
      (error) => res.status(500).json({ success: false, error: error }) // else save to the db
    );
});

//route for fetching all the data
router.route("/").get(async (req, res) => {
  await Complaint.find()
    .then((complaint) => res.json(complaint))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for getting a relavant document using id
router.route("/get/:id").get(async (req, res) => {
  const { id } = req.params;

  await Complaint.findById(id)
    .then((complaint) => res.json(complaint))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for deleting a relavant document using id
router.route("/delete/:id").delete(async (req, res) => {
  const { id } = req.params;

  await Complaint.findByIdAndRemove(id) //find by the document by id and delete
    .then(() => res.json({ message: "Successfully Deleted" }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for updating a relavant document using id
router.route("/update/:id").put(async (req, res) => {
  //backend route for updating relavant data and passing back
  const { id } = req.params;
  const {  fname, lname, email,selectb,comment, } =
    req.body;

  //find the document by and update the relavant data
  await Complaint.findByIdAndUpdate(id, {
    fname,
    lname,
    email,
    selectb,
    comment,
  })
    .then(() => res.json({ success: true }))
    .catch((error) => res.json({ success: false, error: error }));
});

module.exports = router;
