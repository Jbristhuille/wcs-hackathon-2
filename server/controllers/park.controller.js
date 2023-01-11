const { findAll, findGetId } = require("../models/park.model");

const getAll = (req, res) => {
    findAll()
        .then(([list]) => {
            res.status(200).send(list)
        })
        .catch(() => {
            console.error(error)
            res.status(500).send("impossible d'afficher les park")
        });
};

const getId = (req, res) => {
    findGetId(req.params.id)
        .then(([[list]]) => {
            if (list) res.status(200).send(list);
            else res.status(404).send("Not Found");
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("impossible d'afficher le park")
        })
};

module.exports = {
    getAll,
    getId
};