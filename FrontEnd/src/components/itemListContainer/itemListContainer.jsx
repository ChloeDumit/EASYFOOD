import React from "react";
import ItemList from "../itemList/itemList";
import { useState, useEffect } from "react";
import "./itemListContainer.css";
import { Row, Container } from "react-bootstrap";
import axios from "axios";

function ItemContainer() {
  const [product, getProducts] = useState([]);

  const getallProducts = () => {
    axios
      .get("/allproducts")
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
        <img className='spin' src='/assets/Spin.svg' alt='Cargando productos...' />
      )}
    </Container>
  );
}

export default ItemContainer;
