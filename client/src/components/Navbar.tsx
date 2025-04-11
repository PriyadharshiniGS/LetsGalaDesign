import React from 'react';
import { Link } from 'wouter';
import LetsGalaLogo from './LetsGalaLogo';

const Navbar: React.FC = () => {
  return (
    <nav className="py-4 px-6 border border-gray-200 rounded-full bg-white shadow-sm mx-auto max-w-5xl my-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <a className="cursor-pointer">
              <LetsGalaLogo />
            </a>
          </Link>
          <div className="hidden md:flex space-x-1">
            <Link href="/all-vendors">
              <a className="nav-item">All Vendors</a>
            </Link>
            <Link href="/weddings">
              <a className="nav-item">Weddings</a>
            </Link>
            <Link href="/birthdays">
              <a className="nav-item">Birthdays</a>
            </Link>
            <Link href="/baby-showers">
              <a className="nav-item">Baby Showers</a>
            </Link>
            <Link href="/corporate-events">
              <a className="nav-item">Corporate Events</a>
            </Link>
            <Link href="/become-member">
              <a className="nav-item">Become A Member</a>
            </Link>
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