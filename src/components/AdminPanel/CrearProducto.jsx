import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { crearProducto } from "../../store/productos"
import { Alert } from "react-bootstrap"

const CrearProducto = () => {

    const [productInput, setProductInput] = useState()
    const dispatch = useDispatch()

    const [showSuccess, setShowSuccess] = useState(false);

    const token = useSelector(state => state.token)

    const handleInput = ({ target }) => {
        setProductInput((productInput) => {
            return {
                ...productInput,
                [target.name]: target.value,
            };
        });
    }

    const handleCreate = () => {
        // console.log("PRODUCTO CREADO", productInput)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("PRODUCTO CREADO", productInput)
        dispatch(crearProducto({ productInput, token }))
            .then(() => setShowSuccess(true))
    }


    return (
        <div className="w-100 crear-producto-section " >
            <h4>Crear un nuevo producto</h4>
            <div className="col-12">
                <form action="" onSubmit={handleSubmit} className="crear-producto-form">
                    <div className="row w-100">
                        <div className="col-12 col-md-6 mb-4 ">
                            <div className="row align-items-center ">
                                <label className="col-3 d-flex justify-content-start" htmlFor="">Titulo</label>
                                <input className="col-9 col-md-7 crer-producto-input"
                                    type="text"
                                    name="title"
                                    required
                                    onChange={handleInput}
                                />
                            </div>
                        </div>

                        <div className="col-12 col-md-6 mb-4">
                            <div className="row align-items-center">
                                <label className="col-3 d-flex justify-content-start" htmlFor="">Marca</label>
                                <input className="col-9 col-md-7 crer-producto-input"
                                    type="text"
                                    name="marca" required
                                    onChange={handleInput}
                                />
                            </div>
                        </div>

                        <div className="col-12 col-md-6 mb-4">
                            <div className="row align-items-center">
                                <label className="col-3 d-flex justify-content-start" htmlFor="">Categoría</label>
                                <input className="col-9 col-md-7 crer-producto-input"
                                    type="number"
                                    name="categoryId"
                                    required
                                    onChange={handleInput}
                                />
                            </div>
                        </div>

                        <div className="col-12 col-md-6 mb-4">
                            <div className="row align-items-center">
                                <label className="col-3 d-flex justify-content-start" htmlFor="">Precio</label>
                                <input className="col-9 col-md-7 crer-producto-input"
                                    required
                                    type="number"
                                    onChange={handleInput}
                                    name="price" />
                            </div>
                        </div>

                        <div className="col-12 col-md-6 mb-4">
                            <div className="row align-items-center">
                                <label className="col-3 d-flex justify-content-start" htmlFor="">Descripción</label>
                                <input className="col-9 col-md-7 crer-producto-input"
                                    type="text"
                                    name="description"
                                    required
                                    onChange={handleInput}
                                />
                            </div>
                        </div>

                        <div className="col-12 col-md-6 mb-4">
                            <div className="row align-items-center">
                                <label className="col-3 d-flex justify-content-start" htmlFor="">Cantidad</label>
                                <input className="col-9 col-md-7 crer-producto-input"
                                    type="number"
                                    name="quantity"
                                    required
                                    onChange={handleInput}
                                />
                            </div>
                        </div>

                        <div className="col-12 col-md-6 mb-4">
                            <div className="row align-items-center">
                                <label className="col-3 d-flex justify-content-start" htmlFor="">Colores</label>
                                <input className="col-9 col-md-7 crer-producto-input"
                                    type="text"
                                    name="colors"
                                    required
                                    onChange={handleInput}
                                />
                            </div>
                        </div>

                        <div className="col-12 col-md-6 mb-4">
                            <div className="row align-items-center">
                                <label className="col-3 d-flex justify-content-start " htmlFor="">Imagen</label>
                                <input className="col-9 col-md-7 crer-producto-input"
                                    type="text"
                                    name="imageUrl"
                                    required
                                    onChange={handleInput}
                                />
                            </div>
                        </div>

                        <div className="col-12 d-flex justify-content-end mt-2 mb-2 p-0">
                            <button type="submit" className="btn btn-primary user-card-button d-flex align-items-center"

                            >
                                Crear producto
                            </button>
                        </div>

                        {showSuccess ?
                        <>
                            <Alert  className={"crear-producto-alert"} variant="success" onClose={() => setShowSuccess(false)} dismissible>
                                <Alert.Heading>Branch&Gamer</Alert.Heading>
                                <p>
                                    Producto creado correctamente
                                        </p>
                            </Alert>
                        </>
                        : null}


                    </div>
                </form>
            </div>
        </div>
    )
}


/**
 * {
        "title": "notebook asus ryzen 7",
        "marca": "asus",
        "categoryId": 2,
        "price": 135000,
        "description": "muy buena compu",
        "quantity": 18,
        "colors": [
            "black",
            "white",
            "blue",
            "brown"
        ],
        "imageUrl": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_26623_Notebook_ASUS_TUF_FA506_15.6__144Hz_Ryzen_7_4800H_GTX1660Ti_6GB_DDR4_16GB__M.2_512GB_d1b51c53-grn.jpg"
    }
 */

export default CrearProducto
