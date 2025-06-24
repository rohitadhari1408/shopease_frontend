// src/components/Navbar.jsx
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../componets/ui/customfields/Button';
import useAuth from '../CustomHooks/Auth';

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  console.log('isAuthenticated:', isAuthenticated);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Cart', path: '/cart' },
  ];

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition duration-200"
          >
            <span className="text-gray-800">Shop</span>
            <span className="text-blue-600">Ease</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {!isAuthenticated &&
              navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative group font-medium text-gray-700 hover:text-blue-600 transition duration-200 ${
                      isActive ? 'text-blue-600' : ''
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 w-0 group-hover:w-full transition-all duration-300 ${
                        isActive ? 'w-full' : ''
                      }`}
                    />
                  </Link>
                );
              })}

            {isAuthenticated ? (
              <Button variant="primary" onClick={logout}>
                Logout
              </Button>
            ) : (
              <Link to="/login">
                <Button variant="primary">Login</Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2">
          {!isAuthenticated &&
            navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-base font-medium py-2 px-2 rounded transition duration-200 ${
                    isActive
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

          {isAuthenticated ? (
            <Button
              variant="primary"
              className="w-full text-center"
              onClick={() => {
                setIsMobileMenuOpen(false);
                logout();
              }}
            >
              Logout
            </Button>
          ) : (
            <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="primary" className="w-full text-center">
                Login
              </Button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
