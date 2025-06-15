import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image1 from '../assets/image1.jpg';
import Image2 from '../assets/image2.jpg';
import Image3 from '../assets/image3.jpg';
import Hero from '../componets/Hero';
import Featured from '../componets/Featured';
import Footer from '../componets/Footer';

const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Carousel */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showIndicators={true}
            interval={3000}
          >
            <div>
              <img src={Image1} alt="Slide 1" className="object-cover w-full h-[300px] sm:h-[400px]" />
            </div>
            <div>
              <img src={Image2} alt="Slide 2" className="object-cover w-full h-[300px] sm:h-[400px]" />
            </div>
            <div>
              <img src={Image3} alt="Slide 3" className="object-cover w-full h-[300px] sm:h-[400px]" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {['Electronics', 'Fashion', 'Home Decor', 'Sports'].map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition duration-300 text-center p-6"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{category}</h3>
              <p className="text-sm text-gray-600">Shop the latest in {category.toLowerCase()}.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Section */}
      <Featured />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
