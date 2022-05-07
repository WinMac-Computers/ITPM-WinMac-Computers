const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
   
});

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("MongoDB connection was successful");
})

const app = express();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is up and running on port number ${PORT}`)
})

app.use("/address", require("./backend/routes/Address"));
app.use("/payment", require("./backend/routes/Payment"));

app.use("/product", require("./backend/routes/Product"));
app.use("/promotion", require("./backend/routes/Promotion"));
app.use("/customer", require("./backend/routes/Customer"));

app.use("/api/auth", require("./backend/routes/Auth"));

app.use("/delivery", require("./backend/routes/Delivery"));

