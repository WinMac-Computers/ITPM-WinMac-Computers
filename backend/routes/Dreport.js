const router = require("express").Router();
const Dreport = require("../models/Dreport");

router.route("/create").post(async(req, res) =>{
    const id = req.body.id;
    const fullname = req.body.fullname;
    const phone = req.body.phone;
    const address = req.body.address;
    const rider = req.body.rider;

    const newDreport = new Dreport({
        id,
        fullname,
        phone,
        address,
        rider,
    })
    newDreport.save().then(()=>{
        res.json("report added")
    }).catch((err)=>{
        console.log(err);
    })
});

router.route("/").get((req,res)=>{
    Dreport.find().then((dreport)=>{
        res.json(dreport)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/get/:id").get(async (req,res) => {
    let userId = req.params.id;
    await Dreport.findById(userId)
    .then((dreport) => {
        res.status(200).send({status: "report Fetched", dreport})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "error with get report"})
    })
})
module.exports = router;