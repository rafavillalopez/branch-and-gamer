import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import { setOrdenes } from "../../store/ordenesReducer";

export default function Historial() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(setOrdenes());
    }, []);

    return (
        <div>
            <Table striped bordered hover variant="blue">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Producto</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>
                            <p>mouse</p>
                             
                        </td>
                        <td>2000</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}
