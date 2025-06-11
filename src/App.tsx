import ProductCard from "./components/ProductCard";
import "./styles.css";

const products = [
  {
    name: "Sneakers XYZ",
    image:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&h=300",
    price: 1499,
    originalPrice: 2499,
    discount: 40,
    rating: 4,
  },
  {
    name: "Wireless Earbuds Pro",
    image:
      "https://images.pexels.com/photos/373945/pexels-photo-373945.jpeg?auto=compress&cs=tinysrgb&h=300",
    price: 2999,
    originalPrice: 3499,
    discount: 15,
    rating: 5,
  },
  {
    name: "Smartphone Max 5G",
    image:
      "https://images.pexels.com/photos/6078126/pexels-photo-6078126.jpeg?auto=compress&cs=tinysrgb&h=300",
    price: 25999,
    originalPrice: 29999,
    discount: 13,
    rating: 4,
  },
  {
    name: "Classic Watch",
    image:
      "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&h=300",
    price: 3999,
    originalPrice: 4999,
    discount: 20,
    rating: 4,
  },
];

function App() {
  return (
    <div
      style={{
        display: "flex",
        gap: "24px",
        justifyContent: "center",
        flexWrap: "wrap",
        padding: 24,
        background: "#f9fafb",
      }}
    >
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

export default App;
