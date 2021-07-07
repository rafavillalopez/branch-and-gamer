import * as React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import ProductBlock from "./ProductBlock";

export default function Valoraciones() {
  const { id } = useParams();
  const { ordenConItems } = useSelector((state) => state);
  const [currentOrder] = ordenConItems.filter((x) => x.id === Number(id));

  return (
    <>
      {currentOrder.products.map((x) => (
        <ProductBlock key={x.id} producto={x} />
      ))}
    </>
  );
}
