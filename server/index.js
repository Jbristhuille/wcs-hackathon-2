require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json())

const carRoute = require("./routes/car.route");
const parkRoute = require("./routes/park.route");
const qrRoute = require("./routes/qr.route");

app.use('/cars', carRoute);
app.use('/parks', parkRoute);
app.use('/qr',qrRoute);


app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});