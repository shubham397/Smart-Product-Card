import React from "react";
import "./ProductCard.css";
import { FaHeart, FaStar, FaShoppingCart } from "react-icons/fa";

type Product = {
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
};

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.image} alt={product.name} />
        <div className="hover-icons">
          <FaHeart title="Wishlist" />
          <FaShoppingCart title="Add to Cart" />
        </div>
        {product.discount && (
          <div className="discount-badge">-{product.discount}%</div>
        )}
      </div>
      <div className="product-info">
        <h4>{product.name}</h4>
        <div className="price">
          ₹{product.price}
          {product.originalPrice && (
            <span className="original-price">₹{product.originalPrice}</span>
          )}
        </div>
        <div className="rating">
          {Array.from({ length: 5 }, (_, i) => (
            <FaStar
              key={i}
              color={i < product.rating ? "#facc15" : "#d1d5db"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
