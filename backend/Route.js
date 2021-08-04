const express = require("express");
const router = express.Router();
const Register = require("./Register"); 

router.route("/create").post((req, res) => {
    const Fname = req.body.Fname;
    const Lname = req.body.Lname;
    const Email = req.body.Email;
    const Phone = req.body.Phone;
    const newRegister = new Register({
        Fname,
        Lname,
        Email,
        Phone
    });
    newRegister.save();
})

router.route("/data").get((req, res) =>{
    Register.find().then(foundData =>res.json(foundData))
})
module.exports = router;