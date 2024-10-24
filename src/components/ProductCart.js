import React from "react";
//import "../productCart.css";
import "../card.css";

export default function ProductCart({ product }) {
  return (
    <li className="product-item">
      <article className="card">
          <div className="product-img">
            <a href="">
              {product.image !== "" ? (
                <img src={product.image} />
              ) : (
                <img
                  width={280}
                  height={280}
                  src="https://html5book.ru/wp-content/uploads/2015/10/black-dress.jpg"
                />
              )}
            </a>
        </div>
        <div className="product-list">
          <h3>{product.name}</h3>
          <div className="stars"></div>
          <span className="price">$ {product.price}</span>
          <div className="actions">
            <div className="add-to-cart">
              <a href="" className="cart-button">
                В кошик
              </a>
            </div>
            <div className="add-to-links">
              <a href="" className="wishlist"></a>
              <a href="" className="compare"></a>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
}
