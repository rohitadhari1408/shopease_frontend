// src/components/Features.jsx
import {
  Truck,
  ShieldCheck,
  RefreshCcw,
  ThumbsUp,
} from 'lucide-react'; // Make sure lucide-react is installed

const features = [
  {
    icon: <Truck className="h-8 w-8 text-blue-600" />,
    title: 'Fast Shipping',
    desc: 'We deliver your products to your doorstep in record time.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
    title: 'Secure Checkout',
    desc: 'Your payments are encrypted and totally secure.',
  },
  {
    icon: <RefreshCcw className="h-8 w-8 text-blue-600" />,
    title: 'Easy Returns',
    desc: 'Changed your mind? No worries, we have a hassle-free return policy.',
  },
  {
    icon: <ThumbsUp className="h-8 w-8 text-blue-600" />,
    title: 'Top Quality',
    desc: 'Only the best products, trusted by thousands of customers.',
  },
];

export default function Features() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Why Choose ShopEase?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-lg text-gray-700 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
