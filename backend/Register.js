const mongoose = require("mongoose");

const registerSchema = {
    Fname: String,
    Lname: String,
    Email: String,
    Phone: String
}

const Register = mongoose.model("Register", registerSchema);
 module.exports = Register;