const express = require("express")
const router = express.Router()
const { User } = require("../models")

//REGISTER
router.post("/", (req, res, next)=>{
    User.create(req.body)
    .then((data)=>{
        res.status(201).json(data)
    })
    .catch(next)
})

/**
 * 
//LOGIN PASSPORT
router.post("/auth", passport.authenticate("local"), (req, res)=>{
    return res.send(req.user)
})

//LOGOUT PASSPORT
router.post("/logout", (req, res)=>{
    req.logOut()
    res.sendStatus(200)
})
 */


//EDIT USER
router.put("/:id", (req, res, next)=>{
    User.update(req.body, {
        where : {
            id : req.params.id,
        },
        returning : true,
        plain : true
    })
    .then(([,data])=>{
        res.status(201).json(data)
    })
    .catch(next)
})

//RETORNAR UN USUARIO LOGUEADO EN CASO DE QUE LO HAYA

//PROMOVER ADMINISTRADORES (ADMIN)
router.put("/:id/admin", (req, res, next)=>{
     //Si el usuario registradp isAdmin : true ? return esta funcion : next() 
     User.update({isAdmin : true}, {
         where : {
             id : req.params.id
         },
         returning : true,
         plain : true
     })
     .then(([, data])=>{
        res.status(201).json(data)
     })
     .catch(next)
})

//DELETE USER (ADMIN)
router.delete("/:id", (req, res, next)=>{
    //Si el usuario registradp isAdmin : true ? return esta funcion : next() 
    User.destroy({
        where : {
            id : req.params.id
        }
    })
    .then(()=>{
        res.sendStatus(200)
    })
    .catch(next)
})


//SEE ALL USERS (ADMIN)
router.get("/", (req, res, next)=>{
    //Si el usuario registradp isAdmin : true ? return esta funcion : next() 
    User.findAll()
    .then((data)=>{
        res.status(200).json(data)
    })
    .catch(next)
}) 



module.exports = router
