const db = require("../database");

const findAll = () => {
   return db.query("SELECT * FROM park")
}