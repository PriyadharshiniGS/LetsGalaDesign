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
        className="bg-white rounded-xl overflow-hidden shadow-[0_4px_8px_rgba(0,0,0,0.08)] cursor-pointer"
        onClick={handleClick}
      >
        <img src={image} alt={title} className="w-full h-28 object-cover" />
        <div className="p-2">
          <h3 className="font-semibold text-sm">{title}</h3>
          <div className="flex items-center mt-1">
            <span className="material-icons text-[#888888] text-xs">calendar_today</span>
            <span className="text-xs text-[#888888] ml-1">{date}</span>
          </div>
          <div className="flex items-center mt-1">
            <span className="material-icons text-[#888888] text-xs">place</span>
            <span className="text-xs text-[#888888] ml-1 truncate">{location}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-[0_4px_8px_rgba(0,0,0,0.08)] cursor-pointer"
      onClick={handleClick}
    >
      <img src={image} alt={title} className="w-full h-32 object-cover" />
      <div className="p-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold">{title}</h3>
            <div className="flex items-center mt-1">
              <span className="material-icons text-[#888888] text-sm">calendar_today</span>
              <span className="text-xs text-[#888888] ml-1">{date}</span>
            </div>
          </div>
          {price && <span className="bg-[#6320EE] text-white text-xs px-2 py-0.5 rounded">{price}</span>}
        </div>
        <div className="flex items-center mt-2">
          <span className="material-icons text-[#888888] text-sm">place</span>
          <span className="text-xs text-[#888888] ml-1">{location}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
