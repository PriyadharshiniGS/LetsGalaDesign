import { IMAGES } from "@/lib/utils";
import EventCard from "@/components/EventCard";

const Explore = () => {
  const categories = ["All", "Nearby", "Popular", "New", "Recommended"];
  
  const events = [
    {
      image: IMAGES.events.musicFestival,
      title: "Music Festival",
      date: "May 20",
      location: "Convention Center"
    },
    {
      image: IMAGES.events.foodFestival,
      title: "Food Festival",
      date: "June 5",
      location: "Beach Road"
    },
    {
      image: IMAGES.events.techConference,
      title: "Tech Conference",
      date: "May 25",
      location: "IT Park"
    },
    {
      image: IMAGES.events.artExhibition,
      title: "Art Exhibition",
      date: "June 10",
      location: "Art Gallery"
    },
    {
      image: IMAGES.events.comedyNight,
      title: "Comedy Night",
      date: "June 15",
      location: "City Theater"
    },
    {
      image: IMAGES.events.yogaWorkshop,
      title: "Yoga Workshop",
      date: "June 20",
      location: "Beach Park"
    }
  ];

  return (
    <div className="pb-16">
      {/* Top Navigation */}
      <div className="bg-white p-4">
        <h1 className="font-semibold text-lg">Explore</h1>
        <div className="relative mt-3">
          <input
            type="text"
            placeholder="Search events"
            className="w-full rounded-full py-2 px-5 bg-[#F5F5F5] text-sm outline-none"
          />
          <span className="material-icons absolute right-3 top-1/2 transform -translate-y-1/2 text-[#888888]">
            search
          </span>
        </div>
      </div>

      {/* Categories Tabs */}
      <div className="bg-white mt-2 px-4 overflow-x-auto">
        <div className="flex space-x-4 border-b border-[#E5E5E5]">
          {categories.map((category, index) => (
            <div 
              key={category}
              className={`px-4 py-3 ${index === 0 ? 'border-b-2 border-[#6320EE] text-[#6320EE] font-medium' : 'text-[#888888]'}`}
            >
              {category}
            </div>
          ))}
        </div>
      </div>

      {/* Event Grid */}
      <div className="p-4 grid grid-cols-2 gap-4">
        {events.map((event) => (
          <EventCard
            key={event.title}
            image={event.image}
            title={event.title}
            date={event.date}
            location={event.location}
            compact
          />
        ))}
      </div>
    </div>
  );
};

export default Explore;
