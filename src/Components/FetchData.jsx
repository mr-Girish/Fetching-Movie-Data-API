import React from "react";
import '../index.css';
import { Link } from "react-router-dom";

const FetchData = ({ product }) => {
  return (
    <>
      <h1>data</h1>
      <div className="cards">
        <div className="data">
          {product.name} <br />
          {/* <a href={product.url}>{product.url}</a> */}
          {/* {product.url} <br /> */}
          {product.image}
          {/* <button>click here</button> */}
          {/* <Link to={`/information/${product.id}`} className="button"> click here</Link> */}
        </div>
      </div>
    </>
  );
};

export default FetchData;
