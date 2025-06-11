import ProductCard from "./components/ProductCard";
import "./styles.css";

const products = [
  {
    name: "Puma Max",
    image:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&h=300",
    price: 1499,
    originalPrice: 2499,
    discount: 40,
    rating: 4,
    review: 342,
  },
  {
    name: "Wireless HeadPhone Pro",
    image: "https://istation.in/wp-content/uploads/2024/07/MQTR3.jpeg",
    price: 2999,
    originalPrice: 3499,
    discount: 15,
    rating: 5,
    review: 274,
  },
  {
    name: "Smartphone Max 5G",
    image:
      "https://5.imimg.com/data5/ECOM/Default/2023/9/345412856/WL/SG/VG/117134804/h2bf9e94d6604458cbd83aaba9f1734d24-500x500.jpg",
    price: 25999,
    originalPrice: 29999,
    discount: 13,
    rating: 4,
    review: 765,
  },
  {
    name: "Classic Watch 7",
    image:
      "https://vasanthandco.in/images/productimages/1580__product__Smartwatch__noise-smart-watch-pluse-1.png",
    price: 3999,
    originalPrice: 4999,
    discount: 20,
    rating: 4,
    review: 493,
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
