// src/components/Hero.jsx
import { Link } from 'react-router-dom';
import HeroImage from '../assets/heroimage.webp'

export default function Hero() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Your Smart Shopping Starts Here
          </h1>
          <p className="text-gray-600 text-lg mb-6 max-w-md">
            Explore the latest collections, unbeatable prices, and must-have gadgets all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/products"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Browse Products
            </Link>
            <Link
              to="/cart"
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition"
            >
              Go to Cart
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img
            src={HeroImage}
            alt="Shopping Hero"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
