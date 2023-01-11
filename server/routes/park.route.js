const router = require ("express").Router();
const parkController = require("../controllers/park.controller");

Router.get("/", parkController.getAll);









module.exports=router;