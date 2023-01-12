const db = require("../database");

const getByNickname = (name) => {
    return db.query("SELECT * FROM user WHERE pseudo=?", [name]);
};

module.exports = {
    getByNickname
};