const jwt = require('jsonwebtoken');
const shajs = require('sha.js');
const usersModel = require("../models/users.model");

const login = async (req, res) => {
    try {
        let passwd = req.body.password;
        let [[user]] = await usersModel.getByNickname(req.body.pseudo);

        if (!user || !req.body.password || !req.body.pseudo) return res.status(404).send("User not found");
        if (user.password !== shajs("sha256").update(passwd).digest("hex")) return res.status(403).send("Invalid password");

        delete user.password;
        user["token"] = jwt.sign(user, process.env.SECRET, {expiresIn: '8h'});

        return res.status(500).send(user);
    } catch (err) {
        console.error(err);
        return res.status(500).send("An error occured");
    }
};

module.exports = {
    login
};