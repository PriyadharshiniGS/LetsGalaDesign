import React from "react";
import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-pattern">
      <div className="lets-gala-container">
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content */}
        <div className="mt-12 mb-12 text-center">
          <div className="max-w-3xl mx-auto bg-white p-10 rounded-xl shadow-md">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-[#FFA63A] mb-6">Page Not Found</h2>
            <p className="text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
            
            <div className="flex justify-center">
              <div 
                onClick={() => window.location.href = '/'}
                className="bg-[#FFA63A] text-white px-6 py-2 rounded-full font-medium hover:bg-[#FF9417] transition-colors cursor-pointer"
              >
                Go Back Home
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
