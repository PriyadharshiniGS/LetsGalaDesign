import React from 'react';
import { Link } from 'wouter';
import LetsGalaLogo from './LetsGalaLogo';

const Navbar: React.FC = () => {
  return (
    <nav className="py-4 px-6 border border-gray-200 rounded-full bg-white shadow-sm mx-auto max-w-5xl my-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="cursor-pointer" onClick={() => window.location.href = '/'}>
            <LetsGalaLogo />
          </div>
          <div className="hidden md:flex space-x-1">
            <div onClick={() => window.location.href = '/all-vendors'} className="nav-item cursor-pointer">
              All Vendors
            </div>
            <div onClick={() => window.location.href = '/weddings'} className="nav-item cursor-pointer">
              Weddings
            </div>
            <div onClick={() => window.location.href = '/birthdays'} className="nav-item cursor-pointer">
              Birthdays
            </div>
            <div onClick={() => window.location.href = '/baby-showers'} className="nav-item cursor-pointer">
              Baby Showers
            </div>
            <div onClick={() => window.location.href = '/corporate-events'} className="nav-item cursor-pointer">
              Corporate Events
            </div>
            <div onClick={() => window.location.href = '/become-member'} className="nav-item cursor-pointer">
              Become A Member
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-[#FFA63A]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          <button className="text-gray-700 hover:text-[#FFA63A]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;