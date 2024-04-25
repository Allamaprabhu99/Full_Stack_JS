import React from "react";
import { products } from "./products";
import { Link } from "react-router-dom";

export default function ProductGallery() {
  return (
    <div>
      <h1>Product Gallery</h1>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {products.map((product) => {
          return (
            <div
              className="card m-1"
              style={{ width: "18rem" }}
              key={product.id}
            >
              <Link to={"/productdetail/" + product.id}>
                <img src={product.image} className="card-img-top" alt="..." />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Rs. {product.price}</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
