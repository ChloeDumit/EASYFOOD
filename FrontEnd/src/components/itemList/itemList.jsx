import React from "react";
import "./itemList.css";
import { Col } from "react-bootstrap";
import { Link} from 'react-router-dom'



function ItemList({ name, price, id, info, categ, photo }) {
  return (
    
    <Col className="mx-auto" xs="12" sm="12" md="4" lg="4" xl="4">
      <div className="itemCard">
        <figure>
          <img
            className="img-item"
            src={`/assets/${photo}.jpg`}
            alt={`${name}`}
          ></img>
        </figure>
        <div className="infoBox">
          
          <h1> 
            <Link to={`/item/${id}`} className="ver">{name}</Link></h1>

          <p className="item-info">{info}</p>
          <button
            className="agregar snipcart-add-item"
            data-item-id={id}
            data-item-price={price}
            data-item-url={`/categories/${categ}`}
            data-item-name={name}
            data-item-image={`../../../public/assets/${name}.jpg`}
            data-item-description={info}
            data-item-custom1-name="Servings"
            data-item-custom1-options="1|2[+100.00]|3[+200.00]|4[+300.00]">
          
            Add to cart (${price})
          </button>
        </div>
      </div>
    </Col>
  );
}
export default ItemList;
