import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error('Error fetching product:', err));
  }, [id]);

  const handleAddToCart = () => {
    const productToSend = {
      ...product,
      quantity,
    };

    axios.post('http://localhost:5000/api/cart', productToSend)
      .then(() => alert('Added to cart!'))
      .catch(err => alert('Error adding to cart!'));
  };

  if (!product) return <div className="text-center p-10">Loading...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white rounded-xl shadow-lg max-w-3xl w-full p-6">
        <div className="flex flex-col items-center text-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-64 object-contain mb-6"
          />

          <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h1>
          <p className="text-green-600 text-xl font-semibold mb-2">${product.price}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>

          {/* Quantity Control */}
          <div className="flex items-center mb-4">
            <span className="mr-2 font-medium">Quantity:</span>
            <div className="flex items-center border rounded overflow-hidden">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
              >
                −
              </button>
              <span className="px-4 py-1">{quantity}</span>
              <button
                onClick={() => setQuantity(q => q + 1)}
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-semibold transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
