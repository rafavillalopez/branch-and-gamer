const express = require("express")
const router = express.Router()
const { Product } = require("../models")


router.get("/", (req, res, next) => {
    Product.findAll()
    .then((data) => {
        res.status(200).json(data)
    })
    .catch(next)
})

router.get("/:id", (req, res, next) => {
    Product.findByPk(req.params.id)
    .then((data) => {
        res.status(200).json(data)
    })
    .catch(next)
})

router.post("/", (req, res, next) => {
    Product.create(req.body)
    .then((data) => {
        res.status(201).json(data)
    })
    .catch(next)
})

router.put("/:id", (req, res, next) => {
    Product.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        res.sendStatus(200)
    })
    // DEBERIAMOS DEVOLVER EL PRODUCTO ACTUALIZADO?
    .catch(next)
})

router.delete("/:id", (req, res, next) => {
    Product.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        res.sendStatus(200)
    })
    .catch(next)
})

module.exports = router