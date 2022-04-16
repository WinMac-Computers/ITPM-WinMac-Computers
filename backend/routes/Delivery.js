const router =require("express").Router();
const { Router } = require("express");
const { get } = require("express/lib/response");
const res = require("express/lib/response");
const rider = require("../models/Delivery");

//http://localhost:8070/delivery/addrider

//add rider
router.route("/addrider").post((req,res)=>{
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    const nic = req.body.nic;

    const NewRider = new rider({

        name,
        phone,
        email,
        nic,

    })
    NewRider.save().then(()=>{
        res.json("Rider Added")
    }).catch((err)=>{
        console.log(err);
    })

});


// get all

router.route("/").get((req,res)=>{
    rider.find().then((riders)=>{
        res.json(riders)
    }).catch((err)=>{
        console.log(err)
    })
})

//update
router.route("/update/:id").put(async (req,res) => {
    let userId = req.params.id;
    const {name,phone,email,nic} = req.body;

    const updateRider = {
        name,
        phone,
        email,
        nic
    }
    const update = await rider.findByIdAndUpdate(userId, updateRider)
    .then(() =>{
        res.status(200).send({status: "Rider updated"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })

   
})
//delete
 router.route("/delete/:id").delete(async (req,res) =>{
        let userId = req.params.id;
        await rider.findByIdAndDelete(userId)
        .then(() => {
            res.status(200).send({status: "Rider Deleted"});
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({status: "ErrorvDelete Rider", error: err.sessage});
        })
 })

 // Get one rider
 router.route("/get/:id").get(async (req,res) => {
     let userId = req.params.id;
     await rider.findById(userId)
     .then((rider) => {
         res.status(200).send({status: "User Fetched", rider})
     }).catch(() => {
         console.log(err.message);
         res.status(500).send({status: "error with get rider"})
     })
 })


module.exports = router;
