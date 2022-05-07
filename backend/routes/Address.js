const router = require("express").Router();
const Address = require("../models/Address");

//insert address
router.route("/create").post(async(req, res) =>{
    const name = req.body.name;
    const phone = req.body.phone;
    const province = req.body.province;
    const city = req.body.city;
    const address = req.body.address;

    const NewAddress = new Address({
        name,
        phone,
        province,
        city,
        address,
    })
    NewAddress.save().then(()=>{
        res.json("Address added")
    }).catch((err)=>{
        console.log(err);
    })
});

// get all
router.route("/").get((req,res)=>{
    Address.find().then((address)=>{
        res.json(address)
    }).catch((err)=>{
        console.log(err)
    })
});

module.exports = router;