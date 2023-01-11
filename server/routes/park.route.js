const router = require ("express").Router();
const parkController = require("../controllers/park.controller");

router.get("/", parkController.getAll);
router.get("/:id", parkController.getId)

module.exports = router;