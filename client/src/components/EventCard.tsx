import { useLocation } from "wouter";

interface EventCardProps {
  image: string;
  title: string;
  date: string;
  location: string;
  price?: string;
  compact?: boolean;
}

const EventCard = ({ image, title, date, location, price, compact = false }: EventCardProps) => {
  const [, setLocation] = useLocation();

  const handleClick = () => {
    setLocation("/event-details");
  };

  if (compact) {
    return (
      <div 
        className="bg-white rounded-xl overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.05)] cursor-pointer h-full flex flex-col"
        onClick={handleClick}
      >
        <div className="relative">
          <img src={image} alt={title} className="w-full h-28 object-cover" />
          {price && (
            <div className="absolute bottom-2 right-2 bg-[#6320EE] text-white text-xs px-2 py-0.5 rounded-lg">
              {price}
            </div>
          )}
        </div>
        <div className="p-3 flex-1 flex flex-col">
          <h3 className="font-semibold text-sm line-clamp-1">{title}</h3>
          <div className="flex items-center mt-1.5">
            <span className="material-icons text-[#888888] text-xs">calendar_today</span>
            <span className="text-xs text-[#888888] ml-1">{date}</span>
          </div>
          <div className="flex items-center mt-1.5">
            <span className="material-icons text-[#888888] text-xs">place</span>
            <span className="text-xs text-[#888888] ml-1 truncate">{location}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.05)] cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative">
        <img src={image} alt={title} className="w-full h-36 object-cover" />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-xs px-2 py-1 rounded-full flex items-center">
          <span className="material-icons text-[#6320EE] text-xs mr-1">bookmark_border</span>
          <span className="text-[#555555]">Save</span>
        </div>
      </div>
      <div className="p-3">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold line-clamp-1 pr-2">{title}</h3>
          {price && <span className="bg-[#6320EE] text-white text-xs px-2 py-0.5 rounded-lg flex-shrink-0">{price}</span>}
        </div>
        <div className="flex items-center mt-1.5">
          <span className="material-icons text-[#888888] text-xs">calendar_today</span>
          <span className="text-xs text-[#888888] ml-1">{date}</span>
        </div>
        <div className="flex items-center mt-1.5">
          <span className="material-icons text-[#888888] text-xs">place</span>
          <span className="text-xs text-[#888888] ml-1 line-clamp-1">{location}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
