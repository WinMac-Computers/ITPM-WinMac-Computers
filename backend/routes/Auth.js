const router = require("express").Router();
const User = require("../models/Auth");

const {
  register,
  login,
  forgotPassword,
  resetpassword,
  registerStaff,
} = require("../controllers/Auth");

//below routes map the controllers
router.route("/register").post(register); //call the auth in controllers

router.route("/login").post(login);

router.route("/forgotpassword").post(forgotPassword);

router.route("/passwordreset/:resetToken").put(resetpassword);

router.route("/registerStaff").post(registerStaff);

router.route("/get/:id").get(async (req, res) => {
  const { id } = req.params;

  await User.findById(id)
    .then((user) => res.json(user))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

router.route("/update/:id").put(async (req, res) => {
  //backend route for updating relavant data and passing back
  const { id } = req.params;
  const { username } = req.body;

  //find the document by and update the relavant data
  await Customer.findByIdAndUpdate(id, {
    username,
  })
    .then(() => res.json({ success: true }))
    .catch((error) => res.json({ success: false, error: error }));
});

module.exports = router;
