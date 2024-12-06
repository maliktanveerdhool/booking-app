import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();

  const getLinkClass = (path: string) => {
    return `hover:text-gray-300 transition-colors ${
      location.pathname === path ? 'text-yellow-300' : ''
    }`;
  };

  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-purple-200 transition-colors">
          Booking App
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className={`${getLinkClass('/')} hover:text-purple-200 transition-colors`}>Home</Link></li>
            <li><Link to="/services" className={`${getLinkClass('/services')} hover:text-purple-200 transition-colors`}>Services</Link></li>
            <li><Link to="/about" className={`${getLinkClass('/about')} hover:text-purple-200 transition-colors`}>About</Link></li>
            <li><Link to="/contact" className={`${getLinkClass('/contact')} hover:text-purple-200 transition-colors`}>Contact</Link></li>
            {!isAuthenticated ? (
              <>
                <li><Link to="/login" className={`${getLinkClass('/login')} hover:text-purple-200 transition-colors`}>Login</Link></li>
                <li><Link to="/register" className={`${getLinkClass('/register')} hover:text-purple-200 transition-colors`}>Register</Link></li>
              </>
            ) : (
              <>
                <li><Link to="/dashboard" className={`${getLinkClass('/dashboard')} hover:text-purple-200 transition-colors`}>Dashboard</Link></li>
                <li>
                  <button 
                    onClick={logout}
                    className="hover:text-purple-200 transition-colors"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
