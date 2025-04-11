import React from 'react';
import Navbar from '@/components/Navbar';
import { FiUpload } from 'react-icons/fi';

const Home = () => {
  const profileData = {
    name: "Event Planner Name",
    location: "Bengaluru, Karnataka",
    stats: {
      albums: 15,
      photos: 18,
      yearsInBusiness: 10
    }
  };

  return (
    <div className="min-h-screen bg-pattern">
      <div className="lets-gala-container">
        {/* Navigation */}
        <Navbar />
        
        {/* Upload Section */}
        <div className="max-w-3xl mx-auto mt-8">
          <div className="upload-box relative">
            <button className="absolute top-4 right-4 bg-white rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            
            <div className="flex flex-col items-center py-8">
              <div className="w-24 h-24 bg-[#FFF2E6] rounded-xl flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#FFA63A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-lg font-medium mb-1">Click and upload your image</h2>
              <p className="text-sm text-gray-500 mb-6">Supports: PNG, JPG, JPEG</p>
              
              <div className="upload-icon mt-2">
                <FiUpload className="text-white text-xl" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Profile Info */}
        <div className="max-w-3xl mx-auto mt-8 relative">
          <button className="absolute right-0 top-0 flex items-center text-gray-600 font-medium">
            EDIT
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
          
          <div className="text-center my-4">
            <h1 className="text-3xl font-bold">{profileData.name}</h1>
            <p className="text-gray-600 mt-1">Event Planner Based in {profileData.location}</p>
            
            <div className="inline-flex mt-2 space-x-2">
              <div className="bg-white rounded-md px-3 py-1 text-sm font-medium text-gray-700">
                0 Event Albums
              </div>
              <div className="bg-white rounded-md px-3 py-1 text-sm font-medium text-gray-700">
                Full-Service Planning
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="stats-card">
              <h3 className="text-2xl font-bold text-gray-800">{profileData.stats.albums}</h3>
              <p className="text-sm text-gray-600">Event Albums</p>
            </div>
            <div className="stats-card">
              <h3 className="text-2xl font-bold text-gray-800">{profileData.stats.photos}</h3>
              <p className="text-sm text-gray-600">Photos</p>
            </div>
            <div className="stats-card">
              <h3 className="text-2xl font-bold text-gray-800">{profileData.stats.yearsInBusiness}</h3>
              <p className="text-sm text-gray-600">Years in Business</p>
            </div>
          </div>
          
          <div className="mt-6">
            <button className="btn-primary w-full">
              REQUEST INFO
            </button>
          </div>
        </div>
        
        {/* Page Tabs */}
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center space-x-4 mt-10 mb-6">
            <button className="page-tab active">
              Overview
            </button>
            <button className="page-tab">
              Gallery
            </button>
            <button className="page-tab">
              Videos
            </button>
            <button className="page-tab">
              Vendor Connect
            </button>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm mb-10">
            <h2 className="text-xl font-bold mb-2">ABOUT EVENT PLANNER NAME</h2>
            <p className="text-gray-600">No Information Yet</p>
          </div>
        </div>
        
        {/* Company Profile Popup */}
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 hidden">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Edit Company Profile</h2>
              <button className="text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="py-2 border-b border-gray-200">
                <button className="w-full text-left flex items-center text-gray-700 hover:text-[#FFA63A]">
                  <span>Change Cover Photo</span>
                </button>
              </div>
              <div className="py-2 border-b border-gray-200">
                <button className="w-full text-left flex items-center text-gray-700 hover:text-[#FFA63A]">
                  <span>Change Brand Image</span>
                </button>
              </div>
              <div className="py-2 border-b border-gray-200">
                <button className="w-full text-left flex items-center text-gray-700 hover:text-[#FFA63A]">
                  <span>Edit Main Details</span>
                </button>
              </div>
              <div className="py-2 border-b border-gray-200">
                <button className="w-full text-left flex items-center text-gray-700 hover:text-[#FFA63A]">
                  <span>Edit Pricing Information</span>
                </button>
              </div>
              <div className="py-2 border-b border-gray-200">
                <button className="w-full text-left flex items-center text-gray-700 hover:text-[#FFA63A]">
                  <span>Add Real Event</span>
                </button>
              </div>
              <div className="py-2 border-b border-gray-200">
                <button className="w-full text-left flex items-center text-gray-700 hover:text-[#FFA63A]">
                  <span>Add Photo Collection</span>
                </button>
              </div>
              <div className="py-2 border-b border-gray-200">
                <button className="w-full text-left flex items-center text-gray-700 hover:text-[#FFA63A]">
                  <span>Add FAQs</span>
                </button>
              </div>
              <div className="py-2 border-b border-gray-200">
                <button className="w-full text-left flex items-center text-gray-700 hover:text-[#FFA63A]">
                  <span>Add Pro Connections</span>
                </button>
              </div>
              <div className="py-2 border-b border-gray-200">
                <button className="w-full text-left flex items-center text-gray-700 hover:text-[#FFA63A]">
                  <span>Add Videos</span>
                </button>
              </div>
              <div className="py-2 border-b border-gray-200">
                <button className="w-full text-left flex items-center text-gray-700 hover:text-[#FFA63A]">
                  <span>Add Announcement</span>
                </button>
              </div>
              <div className="py-2 border-b border-gray-200">
                <button className="w-full text-left flex items-center text-gray-700 hover:text-[#FFA63A]">
                  <span>Add Review</span>
                </button>
              </div>
              <div className="py-2 border-b border-gray-200">
                <button className="w-full text-left flex items-center text-gray-700 hover:text-[#FFA63A]">
                  <span>Add Press & Recognition</span>
                </button>
              </div>
              <div className="py-2">
                <button className="w-full text-left flex items-center text-gray-700 hover:text-[#FFA63A]">
                  <span>Add Team Member</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
