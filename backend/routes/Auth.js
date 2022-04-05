const router = require("express").Router();

const { register, login, forgotPassword, resetpassword, registerStaff } = require("../controllers/Auth");

//below routes map the controllers
router.route("/register").post(register); //call the auth in controllers

router.route("/login").post(login);

router.route("/forgotpassword").post(forgotPassword);

router.route("/passwordreset/:resetToken").put(resetpassword);

router.route("/registerStaff").post(registerStaff);

module.exports = router;