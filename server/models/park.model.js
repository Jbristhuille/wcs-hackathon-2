const db = require("../database");

const findAll = () => {
   return db.query("SELECT * FROM park")
};

const findGetId = (id) => {
    return db.query("SELECT * FROM park WHERE id=?", [id])
}

module.exports = {
    findAll,
    findGetId
}