import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const bookings = [
    {
      id: 1,
      service: 'Business Consultation',
      date: '2024-02-15',
      time: '10:00 AM',
      status: 'Confirmed'
    },
    {
      id: 2,
      service: 'Financial Planning',
      date: '2024-02-20',
      time: '2:30 PM',
      status: 'Pending'
    },
    {
      id: 3,
      service: 'Legal Advisory',
      date: '2024-02-25',
      time: '11:00 AM',
      status: 'Completed'
    }
  ];

  const stats = [
    { label: 'Total Bookings', value: '12' },
    { label: 'Upcoming', value: '3' },
    { label: 'Completed', value: '8' },
    { label: 'Cancelled', value: '1' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white w-full">
      <div className="flex flex-col lg:flex-row min-h-screen w-full">
        {/* Left Side - User Profile & Stats */}
        <div className="lg:w-2/5 bg-gradient-to-r from-purple-600 to-indigo-600 p-8 lg:p-12">
          <div className="text-white">
            {/* User Profile */}
            <div className="text-center mb-12">
              <div className="w-32 h-32 rounded-full bg-white/10 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-20 h-20 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2">Welcome back, {user?.name}!</h2>
              <p className="text-white/70">{user?.email}</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <button className="w-full bg-white/10 hover:bg-white/20 text-white py-3 px-6 rounded-lg transition-all duration-300 flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  New Booking
                </button>
                <button className="w-full bg-white/10 hover:bg-white/20 text-white py-3 px-6 rounded-lg transition-all duration-300 flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  Download History
                </button>
                <button className="w-full bg-white/10 hover:bg-white/20 text-white py-3 px-6 rounded-lg transition-all duration-300 flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Settings
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Bookings & Content */}
        <div className="lg:w-3/5 p-8 lg:p-12">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Bookings</h2>
            <p className="text-gray-600">Manage your upcoming and past appointments</p>
          </div>

          {/* Booking Cards */}
          <div className="space-y-6">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {booking.service}
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {booking.date}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {booking.time}
                      </div>
                    </div>
                  </div>
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      booking.status === 'Confirmed'
                        ? 'bg-green-100 text-green-800'
                        : booking.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {booking.status}
                  </span>
                </div>
                <div className="mt-6 flex space-x-4">
                  <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg transition-colors duration-300">
                    Reschedule
                  </button>
                  <button className="flex-1 bg-red-50 hover:bg-red-100 text-red-600 py-2 px-4 rounded-lg transition-colors duration-300">
                    Cancel
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="mt-8 text-center">
            <button className="text-purple-600 hover:text-purple-700 font-semibold flex items-center justify-center mx-auto">
              View All Bookings
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
