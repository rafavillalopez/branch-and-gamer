/** @format */

import * as React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { ListGroup } from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";
import { ListGroupItemProps } from "react-bootstrap";
import { ListGroupProps } from "react-bootstrap";
import "../assets/index.css"

export default function Sidebar() {
  return (
    <div className="sideBar">
      <ListGroup defaultActiveKey="#link1">
        <ListGroup.Item action href="#link1">
          Mouse
        </ListGroup.Item>
        <ListGroup.Item action href="#link2" enable>
          Teclados
        </ListGroup.Item>
        <ListGroup.Item action href="#link3">
          Monitores
        </ListGroup.Item>
        <ListGroup.Item action href="#link4" enable>
          Procesadores
        </ListGroup.Item>
        <ListGroup.Item action href="#link5">
          Placas de Video
        </ListGroup.Item>
        <ListGroup.Item action href="#link6" enable>
          Fuentes
        </ListGroup.Item>
        <ListGroup.Item action href="#link7">
          WebCams
        </ListGroup.Item>
        <ListGroup.Item action href="#link8" enable>
          Auriculares
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
