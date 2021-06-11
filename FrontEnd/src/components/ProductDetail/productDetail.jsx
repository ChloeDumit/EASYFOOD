import React from "react";
import "./detail.css";
import { useHistory } from "react-router-dom";
function ProductDetail({ name, price, id, longinfo, categ }) {
    let history = useHistory();
  return (
    <section className="row ItemDetail_Container">
      <figure className=" col-12 col-md-6 text-right">
        <img
          src={`/assets/${name}.jpg`}
          className="img-fluid ItemDetail_img"
          alt="campera"
        />
      </figure>
      <div className="col-12 col-md-6 ItemDetail_contDetalles d-flex align-items-center">
        <div className="ItemDetail_textos">
          <h1 className="ItemDetail_Nombre">{name} </h1>
          <p className="ItemDetail_Descrip">{longinfo}</p>
          <button className='agregar' onClick={() => history.goBack()}>Back</button>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
