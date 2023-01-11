const db = require("../database");

const findAll = () => {
   return db.query("SELECT * FROM car")
};

const findGetId = (id) => {
    return db.query("SELECT * FROM car WHERE id=?", [id])
};

module.exports = {
    findAll,
    findGetId
};