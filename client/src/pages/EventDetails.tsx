import { useLocation } from "wouter";
import { IMAGES } from "@/lib/utils";

const EventDetails = () => {
  const [, setLocation] = useLocation();
  
  const event = {
    id: 1,
    title: "Music Festival 2023",
    date: "May 20, 2023",
    time: "7:00 PM - 10:00 PM",
    location: "Convention Center, Chennai",
    fullAddress: "Convention Center, Anna Salai, Chennai, Tamil Nadu 600002",
    price: "₹250",
    description: "Join us for Chennai's biggest music festival of the year! Experience live performances from top artists, delicious food, and a vibrant atmosphere. This year's lineup features both international and local artists across multiple genres.",
    image: IMAGES.events.musicFestival,
    duration: "5 hours",
    organizer: {
      name: "Chennai Music Association",
      role: "Event Organizer",
      profilePic: IMAGES.organizer
    }
  };

  return (
    <div className="pb-20">
      {/* Event Image */}
      <div className="relative">
        <div className="absolute top-0 left-0 w-full p-4 flex items-center justify-between z-10">
          <div 
            className="bg-white/20 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => setLocation("/")}
          >
            <span className="material-icons text-white">arrow_back</span>
          </div>
          <div className="flex space-x-2">
            <div className="bg-white/20 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
              <span className="material-icons text-white">share</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
              <span className="material-icons text-white">bookmark_border</span>
            </div>
          </div>
        </div>
        
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-72 object-cover" 
        />
        
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent h-1/2"></div>
        
        <div className="absolute bottom-4 left-4 text-white">
          <h1 className="text-2xl font-bold">{event.title}</h1>
          <div className="flex items-center mt-1">
            <span className="material-icons text-sm">calendar_today</span>
            <span className="text-sm ml-1">{event.date}</span>
          </div>
        </div>
        
        <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs">
          <span className="material-icons text-xs align-middle mr-1">schedule</span>
          {event.duration}
        </div>
      </div>

      {/* Event Info */}
      <div className="p-4 bg-white">
        <div className="flex justify-between mt-2">
          <div className="flex items-center text-[#888888]">
            <span className="material-icons text-sm">calendar_today</span>
            <span className="text-sm ml-1">{event.date}, {event.time}</span>
          </div>
          <span className="bg-[#6320EE] text-white text-sm px-3 py-0.5 rounded-lg">{event.price}</span>
        </div>
        
        <div className="flex items-center mt-3 text-[#888888]">
          <span className="material-icons text-sm">place</span>
          <span className="text-sm ml-1">{event.location}</span>
        </div>

        <div className="mt-4 border-t border-[#E5E5E5] pt-4">
          <h3 className="font-semibold mb-2">About Event</h3>
          <p className="text-sm text-[#555555] leading-relaxed">
            {event.description}
          </p>
        </div>

        <div className="mt-4 border-t border-[#E5E5E5] pt-4">
          <h3 className="font-semibold mb-2">Organizer</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={event.organizer.profilePic} alt="Organizer" className="w-12 h-12 rounded-full object-cover" />
              <div className="ml-3">
                <h4 className="font-medium">{event.organizer.name}</h4>
                <p className="text-xs text-[#888888]">{event.organizer.role}</p>
              </div>
            </div>
            <button className="border border-[#6320EE] text-[#6320EE] text-xs px-3 py-1 rounded-full">
              Follow
            </button>
          </div>
        </div>
        
        <div className="mt-4 border-t border-[#E5E5E5] pt-4">
          <h3 className="font-semibold mb-2">Location</h3>
          <div className="bg-[#F5F5F5] rounded-xl h-40 flex items-center justify-center">
            <span className="material-icons text-5xl text-[#888888]">map</span>
          </div>
          <p className="text-sm text-[#555555] mt-2">{event.fullAddress}</p>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="fixed bottom-16 left-0 right-0 p-4 bg-white border-t border-[#E5E5E5]">
        <button className="w-full bg-[#6320EE] text-white py-3 rounded-xl font-medium">
          Buy Tickets - {event.price}
        </button>
      </div>
    </div>
  );
};

export default EventDetails;
