// src/components/ProductCard.jsx
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/products/${product.id}`)}
      className="cursor-pointer bg-white border rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300 p-4 flex flex-col items-center text-center"
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain mb-4 transition-transform duration-300 hover:scale-105"
      />
      <h2 className="font-medium text-sm sm:text-base text-gray-800 line-clamp-2 mb-2">
        {product.title}
      </h2>
      <p className="text-blue-600 font-bold text-lg">${product.price}</p>
    </div>
  );
}
