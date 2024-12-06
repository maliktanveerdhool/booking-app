import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Hotel Booking',
      description: 'Find and book the perfect hotel for your stay',
      icon: '🏨',
      price: 'Starting from $50/night',
      features: ['24/7 Support', 'Free Cancellation', 'Best Price Guarantee']
    },
    {
      title: 'Flight Booking',
      description: 'Book flights to destinations worldwide',
      icon: '✈️',
      price: 'Starting from $199',
      features: ['Price Alerts', 'Seat Selection', 'Baggage Included']
    },
    {
      title: 'Car Rental',
      description: 'Rent a car for your journey',
      icon: '🚗',
      price: 'Starting from $30/day',
      features: ['Insurance Included', 'Unlimited Mileage', 'Free Cancellation']
    },
    {
      title: 'Tour Packages',
      description: 'Explore exciting tour packages',
      icon: '🎯',
      price: 'Starting from $299',
      features: ['Guided Tours', 'All Inclusive', 'Group Discounts']
    },
    {
      title: 'Restaurant Booking',
      description: 'Reserve tables at top restaurants',
      icon: '🍽️',
      price: 'Free Booking',
      features: ['Instant Confirmation', 'Special Requests', 'Loyalty Points']
    },
    {
      title: 'Event Tickets',
      description: 'Book tickets for events and shows',
      icon: '🎭',
      price: 'Varies by event',
      features: ['E-Tickets', 'Last Minute Deals', 'Member Discounts']
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of booking services tailored to meet your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-8">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <div className="text-purple-600 font-semibold mb-6">
                  {service.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <svg
                        className="w-4 h-4 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/book/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center font-semibold py-3 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-100 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Custom Services?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us for personalized booking solutions tailored to your specific requirements
            </p>
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-8 py-3 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
