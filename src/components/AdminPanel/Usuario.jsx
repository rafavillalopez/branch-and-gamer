import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getAllUsers, editUser, setAdminUser } from "../../store/admin"

import "./admin.css"

const Usuario = () => {

    const [userInputs, setUserInputs] = useState()

    const user = useSelector(state => state.loggedUser)
    const token = useSelector(state => state.token)

    const allUsers = useSelector(state => state.allUsers)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getAllUsers(token))
    }, [user, dispatch])

    const handleInput = (e) => {    
        setUserInputs((value) => {
          return {
            ...value,
            [e.target.name]: e.target.value,
        };
        });
    };

    const editUserChange = (userId) =>{
        dispatch(editUser({userId, userInputs}))
        .then(()=>{
            const inputs = document.getElementsByTagName("input")
            for(let i = 0; i<inputs.valueOf().length; i++){
                inputs.valueOf()[i].value = " "
            }
            setUserInputs({})
            dispatch(getAllUsers(token))
        })
    }

    const createUserAdmin = (userId) =>{
        dispatch(setAdminUser({userId, token}))
        .then(()=>{
            dispatch(getAllUsers(token))
        })
    }

    return (
        <div >
            <h3>Usuarios</h3>

            {allUsers.length ?
            allUsers.map((user, index)=>{
                return (
                    <>
                    <div className="row" key={user.id} >
                        <div className="col-12 user-card  mb-4">
                            <div className="row h-100 p-2 ">
                                <div className="col-12 col-md-2 user-card-img">
                                    User img
                                </div>
                                <div className="col-12 col-md-10">
                                    <div className="row">
                                        <div className="col-12 ">
                                            <p className="mb-1 p-0">  Nombre: {user.name}</p>
                                        </div>
    
                                        <div className="col-12 ">
                                            <p className="mb-1 p-0" >Email: {user.email}</p>
                                        </div>
    
                                        <div className="col-12 mt-2">
                                            <p className="mb-0" >Fecha de creacion : {user.createdAt} </p>
                                        </div>
    
                                        <div className="col-12 mt-2">
                                            <p className="mb-0"> Es admin : {user.isAdmin ? "True" : "False"}</p>
                                        </div>
    
                                        <h6 className="col-12 mt-2">EDITAR USUARIO</h6>
                                        
                                        <div className="col-12 d-flex mt-2 align-items-bottom">
                                            <div>
                                                <label className="mb-1 p-0" htmlFor="">Nombre: </label>
                                                <input 
                                                type="text" 
                                                name="name"
                                                onChange={handleInput} />
                                            </div>

                                            <div>
                                                <label className="mb-1 p-0" htmlFor="">Email: </label>
                                                <input  type="text" name="email" onChange={handleInput} />
                                            </div>
                                        </div>

                                        <div className="col-12 d-flex justify-content-end mt-2 mb-2">
                                            <button className="btn btn-danger user-card-button d-flex align-items-center" 
                                            onClick={()=>createUserAdmin(user.id)}>
                                                Admin
                                            </button>
                                            
                                            <button className="btn btn-primary user-card-button d-flex align-items-center" 
                                                onClick={()=>editUserChange(user.id)} >
                                                    Modificar
                                            </button>   
                                        </div>
    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>    
                )
            })
    
                : <></>}

        </div>
    )
}

export default Usuario
