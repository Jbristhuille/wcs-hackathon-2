const shajs = require("sha.js")

const genQR = (req, res) => {
    
    let hash = shajs("sha256").update(JSON.stringify(req.body)+String(Date.now())).digest('hex');
    res.status(200).send(hash.substring(0, 10));
}

module.exports={
    genQR
}
