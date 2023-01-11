require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const carRoute = require("./routes/car.route");

app.use('/cars', carRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});