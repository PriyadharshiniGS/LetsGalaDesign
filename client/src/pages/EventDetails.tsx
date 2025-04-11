import { useLocation } from "wouter";
import { IMAGES } from "@/lib/utils";

const EventDetails = () => {
  const [, setLocation] = useLocation();

  return (
    <div className="pb-20">
      {/* Top Navigation */}
      <div className="bg-white p-4 flex items-center justify-between">
        <div className="flex items-center">
          <span 
            className="material-icons cursor-pointer" 
            onClick={() => setLocation("/")}
          >
            arrow_back
          </span>
          <h1 className="ml-4 font-semibold">Event Details</h1>
        </div>
        <span className="material-icons text-[#888888]">bookmark_border</span>
      </div>

      {/* Event Image */}
      <div className="relative">
        <img 
          src={IMAGES.events.musicFestival} 
          alt="Music Festival" 
          className="w-full h-60 object-cover" 
        />
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-xs">
          <span className="material-icons text-xs align-middle mr-1">schedule</span>
          5 hours
        </div>
      </div>

      {/* Event Info */}
      <div className="p-4 bg-white">
        <h2 className="text-xl font-bold">Music Festival 2023</h2>
        <div className="flex justify-between mt-2">
          <div className="flex items-center text-[#888888]">
            <span className="material-icons text-sm">calendar_today</span>
            <span className="text-sm ml-1">May 20, 2023</span>
          </div>
          <span className="bg-[#6320EE] text-white text-sm px-3 py-0.5 rounded">$25</span>
        </div>
        
        <div className="flex items-center mt-3 text-[#888888]">
          <span className="material-icons text-sm">place</span>
          <span className="text-sm ml-1">Convention Center, Chennai</span>
        </div>

        <div className="mt-4 border-t border-[#E5E5E5] pt-4">
          <h3 className="font-semibold mb-2">About Event</h3>
          <p className="text-sm text-[#888888] leading-relaxed">
            Join us for Chennai's biggest music festival of the year! Experience live performances from top artists, delicious food, and a vibrant atmosphere. This year's lineup features both international and local artists across multiple genres.
          </p>
        </div>

        <div className="mt-4 border-t border-[#E5E5E5] pt-4">
          <h3 className="font-semibold mb-2">Organizer</h3>
          <div className="flex items-center">
            <img src={IMAGES.organizer} alt="Organizer" className="w-10 h-10 rounded-full object-cover" />
            <div className="ml-3">
              <h4 className="font-medium">Chennai Music Association</h4>
              <p className="text-xs text-[#888888]">Event Organizer</p>
            </div>
          </div>
        </div>
        
        <div className="mt-4 border-t border-[#E5E5E5] pt-4">
          <h3 className="font-semibold mb-2">Location</h3>
          <div className="bg-[#F5F5F5] rounded-xl h-40 flex items-center justify-center">
            <span className="material-icons text-5xl text-[#888888]">map</span>
          </div>
          <p className="text-sm text-[#888888] mt-2">Convention Center, Anna Salai, Chennai, Tamil Nadu 600002</p>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-[#E5E5E5]">
        <button className="w-full bg-[#6320EE] text-white py-3 rounded-full font-medium">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default EventDetails;
