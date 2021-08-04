const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://admin:admin123@cluster0.pe8qm.mongodb.net/registerDB", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() => {
    console.log("connection successfully");
}).catch((e) => {
    console.log("No connection");
})

app.use("/", require("../backend/Route"));
app.listen(3001, function() {
    console.log("Server is running on Port 3001");
}) 