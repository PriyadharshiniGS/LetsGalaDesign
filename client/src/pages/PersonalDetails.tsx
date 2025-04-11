import React from 'react';
import Navbar from '@/components/Navbar';
import { Link } from 'wouter';
import { FaLinkedin, FaGithub, FaUser, FaGraduationCap, FaIdCard } from 'react-icons/fa';

const PersonalDetails = () => {
  return (
    <div className="min-h-screen bg-pattern">
      <div className="lets-gala-container">
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content */}
        <div className="mt-8 mb-12">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-[#FFA63A] to-[#FF7C43] p-6 text-white">
                <h1 className="text-2xl font-bold">Personal Details</h1>
              </div>
              
              <div className="p-6">
                <div className="flex flex-col md:flex-row items-center md:items-start">
                  <div className="bg-[#FFA63A]/20 p-4 rounded-full mb-4 md:mb-0 md:mr-6">
                    <FaUser className="text-[#FFA63A] text-6xl" />
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-800 mb-1">G.S.PRIYADHARSHINI</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="flex items-center">
                        <div className="bg-[#FFA63A]/10 p-3 rounded-lg mr-3">
                          <FaGraduationCap className="text-[#FFA63A] text-xl" />
                        </div>
                        <div>
                          <p className="text-gray-500 text-sm">Department</p>
                          <p className="font-medium">MSc DCS</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="bg-[#FFA63A]/10 p-3 rounded-lg mr-3">
                          <FaIdCard className="text-[#FFA63A] text-xl" />
                        </div>
                        <div>
                          <p className="text-gray-500 text-sm">Registration Number</p>
                          <p className="font-medium">71762233034</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <h3 className="text-lg font-semibold mb-4">Social Profiles</h3>
                      
                      <div className="space-y-4">
                        <a 
                          href="https://www.linkedin.com/in/priyadharshinigs/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-[#FFA63A]/10 transition-colors"
                        >
                          <FaLinkedin className="text-[#0A66C2] text-2xl mr-3" />
                          <div>
                            <p className="font-medium">LinkedIn</p>
                            <p className="text-sm text-gray-500">linkedin.com/in/priyadharshinigs</p>
                          </div>
                        </a>
                        
                        <a 
                          href="https://github.com/PriyadharshiniGS" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-[#FFA63A]/10 transition-colors"
                        >
                          <FaGithub className="text-gray-700 text-2xl mr-3" />
                          <div>
                            <p className="font-medium">GitHub</p>
                            <p className="text-sm text-gray-500">github.com/PriyadharshiniGS</p>
                          </div>
                        </a>
                      </div>
                    </div>
                    
                    <div className="mt-8 flex justify-end">
                      <div 
                        onClick={() => window.location.href = '/'}
                        className="bg-[#FFA63A] text-white px-6 py-2 rounded-full font-medium hover:bg-[#FF9417] transition-colors cursor-pointer"
                      >
                        Back to Home
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;