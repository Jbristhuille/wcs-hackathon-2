
const db = require("../database");

const findAll = () => {
   return db.query("SELECT * FROM car")
};

const findCarPark = (id) => {
    return db.query("SELECT * FROM car WHERE park_id=?", [id])
}

const findGetId = (id) => {
    return db.query("SELECT * FROM car WHERE id=?", [id])
};

module.exports = {
    findAll,
    findCarPark,
    findGetId
};
