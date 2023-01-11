const router = require("express").Router();
const qrController = require("../controllers/qr.controller");

router.post('/', qrController.genQR);

module.exports=router;