import React from "react";
import ItemList from "../itemList/itemList";
import { useState, useEffect } from "react";
import "./itemListContainer.css";
import { Row, Container } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router";


function ItemContainer() {
  const [product, getProducts] = useState([]);
  let { categ }= useParams();
  let route = `https://enigmatic-escarpment-12658.herokuapp.com/products/${categ}`
  const getallProducts = () => {
    axios
      .get(route)
      .then((res) => {
        const products = res.data;
        getProducts(products);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getallProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container className="container" id="ItemDetailContainer">
      {product.length ? (
        <>
          <Row className="Row">
            {product.map((product) => (
              <ItemList
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                shortinfo={product.shortinfo}
                longinfo={product.longinfo}
                categ={product.category}
                photo={product.photo}
              />
            ))}
          </Row>
        </>
      ) : (
        <p>Loading... </p>
      )}
    </Container>
  );
}

export default ItemContainer;