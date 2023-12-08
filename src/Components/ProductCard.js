import React from 'react';
import './ProductCard.css'; // Create a separate CSS file for styling

const ProductCard = () => {
  return (
    <div className="product-page">
      <div className="product-card">
        <div className="product-image">
          <img
            src="images/light.PNG"
            alt="Product 1"
          />
        </div>
        <div className="product-details">
          <h2>Product 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ex nec justo ultrices auctor.
          </p>
          <div className="add-to-cart-btn">
            <button>Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image">
          <img
            src="images/skill.jpg"
            alt="Product 2"
          />
        </div>
        <div className="product-details">
          <h2>Product 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ex nec justo ultrices auctor.
          </p>
          <div className="add-to-cart-btn">
            <button>Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image">
          <img
            src="images/download.webp"
            alt="Product 3"
          />
        </div>
        <div className="product-details">
          <h2>Product 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ex nec justo ultrices auctor.
          </p>
          <div className="add-to-cart-btn">
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
