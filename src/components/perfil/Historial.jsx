import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import { setOrdenConItems } from "../../store/ordenConItems";

export default function Historial() {
    const dispatch = useDispatch();
    const { ordenConItems } = useSelector((state) => state);

    React.useEffect(() => {
        dispatch(setOrdenConItems());
    }, []);
    return (
        <div>
            <Table striped bordered hover variant="blue">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Producto/s</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {ordenConItems.length
                        ? ordenConItems.map((orden) => {
                              return (
                                  <tr>
                                      <td>{orden.id}</td>
                                      <td>
                                          <p>
                                              {orden.products
                                                  .map((producto) => {
                                                      return `${producto.quantity} ${producto.title} ${producto.marca}`;
                                                  })
                                                  .join(", ")}
                                          </p>
                                      </td>
                                      <td>
                                          {orden.products.reduce((a, b) => {
                                              return (a +=
                                                  b.price * b.quantity);
                                          }, 0)}
                                      </td>
                                  </tr>
                              );
                          })
                        : ""}
                </tbody>
            </Table>
        </div>
    );
}
