import React from 'react';
import Navbar from '@/components/Navbar';

interface ClientCardProps {
  image: string;
  name: string;
  eventType: string;
  preferredDate: string;
  totalBudget: string;
  startTime: string;
  guestCount: string;
  duration: string;
}

const ClientCard: React.FC<ClientCardProps> = ({
  image,
  name,
  eventType,
  preferredDate,
  totalBudget,
  startTime,
  guestCount,
  duration
}) => {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <img src={image} alt={name} className="w-14 h-14 rounded-full object-cover" />
          <div className="ml-4">
            <h3 className="font-medium text-lg">{name}</h3>
            <p className="text-gray-600">{eventType}</p>
          </div>
        </div>
        <button className="bg-[#FFA63A] text-white px-6 py-2 rounded-full font-medium hover:bg-[#FF9417]">
          CALL
        </button>
      </div>
      
      <div className="grid grid-cols-3 border-t border-gray-100 pt-4">
        <div>
          <p className="text-gray-600 text-sm mb-1">Preferred Date</p>
          <p className="font-medium">{preferredDate}</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm mb-1">Total Budget</p>
          <p className="font-medium">{totalBudget}</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm mb-1">Start Time</p>
          <p className="font-medium">{startTime}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 mt-4">
        <div>
          <p className="text-gray-600 text-sm mb-1">Guest Count</p>
          <p className="font-medium">{guestCount}</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm mb-1">Duration</p>
          <p className="font-medium">{duration}</p>
        </div>
      </div>
    </div>
  );
};

const RequestedClientList = () => {
  const clients = [
    {
      id: 1,
      name: 'John Doe',
      image: 'https://i.imgur.com/6VBx3io.png',
      eventType: 'Adult Birthday',
      preferredDate: '06/12/2024',
      totalBudget: '1L',
      startTime: '12 PM',
      guestCount: 'Below 100',
      duration: '5 Hours'
    },
    {
      id: 2,
      name: 'John Doe',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      eventType: 'Adult Birthday',
      preferredDate: '06/12/2024',
      totalBudget: '1L',
      startTime: '12 PM',
      guestCount: 'Below 100',
      duration: '5 Hours'
    },
    {
      id: 3,
      name: 'John Doe',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      eventType: 'Adult Birthday',
      preferredDate: '06/12/2024',
      totalBudget: '1L',
      startTime: '12 PM',
      guestCount: 'Below 100',
      duration: '5 Hours'
    },
    {
      id: 4,
      name: 'John Doe',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      eventType: 'Adult Birthday',
      preferredDate: '06/12/2024',
      totalBudget: '1L',
      startTime: '12 PM',
      guestCount: 'Below 100',
      duration: '5 Hours'
    },
    {
      id: 5,
      name: 'John Doe',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      eventType: 'Adult Birthday',
      preferredDate: '06/12/2024',
      totalBudget: '1L',
      startTime: '12 PM',
      guestCount: 'Below 100',
      duration: '5 Hours'
    },
    {
      id: 6,
      name: 'John Doe',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
      eventType: 'Adult Birthday',
      preferredDate: '06/12/2024',
      totalBudget: '1L',
      startTime: '12 PM',
      guestCount: 'Below 100',
      duration: '5 Hours'
    }
  ];

  return (
    <div className="min-h-screen bg-pattern">
      <div className="lets-gala-container">
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content */}
        <div className="mt-8 mb-12">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Requested Client List</h1>
            
            <button className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filter
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clients.map(client => (
              <ClientCard
                key={client.id}
                image={client.image}
                name={client.name}
                eventType={client.eventType}
                preferredDate={client.preferredDate}
                totalBudget={client.totalBudget}
                startTime={client.startTime}
                guestCount={client.guestCount}
                duration={client.duration}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestedClientList;