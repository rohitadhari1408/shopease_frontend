import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = () => {
    axios.get('http://localhost:5000/api/cart')
      .then(res => setCartItems(res.data))
      .catch(err => console.error("Error fetching cart:", err));
  };

  const handleRemove = (id) => {
    axios.delete(`http://localhost:5000/api/cart/${id}`)
      .then(() => fetchCart())
      .catch(err => console.error("Error removing item:", err));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500">Your cart is empty.</div>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between bg-white shadow p-4 rounded-lg">
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <img src={item.image} alt={item.title} className="h-16 w-16 object-contain" />
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  </div>
                </div>

                <div className="mt-2 sm:mt-0 flex flex-col sm:flex-row sm:items-center gap-4">
                  <p className="text-green-700 font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-500 hover:underline text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t pt-4 flex flex-col sm:flex-row items-center justify-between">
            <p className="text-xl font-bold text-gray-800">Total: ${total.toFixed(2)}</p>
            <button
  onClick={() => alert('Payment successful! 🎉')}
  className="mt-4 sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
>
  Proceed to Payment
</button>

          </div>
        </>
      )}
    </div>
  );
}
